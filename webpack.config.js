
// import DotEnv from 'dotenv';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

//installing cross env and setting it up on package.json allow us to access
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    console.log("Current Env: ",process.env.NODE_ENV);

// Setting up the current environment (production not included)
if (process.env.NODE_ENV === 'test'){
    require('dotenv').config( {path:'.env.test'} );
} else if( process.env.NODE_ENV === 'development'){
    require('dotenv').config({path:'.env.development'});
}

module.exports = (env) =>{
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry : ['babel-polyfill', './src/app.js'], //starting point
        output : {
            path :path.join(__dirname,'public','dist'), //absolute path 
            filename:'bundle.js'
        },
        module : {
            rules: [{
                loader :'babel-loader',
                test: /.\js$/,
                exclude: /node_modules/
            }, 
            {
                test: /\.s?css$/ ,  /// look for all files that ends with .scss or .css
                // use : [  // for an array of loaders
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use: CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:'sass-loader',
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        devServer: {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true, // telling the web-server for all 404 pages show the index.html file
            publicPath: '/dist'
        }
    };
};

// console.log(path.join(__dirname,'public')); //current location

