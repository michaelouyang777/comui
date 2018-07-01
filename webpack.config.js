const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const map = require('./wpconfig/map');
const ROOT = path.resolve(__dirname);
let entry = {},
	plugins = [];
for (chunk in map) {
	entry[chunk] = map[chunk].src
	plugins.push(new HtmlWebpackPlugin({
		alwaysWriteToDisk: true,
		filename: ROOT + '/dist/example/' + map[chunk].tpl,		
		template: ROOT + '/index.html',					
		chunks: ['vendor', chunk]
	}))
}

module.exports = {
	devtool: 'eval-source-map',
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				exclude: path.resolve(__dirname, 'node_modules'),
				query: {
					presets: ['latest']
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({   
		        	fallback: "style-loader",
		        	use: "css-loader"
		        })
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({   
		        	fallback: "style-loader",
		        	use: "css-loader!sass-loader"
		        })
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				loader: 'file-loader',
				query: {
					name: '[path][name][hash:5].[ext]'
				}
			},
			{
				test: /\.(woff2?|woff|eot|svg|ttf|otf)(\?.*)?$/,
				loader: 'url-loader'
			}
			
		]
	},
	plugins: plugins.concat([
	    new webpack.optimize.UglifyJsPlugin({
	        compress:{
	            warnings:false
	        },
	        output:{
	            comments:false
	        }
	    }),
		new CleanWebpackPlugin('dist/js/*.*', {
		    root: __dirname,
		    verbose: true,
		    dry: false
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("comui.css"),
		new OptimizeCssAssetsPlugin({
	    	assetNameRegExp: /\.css$/g,
	    	cssProcessor: require('cssnano'),
	    	cssProcessorOptions: { discardComments: { removeAll: true } },
	    	canPrint: true
    	}),	
	]),
	devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        port: 8001
	}
}