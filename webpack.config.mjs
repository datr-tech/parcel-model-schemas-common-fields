import path from 'node:path';

export default {
  entry: './src/index.ts',
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'index.mjs',
    library: {
      type: 'commonjs-static',
    },
    module: true,
    path: path.resolve('./dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    modules: ['node_modules'],
    alias: {
      '@app-pmscf': path.resolve('./src/'),
      '@dist-pmscf': path.resolve('./dist/index.mjs'),
    },
  },
  target: 'node',
};
