import { MessagesUI } from "@/components/messages-ui"

export default function MessagesPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 md:ml-64">
      <h1 className="text-2xl font-bold">Messages</h1>
      <MessagesUI />
    </div>
  )
}
