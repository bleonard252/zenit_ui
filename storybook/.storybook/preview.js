import {defineCustomElements} from '../loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Flutter demo",
        "Tokens",
        "Components",
      ],
    },
  },
  backgrounds: { disable: true }
}