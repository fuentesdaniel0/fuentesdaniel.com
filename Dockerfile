# Use an official Node.js runtime as a parent image.
# Using alpine for a smaller image size.
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
# This allows us to leverage Docker's layer caching.
COPY package*.json ./

# Install app dependencies
# Using 'npm ci' is recommended for production builds as it's faster and more reliable.
RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app likely binds to a port (e.g., 3000). Expose it.
EXPOSE 3000

# Define the command to run your app.
# This will execute the "start" script in your package.json
CMD [ "npm", "start" ]