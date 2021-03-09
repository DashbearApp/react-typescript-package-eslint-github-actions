// .storybook/main.js

module.exports = {
    stories: [
        '../stories/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-links',
    ],
};
