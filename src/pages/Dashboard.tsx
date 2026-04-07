import * as React from "react";
import { motion } from "motion/react";
import { useTasks } from '/Users/pinakiauddy49/Desktop/smart-task-&-reminder-management-system/src/context/taskContext.tsx';

import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  TrendingUp,
  Plus
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
// import { MOCK_TASKS } from "../constants/mockData";
import { Badge } from "../components/ui/Badge";

import { cn } from "../utils/utils";

export default function Dashboard() {
  const stats = [
    { label: "Total Tasks", value: "24", icon: CheckCircle2, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "In Progress", value: "12", icon: Clock, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Missed", value: "3", icon: AlertCircle, color: "text-red-500", bg: "bg-red-50" },
    { label: "Productivity", value: "84%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-50" },
  ];
  const { tasks } = useTasks();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h1>
          <p className="text-zinc-500">Here's what's happening with your tasks today.</p>
        </div>
        <Button className="gap-2 rounded-xl">
          <Plus className="h-4 w-4" />
          Add New Task
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", stat.bg, stat.color)}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tasks.slice(0, 4).map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-xl border border-zinc-50 p-4 transition-colors hover:bg-zinc-50 dark:border-zinc-900 dark:hover:bg-zinc-900">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "h-2 w-2 rounded-full",
                    task.priority === 'Critical' ? "bg-red-500" :
                    task.priority === 'High' ? "bg-amber-500" : "bg-blue-500"
                  )} />
                  <div>
                    <h4 className="font-medium">{task.title}</h4>
                    <p className="text-xs text-zinc-500">Due {task.dueDate}</p>
                  </div>
                </div>
                <Badge variant={task.status === 'Completed' ? 'success' : task.status === 'Missed' ? 'destructive' : 'secondary'}>
                  {task.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-zinc-100 dark:before:bg-zinc-800">
              <div className="relative mb-6">
                <div className="absolute -left-7 top-1 h-4 w-4 rounded-full border-4 border-white bg-zinc-900 dark:border-zinc-950 dark:bg-zinc-100" />
                <h4 className="font-semibold">Today</h4>
                <p className="text-sm text-zinc-500">Client Presentation Review</p>
              </div>
              <div className="relative mb-6">
                <div className="absolute -left-7 top-1 h-4 w-4 rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800" />
                <h4 className="font-semibold text-zinc-400">Tomorrow</h4>
                <p className="text-sm text-zinc-500">Design System Update</p>
              </div>
              <div className="relative">
                <div className="absolute -left-7 top-1 h-4 w-4 rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800" />
                <h4 className="font-semibold text-zinc-400">Friday</h4>
                <p className="text-sm text-zinc-500">Weekly Team Sync</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper function for class merging in this file
