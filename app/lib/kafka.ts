import { Kafka, Producer, Consumer } from 'kafkajs';

// Configure brokers based on environment
const brokers = ['localhost:9092'];

const kafka = new Kafka({
  clientId: 'chat-app',
  brokers,
  retry: {
    initialRetryTime: 100,
    retries: 8
  },
  connectionTimeout: 3000,
});

let producer: Producer | null = null;

export async function getProducer() {
  if (!producer) {
    producer = kafka.producer();
    await producer.connect();
  }
  return producer;
}

export function createConsumer(groupId: string): Consumer {
  return kafka.consumer({ groupId });
}

export interface ChatMessage {
  id?: string;
  roomId: string;
  message: string;
  sender: string;
  timestamp: Date;
}

export async function sendMessage(topic: string, message: ChatMessage): Promise<void> {
  const prod = await getProducer();
  await prod.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });
}

export async function disconnectKafka(): Promise<void> {
  if (producer) {
    await producer.disconnect();
    producer = null;
  }
}

export function getChatTopicName(roomId: string): string {
  return `chat-room-${roomId}`;
}

export async function testKafkaConnection(): Promise<boolean> {
  try {
    const prod = await getProducer();
    await prod.send({
      topic: 'test-topic',
      messages: [{ value: 'test message' }],
    });
    return true;
  } catch (error) {
    console.error('Kafka connection test failed:', error);
    return false;
  }
}