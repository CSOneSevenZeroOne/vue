//JS
var Vue = require("vue");
var Swiper = require("./dist/js/swiper.js");
//CSS
require("./dist/css/swiper.css");
require("./swiper.css");

export default new Vue({
	el: "#swiper",
	//HTML
	template: require("./swiper.html"),
	mounted: function() {
		var menuButton = document.querySelector('.menu-button');
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			initialSlide: 1,
			resistanceRatio: 0,
			slideToClickedSlide: true,
			on: {
				init: function() {
					var slider = this;
					menuButton.addEventListener('click', function() {
						if(slider.activeIndex === 0) {
							slider.slideNext();
						} else {
							slider.slidePrev();
						}
					}, true);
				},
				slideChange: function() {
					var slider = this;
					if(slider.activeIndex === 0) {
						menuButton.classList.add('cross');
					} else {
						menuButton.classList.remove('cross');
					}
				},
			}
		});
	}
})