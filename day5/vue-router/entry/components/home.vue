<template>
	<div>
		<router-view></router-view>
		<xfooter />
	</div>
</template>

<script>
	import xheader from "./header.vue"
	import xpannel from "./pannel.vue"
	import xgallery from "./gallery.vue"
	import xfooter from "./footer.vue"
	export default {
		components:{
			xheader,
			xpannel,
			xgallery,
			xfooter
		}
	}
</script>

<style>
</style>