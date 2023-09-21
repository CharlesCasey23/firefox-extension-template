const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'production',
   entry: {
    content: { import: './src/content.ts', filename: './[name].js' },
    popup: { import: './src/popup.ts', filename: './popup/index.js' },
    background: { import: './src/background.ts', filename: './[name].js' }
   },
   resolve: {
      extensions: ['.ts', '.js', '.html'],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
               sources: false,
            },
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [
            {
               from: '**/*',
               to: '[path][name][ext]',
               context: 'public'
            }
         ]
      }),
   ],
};
