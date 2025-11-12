import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Mail, Phone, Edit, Trash, Building } from "lucide-react"

const contacts = [
  {
    id: "C-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc",
    position: "CEO",
    status: "Active",
    lastContact: "2023-04-05",
  },
  {
    id: "C-1002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 234-5678",
    company: "Tech Solutions",
    position: "Marketing Director",
    status: "Active",
    lastContact: "2023-04-04",
  },
  {
    id: "C-1003",
    name: "Michael Brown",
    email: "m.brown@example.com",
    phone: "+1 (555) 345-6789",
    company: "Global Services",
    position: "CTO",
    status: "Active",
    lastContact: "2023-04-03",
  },
  {
    id: "C-1004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 456-7890",
    company: "Innovate LLC",
    position: "Sales Manager",
    status: "Inactive",
    lastContact: "2023-04-02",
  },
  {
    id: "C-1005",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    phone: "+1 (555) 567-8901",
    company: "Wilson & Co",
    position: "Founder",
    status: "Active",
    lastContact: "2023-04-01",
  },
  {
    id: "C-1006",
    name: "Jennifer Lee",
    email: "j.lee@example.com",
    phone: "+1 (555) 678-9012",
    company: "Lee Enterprises",
    position: "Operations Manager",
    status: "Active",
    lastContact: "2023-03-31",
  },
  {
    id: "C-1007",
    name: "David Miller",
    email: "d.miller@example.com",
    phone: "+1 (555) 789-0123",
    company: "Miller Group",
    position: "CFO",
    status: "Inactive",
    lastContact: "2023-03-30",
  },
  {
    id: "C-1008",
    name: "Lisa Anderson",
    email: "l.anderson@example.com",
    phone: "+1 (555) 890-1234",
    company: "Anderson & Associates",
    position: "HR Director",
    status: "Active",
    lastContact: "2023-03-29",
  },
]

export function ContactsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`/placeholder.svg?height=36&width=36&query=${contact.name}`} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      {contact.email}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      {contact.phone}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  {contact.company}
                </div>
              </TableCell>
              <TableCell>{contact.position}</TableCell>
              <TableCell>
                <Badge variant={contact.status === "Active" ? "success" : "secondary"}>{contact.status}</Badge>
              </TableCell>
              <TableCell>{contact.lastContact}</TableCell>
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
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
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
