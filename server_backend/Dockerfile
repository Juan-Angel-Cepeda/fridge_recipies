# Install dependencies only when needed
FROM node:18-alpine3.19 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Build the app with cache dependencies
FROM node:18-alpine3.19 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine3.19 AS runner
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install production dependencies
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the .env file
COPY .env ./

# Copy the built app
COPY --from=builder /app/dist ./dist

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start the application
CMD [ "node","dist/main" ]
