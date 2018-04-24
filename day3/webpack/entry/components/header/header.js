//JS
var Vue = require("vue");
//CSS
require("./header.css");

export default new Vue({
	el: "#header",
	data(){
		return {
			name:"abc"
		}
	}
	//HTML
	template: require("./header.html")
})