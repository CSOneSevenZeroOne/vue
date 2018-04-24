var Vue = require("vue");
//全局注册组件  语义化
export default Vue.component('do-you-love-me', {
	// 选项
	template: require("./footer.html"),
})

/*new Vue({
	el: "#footer",
	template: require("./footer.html")
})*/