import { z } from "zod";
import type { JobApplication } from "../types";
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use a local YYYY-MM-DD date.");
export const applicationInputSchema = z.object({ company: z.string().trim().min(1, "Company is required.").max(200), role: z.string().trim().min(1, "Role is required.").max(240), location: z.string().trim().max(200).optional(), workMode: z.string().trim().max(80).optional(), applicationUrl: z.string().url().optional().or(z.literal("")), status: z.enum(["applied", "screening", "assessment", "interview", "offer", "rejected", "withdrawn"]).default("applied"), appliedDate: isoDate.optional(), followUpDate: isoDate.optional(), salaryNotes: z.string().trim().max(1000).optional(), notes: z.string().trim().max(5000).optional() });
export const applicationSchema = applicationInputSchema.extend({ id: z.string().uuid(), createdAt: z.string().datetime(), updatedAt: z.string().datetime() });
export function parseApplicationInput(input: unknown) { return applicationInputSchema.parse(input); }
export function parseApplication(input: unknown): JobApplication { return applicationSchema.parse(input); }
