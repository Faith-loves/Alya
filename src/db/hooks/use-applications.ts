"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database";
export function useJobApplications() { const data = useLiveQuery(() => db.jobApplications.orderBy("createdAt").reverse().toArray()); return { data: data ?? [], isLoading: data === undefined }; }
export function useJobApplication(id?: string) { const data = useLiveQuery(() => id ? db.jobApplications.get(id) : undefined, [id]); return { data, isLoading: id !== undefined && data === undefined }; }
