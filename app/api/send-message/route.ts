import { NextRequest, NextResponse } from 'next/server';
import { ChatRoom, connectDB } from '@/app/lib/models';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { roomId, sender, message } = await request.json();

    const room = await ChatRoom.findOne({ roomId });
    if (!room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    const newMessage = { sender, message };
    room.messages.push(newMessage);
    await room.save();

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Message sending error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}