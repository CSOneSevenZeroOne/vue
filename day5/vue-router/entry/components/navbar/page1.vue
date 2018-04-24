<template>
	<div>
		<xheader />
		<xpannel />
		<xgallery />
	</div>
</template>

<script>
	import xheader from "../header.vue"
	import xpannel from "../pannel.vue"
	import xgallery from "../gallery.vue"
	export default {
		components:{
			xheader,
			xpannel,
			xgallery,
		}
	}
</script>

<style scoped>
	p{
		margin-top: 50px;
	}
</style>