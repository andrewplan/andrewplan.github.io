const webpack = require( 'webpack' );

module.exports = {
    entry: [
      "webpack-dev-server/client?http://localhost:8080"
      , "./src/app.js"
    ]
    , module: {
        loaders: [
            {
                test: /\.js/
                , exclude: /node_modules/
                , loader: "babel"
            }
            , {
                test: /\.css/
                , exclude: /node_modules/
                , loader: "style!css"
            }
            , {
                test: /\.scss$/
                , loader: 'style!css!sass'
            }
            , {
                test: /\html$/
                , loader: "html"
            }
            , {
                test: /\.mp3$/
                , loader: 'file'
            }
            , {
                test: /\.(png|jpg|gif)$/
                , loader: 'file?name=assets/imgs/[name].[ext]'
            }
            // , {
            //     test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/
            //     , loader: 'file?name=assets/fonts/[name].[ext]'
            // }
            , { test: /\.(otf|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    }
    , plugins: [
        new webpack.ProvidePlugin(
            {
                $: "jquery"
                , jQuery: "jquery"
            }
        )
    ]
    , resolve: {
        extensions: [ "", ".js", ".css" ]
    }
    , output: {
        path: __dirname + "/dist"
        , filename: "bundle.js"
    }
    , devServer: {
        contentBase: "./dist"
    }
};
