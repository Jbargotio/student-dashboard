# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code, including the 'public' folder
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Start the application
CMD [ "node", "index.js" ]
