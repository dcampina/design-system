import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/index.css'
import '@indigo/components/styles/globals.css'

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        'div',
        {
          className: 'theme min-h-screen bg-background text-foreground p-4',
        },
        React.createElement(Story)
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;