<template>
    <div>
       <mt-header fixed title="好友" >
       <router-link to="/" slot="left">
     <mt-button icon="back"></mt-button>
   </router-link>
   <mt-button  slot="right"  @click="addMate" class="mintui mintui-icon_roundadd"></mt-button> </mt-header>
    </div>
</template>

<script>
export default {
   data(){
     return{

     }
   } ,
   methods:{
     addMate(){
       
     }
   } 
}

</script>
<style scoped>

</style>