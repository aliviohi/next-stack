import type { Preview } from '@storybook/react';
import '../styles/globals.css';

// Or your main global stylesheet

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/',
        asPath: '/',
        query: {},
        // You can add mock implementations for push, replace, etc. if needed
      },
    },
  },
};

export default preview;
