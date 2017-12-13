const path = require('path');
const webpack = require('webpack');
const WebpackBuildNotifier = require('webpack-build-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SOURCE_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

const ASSET_PATH = process.env.ASSET_PATH || '/';

const extractPlugin = new ExtractTextPlugin({
	filename: 'css/[name].bundle.css'
});

module.exports = {
	devtool: 'source-map',
	entry: [
		'babel-polyfill',	
		SOURCE_PATH+'/app/js/index.js',
	],
	output: {
		path: DIST_PATH,
		filename: 'js/[name].bundle.js',
		publicPath: ASSET_PATH
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js|json)?$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'stage-2']
					}
				}]
			},
			{
				test: /\.css?$/,
				use: extractPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: [
					  {
						  loader: 'url-loader',
						  options: {
							  name: 'css/[name].[ext]',
							  limit: 100000
						  }
					  }
				]
			}
		]
	},
	resolve : {
		extensions: ['.js', '.json', '.jsx'],
		modules: ['node_modules']
	},
	plugins: [
		new WebpackBuildNotifier(),
		extractPlugin
	]
};
