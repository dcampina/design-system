import type { Config } from 'tailwindcss'
import preset from '@indigo/tokens/tailwind'

const config = {
  presets: [preset],
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
    '../../packages/components/src/**/*.{ts,tsx}',
  ],
} satisfies Config

export default config
