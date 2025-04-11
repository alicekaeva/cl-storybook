const config = {
  stories: ["../src/**/*.mdx", "../src/components/atoms/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
}
export default config
