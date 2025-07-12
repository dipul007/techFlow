# TechFlow - Company Website

## Overview

This is a modern, professional company website for TechFlow, an IT consulting and services firm. The application is built as a full-stack TypeScript project with a React frontend and Express backend, featuring a clean design system and contact form functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for contact form submission
- **Validation**: Zod for request validation and type safety

### Component System
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theme**: New York style with neutral base colors and CSS variables
- **Icons**: Lucide React icon library
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Landing area with animated counters and call-to-action
3. **About Section**: Company information with highlight cards
4. **Services Section**: Service offerings with gradient cards
5. **Clients Section**: Industry showcase with colored category cards
6. **Careers Section**: Job openings and company benefits
7. **Contact Section**: Contact form with validation and submission handling
8. **Footer**: Company links and social media

### Backend Endpoints
- `POST /api/contact`: Contact form submission with validation
- Error handling middleware for consistent API responses
- Request logging middleware for debugging

### Database Schema
- **Users Table**: Basic user structure with username/password (foundation for future auth)
- **Drizzle ORM**: PostgreSQL integration with type-safe queries
- **Storage Interface**: Abstracted storage layer with in-memory implementation

## Data Flow

1. **Form Submission**: Contact form data is validated client-side using React Hook Form
2. **API Request**: Validated data sent to backend via TanStack Query mutation
3. **Server Validation**: Zod schema validates incoming request data
4. **Response Handling**: Success/error responses trigger toast notifications
5. **State Updates**: Query cache manages loading states and optimistic updates

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: Fetch API with custom request wrapper
- **Date Handling**: date-fns for date formatting
- **Animations**: CSS transitions and transforms

### Backend Dependencies
- **Database**: Neon PostgreSQL with connection pooling
- **ORM**: Drizzle with PostgreSQL dialect
- **Validation**: Zod for runtime type checking
- **Session Management**: Connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Type Checking**: TypeScript with strict mode
- **Build System**: Vite with React plugin and HMR
- **Code Quality**: ESLint and Prettier configurations
- **Path Aliases**: Configured for clean imports

## Deployment Strategy

### Development Environment
- **Development**: Vite dev server with Express backend
- **Local Testing**: Full-stack development with hot reloading
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production Deployment Options

#### 1. Netlify Deployment (Static + Serverless)
- **Frontend**: Static React app built with Vite to `dist/public`
- **Backend**: Serverless function for contact form processing
- **Configuration**: `netlify.toml` with build settings and redirects
- **Build Command**: `node build-netlify.js`
- **Deployment**: Automatic via GitHub integration or manual drag & drop

#### 2. Full-Stack Deployment (Express Server)
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets served from build directory

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `node build-netlify.js`: Build for Netlify static deployment
- `npm run db:push`: Database schema deployment

### File Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── dist/            # Built application
└── migrations/      # Database migrations
```

The application follows a monorepo structure with clear separation between frontend, backend, and shared code, making it easy to maintain and scale.