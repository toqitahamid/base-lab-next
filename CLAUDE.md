# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BASE Lab Next is a research laboratory website built with Next.js 15, React 18, and TypeScript. It's a modern static website that uses JSON files as a content management system for dynamic content like team members, publications, news, and research projects.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (Next.js 15+ default)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Development Server
The development server runs on http://localhost:3000 by default.

## Architecture

### Directory Structure
- `app/` - Next.js App Router pages and routes (layout.tsx, page.tsx files)
- `components/` - Reusable React components
  - `ui/` - Shadcn UI components (using Radix UI primitives)
- `lib/` - Utility functions and helpers
- `public/` - Static assets and JSON content files
  - `images/` - Image assets organized by category (team/, slider/, sponsors/)
  - `videos/` - Video assets
  - JSON data files: `home.json`, `team.json`, `publications.json`, `news.json`, `research.json`

### Key Technologies
- **Next.js 15** with App Router and React Server Components
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS 3** for styling with custom design system
- **Shadcn UI** components built on Radix UI primitives
- **Embla Carousel** for image carousels with autoplay
- **Lucide React** and React Icons for icons

### Content Management
The website uses JSON files in `public/` as a simple CMS:
- Content is fetched server-side and rendered statically
- Images are referenced with paths relative to `public/`
- Each JSON file corresponds to a specific page or content type

### Styling System
- Custom CSS variables defined in `app/globals.css`
- Tailwind config extends default theme with custom colors and animations
- Dark mode support configured via class-based approach
- Responsive design with mobile-first approach

### Component Architecture
- Server components by default (Next.js 13+ App Router)
- Client components marked with "use client" directive when needed
- Reusable UI components in `components/ui/` following Shadcn patterns
- Path aliases configured: `@/*` maps to root directory

### Configuration Files
- `next.config.mjs` - Next.js configuration with standalone output
- `tailwind.config.ts` - Tailwind CSS configuration with custom theme
- `components.json` - Shadcn UI configuration
- `tsconfig.json` - TypeScript configuration with strict settings
- `.eslintrc.json` - ESLint configuration extending Next.js rules

## Development Patterns

### Adding New Content
1. For dynamic content (team, news, publications): Edit corresponding JSON file in `public/`
2. For new pages: Create new route in `app/` directory following App Router conventions
3. For new components: Follow existing patterns in `components/` directory

### Image Handling
- Place images in appropriate `public/images/` subdirectory
- Reference images using absolute paths from `public/` root (e.g., `/images/team/member.jpg`)
- Optimize images before adding to reduce bundle size

### Styling Conventions
- Use Tailwind classes for styling
- Follow existing spacing and color patterns from design system
- Leverage CSS custom properties for theme consistency
- Use Shadcn UI components for complex UI patterns

### Code Quality
- TypeScript strict mode is enabled
- ESLint runs with Next.js recommended rules
- Console logs are removed in production builds
- Follow existing import patterns and code structure