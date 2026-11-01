"use client";
import { AppShell } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { ModulePage } from "@/components/layout/module-page";
import { ThemeSettings } from "@/features/settings/theme-settings";
export default function SettingsPage() { return <AppShell><ModulePage eyebrow="Settings" title="Make Alya yours." subtitle="Choose how Alya feels and behaves on your device."><Card><ThemeSettings /></Card></ModulePage></AppShell>; }
