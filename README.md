# ImageShare

## Overview

ImageShare is a web application that allows users to share images and chat in real-time. The application leverages modern web technologies to provide a seamless and interactive user experience. Users can upload images, add messages, and share them with others via unique links. Additionally, the platform supports real-time chat rooms where users can communicate instantly.

## Features

- **Image Upload and Sharing**: Users can upload images and share them with others using a unique link.
- **Real-time Chat**: Users can join chat rooms and communicate in real-time.
- **Image Compression**: Uploaded images are compressed and converted to WebP format for efficient storage and transfer.
- **Room Management**: Users can create, join, and delete chat rooms.
- **Emoji Support**: Users can enhance their chat experience with a wide range of emojis.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **Private Network Access**: Application is hosted on a private localhost and accessible through Tailscale's secure network.

## Technologies Used

This project utilizes the following technologies:

- **Next.js**: A React framework for building server-side rendered applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **MongoDB**: A NoSQL database used for storing chat messages and image metadata.
- **Kafka**: A distributed event streaming platform used for real-time data processing.
- **Docker & Docker Compose**: Used for containerization and managing multi-container applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Sharp**: An image processing library used for image compression and conversion.
- **Framer Motion**: A library for creating animations in React applications.
- **Tailscale**: Used for secure access to the application through private network tunneling.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Docker
- Docker Compose
- Node.js
- npm or Yarn
- Tailscale

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imageshare.git
   ```
2. Navigate to the project directory:
   ```bash
   cd imageshare
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables by creating a `.env` file:
   ```
   MONGODB_URI=your_mongodb_uri
   ```

5. Build and start the Docker containers:
   ```bash
   docker-compose up --build
   ```

6. Install and configure Tailscale:
   - Install Tailscale on your machine
   - Log in to your Tailscale account
   - Enable port forwarding for the application ports (3000, 9092, 2181)

### Usage

1. Access the application through your Tailscale network at `http://your-tailscale-machine:3000`.
2. The following ports are exposed through Tailscale:
   - Web Application: 3000
   - Kafka: 9092
   - Zookeeper: 2181
3. Use the interface to upload images, join chat rooms, and share links.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Email**: devdaim@proton.me
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/daimzahoorit)
- **GitHub**: [Your GitHub Profile](https://github.com/devdaim6)
