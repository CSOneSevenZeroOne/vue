<template>
  <div ref="abc" class="weui-tabbar">
  	<p>生命周期</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:"laoyao"
      }
    },
    beforeCreate(){
      console.log("编译前",this.$data)
      console.log(document.querySelector(".weui-tabbar"))
      console.log(this.$refs)
      //alert("编译前")
    },
    created(){
      console.log("编译之后",this.$data)
      console.log(document.querySelector(".weui-tabbar"))
      console.log(this.$refs)
      //alert("编译之后")

    },
    beforeMount(){
      console.log("挂载之前",this.$data)
      console.log(document.querySelector(".weui-tabbar"))
      console.log(this.$refs)
      //alert("挂载之前")
    },
    // mounted之后才生成html结构
    mounted(){
      console.log("挂载之后",this.$data)
      console.log(document.querySelector(".weui-tabbar"))
      console.log(this.$refs)
      //alert("挂载之后")
    }
  }
</script>
<style>
</style>
