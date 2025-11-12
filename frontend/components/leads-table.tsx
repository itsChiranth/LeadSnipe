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
import { MoreHorizontal, Mail, Phone, Edit, Trash } from "lucide-react"

const leads = [
  {
    id: "L-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Inc",
    status: "New",
    source: "Website",
    date: "2023-04-05",
    value: "$5,000",
  },
  {
    id: "L-1002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 234-5678",
    company: "Tech Solutions",
    status: "Contacted",
    source: "Referral",
    date: "2023-04-04",
    value: "$12,000",
  },
  {
    id: "L-1003",
    name: "Michael Brown",
    email: "m.brown@example.com",
    phone: "+1 (555) 345-6789",
    company: "Global Services",
    status: "Qualified",
    source: "LinkedIn",
    date: "2023-04-03",
    value: "$8,500",
  },
  {
    id: "L-1004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    phone: "+1 (555) 456-7890",
    company: "Innovate LLC",
    status: "New",
    source: "Email Campaign",
    date: "2023-04-02",
    value: "$3,200",
  },
  {
    id: "L-1005",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    phone: "+1 (555) 567-8901",
    company: "Wilson & Co",
    status: "Contacted",
    source: "Trade Show",
    date: "2023-04-01",
    value: "$7,500",
  },
  {
    id: "L-1006",
    name: "Jennifer Lee",
    email: "j.lee@example.com",
    phone: "+1 (555) 678-9012",
    company: "Lee Enterprises",
    status: "Qualified",
    source: "Website",
    date: "2023-03-31",
    value: "$15,000",
  },
  {
    id: "L-1007",
    name: "David Miller",
    email: "d.miller@example.com",
    phone: "+1 (555) 789-0123",
    company: "Miller Group",
    status: "Disqualified",
    source: "Cold Call",
    date: "2023-03-30",
    value: "$0",
  },
  {
    id: "L-1008",
    name: "Lisa Anderson",
    email: "l.anderson@example.com",
    phone: "+1 (555) 890-1234",
    company: "Anderson & Associates",
    status: "New",
    source: "Referral",
    date: "2023-03-29",
    value: "$6,800",
  },
]

export function LeadsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Date Added</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={`/placeholder.svg?height=36&width=36&query=${lead.name}`} alt={lead.name} />
                    <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      {lead.email}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Phone className="h-3 w-3" />
                      {lead.phone}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    lead.status === "New"
                      ? "default"
                      : lead.status === "Contacted"
                        ? "secondary"
                        : lead.status === "Qualified"
                          ? "success"
                          : "destructive"
                  }
                >
                  {lead.status}
                </Badge>
              </TableCell>
              <TableCell>{lead.source}</TableCell>
              <TableCell>{lead.value}</TableCell>
              <TableCell>{lead.date}</TableCell>
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
