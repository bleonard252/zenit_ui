module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y', 'storybook-addon-themes', '@storybook/addon-jest', '@storybook/addon-interactions'],
  staticDirs: [
    { from: '../src/stories/assets', to: '/assets' },
    { from: '../src/stories/public', to: '/' },
  ],
  framework: '@storybook/web-components',
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require('@babel/preset-typescript').default, [require('@babel/preset-react').default, { runtime: 'automatic' }], require('@babel/preset-env').default],
            plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]],
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    config.resolve.extensions.push('.mjs');

    return config;
  },
};
