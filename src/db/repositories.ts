import { db } from "./db";
import type { JobApplication, Task } from "@/types";
export const taskRepo = { list:()=>db.tasks.orderBy("dueDate").toArray(), add:(task:Task)=>db.tasks.add(task), update:(id:string, changes:Partial<Task>)=>db.tasks.update(id, {...changes, updatedAt:new Date().toISOString()}), remove:(id:string)=>db.tasks.delete(id) };
export const applicationRepo = { list:()=>db.jobApplications.orderBy("appliedDate").reverse().toArray(), add:(item:JobApplication)=>db.jobApplications.add(item), update:(id:string, changes:Partial<JobApplication>)=>db.jobApplications.update(id, {...changes, updatedAt:new Date().toISOString()}), remove:(id:string)=>db.jobApplications.delete(id) };
