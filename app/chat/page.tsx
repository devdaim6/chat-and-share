"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader } from "@/components/ui/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';

const ChatRoom = dynamic(() => import("@/components/ChatRoom"), {
  loading: () => (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <Loader size="lg" text="Loading chat..." />
    </div>
  ),
});

export default function ChatPage() {
  const [roomId, setRoomId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isJoining, setIsJoining] = useState(false);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [error, setError] = useState<string>("");

  // Check localStorage on component mount
  useEffect(() => {
    const savedRoomId = localStorage.getItem('chatRoomId');
    const savedUsername = localStorage.getItem('chatUsername');
    
    if (savedRoomId && savedUsername) {
      setRoomId(savedRoomId);
      setUsername(savedUsername);
      setJoinedRoom(true);
    }
  }, []);

  const handleJoinRoom = async () => {
    if (!roomId || !username) return;

    setIsJoining(true);
    setError("");

    try {
      const response = await fetch('/api/create-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomId }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save to localStorage
        localStorage.setItem('chatRoomId', roomId);
        localStorage.setItem('chatUsername', username);
        setJoinedRoom(true);
      } else {
        setError(data.error || 'Failed to join room');
      }
    } catch (error) {
      console.error('Error joining room:', error);
      setError('Failed to connect to the server');
    } finally {
      setIsJoining(false);
    }
  };

  const generateUniqueRoomId = () => {
    const newRoomId = uuidv4();
    setRoomId(newRoomId);
  };

  if (!joinedRoom) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Join Chat Room</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <div className="flex items-center justify-between">
              <Input
                placeholder="Enter room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={generateUniqueRoomId} 
                className="ml-2"
              >
                Generate
              </Button>
            </div>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button 
              onClick={handleJoinRoom} 
              disabled={!roomId || !username || isJoining}
              className="w-full"
            >
              {isJoining ? "Joining..." : "Join Room"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <ChatRoom roomId={roomId} username={username} />;
}





