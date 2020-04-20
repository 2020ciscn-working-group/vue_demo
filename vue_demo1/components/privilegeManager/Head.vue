<template>
   <div class="H">
    <!-- <input type="button" value="返回" onclick="Goback()"/> -->
    <mt-header fixed title= title[1] >{{title[state1]}}</mt-header>
    <label class="title1">{{title[state1]}}</label>
   </div>
</template>

<script>
export default {
    // props: {
    //    state: {
    //      type=String
    //    }
    // },
    props:["state1"],
    data(){
        return{
        title:["授权管理","面对面授权","出入记录","我的"],
     
        }
    },
    methods:{
        Goback(){
          router.go(-1)

        }
    }
}
</script>

<style scoped>



</style>