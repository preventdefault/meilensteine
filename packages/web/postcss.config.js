const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.svelte'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  /* eslint-disable global-require */
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('tailwindcss'),
    ...(production ? [purgecss] : []),
  ],
  /* eslint-enable global-require */
};
