import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'], // Adjust if your stories are elsewhere
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions', // For interaction testing
    // Add other addons here
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag', // Enables automatic documentation generation
  },
  staticDirs: ['../public'], // Makes your `public` folder available to Storybook
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'), // Adjust if your src is elsewhere
      };
    }
    return config;
  },
};
export default config;
