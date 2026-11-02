# Use lightweight Node.js Alpine image
FROM node:22-alpine

# Set application working directory
WORKDIR /app

# Copy Node.js application
COPY server.js .

# Expose application port
EXPOSE 3003

# Start User service
CMD ["node", "server.js"]