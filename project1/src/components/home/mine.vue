<template>
<div>
<div class="search">
  <!-- <router-link to="/order"> -->
  <span class="sp1">
    <img :src="img2" alt="" @click="hh()">
    </span>
  <!-- </router-link> -->
  <span class="sp2">我的</span>
  </div>
    <ul class="uu">
       <router-link :to="this.router">
      <li><img :src="img" alt="" class="img2"></li>
      <li class="dl">
        <p>{{username}}</p>
       <img :src="img1" alt="" class="img1">
       <span>{{defaultphone}}</span>
      </li>
      <li class="guide">
      <span>></span>
       </li> 
        </router-link>
    </ul>
  
    <div class="wode">
      <router-link to="/points">
      <li class="yue3">
       <span><b>0</b>分</span>
       <span  class="aaa">我的积分</span>
     </li>
     </router-link>
<router-link :to="this.path">
    <li class="yue2">
       <span><b>{{count}}</b>个</span>
       <span class="aaa">我的优惠</span>
     </li>
</router-link>
     <router-link to="/balance">
     <li class="yue">
       <span ><b>0.00</b>元</span>
       <span class="aaa">我的余额</span>
     </li>
     </router-link>
    </div>
    <Wd></Wd>
 </div>
</template>

<script>
import img01 from "./imgs/头像.png"
import img02 from "./imgs/手机.png"
import Wd from './wd';
import img1 from './imgs/左 (1).png'
export default {
  name: "mine",
  data() {
    return {
      count:'',
      img: img01,
      img1:img02,
      img2:img1,
      username:'',
      defaultusername:"登录/注册",
      defaultsrcc:img01,
      defaultphone:"暂无绑定手机号",
      router:'',
      router1:'/login',
      router2:'/mine/logindetail',
      path:'',
      path1:'/benefit/hongbao',
      path2:'/benefit1'
    };
  },
  components:{
      Wd,
  },
  methods:{
hh(){
  this.$router.go(-1)
}
  },
  created(){
    if(this.$store.state.denglu){
      this.username = this.$store.state.usermsg.username;
      // 图片地址需要拼接
      this.img = 'https://elm.cangdu.org/img/'+this.$store.state.usermsg.avatar,
      // console.log(this.img);
      this.router = this.router2;
      this.path = this.path1;
      this.count = 3;    
    }else{
      this.username = this.defaultusername;
      this.img = this.defaultsrcc;
      this.router = this.router1;
     this.path = this.path2;
      this.count = 0;
    }
  }
};
</script>
<style scoped>
.uu{
  margin-top: -0.1rem
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  /* border: 0.02rem solid #3190e8; */
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2 {
  position: absolute;
  right: 45%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
ul {
  height: 0.9rem;
  line-height: 0.9rem;
  background-color: #3190e8;
  padding: 0.05rem;
  display: flex;
  position: relative;
  color: white;
}
ul li {
  /* border: 1px solid red; */
  width: 3rem;
}
ul li img {
  width: 0.58rem;
  height: 0.58rem;
  margin: 0.15rem 0.05rem 0.15rem 0;
}
.img2{
    background-color: white; 
     border-radius: 50%;
}
.guide span {
  position: absolute;
  color: white;
  right: 0.05rem;
  bottom: 0.1rem;
  font-size: 0.2rem;
}
.dl span {
  /* border:1px solid black; */
  color: white;
  margin-top: 0rem;
  position: absolute;
  top: 0.16rem;
  left: 33%;
  font-size: 0.14rem;
  margin-left: -0.3rem;
}
.dl p {
  color: white;
  position: absolute;
  top: -0.1rem;
  left: 0.8rem;
  font-size: 0.2rem;
  font-weight: bold;
}
.wode {
  position: relative;
  margin-top: -0.1rem;
}
.wode li span{
  color: black;
}
.wode li {
  border-right: 0.01rem solid rgb(216, 211, 211);
  /* border-bottom: 0.01rem solid rgb(216, 211, 211); */
  background-color: white;
  display: flex;
  justify-content: space-around;
  width: 33%;
  height: 0.9rem;
  float: right;
}
.wode li span {
  position: absolute;
  margin-top: 0.15rem;
}
.aaa {
  top: 0.45rem;
  font-size: 0.14rem;
  color: black;
}
span b{
  font-size: 0.2rem
}
.yue b{
  color:gold;
  font-weight: bold;
  font-size: 0.25rem;
}
.yue2 b {
  color:red;
  font-weight: bold;
  font-size: 0.25rem;
}
.yue3 b {
  color: green;
  font-weight: bold;
  font-size: 0.25rem;
}
.img1{
  width: 0.2rem;
  height: 0.2rem;
  /* background-color: white; */
  /* border-radius: 1rem; */
  position: absolute;
  left: 20%;
  top: 35%;
}
</style>
