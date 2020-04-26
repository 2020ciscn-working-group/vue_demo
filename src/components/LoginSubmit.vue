<template>
  <span class="login_button">
    <input type="button" value="Sign Up" @click="SignUp()" @mouseenter="state1=$attrs.state" />
    <input type="button" value="Sign In" @click="SignIn()" @mouseenter="state1=$attrs.state" />

    <!-- 
    <label>Sign In</label>
    <label>Sign Up</label>-->
    n
  </span>
</template>


<script>
import "../plugins/axios.js";
export default {
  //  props:["FirstName","LastName","Email","Pass","Repass"],
  props: {
    FirstName: {
      type: String
    },
    LastName: {
      type: String
    },
    Email: {
      type: String
    },
    Pass: {
      type: String
    },
    Repass: {
      type: String
    }
  },
  data() {
    return {
      list: null,
      state1: 1 //控制按钮执行的功能
    };
  },
  methods: {
    SignIn() {
      if (this.state1 == 1) {
        // if (this.Email == "" || this.Pass == "")
        //   return this.$message.error("请填写用户名或密码");
        // else {
        //   this.$axios({
        //     url: "http://localhost:3000/user",
        //     method: "post",
        //     params: "",
        //     data: {
        //       username: this.Email,
        //       password: this.Pass
        //     }
        //   })
        //     .then(Response => console.log(Response.data))
        //     .catch(error => console.error(error.message))
          this.$router.push({name:'Manager'}) //跳转到功能页面
          return this.$message.success('登录成功');
        }
      
    },
    SignUp() {
      if (this.state1 == 2) {
        if (
          this.Email == "" ||
          this.FirstName == "" ||
          this.LastName == "" ||
          this.Pass == "" ||
          this.Repass == ""
        )
          return this.$message.error("请检查未填项");
        else {
          this.$axios({
            url: "http://localhost:3000/data",
            method: "post",
            params: "",
            data: {
              name: this.FirstName + this.LastName,
              username: this.Email,
              password: this.Pass,
              Repassword: this.Repass
            }
          })
            .then(response => console.log(response.data)) //跳转到功能页面 )
            .catch(error => console.error(error.message));
   
        }
      }
    },
//调用安卓接口  
  AndriodMethod() {
    $App.callAndroidMethod(a,b,c,d)
  },
  onFinish(){
    $App.finish()
  },
  onGetUser(){
    $App.getUser(this.FirstName+this.LastName)     
  },
  onGetFriend(){
    $App.getFriend()//friend还没出来
  },
  onGetFriends(){
    $App.getFriends()
  }

  
  
}  
}

</script>

<style>
.login_button {
  position: relative;
  display: flex;
  flex: 1;
}
.login_button input {
  display: block;
  flex: 1;
  width: 0;
  height: 40px;
  border: none;
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  transition: all 0.6s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 700;
}
.login_button label {
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.6s ease;
}
</style>
