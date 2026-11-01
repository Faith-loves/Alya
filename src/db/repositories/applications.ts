import type { ApplicationStatus, JobApplication } from "../types";
import { db } from "../database";
import { databaseError } from "../errors";
import { parseApplication, parseApplicationInput } from "../validators/application";
import { uid } from "@/lib/utils";
type ApplicationFilters = { status?: ApplicationStatus; company?: string };
const now = () => new Date().toISOString();
export async function createApplication(input: unknown): Promise<JobApplication> { try { const parsed = parseApplicationInput(input); const timestamp = now(); const application: JobApplication = { ...parsed, id: uid(), createdAt: timestamp, updatedAt: timestamp }; await db.jobApplications.add(application); return application; } catch (error) { throw databaseError(error, "Alya could not save that application."); } }
export async function getApplication(id: string) { try { return await db.jobApplications.get(id); } catch (error) { throw databaseError(error, "Alya could not read that application."); } }
export async function listApplications(filters: ApplicationFilters = {}) { try { const records = filters.status ? await db.jobApplications.where("status").equals(filters.status).toArray() : await db.jobApplications.orderBy("createdAt").reverse().toArray(); return records.filter(item => !filters.company || item.company.toLocaleLowerCase().includes(filters.company.toLocaleLowerCase())); } catch (error) { throw databaseError(error, "Alya could not load your applications."); } }
export async function updateApplication(id: string, changes: Partial<Omit<JobApplication, "id"|"createdAt"|"updatedAt">>) { try { const current = await db.jobApplications.get(id); if (!current) return undefined; const next = parseApplication({ ...current, ...changes, id, updatedAt: now() }); await db.jobApplications.put(next); return next; } catch (error) { throw databaseError(error, "Alya could not update that application."); } }
export async function deleteApplication(id: string) { try { return await db.transaction("rw", db.jobApplications, db.applicationEvents, async () => { await db.applicationEvents.where("applicationId").equals(id).delete(); return (await db.jobApplications.delete(id), true); }); } catch (error) { throw databaseError(error, "Alya could not delete that application."); } }
