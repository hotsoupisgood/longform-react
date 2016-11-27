module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader: 'babel-loader',
        query:{
          presets: [
            'es2015',
            'react'
          ]
        }
      }
      // ,
      // {
      //   test: /\.css$/,
      //   exclude:/(node_modules)/,
      //   loader: 'style-loader!css-loader',
      //   query:{
      //     presets: [
      //       'es2015'
      //     ]
      // }
    ]
  },
    entry: './js/main.js',
    // devServer: { inline: true, hot: true},
    output: {
        filename: 'bundle.js'
    }
};
