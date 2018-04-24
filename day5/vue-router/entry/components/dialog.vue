<template>
	<div class="weui-dialog" :style="{display:bool?'block':'none'}">
		<div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
		<div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
		<div class="weui-dialog__ft">
			<a href="javascript:;" @click="hideDialog" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>
			<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			bool() {
				return this.$store.state.isShowDialog
			},
		},
		methods:{
			hideDialog(){
				this.$store.state.isShowDialog = false;
			}
		}
	}
</script>

<style>

</style>