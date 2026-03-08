# Game Platform

A modern multiplayer game platform built with TypeScript, featuring turn-based games, real-time communication, and game catalog management.

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, TypeScript
- **Database**: PostgreSQL (planned)
- **Package Manager**: pnpm
- **Architecture**: Monorepo with shared packages

## Project Structure

```
game_platform/
├── apps/
│   ├── backend/          # Backend API server
│   └── frontend/         # Next.js frontend application
├── packages/
│   ├── contracts/        # Shared API contracts
│   ├── database/         # Database schemas and migrations
│   └── schema/           # Shared validation schemas
├── dev/                  # Development tools and scripts
└── k8s/                  # Kubernetes configurations
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev
```

### Available Scripts

- `pnpm run dev` - Start all applications in development mode
- `pnpm run build` - Build all applications
- `pnpm run lint` - Run ESLint across all workspaces
- `pnpm run typecheck` - Type-check all TypeScript code

## Features

### Current Features

- ✅ Game catalog with filters (genre, players, difficulty)
- ✅ Search and sort functionality
- ✅ Responsive UI with dark theme
- ✅ Sidebar filters with persistent state

### Planned Features

- 🔄 User authentication
- 🔄 Turn-based game rooms
- 🔄 Real-time multiplayer support
- 🔄 Game statistics and history
- 🔄 User profiles and settings

## Development

### Frontend Architecture

The frontend follows Feature-Sliced Design principles:

- **app/** - Next.js pages and routing
- **entities/** - Business entities (e.g., Game)
- **features/** - Feature modules (e.g., game-catalog, home)
- **game-system/** - Core game logic (filters, search, sort)
- **shared/** - Shared UI components and utilities

### Code Quality

- TypeScript strict mode enabled
- ESLint for code linting
- Consistent code formatting
- Centralized configuration for display labels

## Contributing

This is a personal project in active development.

## License

Private - All rights reserved
