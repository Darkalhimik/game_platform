# Game Platform Frontend

Next.js 15 frontend application for the game platform, featuring a modern game catalog with filters, search, and sorting capabilities.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **TypeScript**: 5+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Architecture

The frontend follows **Feature-Sliced Design (FSD)** principles:

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── games/             # Games catalog page
│   ├── auth/              # Authentication page
│   ├── settings/          # Settings page
│   └── statistics/        # Statistics page
├── entities/              # Business entities
│   └── game/              # Game entity and mock data
├── features/              # Feature modules
│   ├── game-catalog/      # Game catalog feature
│   └── home/              # Home menu feature
├── game-system/           # Core game logic
│   ├── filters/           # Filter logic and state
│   └── search/            # Search and sort logic
├── shared/                # Shared code
│   ├── config/            # Centralized configuration
│   └── ui/                # Reusable UI components
└── components/            # Legacy UI components
    └── ui/                # UI component library
```

## Features

### Game Catalog

- **Filters**: Genre, Players, Difficulty
- **Search**: Real-time search across games
- **Sort**: Multiple sort options (name, genre, players, difficulty)
- **Active Filters Summary**: Visual display of applied filters

### UI Components

- Responsive sidebar with filters
- Search input with clear functionality
- Sort controls with type-safe guards
- Game cards with formatted display
- Navigation with active state

## Development

### Running Locally

```bash
# Install dependencies (from monorepo root)
pnpm install

# Run development server
pnpm run dev

# Or run only frontend
pnpm --filter frontend dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Code Quality

```bash
# Type checking
pnpm run typecheck

# Linting
pnpm run lint
```

### Key Patterns

#### Centralized Configuration

All display labels and formatters are centralized in `shared/config/display.ts`:

```typescript
import { formatGenre, playersLabels, sortOptionsConfig } from '@/shared/config';
```

#### Runtime Type Guards

Critical boundaries use runtime validation:

```typescript
if (isGameSortOption(value)) {
  // TypeScript now knows value is GameSortOption
}
```

#### Feature Isolation

Each feature is self-contained with its model, UI, and config:

```
features/game-catalog/
├── config/           # Feature configuration
├── model/            # Business logic
├── ui/               # UI components
└── index.ts          # Public API
```

## Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# API URL (when backend is ready)
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Tailwind Configuration

Custom theme configuration in `tailwind.config.ts`:
- Dark theme by default
- Custom spacing (e.g., `w-85`)
- Glassmorphism utilities

## Best Practices

1. **Type Safety**: Use TypeScript strict mode
2. **Guards**: Add runtime guards at domain boundaries  
3. **Formatters**: Centralize display logic in `shared/config`
4. **Components**: Keep components focused and reusable
5. **Accessibility**: Include proper labels and ARIA attributes
6. **Honest UI**: Don't promise features that aren't implemented

## Future Enhancements

- [ ] Real API integration
- [ ] User authentication
- [ ] Game rooms and lobbies
- [ ] Real-time multiplayer
- [ ] User profiles
- [ ] Game history tracking

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Feature-Sliced Design](https://feature-sliced.design)
