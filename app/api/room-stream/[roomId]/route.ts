import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

const roomClients = new Map<string, Set<TransformStream>>();

export async function GET(
  request: NextRequest,
  { params }: { params: { roomId: string } }
) {
  const { roomId } = params;

  // Create a new transform stream for this client
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();
  
  // Add client to room listeners
  const clients = roomClients.get(roomId) || new Set();
  clients.add(stream);
  roomClients.set(roomId, clients);

  // Handle client disconnection
  request.signal.addEventListener('abort', () => {
    clients.delete(stream);
    if (clients.size === 0) {
      roomClients.delete(roomId);
    }
  });

  // Set headers for SSE
  const headersList = new Headers();
  headersList.set('Content-Type', 'text/event-stream');
  headersList.set('Cache-Control', 'no-cache');
  headersList.set('Connection', 'keep-alive');
  headersList.set('Access-Control-Allow-Origin', 'https://chat-and-share.vercel.app');
  headersList.set('Access-Control-Allow-Credentials', 'true');

  return new Response(stream.readable, {
    headers: headersList,
  });
}

// Helper function to broadcast messages (call this from send-message route)
export async function broadcastToRoom(roomId: string, message: any) {
  const clients = roomClients.get(roomId);
  if (clients) {
    const encoder = new TextEncoder();
    const data = encoder.encode(`data: ${JSON.stringify(message)}\n\n`);
    
    for (const stream of Array.from(clients)) {
      try {
        const writer = stream.writable.getWriter();
        await writer.write(data);
        writer.releaseLock();
      } catch (error) {
        console.error('Error broadcasting to client:', error);
        clients.delete(stream);
      }
    }
  }
}