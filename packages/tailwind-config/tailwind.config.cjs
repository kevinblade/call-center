const colors = require("tailwindcss/colors");
const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,svelte,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [forms, typography, daisyui],
};