//后端模块化 require.js
console.log(1);
//第三方模块
var $ = require("jquery");
import Vue from "vue";
window.$ = $;
console.log(Vue)
//自定义模块
var tool = require("../tool/tool.js")
//引入css link
require("../css/base.css")

new Vue({
	el: "#demo",
	template: `
		<div>
			<p>{{name}}</p>
			<img :src="img" />
			<p>{{txt}}</p>
			<div v-html="html"></div>
		</div>
	`,
	/*render: function(createElement) {
		return createElement(
			'h4', // tag name 标签名称
			null, // 子组件中的阵列
			'hello world'
		)
	},*/
	data: {
		name: "ll",
		//png jpg jpeg gif psd
		img: require("../img/test.jpg"),
		txt: require("../txt/test.txt"),
		html: require("../html/test.html"),
	},
	methods: {},
	mounted: function() {
		console.log(tool)
	}
})