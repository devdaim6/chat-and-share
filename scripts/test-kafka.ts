import { testKafkaConnection } from '../app/lib/kafka';

async function main() {
  try {
    console.log('Testing Kafka connection...');
    const isConnected = await testKafkaConnection();
    
    if (isConnected) {
      console.log('Successfully connected to Kafka!');
    } else {
      console.log('Failed to connect to Kafka');
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

main();