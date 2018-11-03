<template>
    <div>
<div class="search">
  <router-link to="/vipcard">
  <span class="sp1">
    <img :src="img2" alt="" >
    </span>
  </router-link>
  <span class="sp2">在线支付</span>
  </div>
  <div class="time">
      <p>支付剩余时间</p>
      <h1>{{timer}}</h1>
  </div>
  <ul class="type">
      <li>选择支付方式</li>
      <li  class="list">
        <div class="list_type">
        <img :src="img1" alt="" class="img1">
        <div>支付宝</div>
        </div>
        <div @click="change()">
         <img :src="img5" alt="" class="img2" v-if="bol">
          <img :src="img4" alt="" class="img2" v-else>
        </div>

        </li>
      <li  class="list">
          <div class="list_type">
           <img :src="img3" alt="" class="img1">
          <div>微信</div>
          </div>
          <div @click="change()">
          <img :src="img4" alt="" class="img2" v-if="bol">
          <img :src="img5" alt="" class="img2" v-else>
          </div>
          </li>
  </ul>
  <button @click="pay()">确认支付</button>
  <div class="content">
    <img :src="img03" alt="">
    <h2>当前环境无法支付，请打开官方APP进行付款</h2>
    <button @click="confim()">确认</button>
</div>
    </div>
</template>

<script>
import $ from 'jquery'
import img03 from './imgs/警告.png'
import img1 from "./imgs/左 (1).png";
import img2 from "./imgs/支付宝.png";
import img3 from "./imgs/微信.png";
import img4 from "./imgs/选中.png";
import img5 from "./imgs/选中 (1).png";
export default {
  name: "pay",
  data() {
    return {
      img2: img1,
      timer: "",
      img1: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      bol: true,
      img03:img03
    }
  },
  methods:{
      change(){
          this.bol = !this.bol;
      },
      pay(){
        $('.content').css('display','block');
      },
      confim(){
          this.$router.push({name:'order'});
      }
  },
  beforeMount() {
    var _this = this;
    var timer = setInterval(getNumber, 1000);
    var newtime = 15 * 60;
    function getNumber() {
      var m = Math.floor(newtime / 60);
      var s = Math.floor(newtime % 60);
      var msg = "00:" + m + ":" + s;
      --newtime;
      if (newtime >= 0) {
        _this.timer = msg;
      } else {
        clearInterval(timer);
        // alert("支付超时,请重新支付");
      }
    }
    getNumber();
  }
};
</script>

<style scoped>
.content{
    display: none;
    position: absolute;
    left:10%;
    top:30%;
    width: 80%;
    /* height:3rem; */
    background-color: white;
    border:0.005rem solid gainsboro;
    /* border:1px solid red; */
    text-align:center;
    padding:0.2rem 0;
}
.content h2{
    margin: 0.1rem  0.2rem;
    font-size: 0.2rem;
    line-height: 0.24rem;
}
.content  button{
    border: none;
    outline: none;
    width: 90%;
    font-size: 0.2rem;
    padding: 0.1rem;
    margin-left:5%;
    color: white;
    border-radius: 0.08rem;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  /* border: 0.02rem solid #3190e8; */
}
.sp1 img {
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
.time {
  background-color: white;
  /* border: 1px solid red; */
  text-align: center;
  padding: 0.5rem 0;
}
.time p {
  margin-bottom: 0.1rem;
}
.type {
  /* border: 1px solid black; */
  background-color: white;
}
.type li {
  border-bottom: 0.001rem solid #d4d2d1;
  padding: 0.18rem 0.1rem;
}
.type li:nth-of-type(1) {
  background-color: #f5f5f5;
  padding: 0.09rem 0.1rem;
  border-top: none;
}
.type .list {
  display: flex;
  justify-content: space-between;
}
.type .img1 {
  width: 0.5rem;
  height: 0.5rem;
}
.type .img2 {
  width: 0.4rem;
  height: 0.4rem;
  /* border: 1px solid red; */
}
.type .list .list_type {
  display: flex;
}
.type .list .list_type > div {
  /* border: 1px solid palegreen; */
  line-height: 0.5rem;
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
button {
  background-color: #4cd964;
  color: white;
  outline: none;
  border: none;
  width: 90%;
  margin: 0.1rem 5%;
  padding: 0.1rem;
  font-size: 0.15rem;
}
</style>
