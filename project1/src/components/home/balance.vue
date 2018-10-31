<template>
    <div>   
 <div class="search">
  <router-link to="/mine">
   <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">我的余额</span>
  </div>
  <div class="info">
      <div id='div1'>
          <li><span class="sp3">当前余额</span><span>余额说明</span></li>
          <p><b>0.00</b><span>元</span></p>
          <p class="p1">提现</p>
      </div>
      <!-- 交易明细 -->
      <div id="div2">
          <p>交易明细</p>
          <img :src="img" alt="">
          <div><p class="p2">暂无交易明细</p></div>
     </div>
      
  </div>
    </div>
</template>

<script>
import img1 from './imgs/下载.png'
import img01 from './imgs/左 (1).png'
export default {
  name:'balance',
  data(){
      return {
          img:img1,
          img01:img01
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
  right: 45%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
.info{
    height: 1.5rem;
    /* border: 1px solid black; */
    background-color: #3190e8;
    padding: 0.08rem;
}
.info #div1{
   height: 1.4rem;
   background-color: white;
   /* margin: 0.1rem; */
   border-radius: 0.07rem;
   padding: 0.06rem;
}  
.sp3{
  color: #666;
} 
li{
    display: flex;
    justify-content: space-between;
}
li+p{
    font-size: 0.4rem;
}
li+p span{
    margin-left: 0.07rem;
    font-size: 0.2rem;
}
li span{
    font-size: 0.15rem;
    color: #3190e8;
    margin-bottom: 0.1rem;
}
.p1{
    margin-top: 0.2rem;
    text-align: center;
    line-height: 0.46rem;
    width:100%;
    height: 0.46rem;
    background-color: #ccc;
    border-radius: 0.05rem;
    color: white;
    font-size: 0.2rem;
}
#div2{
  margin-top: 0.18rem;
   /* height: 2rem; */
   /* border: 1px solid black; */
   padding: 0.06rem;  
}
#div2 p{
   font-size: 0.15rem;
   color: #999;
}
#div2 img{
    width: 70%;
    margin-top: 0.3rem;
    margin-left: 10%;
    margin-bottom: 0.2rem;
}
#div span{
    display: block;
    margin-left: 0;
}
#div2 div{
    text-align: center;
    font-size: 0.15rem;
}
</style>
