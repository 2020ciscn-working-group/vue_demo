<template>
    <el-container>
    <mt-header fixed title="授权管理" >
       <router-link to="/" slot="left">
     <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button  slot="right"  @click="addTab" class="mintui mintui-icon_roundadd"></mt-button> </mt-header>
    <div class="home">
  <div class="container">
   <div class="addZujian">
   


   </div>
   <div class="zujianContent">
 
    <component
     v-for="(item,index) in comName"
     :is="item.name"
     :key="index"
     @func="getContent(index)"
    ></component>
   </div>
  </div>
 </div>
    
    </el-container>
</template>
 
<script>
// 引入子组件
import ManaTab from "./ManaTab";

export default {
 data() {
  return {
   comName: []
  };
 },
 components: {
  ManaTab
 },
 methods: {
  // 添加组件1
  addTab() {
   this.comName.push({
    name: "ManaTab"
   });
  },
  // 删除组件
  getContent(index) {
   this.comName.splice(index, 1);
  }
 }
};
</script>
 
<style lang="css" scoped>

</style>

