"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Copy, LogOut } from "lucide-react";
import { toast } from "sonner";

const BASE_URL = "http://142.171.211.106:8000";

interface Message {
  sender: string;
  message: string;
  timestamp: string;
}

interface MessagesResponse {
  messages: Message[];
  currentPage: number;
  totalPages: number;
  hasMore: boolean;
}

const ChatRoom: React.FC = () => {
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");
  const [isRoomJoined, setIsRoomJoined] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRoomId(localStorage.getItem("chatRoomId") || "");
      setUsername(localStorage.getItem("chatUsername") || "");
      setIsRoomJoined(!!localStorage.getItem("chatRoomId"));
    }
  }, []);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      (messagesEndRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleCreateRoom = async () => {
    try {
      await fetch(`${BASE_URL}/create-room`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomId }),
      });

      await fetchRoomMessages();
      setIsRoomJoined(true);
    } catch (error) {
      console.error("Room creation error:", error);
      toast.error("Failed to create/join room");
    }
  };

  const fetchRoomMessages = async (page = 0) => {
    try {
      setIsLoadingMore(true);
      const response = await fetch(
        `${BASE_URL}/room-messages/${roomId}?page=${page}`
      );
      const data: MessagesResponse = await response.json();

      if (page === 0) {
        setMessages(data.messages);
      } else {
        setMessages((prev) => [...data.messages, ...prev]);
      }

      setCurrentPage(data.currentPage);
      setHasMore(data.hasMore);
      setIsInitialLoad(page === 0);
    } catch (error) {
      console.error("Message fetch error:", error);
      toast.error("Failed to fetch messages");
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoadingMore && hasMore) {
      void fetchRoomMessages(currentPage + 1);
    }
  };

  useEffect(() => {
    if (!isRoomJoined) return;

    const eventSource = new EventSource(`${BASE_URL}/room-stream/${roomId}`);

    eventSource.onmessage = (event) => {
      const newMsg = JSON.parse(event.data) as Message;
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setIsInitialLoad(false);
    };

    return () => {
      eventSource.close();
    };
  }, [isRoomJoined, roomId]);

  useEffect(() => {
    if (isInitialLoad || messages[messages.length - 1]?.sender === username) {
      scrollToBottom();
    }
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !username.trim()) return;

    try {
      await fetch(`${BASE_URL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId,
          sender: username,
          message: newMessage,
          timestamp: new Date().toISOString(),
        }),
      });

      setNewMessage("");
    } catch (error) {
      console.error("Message send error:", error);
      toast.error("Failed to send message");
    }
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    toast.success("Room ID copied to clipboard!");
  };

  const handleLeaveRoom = () => {
    localStorage.removeItem("chatRoomId");
    setIsRoomJoined(false);
    setRoomId("");
    setMessages([]);
    setCurrentPage(0);
    setHasMore(true);
  };

  useEffect(() => {
    if (isRoomJoined) {
      localStorage.setItem("chatRoomId", roomId);
      localStorage.setItem("chatUsername", username);
      void fetchRoomMessages(0);
    }
  }, [isRoomJoined, roomId, username]);

  // Add scroll event listener to detect when user reaches top
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop === 0 && hasMore && !isLoadingMore) {
        void handleLoadMore();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [hasMore, isLoadingMore]);

  if (!isRoomJoined) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Join Chat Room</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Choose a Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Enter/Create Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <Button
              onClick={handleCreateRoom}
              disabled={!roomId || !username}
              className="w-full"
            >
              Join/Create Room
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Chat Room: {roomId}</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={copyRoomId}>
              <Copy className="mr-2 h-4 w-4" /> Copy Room ID
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLeaveRoom}>
              <LogOut className="mr-2 h-4 w-4" /> Leave Room
            </Button>
          </div>
        </CardHeader>

        <CardContent
          className="flex-1 overflow-y-auto space-y-2 p-4"
          ref={messagesContainerRef}
          style={{ maxHeight: "calc(100vh - 300px)" }}
        >
          {isLoadingMore && (
            <div className="text-center py-2">Loading previous messages...</div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-[80%] ${
                msg.sender === username
                  ? "bg-blue-100 self-end ml-auto"
                  : "bg-gray-100 mr-auto"
              }`}
            >
              <div className="font-bold text-sm">{msg.sender}</div>
              <div>{msg.message}</div>
              <div className="text-xs text-gray-500">
                {msg.timestamp
                  ? new Date(msg.timestamp).toLocaleTimeString()
                  : "Just now"}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <div className="p-4 border-t flex space-x-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChatRoom;
