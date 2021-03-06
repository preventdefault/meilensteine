module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    // '@babel/plugin-syntax-dynamic-import',
    // '@babel/plugin-transform-runtime',
  ],
  env: {
    test: {
      presets: ['@babel/preset-env'],
      // plugins: ['dynamic-import-node'],
    },
  },
  sourceType: 'module',
};
