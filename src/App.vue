<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  created() {
    var store = require("store");

    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("storedata")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("storedata"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("storedata", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style >
@import url("https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css");

.app {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: inherit;
}
ul,
ol {
  list-style: none;
}
input,
select,
button {
  font: inherit;
}
html,
body {
  height: 100%;
}
body {
  background-color: #7e7e7e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.app {
  height: 100%;
  width: 100%;
  /* align-items:stretch;  */
}
</style> 
