# Dockerfile

# Base image
FROM oven/bun:1-alpine AS build

# Set working directory
WORKDIR /app

# Copy project files
COPY bun.lockb ./
COPY package.json ./
COPY tsconfig.json ./
COPY vite.config.* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the project
RUN bun run build

# Serve using a lightweight web server
FROM nginx:alpine

# Copy built files to nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
