module.exports = {
  entry: "./app/main",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.less']
  },
  module: {
    loaders: [
      {test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
      {test: /\.less/, loaders: ['raw-loader', 'less-loader']}
    ]
  },
  externals: [
    'zone.js/zone',
    'reflect-metadata/reflect'
  ]
};
