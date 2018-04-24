import Vue from "vue";
//import "./search.css"
var footer = new Vue({
	el: "#footer",
	template: require("./footer.html"),
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
export default footer