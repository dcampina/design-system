import type { Config } from 'tailwindcss'
import preset from '@indigo/tokens/tailwind'

const config = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}'],
} satisfies Config

export default config
