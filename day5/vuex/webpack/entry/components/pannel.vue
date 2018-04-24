<template>
	<div class="weui-panel weui-panel_access">
		<div class="weui-panel__hd">图文组合列表</div>
		<div class="weui-panel__bd">
			<a v-for="a in arr" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
				<div @click="showGallery(a.img)" class="weui-media-box__hd">
					<img class="weui-media-box__thumb" :src="a.img" alt="">
				</div>
				<div class="weui-media-box__bd">
					<h4 class="weui-media-box__title">{{a.title}}</h4>
					<p class="weui-media-box__desc">{{a.content}}</p>
				</div>
			</a>
		</div>
		<div class="weui-panel__ft">
			<a href="javascript:void(0);" @click="loadMore" class="weui-cell weui-cell_access weui-cell_link">
				<div class="weui-cell__bd">查看更多</div>
				<span class="weui-cell__ft"></span>
			</a>
		</div>
		<xbutton />
		<xdialog />
	</div>
</template>

<script>
	import xbutton from "./button.vue"
	import xdialog from "./dialog.vue"
	export default {
		data(){
			return {
				name:"我是pannel组件的值",
				arr:[{
					img:require("../img/logo.png"),
					title:"标题一",
					content:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
				},{
					img:require("../img/1.gif"),
					title:"标题二",
					content:"由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
				}]
			}
		},
		mounted(){
			console.log(this.$store.state)
		},
		methods:{
			showGallery(src){
				console.log(src)
				this.$store.state.bool = !this.$store.state.bool
				this.$store.state.src = src
				console.log(this.$store.state.bool)
			},
			loadMore(){
				this.arr = this.arr.concat(this.arr);
			}
		},
		components:{
			xbutton,
			xdialog
		}
	}
</script>

<style>

</style>