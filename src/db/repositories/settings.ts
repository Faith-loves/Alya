import { db } from "../database";
import type { Setting, SettingValue } from "../types";
import { databaseError } from "../errors";
export async function getSetting<T extends SettingValue = SettingValue>(key: string): Promise<T | undefined> { try { return (await db.settings.get(key))?.value as T | undefined; } catch (error) { throw databaseError(error, "Alya could not read that setting."); } }
export async function setSetting(key: string, value: SettingValue) { try { const setting: Setting = { key, value, updatedAt: new Date().toISOString() }; await db.settings.put(setting); return setting; } catch (error) { throw databaseError(error, "Alya could not save that setting."); } }
