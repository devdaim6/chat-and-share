"use client";

import { useState, useEffect, useCallback, useRef } from "react";

import { useChat } from "@/app/hooks/useChat";

import { LogOut, Send, SmileIcon } from "lucide-react";

import { Copy } from "lucide-react";

import { Button } from "./ui/button";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import { Input } from "./ui/input";

import { Loader } from "./ui/loader";
import { EmojiPicker } from "./ui/EmojiPicker";

interface ChatRoomProps {
  roomId: string;

  username: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ roomId, username }) => {
  const [messageInput, setMessageInput] = useState("");

  const {
    messages,

    sendMessage,

    loading,

    loadingMore,

    error,

    hasMore,

    loadMoreMessages,

    restoreScrollPosition,
  } = useChat(roomId);

  const currentUser =
    username || localStorage.getItem("chatUsername") || "Anonymous";

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const [autoScroll, setAutoScroll] = useState(true);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessageInput((prev) => prev + emoji);
  };

  // Handle scroll

  const handleScroll = useCallback(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    // Check if we're near the top to load more messages

    if (container.scrollTop === 0 && hasMore && !loadingMore) {
      loadMoreMessages(container);
    }

    // Check if we should auto-scroll

    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight <
      100;

    setAutoScroll(isNearBottom);
  }, [hasMore, loadingMore, loadMoreMessages]);

  // Effect to restore scroll position after loading more messages

  useEffect(() => {
    if (!loadingMore && messagesContainerRef.current) {
      restoreScrollPosition(messagesContainerRef.current);
    }
  }, [messages, loadingMore]);

  // Auto-scroll to bottom when new messages arrive

  useEffect(() => {
    if (autoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, autoScroll]);

  // Add scroll event listener

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Store username in localStorage when component mounts

  useEffect(() => {
    if (username) {
      localStorage.setItem("chatUsername", username);
    }
  }, [username]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (messageInput.trim()) {
      await sendMessage(messageInput, currentUser); // Pass the current username

      setMessageInput("");
    }
  };

  const handleLeaveRoom = () => {
    // Clear room data from localStorage

    localStorage.removeItem("chatRoomId");

    localStorage.removeItem("chatUsername");

    window.location.href = "/chat";
  };

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const emojiPicker = document.querySelector(".emoji-picker");
      const emojiButton = document.querySelector(".emoji-button");

      if (
        emojiPicker &&
        !emojiPicker.contains(target) &&
        !emojiButton?.contains(target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Room ID : {roomId}</CardTitle>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigator.clipboard.writeText(roomId)}
            >
              <Copy className="mr-2 h-4 w-4" /> Copy Room ID
            </Button>

            <Button variant="destructive" size="sm" onClick={handleLeaveRoom}>
              <LogOut className="mr-2 h-4 w-4" /> Leave Room
            </Button>
          </div>
        </CardHeader>

        <CardContent
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto space-y-2 p-4 relative"
          style={{ maxHeight: "calc(100vh - 300px)" }}
          onScroll={handleScroll}
        >
          {loadingMore && (
            <div className="text-center py-2">
              <Loader size="sm" text="Loading previous messages..." />
            </div>
          )}

          {loading && messages.length === 0 ? (
            <div className="flex justify-center items-center h-full">
              <Loader size="lg" text="Loading messages..." />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : messages.length === 0 ? (
            <div className="text-gray-500 text-center">No messages yet</div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <div
                  key={msg.id || index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === currentUser
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-100 mr-auto"
                  }`}
                >
                  <div className="font-bold text-sm">{msg.sender}</div>

                  <div>{msg.message}</div>

                  <div className="text-xs text-gray-500">
                    {new Date(msg.timestamp).toLocaleDateString()} :{" "}
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </>
          )}
        </CardContent>

        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t flex flex-col space-y-2"
        >
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={messageInput}
              onChange={handleMessageChange}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEmojiPicker}
              className={`emoji-button ${
                showEmojiPicker ? "text-primary-foreground" : ""
              }`}
            >
              <SmileIcon className="w-5 h-5" />
            </Button>
            <Button type="submit" disabled={!messageInput.trim() || loading}>
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </div>
        </form>
        {showEmojiPicker && (
          <div className="emoji-picker">
            <EmojiPicker onEmojiSelect={handleEmojiSelect} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default ChatRoom;
