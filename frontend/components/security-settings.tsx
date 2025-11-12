import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SecuritySettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Configure additional security settings for your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor" className="flex-1">
              <div>Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">Add an extra layer of security to your account</div>
            </Label>
            <Switch id="two-factor" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="session-timeout" className="flex-1">
              <div>Session Timeout</div>
              <div className="text-sm text-muted-foreground">Automatically log out after 30 minutes of inactivity</div>
            </Label>
            <Switch id="session-timeout" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="login-alerts" className="flex-1">
              <div>Login Alerts</div>
              <div className="text-sm text-muted-foreground">Receive alerts for unusual login activity</div>
            </Label>
            <Switch id="login-alerts" defaultChecked />
          </div>
          <div className="pt-4 border-t">
            <h3 className="text-sm font-medium mb-3">Active Sessions</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">Current Session</div>
                  <div className="text-xs text-muted-foreground">Windows 10 • Chrome • New York, USA</div>
                  <div className="text-xs text-muted-foreground">Started: April 5, 2023 at 10:30 AM</div>
                </div>
                <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active Now</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">Mobile App</div>
                  <div className="text-xs text-muted-foreground">iOS 15 • iPhone • New York, USA</div>
                  <div className="text-xs text-muted-foreground">Started: April 4, 2023 at 3:15 PM</div>
                </div>
                <Button variant="outline" size="sm" className="text-xs h-7">
                  Revoke
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full text-destructive">
            Log Out of All Devices
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
