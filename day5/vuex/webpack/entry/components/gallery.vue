<template>
	<div class="weui-gallery" :style="{display: bool?'block':'none'}">
		<span class="weui-gallery__img" :style="{backgroundImage: 'url('+src+')'}"></span>
		<div class="weui-gallery__opr">
			<a @click="hideGallery" href="javascript:" class="weui-gallery__del">
				<i class="weui-icon-delete weui-icon_gallery-delete"></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: "我是galley组件的值",
			}
		},
		computed: {
			bool() {
				return this.$store.state.bool
			},
			src() {
				console.log("用getters获取值得方法",this.$store.getters.getSrc)
				return this.$store.state.src
			}
		},
		methods: {
			hideGallery() {
				this.$store.state.bool = false
			},
		}
	}
</script>

<style>

</style>