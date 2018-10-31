<template>
    <div>
    <ul class="ul1">
    <li class="ll">
        <router-link to='/mine/logindetail'><img :src="img" alt=""></router-link>
        <span>重置密码</span>
    </li>
</ul>
<ul class="ul2">
    <li><input type="text" placeholder="账号" v-model="username"></li>
    <li><input type="text" placeholder="旧密码" v-model="oldpassWord"></li>
    <li><input type="password" placeholder="请输入新密码" v-model="newpassword"></li>
    <li><input type="password" placeholder="请输入密码" v-model="confirmpassword"></li>
    <li>
        <input type="text" placeholder="验证码" v-model="codeNumber"> 
        <span class="aa">看不清</span>
        <span class="hh" @click="getCode()">换一张</span>
       
    </li>  
</ul>
<img :src="code&&code" alt="" class="bb">
<button @click="alter()">确认修改</button>
    </div>
</template>
<script>
import img1 from './imgs/左 (1).png'
export default {
  name: "frt",
   data() {
    return {
      img:img1,
      value1: true,
      value2: true,
      data: [],
      codeNumber: "",
      code: "",
      username: "",
      oldpassWord: "",
      newpassword:'',
      confirmpassword:'',
      bol:true
    };
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      const url = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        method: "post",
        url: url,
        //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
        withCredentials: true // 默认false
      }).then(res => {
        // console.log("tap", res);
        // if (res.data.status == 200) {
        // }
        this.code = res.data.code;
      });
    },
    alter() {
      let api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          captcha_code: this.codeNumber,
          oldpassWord: this.oldpassWord,
          username: this.username,
          newpassword:this.newpassword,
          confirmpassword:this.confirmpassword
        }
      }).then(res => {
        console.log(res.data);
        if(res.data.message){
           alert(res.data.message);
        }else{
           alert('密码修改成功');
        }
      });
    },
  }

};
</script>

<style scoped>
.bb{
   position: absolute;
  top: 1.9rem;
  right: 0.6rem; 
  width: 0.7rem;
}
.aa {
  position: absolute;
  top: 1.8rem;
  right: 0.02rem;
  font-size: 0.1rem;
}
.hh {
  position: absolute;
  top: 2rem;
  right: 0.02rem;
  font-size: 0.12rem;
  color: blue;
}
.ul1 {
  margin-bottom: 0.1rem;
}
.ll {
  background-color: #3190e8;
  width: 100%;
  height: 0.5rem;
   position: fixed;
  top: 0;
  left: 0;
}
.ll img {
  width: 0.3rem;
  float: left;
  margin: 0.1rem 0 0 0.1rem;
}
.ll span {
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 40%;
  top: 25%;
}
div {
  margin-top: -0.6rem;
  position: absolute;
  top:1.2rem;

}
.ul2 li{
    border: 1px solid #f5f5f5;
    width: 3.65rem;
    height: 0.4rem;
    margin-bottom: 0.02rem solid  #f5f5f5; 
}
input{
    width: 100%;
    height: 100%;
    padding-left: 0.09rem;
    font-size: 0.15rem;
}
button{
    margin-top: 0.2rem;
    color: #fff;
    height: 0.4rem;
    background-color: #4cd964;
    width: 95%;
    font-size: 0.2rem;
    border-radius: 0.07rem;
    position: fixed;
  top: 2.8rem;
  left: 0.1rem;
}
input,button{
    outline: none;
    border: none;
}
</style>
