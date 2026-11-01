import Dexie, { type Table } from "dexie";
import type { JobApplication, Task } from "@/types";

class AlyaDatabase extends Dexie { tasks!: Table<Task, string>; jobApplications!: Table<JobApplication, string>; constructor() { super("alya"); this.version(1).stores({ tasks:"id, dueDate, completed, priority, createdAt", jobApplications:"id, status, appliedDate, company, createdAt" }); } }
export const db = new AlyaDatabase();
