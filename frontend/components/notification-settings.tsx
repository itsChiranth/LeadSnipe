import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Configure how and when you receive notifications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-leads" className="flex-1">
                <div>New Lead Assigned</div>
                <div className="text-sm text-muted-foreground">Receive an email when a new lead is assigned to you</div>
              </Label>
              <Switch id="email-leads" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-tasks" className="flex-1">
                <div>Task Reminders</div>
                <div className="text-sm text-muted-foreground">Receive an email for upcoming task deadlines</div>
              </Label>
              <Switch id="email-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-meetings" className="flex-1">
                <div>Meeting Notifications</div>
                <div className="text-sm text-muted-foreground">Receive an email for upcoming meetings</div>
              </Label>
              <Switch id="email-meetings" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-reports" className="flex-1">
                <div>Weekly Reports</div>
                <div className="text-sm text-muted-foreground">Receive weekly performance and activity reports</div>
              </Label>
              <Switch id="email-reports" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="app-leads" className="flex-1">
                <div>New Lead Assigned</div>
                <div className="text-sm text-muted-foreground">
                  Show notification when a new lead is assigned to you
                </div>
              </Label>
              <Switch id="app-leads" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-tasks" className="flex-1">
                <div>Task Reminders</div>
                <div className="text-sm text-muted-foreground">Show notification for upcoming task deadlines</div>
              </Label>
              <Switch id="app-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-meetings" className="flex-1">
                <div>Meeting Notifications</div>
                <div className="text-sm text-muted-foreground">Show notification for upcoming meetings</div>
              </Label>
              <Switch id="app-meetings" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-messages" className="flex-1">
                <div>New Messages</div>
                <div className="text-sm text-muted-foreground">Show notification when you receive a new message</div>
              </Label>
              <Switch id="app-messages" defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
