import * as React from "react";
import { motion } from "motion/react";
import { useTasks } from '/Users/pinakiauddy49/Desktop/smart-task-&-reminder-management-system/src/context/taskContext.tsx';
import { 
  LayoutGrid, 
  List, 
  Plus, 
  MoreVertical, 
  Calendar,
  Flag,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
// import { MOCK_TASKS } from "../constants/mockData";
import { Modal } from "../components/ui/Modal";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Checkbox } from "../components/ui/Checkbox";
import { cn } from "../utils/utils";

export default function Tasks() {
  const [view, setView] = React.useState<'grid' | 'list'>('grid');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { tasks } = useTasks();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
          <p className="text-zinc-500">Manage and organize your daily activities.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-xl bg-zinc-100 p-1 dark:bg-zinc-900">
            <Button
              variant={view === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setView('grid')}
              className="h-8 w-8 rounded-lg"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'list' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setView('list')}
              className="h-8 w-8 rounded-lg"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="gap-2 rounded-xl">
            <Plus className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      {view === 'grid' ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="group relative h-full overflow-hidden border-zinc-100 shadow-sm transition-all hover:shadow-md dark:border-zinc-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={
                      task.priority === 'Critical' ? 'destructive' :
                      task.priority === 'High' ? 'warning' :
                      task.priority === 'Medium' ? 'secondary' : 'outline'
                    }>
                      {task.priority}
                    </Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="mt-2 text-lg">{task.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {task.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-zinc-50 pt-4 dark:border-zinc-900">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {task.dueDate}
                  </div>
                  <Badge variant={task.status === 'Completed' ? 'success' : task.status === 'Missed' ? 'destructive' : 'secondary'}>
                    {task.status}
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <div className="divide-y divide-zinc-50 dark:divide-zinc-900">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-4 p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900">
                <Checkbox />
                <div className="flex-1">
                  <h4 className="font-medium">{task.title}</h4>
                  <p className="text-xs text-zinc-500">{task.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Calendar className="h-3.5 w-3.5" />
                    {task.dueDate}
                  </div>
                  <Badge variant={
                    task.priority === 'Critical' ? 'destructive' :
                    task.priority === 'High' ? 'warning' : 'secondary'
                  } className="w-20 justify-center">
                    {task.priority}
                  </Badge>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Task"
      >
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" placeholder="e.g. Design System Update" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <textarea
              id="desc"
              className="flex min-h-[100px] w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300"
              placeholder="Add more details about this task..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Due Date</Label>
              <Input id="date" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <select className="flex h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="reminder" />
            <Label htmlFor="reminder">Set reminder alert</Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Task
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
