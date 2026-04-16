# GenUI Demo

Interactive demo app showcasing all UI controls rendered by `@sudobility/genui`.

**Package**: `genui_demo` (private, MIT)

## Tech Stack

- **Language**: TypeScript (strict mode, JSX)
- **Runtime**: Bun
- **Package Manager**: Bun (do not use npm/yarn/pnpm for installing dependencies)
- **Framework**: React 19
- **Routing**: React Router v7
- **Build**: Vite 7
- **Styling**: Tailwind CSS 3
- **Testing**: Vitest
- **UI**: @sudobility/components, @sudobility/design, @sudobility/genui

## Project Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # ThemeProvider + BrowserRouter + routes
├── i18n.ts                     # Minimal i18next (peer dep of components)
├── index.css                   # Tailwind + theme CSS variables
├── components/
│   ├── DemoTopBar.tsx          # App title + dark mode toggle
│   └── ActionLog.tsx           # Scrollable onAction event log
├── hooks/
│   └── useActionLog.ts         # Action log state management
├── pages/
│   ├── DemoPage.tsx            # MasterDetailLayout + category routing
│   ├── categories.ts           # Category definitions
│   └── CategoryDetail.tsx      # Renders GenUI for a category
├── data/
│   ├── index.ts                # Barrel export
│   ├── actions.ts              # action, line_action, fab*, link, nav/tile/chip
│   ├── inputs.ts               # input_text/numeric/password/email/phone/date/text_block, search
│   ├── controls.ts             # line_toggle, line_slider, line_select
│   ├── collections.ts          # list*, grid*, carousel, stacked*, tabs*, spaced*, header
│   ├── display.ts              # line_* display, paragraph, text_markup, center*, image, footer, waiting, web
│   └── spacing.ts              # spacer_horizontal, spacer_vertical
└── test/
    ├── setup.ts                # Vitest setup (matchMedia, ResizeObserver mocks)
    └── app.test.tsx            # Smoke tests
```

## Commands

```bash
bun run dev            # Vite dev server (port 5134)
bun run build          # TypeScript check + Vite build
bun run typecheck      # TypeScript check
bun run lint           # Run ESLint
bun run test           # Run Vitest
bun run verify         # typecheck + lint + test
```

## Architecture

- **No @sudobility/building_blocks** — too many transitive deps (Firebase, etc.) for a simple demo
- Uses `ThemeProvider` and `MasterDetailLayout` directly from `@sudobility/components`
- Custom `DemoTopBar` with dark mode toggle
- Minimal i18next setup (in-memory, English-only) to satisfy peer dep
- All demo data in `src/data/` as static `IRenderable` trees

## Coding Patterns

- Path alias `@/*` resolves to `src/*`
- Each data file exports an array of `IRenderable` for a category
- `GenUI` component renders each renderable, `onAction` callbacks logged to ActionLog panel
- 6 categories cover all ~60 ViewLayout types from genui
