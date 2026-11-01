"use client";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../database";
export function useTasks() { const data = useLiveQuery(() => db.tasks.orderBy("createdAt").reverse().toArray()); return { data: data ?? [], isLoading: data === undefined }; }
export function useTask(id?: string) { const data = useLiveQuery(() => id ? db.tasks.get(id) : undefined, [id]); return { data, isLoading: id !== undefined && data === undefined }; }
