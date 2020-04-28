<template>
   <!-- 三槽标题 -->
    <div>
      <div class="ConnectTheManager">
        <div class="header">
          <!-- <router-link to="/MainApp/"> -->
          <div class="one">
            <div class="goBack">
              <van-button type="default" @click="onBack">
                <van-icon name="arrow-left" size="32" />
              </van-button>
            </div>
          </div>
          <!-- </router-link> -->
          <div class="two">
            <div class="info">消息</div>
          </div>
          <div class="three">
            <div class="setting"></div>
          </div>
        </div>
      </div> 
    </div>
</template>

<script>
export default {
  methods:{
     onBack() {
      this.$emit('func1','Mana')
    }
  }
}
</script>

<style scoped>
.m-header {
  height: 50px;
  line-height: 50px;
  background: #245fd7;
  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 16px;
  left: 6px;
  font-size: 18px;
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