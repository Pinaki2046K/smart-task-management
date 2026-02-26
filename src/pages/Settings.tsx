import * as React from "react";
import { User, Bell, Shield, Moon, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Checkbox } from "../components/ui/Checkbox";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-zinc-500">Manage your account settings and preferences.</p>
      </div>

      <div className="space-y-6">
        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <CardTitle className="text-lg">Profile Information</CardTitle>
            </div>
            <CardDescription>Update your personal details and avatar.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-6 pb-4">
              <div className="h-20 w-20 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <User className="h-10 w-10 text-zinc-400" />
              </div>
              <Button variant="outline">Change Avatar</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Alex Rivera" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="alex@example.com" />
              </div>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <CardTitle className="text-lg">Notifications</CardTitle>
            </div>
            <CardDescription>Choose how you want to be notified.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-medium">Email Notifications</h4>
                <p className="text-sm text-zinc-500">Receive daily summaries of your tasks.</p>
              </div>
              <Checkbox defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-medium">Push Notifications</h4>
                <p className="text-sm text-zinc-500">Get alerts for upcoming deadlines.</p>
              </div>
              <Checkbox defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <h4 className="font-medium">Smart Suggestions</h4>
                <p className="text-sm text-zinc-500">AI-powered tips for better productivity.</p>
              </div>
              <Checkbox defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-zinc-100 shadow-sm dark:border-zinc-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5" />
              <CardTitle className="text-lg">Appearance</CardTitle>
            </div>
            <CardDescription>Customize the look and feel of the app.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Dark Mode</h4>
                <p className="text-sm text-zinc-500">Switch between light and dark themes.</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-xl"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
