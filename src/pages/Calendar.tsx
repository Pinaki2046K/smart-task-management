import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../utils/utils";

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Simple mock calendar grid
  const grid = Array.from({ length: 35 }, (_, i) => i - 3);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-zinc-500">View and schedule your tasks across the month.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-950">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="px-2 text-sm font-semibold">{month} {year}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="rounded-xl">Today</Button>
        </div>
      </div>

      <Card className="rounded-3xl border-zinc-100 shadow-sm dark:border-zinc-800">
        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-b border-zinc-100 dark:border-zinc-800">
            {days.map((day) => (
              <div key={day} className="py-4 text-center text-sm font-semibold text-zinc-500">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {grid.map((day, i) => {
              const isToday = day === date.getDate();
              const isCurrentMonth = day > 0 && day <= 31;
              
              return (
                <div
                  key={i}
                  className={cn(
                    "min-h-[120px] border-b border-r border-zinc-100 p-2 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                    (i + 1) % 7 === 0 && "border-r-0",
                    !isCurrentMonth && "bg-zinc-50/50 text-zinc-300 dark:bg-zinc-900/50 dark:text-zinc-700"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                      isToday && "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    )}>
                      {isCurrentMonth ? day : ""}
                    </span>
                  </div>
                  
                  {day === 18 && (
                    <div className="mt-2 rounded-lg bg-blue-100 p-1.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Client Presentation
                    </div>
                  )}
                  {day === 20 && (
                    <div className="mt-2 rounded-lg bg-emerald-100 p-1.5 text-[10px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Design System
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
