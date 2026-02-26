import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../../utils/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "peer h-5 w-5 shrink-0 rounded-md border border-zinc-300 bg-white ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 appearance-none transition-colors checked:bg-zinc-900 dark:checked:bg-zinc-100",
            className
          )}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <Check className="absolute left-1 top-1 h-3 w-3 text-white dark:text-zinc-900 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
