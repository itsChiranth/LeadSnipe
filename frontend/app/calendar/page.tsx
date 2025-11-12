import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarEvents } from "@/components/calendar-events"

export default function CalendarPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:ml-64">
      <h1 className="text-2xl font-bold">Calendar</h1>
      <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-3">
        <Card className="md:col-span-3 lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" className="rounded-md border" />
          </CardContent>
        </Card>
        <Card className="md:col-span-4 lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarEvents />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
