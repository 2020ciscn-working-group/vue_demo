<template>
  <span class="login_button">
 
    
    <input type="button" value="Sign Up"  @click="SignUp()" @mouseenter="state1=$attrs.state"/>
    <input type="button" value="Sign In"  @click="SignIn()" @mouseenter="state1=$attrs.state"/>
    
<!-- 
    <label>Sign In</label>
    <label>Sign Up</label>  -->n

  </span>
</template>

<script>

export default {
//  props:["FirstName","LastName","Email","Pass","Repass"],
props :{
  FirstName :{
        type:String
  },
  LastName :{
    type:String
  },
  Email :{
    type:String
  },
  Pass :{
    type:String
  },
  Repass :{
    type:String
  }
},
 data(){
      return{
          list:null,
          state1:1 ,  //控制按钮执行的功能
          // LastName,
          // FirstName,
          // Email,
          // Pass,
          // Repass
      }
    },
  methods:{
    SignIn(){
      if(this.state1==1){
          
                   this.$axios.get('/Gettest').then(res=>{
                                         console.log(res.data)
                         }).then().catch()
                    this.$axios.post("/Posttest", {
                      username: this.Email,
                      password: this.Pass
    })
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
                  // this.$router.push({name:'Manager'}) //跳转到功能页面
                  // return this.$message.success('登录成功');
                  
           
       } 
       else
       return this.$message.error('用户名或密码错误');     
    }
    ,
    SignUp(){
    if(this.state1==2){
     if(this.Email==""||this.FirstName==""||this.LastName==""||this.Pass==""||this.Repass=="")
     alert("存在空项")
      else {
        this.$axios.post('/login', {
         username: this.FirstName+this.LastName,
         password: this.Pass,
     })
     .then(
         successResponse => {
         if (successResponse.data.code === 200) {
             this.$router.replace({path: '/index'})
         }else{
             console.log("账号或密码错误");
             this.loginForm.message="账号或密码错误";
         }
     })
     .catch(failResponse => {
     })
      
    }
    }
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
