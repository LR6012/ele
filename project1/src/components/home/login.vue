<template>
    <div>
        <ul class="ul1">
    <li class="ll">
        <router-link to='/mine'><img :src="img" alt=""></router-link>
        <span>密码登陆</span>
    </li>
</ul>
<ul class="inp">
<li><input type="text" placeholder="账号" v-model="username"></li>
<li class="pw">
<input type="password" placeholder="密码" v-model="password">
<span class="dd">
    <el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="grey"
  >
</el-switch>
</span>
<span class="ss">abc</span>

</li>
<li class="img">
    <input type="text" placeholder="验证码" v-model="codeNumber">

<span class="aa">看不清</span>
<span class="hh" @click="getCode()">换一张</span>
</li>
</ul>
<p>温馨提示：未注册过的账号，登录时将自动注册</p>
<p>注册过的用户可凭账号密码登录</p>
<button class="btn" @click="login()">登录</button>
<div class="rt"><router-link to="/forget">
<span>重置密码?</span>
</router-link></div>
<img :src="code&&code" alt="" class="bb">
    </div>
</template>

<script>
import img1 from "./imgs/左 (1).png";
export default {
  name: "login",
  data() {
    return {
      img: img1,
      value1: true,
      value2: true,
      data: [],
      codeNumber: "",
      code: "",
      username: "",
      password: ""
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
           this.code = res.data.code;
        // }  
      });
    },
    login() {
      let api = "https://elm.cangdu.org/v2/login";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          captcha_code: this.codeNumber,
          password: this.password,
          username: this.username
        }
      }).then(res => {
        // alert("登陆成功");
        //给vuex保存用户信息
        // this.$router.push({ name: "mine"});
        if(res.data.message){
           alert(res.data.message);
        }else{
          this.$store.commit("change",true)
          this.$store.commit("changeusermsg",res.data)
          this.$router.push({name:"mine"})
        }
      });
    }
  }
};
</script>

<style scoped>
.bb {
  position: absolute;
  top: 1.3rem;
  right: 20%;
  width: 0.7rem;
}
.aa {
  position: absolute;
  top: 1.2rem;
  right: 5%;
  font-size: 0.16rem;
}
.hh {
  position: absolute;
  top: 1.45rem;
  right: 5%;
  font-size: 0.16rem;
  color: blue;
}
.ul1 {
  margin-bottom: 0.1rem;
}
p {
  color: red;
  font-size: 0.12rem;
  margin: 0.2rem 0.1rem;
}
.rt span {
  position: fixed;
  top: 4.2rem;
  right: 5%;
  font-size: 0.16rem;
  color: blue;
}
.btn {
  background-color: #4cd964;
  font-size: 0.2rem;
  color: white;
  padding: 0.12rem 1.5rem;
  border-radius: 0.1rem;
  /* top: -1rem; */
  position: fixed;
  top: 3.2rem;
  left: 0.2rem;
}
.dd {
  margin-left: 2.9rem;
  position: absolute;
  top: -43%;
  right: 5%;
}
.ss {
  position: fixed;
  top: 1.4rem;
  right: 7%;
  opacity: 0.5;
}

.inp {
  backface-visibility: white;
}
.inp li {
  width: 100%;

  height: 0.5rem;
  border: 1px solid rgb(236, 235, 235);
}
.inp input {
  font-size: 0.15rem;
  line-height: 0.15rem;
  width: 100%;
  height: 100%;
  padding-left: 0.1rem;
}
div {
  margin-top: -0.6rem;
  position: relative;
  height: 4rem;
  overflow: hidden;
  top: 1.2rem;
}
.menu1 {
  width: 100%;
  display: inline-table;
  justify-content: space-between;
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
  top: 30%;
  /* border: 1px solid black;   */
}
input,
button {
  outline: none;
  border: none;
}
</style>
