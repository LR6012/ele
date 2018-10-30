<template>
    <div>
<div class="search">
  <router-link to="/vipcard">
  <span class="sp1">
    <img :src="img2" alt="">
    </span>
  </router-link>
  <span class="sp2">在线支付</span>
  </div>
  <div class="time">
      <p>支付剩余时间</p>
      <h1>00:03:12</h1>
  </div>
  <ul class="type">
      <li>选择支付方式</li>
      <li>支付宝</li>
      <li>微信</li>
  </ul>
  <button>确认支付</button>
    </div>
</template>

<script>
import img1 from './imgs/左 (1).png'
export default {
    name:'pay',
    data(){
        return {
            img2:img1,
        }
    }
}
</script>

<style scoped>
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
.time{
    background-color: white;
    /* border: 1px solid red; */
    text-align: center;
    padding: 0.5rem 0;
}
.time p{
    margin-bottom: 0.1rem;
}
.type{
    /* border: 1px solid black; */
    background-color: white;
}
.type li{
    border-bottom:0.001rem solid #d4d2d1;
    padding: 0.18rem 0.1rem; 
}
.type li:nth-of-type(1){
    background-color: #f5f5f5;
    padding: 0.09rem 0.1rem;
    border-top: none;
}
button{
    background-color: #4cd964;
    color:white;
    outline: none;
    border:none;
    width: 90%;
    margin: 0.1rem 5%;
    padding: 0.1rem;
    font-size: 0.15rem;
}
</style>
