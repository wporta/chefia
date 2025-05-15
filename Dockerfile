# Dockerfile

# Base image
FROM node:22-alpine AS build

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy project files
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY tsconfig.json ./
COPY vite.config.* ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build the project
RUN pnpm build

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
