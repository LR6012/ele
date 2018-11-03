<template>
    <div>
        <div class="search" >
      <span class="p1">
    <router-link to="/shopdetail">
    <img src="../../../static/img/左箭头.png" alt="">
    </router-link>
    </span>
  <span class="p2">店铺详情</span>
</div> 

<div>
    <header>活动与属性</header>
<ul>
    <li>
        <p class="sp1">
            <span>减</span>
<span>满30减5,满60减8(app专享)</span>
        </p>
  <p class="sp2">
            <span >保</span>
<span>已加入“外卖保”计划，食品安全有保障(APP专享)</span>
        </p>
          <p  class="sp3">
            <span>准</span>
<span>准时必达，超时秒赔(APP专享)</span>
        </p>
          <p  class="sp4">
            <span>票</span>
<span>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</span>
        </p>
    </li>
</ul>
<div class="nav">
    <p href="##" class="pp">
        <span>食品监督安全公示</span>
       
        <router-link to="/shopdetail/dpdetail/shopsafe">
        <img src="../../../static/img/右箭头.png" alt="">
         </router-link>
         <span>企业认证详情</span>
    </p>
    <div class="nav_header">
        <img src="../../../static/img/小帅.jpg" alt="">
        <p>
            <span>监督检查结果:</span>
            <span>良好</span>
        </p>
        <p>检查日期</p>
    </div>
</div>
<div class="footer">
    <header>商家信息</header>
<p>1213232323</p>
<p>地址:福建省福州市鼓楼区江厝路与黄埔路交叉口北50米</p>
<p>营业时间:[05:45/20:30]</p>
<p>营业执照
   <img src="../../../static/img/右箭头.png" alt="" @click="show()" class="yy"> 
</p>
<p>
    餐饮服务许可证
    <img src="../../../static/img/右箭头.png" alt="">
</p>

</div>
</div>
<div class="dd" v-show="bol">
  <img src="../../../static/img/小帅.jpg" alt="" v-show="bol" class="zz" @click="show()">
</div>

    </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "dpdetail",
  data() {
    return {
      data: [],
      bol:false
    };
  },
  created() {
    let api = "https://elm.cangdu.org/shopping/restaurant/1";
    this.$http.get(api).then(data => {
      this.data = data.data;
      console.log(data.data);
    });
  },
  methods:{
show(){
    this.bol=!this.bol;
    $('.dd').css('display','block');
    // $('.dd').css('filter','blur(0.05rem)');
}
}
};
</script>

<style scoped>
.dd{
  height:9rem;
  /* border: 1px solid blue; */
margin: -7.2rem 0;
background-color: rgba(13, 13, 14, 0.1);
/* display: none; */
}
.zz{
position: absolute;
z-index: 16;
top:2.4rem;
width: 100%;
}
.footer p img {
  width: 0.25rem;
  float: right;
}
.footer p {
  padding: 0.2rem;
  border-bottom: 0.006rem solid gainsboro;
}
.footer {
  background-color: white;
  margin-top: 0.15rem;
}
.nav_header p:nth-child(2) {
  margin: -0.6rem 0 0rem 1rem;
 
}
.nav_header p span:nth-child(2) {

  color: rgb(10, 245, 10); 
}
.nav_header p:nth-child(3) {
  margin: 0.2rem 0 0.2rem 1rem;
  /* border: 1px solid blue;  */
}
.nav_header img {
  border-radius: 50%;
  width: 0.6rem;
  margin: 0.2rem;
}
.nav_header {
  /* border: 1px solid blue; */
  font-size: 0.1rem;
}

.nav .pp img {
  float: right;
  margin: -0.1rem 0.1rem 0 0;
  width: 0.25rem;
  padding: 0.05rem;
  /* border:1px solid red; */
}
.nav .pp {
  color: black;
  /* border:1px solid red; */
  padding: 0.15rem;
  width: 100%;
}
.pp span:nth-child(3) {
  color: #333;
  float: right;
}
.nav {
  overflow: hidden;
  margin-top: 0.2rem;
  background-color: white;
}
ul li .sp1 span:nth-child(1) {
  background-color: red;
  padding: 0.02rem;
  color: white;
  border-radius: 0.05rem;
}
ul li .sp3 span:nth-child(1) {
  background-color: blue;
  padding: 0.02rem;
  color: white;
  border-radius: 0.05rem;
}
ul li .sp2 span:nth-child(1),
ul li .sp4 span:nth-child(1) {
  background-color: gainsboro;
  padding: 0.02rem;
  color: white;
  border-radius: 0.05rem;
}
ul {
  background-color: white;
}
ul li p {
  padding: 0.1rem;
  font-size: 0.1rem;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  margin-bottom: 0.1rem;
}
.p1 img {
  margin-top: 0.05rem;
}
.p2 {
  position: absolute;
  right: 50%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
header {
  font-size: 0.24rem;
  border-bottom: 0.006rem solid gainsboro;
  padding: 0.1rem;
  background-color: white;
}
</style>
