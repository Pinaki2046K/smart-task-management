import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Bell, Info, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { MOCK_NOTIFICATIONS } from "../../constants/mockData";
import { cn } from "../../utils/utils";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 p-6 dark:border-zinc-800">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col gap-1 p-4">
              {MOCK_NOTIFICATIONS.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex gap-4 rounded-2xl p-4 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900",
                    !notification.read && "bg-zinc-50/50 dark:bg-zinc-900/50"
                  )}
                >
                  <div className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    notification.type === 'reminder' ? "bg-amber-100 text-amber-600" : 
                    notification.type === 'suggestion' ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                  )}>
                    {notification.type === 'reminder' ? <Bell className="h-5 w-5" /> : 
                     notification.type === 'suggestion' ? <Sparkles className="h-5 w-5" /> : <Info className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-zinc-500">2h ago</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {notification.message}
                    </p>
                    {!notification.read && (
                      <button className="mt-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
