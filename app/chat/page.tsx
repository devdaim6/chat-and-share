"use client";



import dynamic from "next/dynamic";

import { Loader } from "@/components/ui/loader";



const ChatRoom = dynamic(() => import("@/components/ChatRoom"), {

  loading: () => (

    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">

      <Loader size="lg" text="Loading chat..." />

    </div>

  ),

});



export default function ChatPage() {

  return <ChatRoom />;

}






