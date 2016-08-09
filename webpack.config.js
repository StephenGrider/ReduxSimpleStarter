const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: "babel",
			query: {
				presets: ["react", "es2015", "stage-1"]
			}
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!postcss-loader!sass?sourceMap")
		}]
	},
	devtool: "source-map",
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: "./"
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": { 
				NODE_ENV: JSON.stringify("production") 
			}
		}),
		new ExtractTextPlugin("./style.css", {
			allChunks: true
		})
	],
	postcss: [autoprefixer]
};
