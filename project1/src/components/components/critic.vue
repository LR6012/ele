<template>
    <div class="wrap">
   <div class="wp">
       <li class="l1">
           <p class="p1">4.7</p>
       <p class="p2">综合评分</p>
     <p class="p3">高于周边商家76.7%</p>
       </li>
<li class="l2">
    <span>服务态度</span>
    <span class="start1"><el-rate
  v-model="value5"
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
    <span>菜品评论</span>
    <span class="start1"><el-rate
  v-model="value5"
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
    <span>送达时间</span>
    <span> 分钟</span>
</li>
   </div>
<div class="pl">
    <li>全部</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好你好()</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
</div>
<div>
    <ul class="boby">
<li>
<img src="../../../static/img/小帅.jpg" class="img1">
</li>     
<li>
<p class="bp1">
    <span>1****9</span>
    <span>2012-0824</span>
</p>
<p class="p2">
  <span class="start2"><el-rate
  v-model="value5"
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
<span>按时送达</span>
</p>
<!-- <p class="bp1"></p>    
<span class="bsp2"></span> -->
</li>
<li class="xs">
    <img src="../../../static/img/小帅.jpg">
</li>
<li class="bq">
   <span> 美食9999999999</span>

</li>
    </ul>
</div>
    </div>
</template>

<script>
import ElementUI from 'element-ui';
export default {
  name: "critic",
  data() {
    return {
      value5: "4"
    };
  }
};
</script>

<style scoped>
.bq{
    margin: 1.4rem -2.9rem;
    background-color: white;
    width: 0.5rem;
    height: 0.2rem;
    text-align: center;
    border-radius: 0.05rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.15rem
}
.xs img{
    width:0.5rem;
    margin: -1rem -2.9rem
}
.p2 span:nth-child(2){
    font-size: 0.1rem;
}
.bp1 span:nth-child(2){
     margin: 0 0rem 0 1.5rem ;
}
.start2{
    float: left;
    font-size: 0.1rem;
    width:1.2rem;
}
.img1{
border-radius:50%;
width: 0.45rem; 
margin: 0.1rem 0.1rem;
}
.boby{
    width: 98%;
    height: 1.8rem;
    display: flex;
}
.boby>.bp1{
    display: flex;
    justify-content: space-between;
}
.boby li:nth-of-type(2){
    width: 80%;
    height: 0.2rem;
    margin:0.1rem 0;
}
.pl li{
    width: 20%;
    padding: 0.07rem 0.01rem;
    text-align: center;
    margin:0.08rem 0.03rem 0.08rem;
    float: left;
    border-radius: 0.05rem;
    background-color: #ebf5ff;
    font-size: 0.16rem
}
.pl{
    width: 99.9%;
    height: 1.7rem;
   margin-top: 0.18rem;
   background-color: white;
}
.l1{
width: 50%;
text-align: center;
margin: 0.1rem 0 0 0rem;
position: absolute;
top: 1.3rem;

}
.wp{
    background-color: white;
    height: 1.6rem;
}
.pl li:nth-child(1){
    background-color: #3190e8
}
.l2{
width: 49%;
float:right; 
margin: 0.4rem 0rem 0 0rem; 
font-size: 0.14rem

}
.p1{
    font-size: 0.5rem;
    color:#f60 ;

}
.p2{
    font-size: 0.15rem;
    margin: 0.1rem 0;
}
.p3{
    margin: 0.1rem 0;

}
.wrap{
 overflow: hidden;
margin-top:1.2rem;
z-index: 2
}
</style>
