import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LeadsTable } from "@/components/leads-table"
import { Plus, Filter, Download, Search } from "lucide-react"

export default function LeadsPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:ml-64">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">Leads</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Lead
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Input placeholder="Search leads..." className="pl-8" />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <LeadsTable />
    </div>
  )
}
