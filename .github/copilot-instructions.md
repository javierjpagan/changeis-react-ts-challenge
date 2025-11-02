# AI Coding Agent Instructions

Welcome to the `changeis-react-ts-challenge` project! This document provides essential guidelines for AI coding agents to be productive in this codebase. Follow these instructions to understand the project's architecture, workflows, and conventions.

## Project Overview

This project is a React application built with TypeScript and Vite. It uses modern tooling to ensure fast development and type safety. Key features include:

- **React**: Component-based UI development.
- **TypeScript**: Static typing for better code quality.
- **Vite**: Fast build tool with Hot Module Replacement (HMR).
- **ESLint**: Linting for consistent code style.

## Key Files and Directories

- `src/`: Contains the application's source code.
  - `App.tsx`: Main application component.
  - `main.tsx`: Entry point for the React application.
  - `assets/`: Static assets like images.
- `public/`: Publicly accessible static files.
- `vite.config.ts`: Configuration for Vite.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configuration files.
- `eslint.config.js`: ESLint configuration.

## Developer Workflows

### Building and Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

### Linting

Run ESLint to check for code style issues:
```bash
npm run lint
```

### Testing

(Currently, no testing framework is configured. Add one if needed.)

## Project-Specific Conventions

- **TypeScript**: Use strict typing wherever possible. Refer to `tsconfig.app.json` for enabled compiler options.
- **Component Structure**: Follow React's functional component pattern. Keep components modular and reusable.
- **Styling**: CSS files are colocated with components (e.g., `App.css`).
- **Linting Rules**: Extend ESLint configurations as needed. Type-aware lint rules are recommended for production.

## External Dependencies

- **Vite Plugins**:
  - `@vitejs/plugin-react`: Enables React Fast Refresh.
  - `@vitejs/plugin-react-swc`: Alternative plugin using SWC for faster builds.
- **ESLint Plugins**:
  - `eslint-plugin-react-x`: React-specific lint rules.
  - `eslint-plugin-react-dom`: React DOM-specific lint rules.

## Integration Points

- **Static Assets**: Place images and other assets in `src/assets/`.
- **Public Files**: Use `public/` for files that should be directly accessible via the browser.

## Notes for AI Agents

- When adding new components, colocate their styles and ensure proper TypeScript typing.
- Follow the existing folder structure and naming conventions.
- Update `eslint.config.js` if new linting rules are required.
- Refer to `README.md` for additional context on expanding ESLint configurations.

---

For any unclear or incomplete sections, please request clarification or additional context.