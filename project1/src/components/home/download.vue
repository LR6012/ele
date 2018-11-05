<template>
<div>
<div class="search">
  <router-link to="/mine">
    <span class="sp1">
            <img :src="img01" alt="">
            </span>
  </router-link>
  <span class="sp2">下载</span>
</div>
<div class="download">
    <img :src="img" alt="">
    <p class="p1">下载饿了么APP</p>
    <button @click="open()">下载</button>
</div>
  <!-- 手机弹框界面 -->
<div class="content1">
    <img :src="img3" alt="">
    <h2>IOS用户请前往AppStore下载</h2>
    <button @click="confims()">确认</button>
</div>
</div>
</template>
<script>
import $ from 'jquery'
import img03 from './imgs/警告.png'
import img1 from '../home/imgs/左 (1).png'
import img01 from './imgs/图标.png'
export default {
  name:"download",
  data(){
      return {
          img:img01,
          img01:img1,
          img3:img03
      }
  },
  methods:{
    open(){
      $('.content1').css("display",'block');
     },
    confims(){
      $('.content1').css("display",'none');
    },
  }
}
</script>
<style scoped>
.content1{
    display: none;
    position: absolute;
    left:5%;
    top:30%;
    width: 90%;
    background-color: white;
    border:0.005rem solid gainsboro;
    text-align:center;
    padding:0.2rem 0;
}
.content1 h2{
    margin: 0.1rem 0 0.2rem 0;
}
.content1  button{
    border: none;
    outline: none;
    width: 70%;
    height:0.3rem;
    color: white;
    background-color:#4cd964;
    border-radius: 0.08rem;
}
.search{
  height: 0.46rem;
  /* border: 1px solid red; */
  line-height: 0.46rem;
  color:white;
  background-color:#3190e8;
  position: relative;
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2{
  position: absolute;
  right:40%;
  top:0;
  font-size: 0.19rem;
  font-weight: 700;
}
.download{
    /* border: 1px solid red; */
    text-align: center;
    padding: 0.3rem;
}
.download img{
    width: 1.8rem;
    height: 1.8rem;
    /* border: 1px solid blueviolet; */
    border-radius: 0.2rem;
    margin-bottom: 0.1rem;
}
.p1{
    font-size:0.2rem;
    color: #666;
    margin-bottom:0.2rem; 
}
button{
    /* border: 1px solid red; */
    /* 去除边框  去除点击时的默认样式 outline */
    border: none;
    outline: none;
    width: 3.2rem;
    height: 0.4rem;
    font-size:0.17rem;
    line-height: 0.4rem;
    color: white;
    background-color: #4cd964;
    border-radius: 0.05rem;
}
</style>
