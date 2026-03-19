import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from '../tailwind.config.js';

function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  stories: [
    {
      directory: '../../../packages/components/src/components/ui',
      files: '**/*.stories.@(js|jsx|mjs|ts|tsx)',
      titlePrefix: 'Components',
    }
  ],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: getAbsolutePath('@storybook/react-vite'),
  async viteFinal(config) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const projectRoot = join(__dirname, '../../..');

    config.server = config.server ?? {};
    config.server.fs = {
      allow: [projectRoot],
      strict: false,
    };

    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../../../packages/components/src'),
    };

    config.css = {
      postcss: {
        plugins: [
          tailwindcss(tailwindConfig),
          autoprefixer(),
        ]
      }
    };

    return config;
  },
};

export default config;