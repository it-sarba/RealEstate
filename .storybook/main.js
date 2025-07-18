/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      docs: {
        docsPage: false
      }
    }
  },
  docs: {
    autodocs: true // Enables auto-generated Docs tab for CSF
  }
};

export default config;
