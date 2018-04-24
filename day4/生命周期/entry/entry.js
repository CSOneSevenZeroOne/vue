//npm
//import Vue from "vue";
//手动下载
var Vue = require("vue");

//容器的样式
require("./base.css");
import lifecycle from "./components/lifecycle.vue";
new Vue({
  //容器作用域
  el: "#demo",
  //容器内容
  template: `
		<div style="height:100%; width:100%">
			<lifecycle />
		</div>
	`,
  //容器数据
  data: {

  },
  //容器的逻辑
  methods: {},
  //注册组件
  components: {
    lifecycle
  }
})
