# 1. Builder Stage: Build the Next.js application
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
# Using 'npm install' is more flexible than 'npm ci' if you don't commit package-lock.json
COPY package*.json ./
RUN npm install

# Copy source code and build the application for standalone output
COPY . .
RUN npm run build

# 2. Runner Stage: Create the final, minimal production image
FROM node:20-alpine AS runner
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production
# Cloud Run provides the PORT environment variable. Default to 8080.
ENV PORT=8080

# Create a non-root user for better security
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone output from the builder stage
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
# Copy the public and static assets
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# Switch to the non-root user
USER nextjs

# Expose the port the app will listen on
EXPOSE ${PORT}

# The command to start the application in standalone mode
CMD ["node", "server.js"]