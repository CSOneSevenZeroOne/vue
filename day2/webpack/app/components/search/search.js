import Vue from "vue";
//import "./search.css"
var search = new Vue({
	el: "#search",
	template: require("./search.html"),
	data:{
		bool:false
	},
	methods:{
		search:function(){
			this.bool = true
		},
		cancel:function(){
			this.bool = false
		}
	}
})
//module.exports
export default search