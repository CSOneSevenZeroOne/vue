//npm
//import Vue from "vue";
//手动下载
import Vue from "vue";
//状态管理
import Vuex from 'vuex'
Vue.use(Vuex)
//基站
const store = new Vuex.Store({
	//消息
	state: {
		count: 0,
		bool: false,
		src: "",
		isShowDialog: false
	},
	//获取值得方法
	getters: {
		getSrc(state) {
			//处理数据
			return state.src
		}
	}
})
require("weui");
//容器的样式
require("./base.css");
import xpannel from "./components/pannel.vue";
import xgallery from "./components/gallery.vue";
new Vue({
	//容器作用域
	el: "#demo",
	//容器内容
	template: `
		<div style="height:100%; width:100%">
			<xpannel />
			<xgallery />
		</div>
	`,
	//容器数据
	data: {

	},
	store,
	//容器的逻辑
	methods: {},
	//注册组件
	components: {
		xpannel,
		xgallery
	}
})