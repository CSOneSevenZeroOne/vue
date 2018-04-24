import Vue from "vue";
//import "./search.css"
var panel = new Vue({
	el: "#panel",
	template: require("./panel.html"),
	data: {
		bool: false,
		img: require("../../../img/icon_tabbar.png")
	},
	methods: {
		search: function() {
			this.bool = true
		},
		cancel: function() {
			this.bool = false
		}
	}
})
//module.exports
export default panel