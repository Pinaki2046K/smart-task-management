import { Task, Notification } from '../types';

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: 'Design System Update',
    description: 'Update the primary color palette and component library documentation.',
    dueDate: '2024-03-20',
    priority: 'High',
    status: 'Pending',
    reminder: true,
  },
  {
    id: '2',
    title: 'Client Presentation',
    description: 'Prepare slides for the Q1 project review meeting.',
    dueDate: '2024-03-18',
    priority: 'Critical',
    status: 'Completed',
    reminder: true,
  },
  {
    id: '3',
    title: 'Weekly Team Sync',
    description: 'Discuss progress on the new feature rollout.',
    dueDate: '2024-03-22',
    priority: 'Medium',
    status: 'Pending',
    reminder: false,
  },
  {
    id: '4',
    title: 'Bug Fix: Login Flow',
    description: 'Resolve the intermittent issue with OAuth redirects.',
    dueDate: '2024-03-15',
    priority: 'High',
    status: 'Missed',
    reminder: true,
  },
  {
    id: '5',
    title: 'Research: AI Integration',
    description: 'Explore Gemini API capabilities for smart task suggestions.',
    dueDate: '2024-03-25',
    priority: 'Low',
    status: 'Pending',
    reminder: false,
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Task Reminder',
    message: 'Client Presentation is due in 2 hours.',
    time: '2024-03-18T10:00:00Z',
    read: false,
    type: 'reminder',
  },
  {
    id: '2',
    title: 'Smart Suggestion',
    message: 'Based on your workload, we suggest moving "Research: AI Integration" to next week.',
    time: '2024-03-17T15:30:00Z',
    read: true,
    type: 'suggestion',
  },
];

export const ANALYTICS_DATA = [
  { name: 'Mon', completed: 4, missed: 1 },
  { name: 'Tue', completed: 3, missed: 0 },
  { name: 'Wed', completed: 5, missed: 2 },
  { name: 'Thu', completed: 2, missed: 1 },
  { name: 'Fri', completed: 6, missed: 0 },
  { name: 'Sat', completed: 1, missed: 0 },
  { name: 'Sun', completed: 0, missed: 0 },
];
