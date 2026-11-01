import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import { AlyaPersonalDB, db } from "../database";
import { deleteApplication, createApplication, listApplications, updateApplication } from "../repositories/applications";
import { createTask, deleteTask, getTask, updateTask } from "../repositories/tasks";
import { parseTaskInput } from "../validators/task";

const tables = [db.tasks, db.timeBlocks, db.jobApplications, db.applicationEvents, db.profileAnswers, db.waterLogs, db.cycles, db.prayerLogs, db.checklists, db.checklistItems, db.habits, db.habitLogs, db.settings];
beforeEach(async () => { if (!db.isOpen()) await db.open(); await Promise.all(tables.map(table => table.clear())); });

describe("AlyaPersonalDB", () => {
  it("creates, reads, edits and deletes a task", async () => {
    const task = await createTask({ title: "Write a kind plan", priority: "high", category: "career", dueDate: "2026-11-02" });
    expect((await getTask(task.id))?.title).toBe("Write a kind plan");
    const updated = await updateTask(task.id, { status: "completed", category: "personal" });
    expect(updated?.status).toBe("completed");
    expect(updated?.category).toBe("personal");
    expect(updated?.updatedAt).not.toBe(task.updatedAt);
    await deleteTask(task.id);
    expect(await getTask(task.id)).toBeUndefined();
  });
  it("creates, updates, filters and removes related application events", async () => {
    const application = await createApplication({ company: "Alya Studio", role: "Product Designer", status: "applied" });
    await db.applicationEvents.add({ id: crypto.randomUUID(), applicationId: application.id, eventType: "note", eventDate: new Date().toISOString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    await updateApplication(application.id, { status: "interview" });
    expect((await listApplications({ status: "interview" }))[0].company).toBe("Alya Studio");
    await deleteApplication(application.id);
    expect(await db.applicationEvents.where("applicationId").equals(application.id).count()).toBe(0);
  });
  it("persists through a database instance reopening", async () => {
    const task = await createTask({ title: "Persist locally" });
    db.close();
    const reopened = new AlyaPersonalDB();
    expect((await reopened.tasks.get(task.id))?.title).toBe("Persist locally");
    reopened.close();
  });
  it("rejects invalid input and date-only values", () => {
    expect(() => parseTaskInput({ title: "", dueDate: "tomorrow" })).toThrow();
    expect(() => parseTaskInput({ title: "Valid", category: "health", dueDate: "2026-11-02" })).not.toThrow();
    expect(() => parseTaskInput({ title: "Invalid category", category: "random" })).toThrow();
  });
});
