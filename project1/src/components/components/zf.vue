<template>
    <div>
<!-- 头部 -->
 <div class="search">
      <span class="sp1">
    <router-link to="/shopdetail">
    <img src="../../../static/img/右.png" alt="">
    </router-link>
    </span>
  <span class="sp2">支付页面</span>
</div> 
<div class="cont"></div>
<div class="header">
<img src="../../../static/img/location.png" class="la">
<span>请添加一个收货地址</span>
<img src="../../../static/img/右箭头.png" alt="" class="you">
</div>
<div  class="nav">
<li class="cl"> 
    <h3>送达时间</h3>
    <span>尽快送达|预计22-09</span>
   <span>蜂鸟专送</span>
</li>
<router-link to="/payline" class="aaa">
<li class="cl1">
    <span>支付方式</span>   
    <span>在线支付
    <img src="../../../static/img/右箭头.png">
    </span>
</li>
</router-link>
<li class="cl2">
    <span>红包</span>
    <span>暂时只在饿了么APP中支持</span>
</li>
</div>
<ul class="zzf">
    <li class="u1">
        <img src="../../../static/img/1 (3).jpeg" alt="">
        <span>默认</span>
    </li>
    <li class="u2" v-for="(item,index) in cartData" :key="index">
        <span>{{item.name}}</span>
        <span>{{item.count1}}</span>
    </li>
    <li>
      <span>餐费</span>
      <span>${{totle}}</span>
    </li>
    <li>
        <span>配送费</span>
        <span>$5</span>
    </li>
    <li class="dzf">
        <span>订单$1197</span>
        <span>待支付</span>
    </li>
    <p>${{totle+5}}</p>
</ul>
<ul class="zzf2">
<router-link to="/remarks" class="aaa">
<li>
    <span>订单备注</span>
    <span class="con1">
        <div v-for="(item,index) in des" :key="index">{{item+','}}</div>
        <img src="../../../static/img/右箭头.png" alt="">
    </span>
</li>
</router-link>
<router-link to="/invoice" class="aaa">
<li>
   <span>发票抬头</span>
    <span>不需要开发票
        <img src="../../../static/img/右箭头.png" alt="">
    </span> 
</li>
</router-link>
</ul>
    </div>
</template>

<script>
export default {
   name:'zf',
   data(){
     return {
          des:this.$store.state.ordermsg
       }
   },
   computed:{
    //购物车中的数据
    cartData() {
      return this.$store.state.cartData;
    },
    //总数量
    count() {
      return this.$store.getters.totleCount;
    },
    //总价格
    totle() {
      return this.$store.getters.totlePrice;
    },
   }
}
</script>

<style scoped>
.zzf2 li span:nth-child(2){
    float: right;
}
.zzf2 li{
    padding: 0.2rem 0 0.2rem 0.2rem;
}
.zzf2 img{
width: 0.2rem;
float: right;
/* margin-top: 0.1rem; */
}
.zzf{
    border-bottom: 0.06rem solid gray;
padding-bottom: 0.2rem; 
}
.zzf p{
    float: right;
    color: red;
    margin-right:0.2rem 
}
.zzf li span:nth-child(2){
    float: right;
}
.zzf li {
    padding: 0.1rem;
    /* color: gainsboro; */
}
.dzf span:nth-child(2){
    color: red;
    margin-right: 0.2rem;
}
.u1 span{
float: right;
margin: 0.2rem 2.5rem 0 0;
font-size: 0.2rem;
font-weight: 900;
color: black;
}
.u1 img{
    width: 0.5rem;
}
.zzf li span {
    /* display: flex; */
/* justify-content: space-between;
display: inline; */
}
.cl2{
    display: flex;
justify-content: space-between;
margin-top: -0.2rem;
border-bottom: 0.06rem solid gray;
padding-bottom: 0.2rem; 
}

.cl1{
    width: 100%;
    height: 0.8rem; 
    display: flex;justify-content: space-between;
    
}
.cl1 span:nth-child(1){
    padding: 0.1rem 0.3rem;
   font-size: 0.2rem;
}
.cl1 img{
    width: 0.2rem;
 float: right;
}
.cl1 span:nth-child(2){
    float:right;
    margin: -0rem 0rem 0 0;
    text-align: center;
    line-height: 0.16rem;
    /* border: 1px solid black; */
    font-weight: 900;
    font-size: 0.16rem;
    padding: 0.05rem;
}
.cl1{
 border-top: 0.06rem solid gray; 
 /* background-color: white;   */
}
.cl span:nth-child(3){
    float:right;
    margin: -0.3rem 0.5rem 0 0;
    background-color: blue;
    color: white;
    font-weight: 900;
    font-size: 0.1rem;
    padding: 0.05rem
}
.cl span:nth-child(2){
    float:right;
    top: 0;
    margin: -0.6rem 0.5rem 0 0;
}
.cl{
   border-top: 0.06rem solid gray; 
    /* background-color: white; */
}
h3{
    padding: 0.3rem;
    font-weight: 900;
}
.header{
    font-size: 0.2rem;
    border-bottom: 0.04rem dashed blue;
    /* width: 0.3rem; */
    padding-bottom: 0.3rem;
    color: black
}
.you{
    float:right;
    width: 0.25rem;
    margin-top: 0.2rem;
    /* border: 1px solid red; */
}
.la{
    width: 0.3rem;
}
.search {
width: 100%;
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  margin-bottom: 0.1rem;
  position: fixed;
  top: 0;
}
.sp1 img {
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 50%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
div{
  background-color: white;  
}
.aaa{
    color: black;
}
.con1{
    display: flex;
    height: 0.2rem;
    justify-content:space-between;
}
.cont{
    /* background-color: white; */
    height: 0.6rem;
}
</style>
