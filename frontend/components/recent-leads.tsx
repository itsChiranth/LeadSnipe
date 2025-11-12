import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const recentLeads = [
  {
    id: "L-1001",
    name: "John Smith",
    email: "john.smith@example.com",
    company: "Acme Inc",
    status: "New",
    source: "Website",
    date: "2023-04-05",
  },
  {
    id: "L-1002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    company: "Tech Solutions",
    status: "Contacted",
    source: "Referral",
    date: "2023-04-04",
  },
  {
    id: "L-1003",
    name: "Michael Brown",
    email: "m.brown@example.com",
    company: "Global Services",
    status: "Qualified",
    source: "LinkedIn",
    date: "2023-04-03",
  },
  {
    id: "L-1004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    company: "Innovate LLC",
    status: "New",
    source: "Email Campaign",
    date: "2023-04-02",
  },
  {
    id: "L-1005",
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    company: "Wilson & Co",
    status: "Contacted",
    source: "Trade Show",
    date: "2023-04-01",
  },
]

export function RecentLeads() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentLeads.map((lead) => (
          <TableRow key={lead.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`/placeholder.svg?height=32&width=32&query=${lead.name}`} alt={lead.name} />
                  <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{lead.name}</div>
                  <div className="text-xs text-muted-foreground">{lead.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{lead.company}</TableCell>
            <TableCell>
              <Badge
                variant={lead.status === "New" ? "default" : lead.status === "Contacted" ? "secondary" : "outline"}
              >
                {lead.status}
              </Badge>
            </TableCell>
            <TableCell>{lead.source}</TableCell>
            <TableCell>{lead.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
