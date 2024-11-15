import { NextRequest, NextResponse } from 'next/server';
import { connectDB, ChatRoom } from '@/app/lib/models';
 
import { deleteChatTopic } from '@/app/lib/kafka-admin';

export async function DELETE(request: NextRequest) {
    try {
      await connectDB();
      const { roomId } = await request.json();
  
      await ChatRoom.findOneAndDelete({ roomId });
  
      await deleteChatTopic(roomId);
  
      return NextResponse.json({
        message: 'Room deleted successfully',
      });
    } catch (error) {
      console.error('Room deletion error:', error);
      return NextResponse.json(
        { error: 'Failed to delete room' },
        { status: 500 }
      );
    }
  }