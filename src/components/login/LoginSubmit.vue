<template>
  <span class="login_button">
    <input type="button" value="Sign Up" @click="SignUp()" @mouseenter="state1=$attrs.state" />
    <input type="button" value="Sign In" @click="SignIn()" @mouseenter="state1=$attrs.state" />
  </span>
</template>


<script>
import axios from "@/plugins/axios";
export default {
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
    },
    phoneNum: {
      type: String
    }
  },
  data() {
    return {
      list: null,
      state1: 1 ,//控制按钮执行的功能
       user:{
          uid:this.Email,
          username:this.FirstName+this.LastName,
          password:this.password,
          phoneNum:this.phoneNum,
          friend_uid_list:''
      }
    };
  },
  methods: {
    SignIn() {
      //登录按钮
      if (this.state1 == 1) {
        this.$axios({
          method: "post",
          url: "/api/login",
          data: {
            uid: this.Email,
            password: this.Pass
          }
        })
          .then(response => {
            console.log(response.data);
            if (response.data == 200) {
              this.getuser()
              this.sethost();
              console.log(this.$store);
              console.log(this.user)
              this.$notify({
                message: "登录成功",
                duration: 1000
              });
              this.$router.push({ name: "Manager" }); //跳转到功能页面
            }
            if (response.data == 400) {
              this.$notify({
                message: "用户名或密码错误",
                duration: 1000
              });
            }
          })
          .catch(error => console.error(error.message));
      }
    },
    SignUp() {
      if (this.state1 == 2) {
        //检查输入
        if (
          this.Email == "" ||
          this.FirstName == "" ||
          this.LastName == "" ||
          this.Pass == "" ||
          this.Repass == ""
        )
          return this.$message.error("请检查未填项");
        if (this.Pass != this.Repass)
          return this.$message.error("两次输入密码不一致");
        // 注册操作
        this.$axios({
          url: "/api/signin",
          method: "post",
          params: "",
          data: {
            uid: this.Email,
            username: this.FirstName + this.LastName,
            password: this.Pass,
            phoneNum: this.phoneNum
          }
        })
          .then(response => {
            console.log(response.data);
            if (response.data == 200) {
              this.$notify({
                message: "注册成功",
                duration: 1000,
                backgroud: green
              });
              setCookie("uid", this.Email);
              setCookie("username", this.FirstName + this.LastName);
              setCookie("password", this.Pass);
              setCookie("phoneNum", this.phoneNum);
              
            }
          })
          .catch(error => console.error(error.message));
      }
    },
    ///////将登录信息存储到vuex中
    sethost(){
        this.$store.commit({
          type:'changestate',
          user:this.user
        })
        
    } ,
    getuser(){
      this.user.uid=this.Email,
      this.user.username=this.FirstName+this.LastName,
      this.user.password=this.Pass,
      this.user.phoneNum=this.phoneNum
    }
  }
};
</script>

<style scoped>
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
