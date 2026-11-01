import { z } from "zod";
import type { Task } from "../types";
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use a local YYYY-MM-DD date.");
export const taskInputSchema = z.object({ title: z.string().trim().min(1, "A task title is required.").max(240), description: z.string().trim().max(5000).optional(), status: z.enum(["todo", "in-progress", "completed", "cancelled"]).default("todo"), priority: z.enum(["low", "medium", "high"]).default("medium"), dueDate: isoDate.optional(), scheduledDate: isoDate.optional(), completed: z.boolean().optional(), completedAt: z.string().datetime().optional() });
export const taskSchema = taskInputSchema.extend({ id: z.string().uuid(), createdAt: z.string().datetime(), updatedAt: z.string().datetime() });
export function parseTaskInput(input: unknown) { return taskInputSchema.parse(input); }
export function parseTask(input: unknown): Task { return taskSchema.parse(input); }
