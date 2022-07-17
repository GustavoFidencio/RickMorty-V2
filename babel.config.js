module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@enterprise': './src/enterprise',
          // '@context': './src/context',
          // '@factory': './src/factory',
          '@components': './src/components',
          '@pages': './src/pages',
          '@route': './src/route',
          '@services': './src/services',
        }
      }
    ]
  ]
};