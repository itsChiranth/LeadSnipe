import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarClock, MapPin, Users } from "lucide-react"

const events = [
  {
    id: "E-1001",
    title: "Meeting with Acme Inc",
    date: "Today, 2:00 PM",
    duration: "1 hour",
    type: "Meeting",
    location: "Conference Room A",
    participants: ["John Smith", "Sarah Williams", "Alex Johnson"],
  },
  {
    id: "E-1002",
    title: "Product Demo for Tech Solutions",
    date: "Tomorrow, 10:00 AM",
    duration: "45 minutes",
    type: "Demo",
    location: "Virtual (Zoom)",
    participants: ["Sarah Johnson", "Michael Brown", "Emily Davis"],
  },
  {
    id: "E-1003",
    title: "Sales Team Weekly Sync",
    date: "Apr 7, 9:00 AM",
    duration: "30 minutes",
    type: "Internal",
    location: "Meeting Room B",
    participants: ["Alex Johnson", "Sarah Williams", "Michael Brown", "Emily Davis"],
  },
  {
    id: "E-1004",
    title: "Contract Review with Legal",
    date: "Apr 8, 11:00 AM",
    duration: "1 hour",
    type: "Internal",
    location: "Legal Office",
    participants: ["Emily Davis", "Robert Wilson"],
  },
  {
    id: "E-1005",
    title: "Follow-up Call with Global Services",
    date: "Apr 10, 3:30 PM",
    duration: "30 minutes",
    type: "Call",
    location: "Phone",
    participants: ["Michael Brown"],
  },
]

export function CalendarEvents() {
  return (
    <div className="space-y-8">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{event.title}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <CalendarClock className="mr-1 h-4 w-4" />
                {event.date} ({event.duration})
              </div>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="mr-1 h-4 w-4" />
                {event.location}
              </div>
            </div>
            <Badge variant={event.type === "Meeting" ? "default" : event.type === "Demo" ? "secondary" : "outline"}>
              {event.type}
            </Badge>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">Participants:</span>
            <div className="flex -space-x-2">
              {event.participants.map((participant, index) => (
                <Avatar key={index} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={`/placeholder.svg?height=24&width=24&query=${participant}`} alt={participant} />
                  <AvatarFallback>{participant.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm">
              Edit
            </Button>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
          </div>
          {event.id !== events[events.length - 1].id && <div className="border-b pt-4" />}
        </div>
      ))}
    </div>
  )
}
