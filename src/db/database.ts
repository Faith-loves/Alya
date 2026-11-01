import Dexie, { type Table } from "dexie";
import { ALYA_SCHEMA } from "./schema";
import type { ApplicationEvent, Checklist, ChecklistItem, Cycle, Habit, HabitLog, JobApplication, PrayerLog, ProfileAnswer, Setting, Task, TimeBlock, WaterLog } from "./types";

export class AlyaPersonalDB extends Dexie {
  tasks!: Table<Task, string>; timeBlocks!: Table<TimeBlock, string>; jobApplications!: Table<JobApplication, string>; applicationEvents!: Table<ApplicationEvent, string>;
  profileAnswers!: Table<ProfileAnswer, string>; waterLogs!: Table<WaterLog, string>; cycles!: Table<Cycle, string>; prayerLogs!: Table<PrayerLog, string>;
  checklists!: Table<Checklist, string>; checklistItems!: Table<ChecklistItem, string>; habits!: Table<Habit, string>; habitLogs!: Table<HabitLog, string>; settings!: Table<Setting, string>;
  constructor(name = "AlyaPersonalDB") { super(name); this.version(1).stores(ALYA_SCHEMA); }
}

export const db = new AlyaPersonalDB();
