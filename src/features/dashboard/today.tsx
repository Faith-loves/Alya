"use client";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { localDateISO } from "@/lib/utils";
import { useTodayOverview } from "./hooks/use-today-overview";
import { TodayGreeting } from "./components/today-greeting";
import { DailyIntention } from "./components/daily-intention";
import { CareerOverview, PriorityCard, RoutinePreview, SchedulePreview, TaskSummary, WellnessPreview } from "./components/dashboard-cards";
import { QuickAddTask } from "./components/quick-add-task";
export function Today() {
  const [dateKey,setDateKey]=useState(""); const [quickAdd,setQuickAdd]=useState(false); const overview=useTodayOverview();
  useEffect(()=>{const timer=window.setTimeout(()=>setDateKey(localDateISO()),0); return()=>window.clearTimeout(timer)},[]);
  const todayTasks=dateKey?overview.tasks.filter(task=>task.dueDate===dateKey||task.scheduledDate===dateKey):[];
  return <div><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><TodayGreeting/><Button onClick={()=>setQuickAdd(true)}><Plus size={17} className="mr-2"/> Add task</Button></div>{overview.isLoading||!dateKey?<div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]"><div className="h-64 animate-pulse rounded-3xl bg-muted"/><div className="h-64 animate-pulse rounded-3xl bg-muted"/></div>:<><div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]"><DailyIntention dateKey={dateKey}/><PriorityCard tasks={todayTasks} onAdd={()=>setQuickAdd(true)}/></div><div className="mt-5 grid gap-5 lg:grid-cols-2"><TaskSummary tasks={todayTasks}/><SchedulePreview blocks={overview.blocks} dateKey={dateKey}/></div><div className="mt-5 grid gap-5 lg:grid-cols-2"><CareerOverview applications={overview.applications} dateKey={dateKey}/><WellnessPreview water={overview.water} cycles={overview.cycles} dateKey={dateKey}/></div><div className="mt-5"><RoutinePreview prayers={overview.prayers}/></div><div className="mt-6 flex flex-wrap gap-2"><Button variant="outline" onClick={()=>setQuickAdd(true)}><Plus size={16} className="mr-2"/> Add task</Button><a href="/planner" className="inline-flex items-center rounded-2xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted">Open Planner</a><a href="/career" className="inline-flex items-center rounded-2xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted">View applications</a></div></>}<QuickAddTask open={quickAdd} onClose={()=>setQuickAdd(false)}/></div>;
}
