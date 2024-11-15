import { NextRequest } from 'next/server';
import { createConsumer, getChatTopicName } from '@/app/lib/kafka';
import { ChatRoom } from '@/app/lib/models';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get('roomId');
  
  if (!roomId) {
    return new Response('Room ID is required', { status: 400 });
  }

  // Verify room exists
  try {
    const room = await ChatRoom.findOne({ roomId });
    if (!room) {
      return new Response('Room not found', { status: 404 });
    }
  } catch (error) {
    console.error('Database error:', error);
    return new Response('Internal server error', { status: 500 });
  }

  const encoder = new TextEncoder();
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  // Create a unique consumer group ID for this connection
  const groupId = `chat-consumer-${roomId}-${Date.now()}`;
  const consumer = createConsumer(groupId);
  const topic = getChatTopicName(roomId);

  try {
    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: false });

    await consumer.run({
      eachMessage: async ({ message }) => {
        if (message.value) {
          const data = `data: ${message.value.toString()}\n\n`;
          await writer.write(encoder.encode(data));
        }
      },
    });

    // Handle client disconnect
    request.signal.addEventListener('abort', async () => {
      try {
        await consumer.disconnect();
      } catch (error) {
        console.error('Error disconnecting consumer:', error);
      }
    });

    return new Response(stream.readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Kafka error:', error);
    try {
      await consumer.disconnect();
    } catch (disconnectError) {
      console.error('Error disconnecting consumer:', disconnectError);
    }
    return new Response('Error establishing connection', { status: 500 });
  }
}