# Overview

This is a full-stack web application built with Express.js backend and React frontend, designed as a pricing/sales page with image upload capabilities. The application features a modern UI with shadcn/ui components, a PostgreSQL database using Drizzle ORM, and supports purchase tracking and file uploads.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme variables and dark mode support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod schema validation

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **File Uploads**: Multer middleware for handling multipart/form-data
- **Development**: Hot reload with Vite integration in development mode
- **Storage**: In-memory storage implementation with interface for easy database switching

## Database Schema
- **Users Table**: Basic user management with username/password
- **Purchases Table**: Tracks purchase transactions with email, plan, and price
- **Uploaded Images Table**: Stores metadata for uploaded image files

## Key Features
- **Pricing Cards**: Multiple subscription tiers (basic, intermediate, VIP) with feature comparisons
- **Image Upload**: Drag-and-drop file upload with preview and validation
- **Purchase Tracking**: API endpoints for creating and retrieving purchase records
- **Countdown Timer**: Dynamic countdown component for sales urgency
- **Toast Notifications**: User feedback system for actions and errors

## API Structure
- `POST /api/purchase` - Create new purchase record
- `GET /api/purchases` - Retrieve all purchases
- `POST /api/upload` - Handle image file uploads

## Build & Deployment
- **Development**: Concurrent frontend (Vite) and backend (tsx) processes
- **Production**: Static frontend build with bundled backend using esbuild
- **Database Migrations**: Drizzle Kit for schema management

# External Dependencies

## Core Technologies
- **Database**: PostgreSQL with Neon serverless driver
- **UI Framework**: React with shadcn/ui component system
- **Styling**: Tailwind CSS with PostCSS processing
- **Validation**: Zod for schema validation and type safety

## Key Libraries
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM with schema inference
- **multer**: File upload handling middleware
- **wouter**: Lightweight routing for React applications
- **date-fns**: Date manipulation and formatting utilities
- **clsx & tailwind-merge**: Utility for conditional CSS classes

## Development Tools
- **Vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js backend
- **esbuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment with live reload capabilities