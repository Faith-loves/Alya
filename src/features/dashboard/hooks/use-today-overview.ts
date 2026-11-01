"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/database";
export function useTodayOverview() { const tasks = useLiveQuery(() => db.tasks.toArray()); const blocks = useLiveQuery(() => db.timeBlocks.toArray()); const applications = useLiveQuery(() => db.jobApplications.toArray()); const water = useLiveQuery(() => db.waterLogs.toArray()); const cycles = useLiveQuery(() => db.cycles.orderBy("startDate").reverse().limit(1).toArray()); const prayers = useLiveQuery(() => db.prayerLogs.toArray()); return { tasks: tasks ?? [], blocks: blocks ?? [], applications: applications ?? [], water: water ?? [], cycles: cycles ?? [], prayers: prayers ?? [], isLoading: [tasks, blocks, applications, water, cycles, prayers].some(value => value === undefined) }; }
