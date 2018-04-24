//npm
//import Vue from "vue";
//手动下载
var Vue = require("vue");
// 使用elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// museui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//require("weui");
//容器的样式
require("./base.css");
import xheader from "./components/header.vue";
import xfooter from "./components/footer.vue";
import xform from "./components/form.vue";
new Vue({
  //容器作用域
  el: "#demo",
  //容器内容
  template: `
		<div style="height:100%; width:100%">
			
		</div>
	`,
  //容器数据
  data: {

  },
  //容器的逻辑
  methods: {},
  //注册组件
  components: {
    xheader,
    xfooter,
    xform
  }
})
