import type { StorybookConfig } from '@storybook/react-vite';

import { dirname } from "path"

import { fileURLToPath } from "url"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
const config: StorybookConfig = {
  "stories": [
    // MDX excluded: addon-docs was removed (hoisting), so MDX isn’t compiled and would break the build
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    // addon-vitest and addon-docs removed: monorepo hoisting breaks their require('storybook/internal/node-logger')
    getAbsolutePath('@storybook/addon-a11y')
  ],
  "framework": getAbsolutePath('@storybook/react-vite')
};
export default config;