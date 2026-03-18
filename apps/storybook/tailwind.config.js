import indigoPreset from '@indigo/tokens/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [indigoPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
};
