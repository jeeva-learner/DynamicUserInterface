const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    plugins: [
        new HtmlWepbackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,path),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ] 
      }
}
