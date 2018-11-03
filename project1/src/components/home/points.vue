<template>
    <div>   
 <div class="search">
  <router-link to="/mine">
     <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">我的积分</span>
  </div>
  <div class="info">
      <div id='div1'>
          <li><span class="sp3">当前积分</span>
          <router-link to="/sm">
          <span>积分说明</span>
          </router-link>
          </li>
          <p><b>0</b><span>分</span></p>
          <p class="p1">积分兑换商品</p>
      </div>
      <!-- 交易明细 -->
      <div id="div2">
          <p>最近30天积分记录</p>
          <img :src="img" alt="">
          <div>
              <p>最近30天积分记录</p>
              <p>快去下单赚钱大量积分吧</p>
          </div>
     </div>
  </div>
    </div>
</template>

<script>
import img1 from './imgs/下载.png'
import img01 from './imgs/左 (1).png'
export default {
  name:'points',
  data(){
      return {
          img:img1,
          img01:img01
      }
  }
}
</script>

<style scoped>
/* div{
    width: 100%
} */
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
    background-color: #fe6d47;
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
}
#div2 div>p{
     color: black;
     font-size: 0.17rem;   
}
#div2 div>p+p{
    line-height: 0.3rem;
    font-size: 0.05rem;
    color: #999;
}
</style>
