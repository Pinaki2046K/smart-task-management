import * as React from "react";
import { cn } from "../../utils/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning';
  children?: React.ReactNode;
  className?: string;
}

function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80',
    outline: 'text-zinc-950 border border-zinc-200 dark:text-zinc-50 dark:border-zinc-800',
    destructive: 'bg-red-500 text-zinc-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/80',
    success: 'bg-emerald-500 text-zinc-50 hover:bg-emerald-500/80 dark:bg-emerald-900 dark:text-zinc-50 dark:hover:bg-emerald-900/80',
    warning: 'bg-amber-500 text-zinc-50 hover:bg-amber-500/80 dark:bg-amber-900 dark:text-zinc-50 dark:hover:bg-amber-900/80',
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge };
