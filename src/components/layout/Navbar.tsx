import * as React from "react";
import { Bell, Search, User } from "lucide-react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

interface NavbarProps {
  onOpenNotifications: () => void;
}

export function Navbar({ onOpenNotifications }: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex w-full max-w-md items-center gap-2">
        <Search className="h-4 w-4 text-zinc-400" />
        <Input
          placeholder="Search tasks, projects..."
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenNotifications}
          className="relative rounded-full"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        
        <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-800" />
        
        <Button variant="ghost" className="flex items-center gap-2 rounded-full p-1 pr-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
            <User className="h-5 w-5" />
          </div>
          <span className="text-sm font-medium">Alex Rivera</span>
        </Button>
      </div>
    </header>
  );
}
