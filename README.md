# Indigo Design System (Beta)

> ⚠️ This is a beta version. APIs and token structures may change. Breaking changes will be documented.

Indigo is the design system powering news aktuell's web products. It provides a shared token system and component library to ensure visual consistency across all applications.

---

## Packages

| Package | Description |
|---|---|
| `@dcampina/indigo-tokens` | Design tokens — colors, spacing, typography, shadows |
| `@dcampina/indigo-components` | React component library built on shadcn/ui |
| `@repo/eslint-config` | Shared ESLint configurations |
| `@repo/typescript-config` | Shared TypeScript configurations |

## Apps

| App | Description |
|---|---|
| `apps/storybook` | Component explorer and documentation |
| `packages/next-app` | Reference Next.js implementation |

---

## Getting Started

### Prerequisites

- Node.js `>=22`
- npm `>=10`

### Install

```bash
git clone https://github.com/dcampina/design-system.git
cd design-system
npm install
```

### Run Storybook

```bash
npm run storybook
```

### Build all packages

```bash
npm run build
```

### Run tests

```bash
npm run test
```

### Lint

```bash
npm run lint
```

---

## Figma

| File | Link |
|---|---|
| Tokens | [FIGMA_TOKENS_URL] |
| Components | [FIGMA_COMPONENTS_URL] |

---

## Architecture

### Monorepo

This repo uses [Turborepo](https://turbo.build/) for task orchestration and caching. Packages are managed with npm workspaces.

### Token System

Tokens are defined in `packages/tokens` and follow an Atlassian-style semantic token system. Tokens are split by usage context — for example `bg-ds2-success` and `border-ds2-success` intentionally reference different color values, as background and border success states are visually distinct.

Tokens are defined at two levels:

- **Primitive tokens** — raw values (`--ds-indigo-500: #6366f1`)
- **Semantic tokens** — contextual meaning (`--ds2-bg-success`, `--ds2-border-success`)

Semantic tokens also include interaction modifiers:

```css
--ds2-bg-brand-base
--ds2-bg-brand-hover
--ds2-bg-brand-pressed
```

### Why Tailwind 3

The token system requires defining colors separately per property context (e.g. `backgroundColor` and `borderColor` can reference different values for the same semantic name). Tailwind 4's CSS-first architecture removes this capability, so **this project requires Tailwind CSS v3** and must not be upgraded to v4.

### Components

Components in `packages/components` are built on [shadcn/ui](https://ui.shadcn.com/) and styled exclusively with Indigo tokens. shadcn provides structure and accessibility; Indigo tokens provide the visual layer.

---

## Repo Structure

```
design-system/
├── apps/
│   └── storybook/          # Storybook app
├── packages/
│   ├── components/         # React component library
│   ├── tokens/             # Design tokens + Tailwind preset
│   ├── next-app/           # Reference Next.js application
│   ├── eslint-config/      # Shared ESLint config
│   └── typescript-config/  # Shared TypeScript config
├── turbo.json
└── package.json
```

---

## Contributing

See the [Contributing Guide](./CONTRIBUTING.md) for how to add components, tokens, and tests.

---

## License

Private — news aktuell internal use only.
