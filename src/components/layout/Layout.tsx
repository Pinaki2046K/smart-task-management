import * as React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { NotificationPanel } from "./NotificationPanel";
import { Sparkles, Lightbulb, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export function Layout() {
  const [isNotificationsOpen, setIsNotificationsOpen] = React.useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white dark:bg-zinc-950">
      <Sidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onOpenNotifications={() => setIsNotificationsOpen(true)} />
        
        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8">
            <Outlet />
          </div>

          {/* Smart Suggestions Sidebar (Right) */}
          <aside className="hidden w-80 border-l border-zinc-200 bg-zinc-50/30 p-6 xl:block dark:border-zinc-800 dark:bg-zinc-950/30">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <h2 className="font-semibold">Smart Suggestions</h2>
              </div>

              <Card className="border-purple-100 bg-purple-50/50 dark:border-purple-900/30 dark:bg-purple-950/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-300">AI Recommendation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed text-purple-800 dark:text-purple-400">
                    You have 3 high-priority tasks due tomorrow. We suggest clearing your morning for deep work.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Quick Tips</h3>
                
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Productivity Boost</h4>
                    <p className="text-xs text-zinc-500">Try the Pomodoro technique for your "Design System" task.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Deadline Alert</h4>
                    <p className="text-xs text-zinc-500">Client Presentation is approaching. Start drafting slides today.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>

      <NotificationPanel 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />
    </div>
  );
}
