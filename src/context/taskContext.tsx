import { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types';
import { MOCK_TASKS } from '../constants/mockData';
interface TaskContextType {
  tasks: Task[];
  addTasks: (newTasks: Omit<Task, 'id'>[]) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const addTasks = (newTasks: Omit<Task, 'id'>[]) => {
    const withIds = newTasks.map((t, i) => ({
      ...t,
      id: `ai-${Date.now()}-${i}`,
    }));
    setTasks(prev => [...prev, ...withIds]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTasks, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be used inside TaskProvider');
  return ctx;
}