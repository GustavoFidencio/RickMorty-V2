module.exports = {
  presets: [
    'babel-preset-expo',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@enterprise': './src/enterprise',
          '@factory': './src/factory',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@services': './src/services',
        }
      }
    ]
  ]
};