<template>
    <div>
<div class="wrap">
    
</div>
<div class="hd">
  <router-link to="/mine">
    <img src="../../../static/img/zuo.png" class="oneImg">
</router-link>
    <img src="../../../static/img/小帅.jpg" alt="" class="twoImg">
<h4>效果演示</h4>
<p class="one">商家配送／分钟送达／配送费¥5</p>
<p class="two">公告:欢迎光临,用餐高峰请提前下单,谢谢</p>
<img src="../../../static/img/you.png" class="three">

</div>
<div class="nav">
    <div class="sc"></div>
    <span>商品</span>
    <router-link to="/critic">
    <span>评价</span>
    </router-link>
    
    
</div>
<div v-show="!bol" class="lll">
 <ul class="bk">
   <div class="slide"></div>
    <li>
    <span>热销榜</span>
  </li>
  <li>
    <span>往后余生</span>
  </li>
  <li>
    <span>风雪是你</span>
  </li>
  <li>
    <span>春华是你</span>
  </li>
  <li>
    <span>夏雨也是你</span>
  </li>
  <li>
    <span>秋黄是你</span>
  </li>
  <li>
    <span>四季冷暖是你</span>
  </li>
  <li>
    <span>目光所至也是你</span>
  </li>
 </ul>

<div class="hd2">
  <strong>热搜榜</strong>
  <span class="sp1">往事纷争,你总太天真</span>
  <span class="sp2">...</span>
</div>
<div class="boby">
  <p class="rx">热销</p>
  <img src="../../../static/img/小帅.jpg" class="th">
<p class="rg">热狗</p>
<p class="zp">招牌</p>
<p class="ms">重露成涓滴,稀星乍可无</p>
<p class="ll">
  <span>月售271份</span>
  <span>好评率80%</span>
</p>
<span class="mm">慢慢吟咏</span>
<span class="sj">$20</span>
</div>
</div>
<!-- <Critic></Critic> -->

    </div>
</template>

<script>
import $ from "jquery";
 
// import Critic from './critic'
export default {
  name: "shopdetail",
  data(){
    return {
      bol:true
    }
  },
  methods:{
    change() {
      this.bol=!bol;

    },
    handle(){
// $(".lll").css("display",'none')
    }
  },
  components:{
    // Critic
  }
};
</script>

<style scoped>
.sj{
  display: inline-block;
  color: #ff0000;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 700;
   margin:0.1rem 0 0 0.8rem;
}
.mm{
  border:0.01rem dotted red;
  color: #ff0000;
  padding: 0 0.15rem;
  font-size: 0.12rem;
  margin-top: 2rem;
  display: inline-block;
   margin: 0.1rem 0 0rem 0.8rem;
   border-radius: 0.3rem
}
.ll{
  margin: 0.1rem 0 0 0.8rem;
  font-size: 0.12rem;
}
.ms{
  width: 50%;
font-size: 0.12rem;
margin: 0.1rem 0.8rem 0 0.8rem;

}
.zp{
  float: right;
  color: #ff0000;
  border:0.01rem dotted red;
  padding: 0 0.1rem;
  border-radius: 0.3rem;
  font-size: 0.16rem;
  margin-top:-0.15rem;
}
.boby img{
  padding: 0.1rem;
}
.rx{
  width: 0.4rem;
  padding: 0.3rem 0.18rem  0.1rem;
  transform: rotate(-45deg);
  margin:-0.3rem;
  background-color: #4cd964;
  color: white;
  font-size: 0.12rem
}
.rg{
  margin:-0.75rem 0 0 0.8rem ;
  font-size: 0.18rem;
}
.boby strong{
  display: inline;
font-size: 0.18rem
}
.boby{
  widows: 1rem;
  height: 1.2rem;
   overflow: hidden;
  width: 73%;
  position: absolute;
  right: 0;
   top: 2.3rem;
   background-color: white;
}
.th{
  width: 0.6rem;
margin: 0.05rem 0 0 0.05rem ;
}
.sp1{
  font-size: 0.12rem;
}
strong{
  font-weight: 700;
  font-size: 0.2rem;
}
.sp2{
  font-size: 0.2rem;
  border:1px solid balck; 
  position: absolute;
  right: -0.5rem;
top: 0.08rem;
}
.hd2{
  border:1px solid balck;
  /* width: 0.2rem; */
  /* float: right; */
  position:absolute;
  left: 1rem;
  padding: 0.2rem;
   /* font-size: 0.12rem; */
}

.slide{
  width: 0.05rem;
  height: 0.55rem;
  background-color: #3190e8;
  position: absolute
}
.bk{
position: relative;
top:0;
float: left;
}
.bk li{
  width: 0.6rem;
  padding:0.2rem;
  border-bottom: 0.001rem solid rgb(207, 205, 205);
  border-right: 0.001rem solid rgb(207, 205, 205);
   
}
.bk span{
  font-size: 0.15rem;
  /* font-weight: 700; */
}
.sc {
  width: 0.35rem;
  height: 0.03rem;
  position: absolute;
  top: 1.55rem;
  left: 0.75rem;
  background-color: #3190e8;
  font-size: 0.12rem;
}
.nav span{
  color:black;
}
.nav {
  width: 100%;
  justify-content: space-around;
  display: flex;
  font-size: 0.16rem;
  padding: 0.15rem 0;
  margin-top: 0rem;
  background-color: white;
  
}
.three {
  width: 0.2rem;
  float: right;
  top: 0.5rem;
  right: 0.1rem;
  position: absolute;
}
h4 {
  position: absolute;
  left: 1.1rem;
  top: 0.2rem;
  font-weight: bold;
  color: white;
  font-size: 0.18rem;
}
.one,
.two {
  font-size: 0.1rem;
  position: absolute;
  left: 1.1rem;
  top: 0.5rem;
  color: white;
  font-size: 0.1rem;
}
.two {
  top: 0.85rem;
}
.twoImg {
  width: 0.8rem;
  padding: 0.12rem;
  position: absolute;
  top: 0.1rem;
  left: 0rem;
}
.wrap {
  width: 100%;
  z-index: -1;
  height: 1.2rem;
  background: url(../../../static/img/小帅.jpg) repeat-y;
  background-size: cover;
  /* -webkit-filter: blur(0.05rem);
  -moz-filter: blur(0.05rem);
  -o-filter: blur(0.05rem);
  -ms-filter: blur(0.05rem);
  filter: blur(0.05rem); */
}
.oneImg {
  width: 0.22rem;
  position: absolute;
  /* padding: 0.15rem; */
  top: 0.05rem;
  left: 0.1rem;
  /* border: 1px solid black; */
  z-index: 2;
}
</style>
