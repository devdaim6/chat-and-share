#!/bin/bash

# Update the repository
echo "Pulling latest changes from the main branch..."
git pull origin main || { echo "git pull failed"; exit 1; }

# Stop and remove Docker containers
echo "Stopping Docker containers..."
docker-compose down || { echo "docker-compose down failed"; exit 1; }

# Start Docker containers
echo "Starting Docker containers..."
docker-compose up -d || { echo "docker-compose up failed"; exit 1; }

# Wait for containers to be ready
echo "Waiting for containers to be ready..."
max_attempts=12  # 1 minute total wait time
attempt=1

while [ $attempt -le $max_attempts ]; do
  if docker ps | grep -q "chat-and-share-kafka" && docker ps | grep -q "chat-and-share-zookeeper"; then
    echo "Containers are ready!"
    break
  fi
  echo "Waiting for containers to be ready... (Attempt $attempt/$max_attempts)"
  sleep 5
  attempt=$((attempt + 1))
done

if [ $attempt -gt $max_attempts ]; then
  echo "Timeout waiting for containers to be ready"
  exit 1
fi

# Restart PM2 processes
echo "Restarting PM2 processes..."
pm2 delete all || echo "No PM2 processes to delete."
pm2 start ecosystem.config.js || { echo "PM2 start failed"; exit 1; }

echo "All tasks completed successfully."

