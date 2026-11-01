import { db } from "./database";
import { createApplication, deleteApplication, updateApplication } from "./repositories/applications";
import { createTask, deleteTask, updateTask } from "./repositories/tasks";
import type { JobApplication, Task } from "@/types";
import type { ApplicationStatus as DbApplicationStatus } from "./types";

export const taskRepo = {
  add: async (task: Task) => createTask({ ...task, status: task.completed ? "completed" : "todo" }),
  update: async (id: string, changes: Partial<Task>) => updateTask(id, { ...changes, ...(typeof changes.completed === "boolean" ? { status: changes.completed ? "completed" : "todo" } : {}) }),
  remove: deleteTask,
};
const statusToDb = (status: JobApplication["status"]): DbApplicationStatus => status.toLowerCase() as DbApplicationStatus;
export const applicationRepo = {
  add: async (item: JobApplication) => createApplication({ ...item, applicationUrl: item.url, status: statusToDb(item.status) }),
  update: async (id: string, changes: Partial<JobApplication>) => { const { status, url, ...rest } = changes; return updateApplication(id, { ...rest, ...(url !== undefined ? { applicationUrl: url } : {}), ...(status ? { status: statusToDb(status) } : {}) }); },
  remove: deleteApplication,
};
export { db };
