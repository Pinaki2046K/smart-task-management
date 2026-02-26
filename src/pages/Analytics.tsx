import * as React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { ANALYTICS_DATA } from "../constants/mockData";
import { Button } from "../components/ui/Button";

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-zinc-500">Insights into your productivity and task completion.</p>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-900">
          <Button variant="secondary" size="sm" className="rounded-lg">Weekly</Button>
          <Button variant="ghost" size="sm" className="rounded-lg">Monthly</Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Tasks Completed</CardTitle>
            <CardDescription>Daily completion rate for the current week.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ANALYTICS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#888' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#888' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completed" 
                  stroke="#09090b" 
                  strokeWidth={2} 
                  dot={{ r: 4, fill: '#09090b' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <CardTitle>Missed vs Completed</CardTitle>
            <CardDescription>Comparison of task outcomes.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ANALYTICS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#888' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#888' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="completed" fill="#09090b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="missed" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Productivity Score</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="relative flex h-32 w-32 items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  className="text-zinc-100 dark:text-zinc-800"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-zinc-900 dark:text-zinc-100"
                  strokeWidth="8"
                  strokeDasharray={251.2}
                  strokeDashoffset={251.2 * (1 - 0.84)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="40"
                  cx="50"
                  cy="50"
                />
              </svg>
              <span className="absolute text-2xl font-bold">84%</span>
            </div>
            <p className="mt-4 text-center text-sm text-zinc-500">
              You're in the top 10% of productive users this week!
            </p>
          </CardContent>
        </Card>

        <Card className="col-span-2 rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg">Efficiency Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Morning Peak</h4>
                <p className="text-sm text-zinc-500">You are most productive between 9:00 AM and 11:00 AM.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Completion Rate</h4>
                <p className="text-sm text-zinc-500">Your task completion rate has increased by 12% since last week.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { CheckCircle2, TrendingUp } from "lucide-react";
