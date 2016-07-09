var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		  loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!sass?sourceMap")
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
		new ExtractTextPlugin("./style.css", {
			allChunks: true
		})
	]
};
