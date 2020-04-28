  <template>
  <el-container>
   
    <el-main>
      <component :is="component"></component>
    </el-main>

    <el-footer height="25px">
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="manager">授权管理</van-tabbar-item>
        <van-tabbar-item icon="todo-list">出入记录</van-tabbar-item>
        <van-tabbar-item icon="friends">好友</van-tabbar-item>
        <van-tabbar-item icon="chat" badge="9">消息</van-tabbar-item>
      </van-tabbar>
    </el-footer>
  </el-container>
</template>



<script>
import Head from "./Head";
import Mana from "./Mana";
import Message from "./Message";
import Records from "./Records";
import Friends from "./Friends";
export default {
  data() {
    return {
      state1: 1,
      component: "Mana",
      active: 0,
    
    };
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
          this.component = "Mana";
          break;
        case 1:
          this.component = "Records";
          break;
        case 2:
          this.component = "Friends";
          break;
        case 3:
          this.component = "Message";
      }
    }
  },
  components: {
    Head,
    Mana: Mana,
    Message:Message,
    Records: Records,
    Friends: Friends
  }
};
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
.ConnectTheManager {
  width: 100% ;
  height: 50px;
}
.header {
  justify-content: space-between;
  display: flex;
  background-color: rgb(243, 245, 243);
  height: 3em;
}
.header .one {
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.header .two {
  display: flex;
  justify-content: center;
  align-content: center;
}
.header .three {
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.header .one,
.two,
.three {
  width: 100px; 
}

.header .one * {
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .info {
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

