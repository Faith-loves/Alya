export type TaskStatus = "todo" | "in-progress" | "completed" | "cancelled";
export type TaskPriority = "low" | "medium" | "high";
export type ApplicationStatus = "applied" | "screening" | "assessment" | "interview" | "offer" | "rejected" | "withdrawn";

export interface Task { id: string; title: string; description?: string; status: TaskStatus; priority: TaskPriority; dueDate?: string; scheduledDate?: string; completedAt?: string; completed?: boolean; createdAt: string; updatedAt: string; }
export interface TimeBlock { id: string; title: string; taskId?: string; startAt: string; endAt: string; createdAt: string; updatedAt: string; }
export interface JobApplication { id: string; company: string; role: string; location?: string; workMode?: string; applicationUrl?: string; url?: string; status: ApplicationStatus; appliedDate?: string; followUpDate?: string; salaryNotes?: string; notes?: string; createdAt: string; updatedAt: string; }
export interface ApplicationEvent { id: string; applicationId: string; eventType: string; eventDate: string; notes?: string; createdAt: string; updatedAt: string; }
export interface ProfileAnswer { id: string; category: string; question: string; answer: string; createdAt: string; updatedAt: string; }
export interface WaterLog { id: string; amountMl: number; localDate: string; loggedAt: string; createdAt: string; }
export interface Cycle { id: string; startDate: string; endDate?: string; symptoms?: string[]; notes?: string; createdAt: string; updatedAt: string; }
export interface PrayerLog { id: string; localDate: string; prayerType: string; completed: boolean; completedAt?: string; createdAt: string; updatedAt: string; }
export interface Checklist { id: string; title: string; description?: string; repeatRule?: string; createdAt: string; updatedAt: string; }
export interface ChecklistItem { id: string; checklistId: string; title: string; sortOrder: number; createdAt: string; updatedAt: string; }
export interface Habit { id: string; title: string; description?: string; active: boolean; createdAt: string; updatedAt: string; }
export interface HabitLog { id: string; habitId: string; localDate: string; completed: boolean; completedAt?: string; createdAt: string; updatedAt: string; }
export type SettingValue = string | number | boolean | null | string[];
export interface Setting { key: string; value: SettingValue; updatedAt: string; }
export interface AlyaSettings { theme: "light" | "dark" | "system"; waterTargetMl: number; weekStartsOn: 0 | 1 | 6; }
export const DEFAULT_SETTINGS: AlyaSettings = { theme: "system", waterTargetMl: 2000, weekStartsOn: 1 };
