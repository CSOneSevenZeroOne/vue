import Vue from "vue";
var test = new Vue({
	el: "#test",
	template: require("./test.html"),
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
export default test