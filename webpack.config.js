var webpack = require('webpack');
var path = require('path');
var resolveNgRoute = require('@angularclass/resolve-angular-routes');

var commonConfig = {
  entry: {
    'vendor': './app/vendor.ts',
    'app': './app/client.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.png', '.jpg', '.woff', '.otf', '.less']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'], exclude: 'node_modules'},
      { test: /\.html$/, loader: 'raw-loader', exclude: 'node_modules' },
      { test: /\.less$/, loader: 'raw-loader', exclude: 'node_modules' },
      { test: /\.json$/, loader: 'file?name=[name].[ext]', exclude: 'node_modules' },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?name=assets/[name].[ext]', exclude: 'node_modules' },
      { test: /\.(woff|woff2|ttf|eot|otf)$/, loader: 'file?name=fonts/[name].[ext]', exclude: 'node_modules' }
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('./src'),
      resolveNgRoute(root('./app'))
    ),
    new webpack.optimize.UglifyJsPlugin()
  ]
};


var clientConfig = {
  target: 'web',
  entry: {
    'vendor': './app/vendor.ts',
    'app': './app/client.ts'
  },
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};

var serverConfig = {
  target: 'node',
  entry: './app/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/app')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
}

var webpackMerge = require('webpack-merge');
module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];

function includeClientPackages(packages) {
  return function(context, request, cb) {
    if (packages && packages.indexOf(request) !== -1) {
      return cb();
    }
    return checkNodeImport(context, request, cb);
  };
}
// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}