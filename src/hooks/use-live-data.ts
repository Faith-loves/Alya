"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db/database";
export function useTasks() { return useLiveQuery(()=>db.tasks.orderBy("dueDate").toArray(), [], []); }
export function useApplications() { return useLiveQuery(()=>db.jobApplications.orderBy("appliedDate").reverse().toArray(), [], []); }
