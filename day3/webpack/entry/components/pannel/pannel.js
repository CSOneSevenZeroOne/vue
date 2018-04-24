var Vue = require("vue");
//全局注册组件  语义化
//<DIV><div>   ab-c-d
//let abc = require("../abc/abc.js");
//console.log(abc)
/*let abc = {
	template: "<div>测试组件</div>"
}*/
export default Vue.component('pannel', {
	//el:"",
	// 选项
	template: require("./pannel.html"),
	components: {
		// <my-component> 将只在父组件模板中可用
		abc: require("../abc/abc.js")
	}
})
//new Vue()