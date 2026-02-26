export type Priority = 'Low' | 'Medium' | 'High' | 'Critical';
export type Status = 'Pending' | 'Completed' | 'Missed';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
  reminder: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'reminder' | 'system' | 'suggestion';
}
