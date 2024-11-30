#!/bin/bash

# Update the repository
echo "Pulling latest changes from the main branch..."
git pull origin main || { echo "git pull failed"; exit 1; }

# Install dependencies with force
echo "Installing dependencies with force..."
npm i --force || { echo "npm install failed"; exit 1; }

# Build the application
echo "Building the application..."
npm run build || { echo "Build failed"; exit 1; }

# Restart PM2 processes
echo "Restarting PM2 processes..."
pm2 delete all || echo "No PM2 processes to delete."
pm2 start ecosystem.config.js || { echo "PM2 start failed"; exit 1; }

echo "All tasks completed successfully."

