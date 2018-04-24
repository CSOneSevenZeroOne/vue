<template>
	<a @click="showDialog" href="javascript:;" class="weui-btn weui-btn_default" id="showIOSDialog1">iOS Dialog样式一</a>
</template>

<script>
	export default {
		methods:{
			showDialog(){
				this.$store.state.isShowDialog = true;
			}
		}
	}
</script>

<style>

</style>