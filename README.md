# Chat & Share - A Real-time Chat Application

## Project Overview

Chat & Share is a modern web application that combines real-time chat functionality with image sharing capabilities. Built with Next.js 14 and TypeScript, it offers a seamless experience for users to communicate and share images in real-time.

## Live Demo

Experience Chat & Share in action: [Live Demo](https://chat.is-local.org)

## Features

### Image Sharing

- **Upload & Share**: Upload images with optional messages
- **Image Optimization**: Automatic compression and conversion to WebP format
- **Camera Integration**: Capture images directly from device camera
- **Secure Sharing**: Generate unique links for shared images
- **Auto-deletion**: Optional automatic deletion after specified time

### Real-time Chat

- **Instant Messaging**: Real-time communication using Kafka
- **Room Management**: Create and join chat rooms
- **Message History**: Persistent message storage with pagination
- **Emoji Support**: Rich emoji picker for enhanced expression
- **Real-time Updates**: Instant message delivery using SSE

### User Experience

- **Responsive Design**: Works seamlessly on mobile and desktop
- **Loading States**: Smooth loading transitions
- **Error Handling**: Graceful error management
- **Copy to Clipboard**: Easy sharing of room IDs and links

## What I Learned

Throughout the development of this project, I gained extensive experience in:

1. **Modern Web Technologies**

   - Next.js 14 with App Router and Server Components
   - TypeScript for type-safe development
   - Real-time communication using Kafka
   - MongoDB for persistent data storage

2. **Advanced Features Implementation**

   - Real-time messaging system using Kafka
   - Image processing and optimization with Sharp
   - WebRTC for camera integration
   - Server-Sent Events (SSE) for real-time updates

3. **Architecture & Design Patterns**

   - Event-driven architecture using Kafka
   - Repository pattern for data access
   - Clean architecture principles
   - Separation of concerns

4. **UI/UX Development**

   - Responsive design using Tailwind CSS
   - Custom component development
   - Animation and transitions using Framer Motion
   - Accessibility considerations

5. **DevOps & Infrastructure**
   - Docker containerization
   - Microservices architecture
   - Environment configuration
   - API design and implementation

## Technology Stack

- **Frontend**

  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Shadcn UI

- **Backend**

  - Node.js
  - MongoDB
  - Apache Kafka
  - Sharp (Image Processing)

- **Infrastructure**
  - Docker
  - Docker Compose
  - Zookeeper

## Getting Started

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- MongoDB URI
- Kafka Broker

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devdaim6/chat-and-share.git
   cd chat-and-share
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```env
   MONGODB_URI=your_mongodb_uri
   KAFKA_BROKER_URL=localhost:9092
   ```
4. Start the Kafka infrastructure:
   ```bash
   docker-compose up -d
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

## Architecture

The application follows a microservices architecture:

1. **Web Server**: Next.js application handling HTTP requests
2. **Message Broker**: Kafka for real-time message distribution
3. **Database**: MongoDB for persistent storage
4. **Image Service**: Sharp for image processing

## API Documentation

### Image Endpoints

- `POST /api/upload`: Upload new image
- `GET /api/images/:imageId`: Retrieve image
- `DELETE /api/images/:imageId`: Delete image

### Chat Endpoints

- `POST /api/create-room`: Create new chat room
- `POST /api/chat/send`: Send message
- `GET /api/chat/stream`: Stream messages
- `GET /api/room-messages/:roomId`: Get room messages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Daim Zahoor - [daimdev6+chat-and-share@gmail.com](mailto:daimdev6+chat-and-share@gmail.com)
Project Link: [https://github.com/devdaim6/chat-and-share](https://github.com/devdaim6/chat-and-share)
