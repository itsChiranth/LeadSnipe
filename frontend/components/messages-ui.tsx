"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Send, Phone, Video, MoreHorizontal, Paperclip, Smile } from "lucide-react"

const contacts = [
  {
    id: "C-1001",
    name: "John Smith",
    company: "Acme Inc",
    lastMessage: "Let me know when you have the proposal ready",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: "C-1002",
    name: "Sarah Johnson",
    company: "Tech Solutions",
    lastMessage: "The demo went well. They're interested in moving forward.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: "C-1003",
    name: "Michael Brown",
    company: "Global Services",
    lastMessage: "Can we schedule a call to discuss the contract?",
    time: "Yesterday",
    unread: 1,
    online: true,
  },
  {
    id: "C-1004",
    name: "Emily Davis",
    company: "Innovate LLC",
    lastMessage: "Thanks for the information!",
    time: "Monday",
    unread: 0,
    online: false,
  },
  {
    id: "C-1005",
    name: "Robert Wilson",
    company: "Wilson & Co",
    lastMessage: "I'll review the documents and get back to you.",
    time: "Monday",
    unread: 0,
    online: false,
  },
]

const messages = [
  {
    id: "M-1001",
    sender: "John Smith",
    content: "Hi there! I wanted to follow up on our meeting yesterday.",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: "M-1002",
    sender: "Me",
    content: "Hi John, thanks for reaching out. The meeting was productive.",
    time: "10:18 AM",
    isMe: true,
  },
  {
    id: "M-1003",
    sender: "John Smith",
    content: "Great! Do you have the proposal ready that we discussed?",
    time: "10:22 AM",
    isMe: false,
  },
  {
    id: "M-1004",
    sender: "Me",
    content: "I'm working on it now. Should have it ready by end of day.",
    time: "10:25 AM",
    isMe: true,
  },
  {
    id: "M-1005",
    sender: "John Smith",
    content: "Perfect! Let me know when you have it ready.",
    time: "10:30 AM",
    isMe: false,
  },
]

export function MessagesUI() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-12rem)]">
      <Card className="md:col-span-1 overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-muted/50 ${
                selectedContact.id === contact.id ? "bg-muted" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40&query=${contact.name}`} alt={contact.name} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="font-medium truncate">{contact.name}</div>
                  <div className="text-xs text-muted-foreground">{contact.time}</div>
                </div>
                <div className="text-sm text-muted-foreground truncate">{contact.company}</div>
                <div className="text-sm truncate">{contact.lastMessage}</div>
              </div>
              {contact.unread > 0 && (
                <div className="flex-shrink-0 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
      <Card className="md:col-span-2 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={`/placeholder.svg?height=40&width=40&query=${selectedContact.name}`}
                alt={selectedContact.name}
              />
              <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{selectedContact.name}</div>
              <div className="text-sm text-muted-foreground">{selectedContact.company}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isMe ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <div className="text-sm">{message.content}</div>
                <div
                  className={`text-xs mt-1 ${message.isMe ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button variant="ghost" size="icon">
              <Smile className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
