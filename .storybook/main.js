module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "storybook/preset-typecript",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ]
}
