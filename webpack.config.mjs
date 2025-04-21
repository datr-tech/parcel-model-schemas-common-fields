import path from 'node:path';

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    modules: ['node_modules'],
    alias: {
      '@app-pmscf': path.resolve('./src/'),
    },
  },
  target: 'node',
  output: {
    filename: 'index.js',
    globalObject: 'this',
    path: path.resolve('./dist'),
    libraryTarget: 'umd',
  },
};
