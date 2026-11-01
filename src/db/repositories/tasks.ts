import type { Task, TaskPriority, TaskStatus } from "../types";
import { db } from "../database";
import { databaseError } from "../errors";
import { parseTask, parseTaskInput } from "../validators/task";
import { uid } from "@/lib/utils";
type TaskFilters = { status?: TaskStatus; priority?: TaskPriority; dueDate?: string; scheduledDate?: string };
const now = () => new Date().toISOString();
export async function createTask(input: unknown): Promise<Task> { try { const parsed = parseTaskInput(input); const timestamp = now(); const task: Task = { ...parsed, id: uid(), createdAt: timestamp, updatedAt: timestamp }; await db.tasks.add(task); return task; } catch (error) { throw databaseError(error, "Alya could not save that task."); } }
export async function getTask(id: string) { try { return await db.tasks.get(id); } catch (error) { throw databaseError(error, "Alya could not read that task."); } }
export async function listTasks(filters: TaskFilters = {}) { try { let collection = db.tasks.orderBy("dueDate"); if (filters.status) collection = db.tasks.where("status").equals(filters.status); const records = await collection.toArray(); return records.filter(task => (!filters.priority || task.priority === filters.priority) && (!filters.dueDate || task.dueDate === filters.dueDate) && (!filters.scheduledDate || task.scheduledDate === filters.scheduledDate)); } catch (error) { throw databaseError(error, "Alya could not load your tasks."); } }
export async function updateTask(id: string, changes: Partial<Omit<Task, "id"|"createdAt"|"updatedAt">>) { try { const current = await db.tasks.get(id); if (!current) return undefined; const next = parseTask({ category: "other", ...current, ...changes, id, updatedAt: now() }); await db.tasks.put(next); return next; } catch (error) { throw databaseError(error, "Alya could not update that task."); } }
export async function deleteTask(id: string) { try { return (await db.tasks.delete(id), true); } catch (error) { throw databaseError(error, "Alya could not delete that task."); } }
