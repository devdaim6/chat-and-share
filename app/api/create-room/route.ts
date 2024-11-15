import { NextRequest, NextResponse } from 'next/server';
import { ChatRoom, connectDB } from '@/app/lib/models';
import { setupChatTopics } from '@/app/lib/kafka-admin';

export async function POST(request: NextRequest) {
  try {
    const { roomId } = await request.json();

    if (!roomId) {
      return NextResponse.json(
        { error: 'Room ID is required' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create Kafka topic for the room
    try {
      await setupChatTopics(roomId);
    } catch (kafkaError) {
      console.error('Kafka setup error:', kafkaError);
      return NextResponse.json(
        { error: 'Failed to setup chat infrastructure' },
        { status: 500 }
      );
    }

    // Create MongoDB document
    try {
      let room = await ChatRoom.findOne({ roomId });
      if (!room) {
        room = new ChatRoom({
          roomId,
          messages: [],
        });
        await room.save();
      }

      return NextResponse.json({
        message: 'Room created/joined successfully',
        roomId: room.roomId,
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to create room in database' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Room creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create/join room' },
      { status: 500 }
    );
  }
}