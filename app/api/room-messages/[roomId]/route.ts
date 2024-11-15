import { NextRequest, NextResponse } from "next/server";
import { ChatRoom, connectDB } from "@/app/lib/models";

export async function GET(
  request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  try {
    await connectDB();
    const { roomId } = params;
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');
    const limit = 10; // Number of messages per page

    const room = await ChatRoom.findOne({ roomId });
    if (!room) {
      return NextResponse.json({ messages: [] });
    }

    // Calculate total pages
    const totalMessages = room.messages.length;
    const totalPages = Math.ceil(totalMessages / limit);

    // Get messages for the requested page (from newest to oldest)
    const startIndex = Math.max(0, totalMessages - (page + 1) * limit);
    const endIndex = Math.max(0, totalMessages - page * limit);
    const paginatedMessages = room.messages
      .slice(startIndex, endIndex)
      .map((msg: { _id: { toString: () => string }, message: string, sender: string, timestamp: Date }) => ({
        id: msg._id.toString(),
        roomId,
        message: msg.message,
        sender: msg.sender,
        timestamp: msg.timestamp.getTime()
      }));

    return NextResponse.json({
      messages: paginatedMessages,
      currentPage: page,
      totalPages,
      hasMore: page < totalPages - 1
    });
  } catch (error) {
    console.error('Message retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    );
  }
}