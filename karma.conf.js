var webPack=require("./webpack.config");
webPack.devtool = 'inline-source-map';


module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    // karma only needs to know about the test bundle
    files: [
         './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'tests.bundle.js'
     
    ],
    frameworks: [ 'chai', 'mocha' ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-phantomjs-launcher'
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ],
    singleRun: false,
    // webpack config object
     webpack: { //kind of a copy of your webpack config 
     devtool: 'inline-source-map', //just do inline source maps instead of the default 
     resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".ts", ".tsx", ".js"]
    },
       module: { 
         loaders: [ 
           { 
             test: /\.tsx?$/, loader: "awesome-typescript-loader" ,
           
             query: { 
               presets: ['airbnb'] 
            } 
           },
           { 
             test: /\.json$/, 
            loader: 'json-loader',  },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }

       ] 
       }, 
       externals: { 
         'react/lib/ExecutionEnvironment': true, 
         'react/lib/ReactContext': true 
       } 
     }, 


    webpackMiddleware: {
      noInfo: true,
    }
  });
};