#!/bin/bash

# Navigate to repository directory
cd /var/www/genc-is-adamlari-platformu/ || { echo "Directory repository directory not found"; exit 1; }

# Pull latest changes from the repository
git pull origin main || { echo "Failed to pull changes"; exit 1; }

# Navigate to backend directory
cd /var/www/genc-is-adamlari-platformu/arayuz/backend || { echo "Backend directory not found"; exit 1; }

# Install backend dependencies
npm install || { echo "Failed to install backend dependencies"; exit 1; }

# Navigate to app directory
cd /var/www/genc-is-adamlari-platformu/arayuz || { echo "Directory repository directory not found"; exit 1; }

# Install dependencies
npm install || { echo "Failed to install dependencies"; exit 1; }

# Build the React app
npm run build || { echo "Failed to build app"; exit 1; }

# Restart Nginx
sudo systemctl restart nginx || { echo "Failed to restart Nginx"; exit 1; }

# Start backend server
sudo pm2 start gencis
