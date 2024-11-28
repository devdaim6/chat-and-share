import { Kafka } from 'kafkajs';

const brokers = [process.env.KAFKA_BROKER_URL as string];

const kafka = new Kafka({
  clientId: 'chat-admin',
  brokers,
  retry: {
    initialRetryTime: 100,
    retries: 8
  },
  
});

const admin = kafka.admin();

// Create topics for chat rooms
export async function setupChatTopics(roomId: string) {
  if (!roomId) {
    throw new Error('Room ID is required');
  }

  try {
    await admin.connect();
    
    const topics = await admin.listTopics();
    const topicName = `chat-room-${roomId}`;
    
    if (!topics.includes(topicName)) {
      await admin.createTopics({
        topics: [{
          topic: topicName,
          numPartitions: 1,
          replicationFactor: 1
        }],
        timeout: 5000, // 5 second timeout
      });
      console.log(`Created topic: ${topicName}`);
    }
  } catch (error) {
    console.error('Error setting up Kafka topic:', error);
    throw error;
  } finally {
    try {
      await admin.disconnect();
    } catch (error) {
      console.error('Error disconnecting admin:', error);
    }
  }
}

// Delete topics when chat rooms are deleted
export async function deleteChatTopic(roomId: string) {
  try {
    await admin.connect();
    await admin.deleteTopics({
      topics: [`chat-room-${roomId}`],
    });
  } catch (error) {
    console.error('Error deleting Kafka topic:', error);
    throw error;
  } finally {
    await admin.disconnect();
  }
}