//var webpack = require("webpack");
const path = require('path');
module.exports = {
	//入口
	entry: './app/base.js',
	//出口
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	//开发版本
	mode: "development",
	//引入完整版本的vue
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置loader 处理非js类型的文件
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
			}]
		}, {
			test: /\.txt$/,
			use: 'raw-loader'
		}, {
			test: /\.(html)$/,
			use: {
				loader: 'html-loader',
				options: {
					attrs: [':data-src']
				}
			}
		}]
	}
}