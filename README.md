# genui_demo

Interactive demo app showcasing all UI controls rendered by [@sudobility/genui](https://www.npmjs.com/package/@sudobility/genui).

## Setup

```bash
bun install
bun run dev
```

## Features

- **All GenUI controls**: Actions, inputs, controls, collections, display lines, spacing
- **Dark mode**: Toggle via TopBar button
- **Action log**: See onAction callbacks in real-time
- **Master-detail layout**: Sidebar navigation with 6 categories

## Development

```bash
bun run dev          # Vite dev server (port 5199)
bun run build        # Production build
bun run test         # Run Vitest
bun run lint         # ESLint
bun run verify       # typecheck + lint + test
```

## Stack

React 19, Vite 7, TypeScript, Tailwind CSS, @sudobility/components, @sudobility/genui.

## License

MIT
