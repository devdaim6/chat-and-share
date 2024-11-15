import { NextRequest, NextResponse } from 'next/server';
import { ChatMessage, getChatTopicName, sendMessage } from '@/app/lib/kafka';
import { ChatRoom, connectDB } from '@/app/lib/models';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { roomId, sender, message } = await request.json();

    // Find the room
    const room = await ChatRoom.findOne({ roomId });
    if (!room) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    const chatMessage: ChatMessage = {
      sender,
      message,
      timestamp: new Date(),
      roomId,
    };

    // Save to MongoDB
    room.messages.push(chatMessage);
    await room.save();

    // Send to Kafka
    const topic = getChatTopicName(roomId);
    await sendMessage(topic, chatMessage);

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Message sending error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
