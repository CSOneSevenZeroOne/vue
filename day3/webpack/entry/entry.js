//npm
//import Vue from "vue";
//手动下载
var Vue = require("vue");
require("weui");
//容器的样式
require("./base.css")
require("./components/footer/footer.js")
require("./components/pannel/pannel.js")
new Vue({
	//容器作用域
	el: "#demo",
	//容器内容
	template: `
		<div style="height:100%; width:100%">
			<div id="swiper"></div>
		</div>
	`,
	//容器数据
	data: {

	},
	//容器的逻辑
	methods: {},
	//注册组件
})
require("./components/swiper/swiper.js")
require("./components/header/header.js")