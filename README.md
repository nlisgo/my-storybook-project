# My Storybook Project

A React component library using Storybook and Atomic Design principles.

## Getting Started

Install dependencies:

```bash
yarn install
```

## Running Storybook

Start the Storybook development server:

```bash
yarn storybook
```

This will launch Storybook on [http://localhost:6006](http://localhost:6006).

## Using Storybook for Rapid Development

1. Browse existing components in Storybook
2. Create new components in their appropriate folders:
   - `src/components/atoms/` - Basic building blocks
   - `src/components/molecules/` - Simple component combinations 
   - `src/components/organisms/` - Complex UI components
   - `src/components/templates/` - Page layouts
   - `src/components/pages/` - Complete pages

3. Add a `.stories.tsx` file alongside each component
4. Use Storybook to visualize and test components in isolation
5. Iterate quickly with hot reloading