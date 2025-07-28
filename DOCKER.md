# Docker Setup for next-stack Frontend

This document explains how to run the next-stack frontend application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Quick Start

### Production Build

1. **Build and run the production container:**

   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and navigate to `http://localhost:3000`

### Development Build

1. **Build and run the development container:**

   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the development application:**
   - Open your browser and navigate to `http://localhost:3001`

## Manual Docker Commands

### Production

1. **Build the production image:**

   ```bash
   docker build -t next-stack-front .
   ```

2. **Run the production container:**
   ```bash
   docker run -p 3000:3000 next-stack-front
   ```

### Development

1. **Build the development image:**

   ```bash
   docker build -f Dockerfile.dev -t next-stack-front-dev .
   ```

2. **Run the development container:**
   ```bash
   docker run -p 3001:3000 -v $(pwd):/app -v /app/node_modules -v /app/.next next-stack-front-dev
   ```

## Docker Compose Services

### Production Service (`next-stack-front`)

- **Port:** 3000
- **Environment:** Production
- **Features:**
  - Optimized build with standalone output
  - Health checks
  - Automatic restart on failure
  - Security with non-root user

### Development Service (`next-stack-front-dev`)

- **Port:** 3001
- **Environment:** Development
- **Features:**
  - Hot reloading
  - Volume mounting for live code changes
  - Development dependencies included

## Environment Variables

The following environment variables can be configured:

- `NODE_ENV`: Set to `production` or `development`
- `NEXT_TELEMETRY_DISABLED`: Set to `1` to disable Next.js telemetry
- `PORT`: Port number (default: 3000)
- `HOSTNAME`: Hostname binding (default: "0.0.0.0")

## Health Check

The application includes a health check endpoint at `/api/health` that returns:

- Application status
- Timestamp
- Uptime

## Useful Commands

### View logs

```bash
docker-compose logs -f next-stack-front
```

### Stop services

```bash
docker-compose down
```

### Remove containers and images

```bash
docker-compose down --rmi all --volumes --remove-orphans
```

### Access container shell

```bash
docker-compose exec next-stack-front sh
```

## Troubleshooting

### Port already in use

If port 3000 is already in use, you can change the port mapping in `docker-compose.yml`:

```yaml
ports:
  - '3001:3000' # Change 3001 to any available port
```

### Build issues

If you encounter build issues, try:

```bash
docker system prune -a
docker-compose build --no-cache
```

### Permission issues

If you encounter permission issues on Linux/macOS:

```bash
sudo chown -R $USER:$USER .
```

## Production Deployment

For production deployment, consider:

1. **Using a reverse proxy** (nginx, traefik)
2. **Setting up SSL/TLS certificates**
3. **Configuring environment variables** for your production environment
4. **Setting up monitoring and logging**
5. **Using Docker Swarm or Kubernetes** for orchestration

## Security Notes

- The production container runs as a non-root user (`nextjs`)
- Only necessary files are copied to the container
- Development dependencies are excluded from production builds
- Health checks are implemented for monitoring
