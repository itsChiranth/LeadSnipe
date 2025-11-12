import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Edit, Trash, Clock, CalendarDays } from "lucide-react"

const tasks = [
  {
    id: "T-1001",
    title: "Follow up with John Smith",
    description: "Send proposal and schedule a demo",
    status: "To Do",
    priority: "High",
    dueDate: "2023-04-10",
    assignedTo: "Alex Johnson",
    relatedTo: "Acme Inc",
  },
  {
    id: "T-1002",
    title: "Prepare presentation for Tech Solutions",
    description: "Create slides for the upcoming meeting",
    status: "In Progress",
    priority: "Medium",
    dueDate: "2023-04-12",
    assignedTo: "Sarah Williams",
    relatedTo: "Tech Solutions",
  },
  {
    id: "T-1003",
    title: "Schedule demo with Global Services",
    description: "Coordinate with the sales team for the demo",
    status: "To Do",
    priority: "Medium",
    dueDate: "2023-04-15",
    assignedTo: "Michael Brown",
    relatedTo: "Global Services",
  },
  {
    id: "T-1004",
    title: "Send contract to Innovate LLC",
    description: "Finalize and send the contract for signature",
    status: "Completed",
    priority: "High",
    dueDate: "2023-04-08",
    assignedTo: "Emily Davis",
    relatedTo: "Innovate LLC",
  },
  {
    id: "T-1005",
    title: "Call Robert Wilson",
    description: "Discuss the new product features",
    status: "To Do",
    priority: "Low",
    dueDate: "2023-04-18",
    assignedTo: "Alex Johnson",
    relatedTo: "Wilson & Co",
  },
  {
    id: "T-1006",
    title: "Update CRM data for Lee Enterprises",
    description: "Add new contacts and update company information",
    status: "In Progress",
    priority: "Low",
    dueDate: "2023-04-20",
    assignedTo: "Sarah Williams",
    relatedTo: "Lee Enterprises",
  },
  {
    id: "T-1007",
    title: "Prepare quarterly report",
    description: "Compile sales data and create the quarterly report",
    status: "To Do",
    priority: "High",
    dueDate: "2023-04-25",
    assignedTo: "Michael Brown",
    relatedTo: "",
  },
  {
    id: "T-1008",
    title: "Training session for new team members",
    description: "Conduct CRM training for new employees",
    status: "To Do",
    priority: "Medium",
    dueDate: "2023-04-28",
    assignedTo: "Emily Davis",
    relatedTo: "",
  },
]

export function TasksTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Related To</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox id={task.id} />
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{task.title}</div>
                  <div className="text-xs text-muted-foreground">{task.description}</div>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    task.status === "Completed" ? "success" : task.status === "In Progress" ? "default" : "secondary"
                  }
                >
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "outline"
                  }
                >
                  {task.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  {task.dueDate}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={`/placeholder.svg?height=24&width=24&query=${task.assignedTo}`}
                      alt={task.assignedTo}
                    />
                    <AvatarFallback>{task.assignedTo.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {task.assignedTo}
                </div>
              </TableCell>
              <TableCell>{task.relatedTo}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Clock className="mr-2 h-4 w-4" />
                      Mark as Completed
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
