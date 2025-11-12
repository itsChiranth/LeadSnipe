import { Clock } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const upcomingTasks = [
  {
    id: "task-1",
    title: "Follow up with John Smith",
    dueDate: "Today, 2:00 PM",
    priority: "High",
    completed: false,
  },
  {
    id: "task-2",
    title: "Prepare proposal for Tech Solutions",
    dueDate: "Tomorrow, 10:00 AM",
    priority: "Medium",
    completed: false,
  },
  {
    id: "task-3",
    title: "Schedule demo with Global Services",
    dueDate: "Apr 7, 3:30 PM",
    priority: "Medium",
    completed: false,
  },
  {
    id: "task-4",
    title: "Send contract to Innovate LLC",
    dueDate: "Apr 8, 12:00 PM",
    priority: "High",
    completed: true,
  },
  {
    id: "task-5",
    title: "Call Robert Wilson",
    dueDate: "Apr 9, 11:00 AM",
    priority: "Low",
    completed: false,
  },
]

export function UpcomingTasks() {
  return (
    <div className="space-y-4">
      {upcomingTasks.map((task) => (
        <div
          key={task.id}
          className={`flex items-start justify-between p-3 rounded-lg border ${task.completed ? "bg-muted/50" : ""}`}
        >
          <div className="flex items-start gap-3">
            <Checkbox id={task.id} checked={task.completed} />
            <div>
              <label
                htmlFor={task.id}
                className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {task.title}
              </label>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Clock className="h-3 w-3 mr-1" />
                {task.dueDate}
              </div>
            </div>
          </div>
          <Badge
            variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"}
          >
            {task.priority}
          </Badge>
        </div>
      ))}
    </div>
  )
}
