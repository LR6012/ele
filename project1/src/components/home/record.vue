<template>
    <div>
<div class="search">
  <router-link to="/vipcard">
   <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">购买记录</span>
</div>
<div class="content">
<img :src="img1" alt="" class="img">
</div>
    </div>
</template>

<script>
import img01 from './imgs/左 (1).png'
import img1 from './imgs/下载.png'
export default {
  name:'rec',
  data(){
      return {
          img01:img01,
          img1:img1
      }
  }
}
</script>

<style scoped>
.search {
  height: 0.46rem;
  /* border: 1px solid red; */
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.content{
  /* border: 1px solid black; */
  width: 90%;
  margin-top:40%;
  margin-left:5%;  
}
</style>
