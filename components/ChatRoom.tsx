"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useChat } from "@/app/hooks/useChat";
import { LogOut, Send, SmileIcon, ArrowDown } from "lucide-react";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Loader } from "./ui/loader";
import { EmojiPicker } from "./ui/EmojiPicker";
import { AlertTriangle, MessageSquare } from "lucide-react";
import { toast } from "sonner";

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
  const [userScrolled, setUserScrolled] = useState(false);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(e.target.value);
  };

  const handleEmojiPicker = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiSelect = (emoji: string) => {
    setMessageInput((prev) => prev + emoji);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setUserScrolled(false);
    setAutoScroll(true);
  };

  // Handle scroll with debounce for smoother experience
  const handleScroll = useCallback(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    // Check if we're near the top to load more messages
    if (container.scrollTop === 0 && hasMore && !loadingMore) {
      loadMoreMessages(container);
    }

    // Check if user has manually scrolled
    const isNearBottom =
      container.scrollHeight - container.scrollTop - container.clientHeight < 100;

    if (!isNearBottom) {
      setUserScrolled(true);
      setAutoScroll(false);
    } else {
      setUserScrolled(false);
      setAutoScroll(true);
    }
  }, [hasMore, loadingMore, loadMoreMessages]);

  // Effect to handle new messages
  useEffect(() => {
    if (!userScrolled && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, userScrolled]);

  // Add scroll event listener with throttle
  useEffect(() => {
    const container = messagesContainerRef.current;
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined;

    if (container) {
      const throttledScroll = () => {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = undefined;
          }, 150); // Throttle scroll events
        }
      };

      container.addEventListener("scroll", throttledScroll);
      return () => {
        container.removeEventListener("scroll", throttledScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
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
      await sendMessage(messageInput, currentUser);
      setMessageInput("");
      // Reset scroll position to bottom after sending message
      setUserScrolled(false);
      setAutoScroll(true);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLeaveRoom = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-0 md:p-0 flex flex-col">
      <Card className="flex-1 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm mb-12">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div>
            <CardTitle className="text-2xl font-bold text-black">
              Chat Room
            </CardTitle>
            <p className="text-sm text-gray-500 mt-1">ID: {roomId}</p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(roomId);
                toast.success("Room ID copied to clipboard");
              }}
              className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            >
              <Copy className="mr-2 h-4 w-4" /> Copy ID
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLeaveRoom}
              className="text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
            >
              <LogOut className="mr-2 h-4 w-4" /> Leave
            </Button>
          </div>
        </CardHeader>

        <CardContent
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto space-y-3 p-6 relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          style={{ maxHeight: "calc(100vh - 250px)" }}
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
            <div className="flex items-center justify-center h-full text-red-500">
              <AlertTriangle className="h-5 w-5 mr-2" />
              {error}
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-2">
              <MessageSquare className="h-12 w-12 opacity-50" />
              <p>No messages yet. Start the conversation!</p>
            </div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <div
                  key={msg.id || index}
                  className={`flex flex-col ${
                    msg.sender === currentUser ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] shadow-sm ${
                      msg.sender === currentUser
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`font-bold text-sm ${
                        msg.sender === currentUser
                          ? "text-blue-50"
                          : "text-gray-600"
                      }`}
                    >
                      {msg.sender}
                    </div>

                    <div className="mt-1 text-sm">{msg.message}</div>

                    <div
                      className={`text-xs mt-1 ${
                        msg.sender === currentUser
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleDateString()} •{" "}
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </>
          )}

          {userScrolled && (
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-40 right-8 rounded-full shadow-lg bg-white hover:bg-blue-50"
              onClick={scrollToBottom}
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          )}
        </CardContent>
      </Card>

      <form
        onSubmit={handleSendMessage}
        className="fixed bottom-12 left-0 right-0 p-4 border-t bg-gray-50/50 backdrop-blur-sm"
      >
        <div className="container flex items-center space-x-3">
          <Input
            type="text"
            autoFocus
            value={messageInput}
            onChange={handleMessageChange}
            placeholder="Type your message..."
            className="flex-1 border-2 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEmojiPicker}
            className={`emoji-button hover:bg-blue-50 transition-all duration-300 ${
              showEmojiPicker ? "text-blue-600" : ""
            }`}
          >
            <SmileIcon className="w-5 h-5" />
          </Button>
          <Button
            type="submit"
            disabled={!messageInput.trim() || loading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white transition-all duration-300"
          >
            {loading ? (
              <Loader size="sm" className="text-white" />
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send
              </>
            )}
          </Button>
        </div>
      </form>
      {showEmojiPicker && (
        <div className="emoji-picker absolute bottom-32 right-4 z-50">
          <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
