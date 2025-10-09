const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'electron-renderer',
  entry: {
    index: './src/renderer/index.ts',
    villagers: './src/renderer/villagers.ts',
    shops: './src/renderer/shops.ts',
    calendar: './src/renderer/calendar.ts',
    crafting: './src/renderer/crafting.ts',
    items: './src/renderer/items.ts',
    notes: './src/renderer/notes.ts',
    tasks: './src/renderer/tasks.ts',
    'profit-calculator': './src/renderer/profit-calculator.ts',
    stats: './src/renderer/stats.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/renderer'),
    filename: '[name].js',
    publicPath: '' // Empty publicPath for Electron file:// protocol
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@main': path.resolve(__dirname, 'src/main'),
      '@renderer': path.resolve(__dirname, 'src/renderer'),
      '@preload': path.resolve(__dirname, 'src/preload'),
      '@shared': path.resolve(__dirname, 'src/shared')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[path][name][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/villagers.html',
      filename: 'villagers.html',
      chunks: ['villagers']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/shops.html',
      filename: 'shops.html',
      chunks: ['shops']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/calendar.html',
      filename: 'calendar.html',
      chunks: ['calendar']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/crafting.html',
      filename: 'crafting.html',
      chunks: ['crafting']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/items.html',
      filename: 'items.html',
      chunks: ['items']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/notes.html',
      filename: 'notes.html',
      chunks: ['notes']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/tasks.html',
      filename: 'tasks.html',
      chunks: ['tasks']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/profit-calculator.html',
      filename: 'profit-calculator.html',
      chunks: ['profit-calculator']
    }),
    new HtmlWebpackPlugin({
      template: './src/renderer/stats.html',
      filename: 'stats.html',
      chunks: ['stats']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/renderer/assets',
          to: 'assets',
          noErrorOnMissing: true
        }
      ]
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/renderer')
    },
    port: 8080,
    hot: true
  }
};
