import { useState, useEffect, useCallback, useRef } from 'react';
import { ChatMessage } from '@/app/lib/kafka';

export function useChat(roomId: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollPositionRef = useRef<number>(0);

  // Load initial messages
  useEffect(() => {
    loadMessages(0);
  }, [roomId]);

  const loadMessages = async (page: number) => {
    try {
      const isInitialLoad = page === 0;
      if (isInitialLoad) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const response = await fetch(`/api/room-messages/${roomId}?page=${page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      if (data.messages) {
        setMessages(prev => {
          if (page === 0) {
            return data.messages;
          }
          // Combine old and new messages, removing duplicates
          const combined = [...data.messages, ...prev];
          return combined.filter((msg, index, self) => 
            index === self.findIndex(m => m.id === msg.id)
          );
        });
        setHasMore(data.hasMore);
        setCurrentPage(data.currentPage);
      }
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Load more messages
  const loadMoreMessages = async (container: HTMLDivElement) => {
    if (!hasMore || loadingMore) return;
    
    // Store current scroll position
    scrollPositionRef.current = container.scrollHeight - container.scrollTop;
    
    await loadMessages(currentPage + 1);
  };

  // Restore scroll position after loading more messages
  const restoreScrollPosition = (container: HTMLDivElement) => {
    if (scrollPositionRef.current) {
      const newScrollTop = container.scrollHeight - scrollPositionRef.current;
      container.scrollTop = newScrollTop;
    }
  };

  // Set up real-time connection
  useEffect(() => {
    if (!loading) { // Only set up SSE after initial messages are loaded
      const eventSource = new EventSource(`/api/chat/stream?roomId=${roomId}`);

      eventSource.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prev) => [...prev, message]);
      };

      eventSource.onerror = () => {
        setError('Connection error');
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    }
  }, [roomId, loading]);

  // Send message function
  const sendMessage = useCallback(
    async (message: string, sender: string) => {
      try {
        const messageData: Partial<ChatMessage> = {
          roomId,
          message,
          sender,
          timestamp: Date.now()
        };

        const response = await fetch('/api/chat/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(messageData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      } catch (err) {
        console.error('Error sending message:', err);
        setError('Failed to send message');
      }
    },
    [roomId]
  );

  return { 
    messages, 
    sendMessage, 
    loading, 
    loadingMore,
    error,
    hasMore,
    loadMoreMessages,
    restoreScrollPosition 
  };
}