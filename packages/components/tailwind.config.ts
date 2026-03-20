import type { Config } from "tailwindcss";
import preset from "@dcampina/indigo-tokens/tailwind";

const config = {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
