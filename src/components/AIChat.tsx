import { useState } from 'react';
import { scheduleTasksWithAI } from '../services/gemini';
import { useTasks } from '/Users/pinakiauddy49/Desktop/smart-task-&-reminder-management-system/src/context/taskContext.tsx';

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const { addTasks } = useTasks();

  const handleSend = async (): Promise<void> => {
    if (!message.trim() || loading) return;
    const userMsg = message.trim();
    setMessage('');
    setLog((prev: { role: 'user' | 'ai'; text: string }[]) => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const tasks = await scheduleTasksWithAI(userMsg);
      addTasks(tasks);
      const summary = tasks.map((t: any) => `• ${t.title} (${t.priority} · ${t.dueDate})`).join('\n');
      setLog((prev: { role: 'user' | 'ai'; text: string }[]) => [...prev, { role: 'ai', text: `Added ${tasks.length} task(s):\n${summary}` }]);
    } catch (e) {
      setLog((prev: { role: 'user' | 'ai'; text: string }[]) => [...prev, { role: 'ai', text: '❌ Something went wrong. Check your API key or try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o: boolean) => !o)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl transition-all"
        title="AI Task Scheduler"
      >
        {open ? '✕' : '✨'}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          <div className="bg-indigo-600 text-white px-4 py-3 font-semibold text-sm">
            ✨ AI Task Scheduler
            <p className="text-indigo-200 text-xs font-normal">Describe your tasks in plain English</p>
          </div>

          {/* Message log */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-64 text-sm">
            {log.length === 0 && (
              <p className="text-gray-400 text-xs text-center mt-4">
                Try: "Remind me to submit the report by Friday, high priority"
              </p>
            )}
            {log.map((entry: { role: 'user' | 'ai'; text: string }, i: number) => (
              <div
                key={i}
                className={`p-2 rounded-lg whitespace-pre-wrap text-xs ${
                  entry.role === 'user'
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 ml-4'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mr-4'
                }`}
              >
                {entry.text}
              </div>
            ))}
            {loading && (
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-400 text-xs p-2 rounded-lg mr-4 animate-pulse">
                Scheduling tasks...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-2 flex gap-2">
            <input
              className="flex-1 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 outline-none focus:ring-1 focus:ring-indigo-500 dark:text-white"
              placeholder="Describe a task..."
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading || !message.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs px-3 py-2 rounded-lg transition-all"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}