<template>
  <el-container>
 
    <div class="home">
      <div class="container">
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
 
<style  scoped>
</style>

