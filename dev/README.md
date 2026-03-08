# Development Guide

This directory contains development tools, documentation, and configurations for the game platform project.

## Directory Structure

```
dev/
├── docker/       # Docker configurations for local development
├── scripts/      # Development and build scripts
└── README.md     # This file
```

## Local Development

### Prerequisites

- Node.js 18+
- pnpm 8+
- Docker and Docker Compose (for database)

### Quick Start

```bash
# From project root
pnpm install
pnpm run dev
```

This will start:
- Frontend at `http://localhost:3000`
- Backend at `http://localhost:4000` (when implemented)

### Environment Variables

Create `.env.local` files in each app directory:

#### Frontend (`apps/frontend/.env.local`)

```bash
# Add environment variables as needed
NEXT_PUBLIC_API_URL=http://localhost:4000
```

#### Backend (`apps/backend/.env`)

```bash
# Add environment variables as needed
PORT=4000
DATABASE_URL=postgresql://user:password@localhost:5432/game_platform
```

## Development Workflow

### Code Quality

```bash
# Type checking
pnpm run typecheck

# Linting
pnpm run lint

# Fix linting issues
pnpm run lint:fix
```

### Working with Packages

The monorepo uses pnpm workspaces. To add dependencies:

```bash
# Add to specific workspace
pnpm add <package> --filter <workspace-name>

# Example: Add to frontend
pnpm add lucide-react --filter frontend

# Add to all workspaces
pnpm add -w <package>
```

### Docker Development

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

## Architecture Guidelines

### Frontend

- Use TypeScript strict mode
- Follow Feature-Sliced Design
- Centralize configurations in `shared/config`
- Use runtime guards for type validation
- Keep components focused and testable

### Code Organization

- **entities/** - Domain models
- **features/** - Feature modules (self-contained)
- **shared/** - Reusable utilities and components
- **app/** - Next.js pages and layouts

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process by PID
taskkill /PID <PID> /F
```

### Pnpm Lock File Issues

```bash
# Remove lock file and node_modules
rm pnpm-lock.yaml
rm -rf node_modules

# Reinstall
pnpm install
```

### Type Errors After Update

```bash
# Rebuild TypeScript project references
pnpm run typecheck
```

## Useful Commands

```bash
# Clean build artifacts
pnpm run clean

# Update all dependencies
pnpm update -r

# Check for outdated packages
pnpm outdated -r
```

## Contributing

1. Create a feature branch
2. Make changes
3. Run `pnpm run typecheck` and `pnpm run lint`
4. Commit with descriptive message
5. Push and create PR
