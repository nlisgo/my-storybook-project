# CLAUDE.md - Project Reference

## Build/Run Commands
- `yarn dev` - Run development server
- `yarn build` - TypeScript compile + build
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build
- `yarn storybook` - Start Storybook (port 6006)
- `yarn build-storybook` - Build Storybook static output
- `yarn test-storybook` - Run Storybook tests (with @storybook/test-runner)

## Code Style Guidelines
- Atomic Design pattern: atoms → molecules → organisms → templates → pages
- React functional components with TypeScript interfaces
- CSS modules for styling (ComponentName.module.css)
- Story files paired with components (ComponentName.stories.tsx)
- Use React.FC<Props> for component typing
- Strict TypeScript with noUnusedLocals/Parameters
- ESLint with React Hooks plugin enforced

## API Mocking with MSW
- MSW configured for both Storybook and development
- Mock handlers in `src/mocks/handlers.ts`
- Browser setup in `src/mocks/browser.ts`
- Use MSW parameters in Storybook stories like:
  ```ts
  parameters: {
    msw: {
      handlers: [handlers]
    }
  }
  ```

## Best Practices
- Components should have explicit Props interface
- Prefer destructured props in component parameters
- Keep components focused on a single responsibility
- Follow React's Rules of Hooks
- Create variations of API responses for different test scenarios