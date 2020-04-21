<template>
         <el-container>
         <el-header height="25px">
         </el-header>
         <el-main>
         <component :is="component"></component>
         </el-main>
         <el-footer height="25px">  
            <mt-tabbar v-model="selected">
            <mt-tab-item id="tab1" class="mintui mintui-icon_workmore">授权管理</mt-tab-item>
            <mt-tab-item id="tab2" class="mintui mintui-icon_QRcode">面对面授权</mt-tab-item>
            <mt-tab-item id="tab3" class="mintui mintui-icon_compile">出入记录</mt-tab-item>
            <mt-tab-item id="tab4" class="mintui mintui-icon_group">好友</mt-tab-item>
            </mt-tabbar>
         </el-footer>
         </el-container>

</template>



<script>
import Head from "./Head";
import Mana from "./Mana";
import FaceToFace from "./FaceToFace";
import Records from "./Records";
import Mine from "./Mine";

export default {
  data() {
    return {
       state1:1,
       component: "Mana",
       selected: sessionStorage.getItem('selected')? JSON.parse(sessionStorage.getItem('selected')):'授权管理',
                tab1: '授权管理',
                tab2: '面对面授权',
                tab3: '出入记录',
                tab4: '好友'  
    };
  },
  watch: {
      selected(val, oldVal){
          //一旦标签栏变化，把selected的值存到sessionStorage，保存当前值
          sessionStorage.setItem('selected', JSON.stringify(val))
          if(val === "tab1"){
              //路由跳转 到首页
             this.component='Mana' 
             console.log(this.component) 
          }else if(val === "tab2"){
              //路由跳转 到购物车
            this.component='FaceToFace'      
            console.log(this.component)     
          }else if(val === "tab3"){
              
              this.component='Records'
              console.log(this.component) 
                      
          }
          else if(val === "tab4"){
              //路由跳转 到个人中心
              this.component='Mine'
              console.log(this.component)                     
          }
      }
  },
  components: {
    Head,
    Mana: Mana,
    FaceToFace: FaceToFace,
    Records: Records,
    Mine: Mine
  }
}
</script>

<style  scoped >
.el-container {
  
  height: 100%;
}
.el-header {
  padding-left: 0;
  background-color: #dbbcbc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 100%;
}
.el-aside {
  background-color: aqua;
}

.el-footer {
  background-color: burlywood;
}
</style>