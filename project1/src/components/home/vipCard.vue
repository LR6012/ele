<template>
<div>
<div class="search">
  <router-link to="/mine">
   <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">会员中心</span>
</div>
<div class="vipInfo">
  <p>为账户<span>{{name}}</span>购买会员</p>
  <ul>
    <router-link to='/vipcard/vipdesciption'>
    <li class="des">
      <span>会员特权</span>
      <span>会员说明
        <img :src="img" alt="" class="img1">
      </span>
    </li>
    </router-link>
    <li class="free">
      <img :src="img1" alt="">
      <div>
      <h4>减免配送费</h4>
      <p>每月减免30单，每日可减免3单，每单最高减4元</p>
      <p>蜂鸟专送专享</p>
      </div>
    </li>
    <li class="free">
      <img :src="img2" alt="">
      <div>
      <h4 >减免配送费</h4>
      <p>每月减免30单，每日可减免3单，每单最高减4元</p>
      <p>蜂鸟专送专享</p>
      </div>
    </li>
    <li class="on on1">
      <p>开通会员</p>
    </li>
    <li class="on">
      <div>
        <div>1个月<span class="sp1">¥20</span></div>
        <router-link to='/payline'>
        <div class="buy"><span>购买</span></div>
        </router-link>
      </div>
    </li>
    <router-link to="/vipcard/usecard">
    <li class="des des1">
       <span>兑换会员</span>
      <span>使用卡号卡密
        <img :src="img" alt="" class="img1">
      </span>
    </li>
    </router-link>
    <router-link to='/vipcard/record'>
   <li class="des des1">
       <span>购买记录</span>
      <span>开发票
        <img :src="img" alt="" class="img1">
      </span>
    </li>
    </router-link>
  </ul>
</div>
</div>
</template>
<script>
import $ from 'jquery'
import img01 from './imgs/左 (1).png'
import img1 from "./imgs/左箭头 (1).png";
import img2 from "./imgs/省.png";
import img3 from "./imgs/免.png";
export default {
  name: "vipCard",
  data() {
    return {
      img: img1,
      img1: img2,
      img2: img3,
      img01:img01,
      name:'',
      data:[]
    };
  },
  created(){
    this.name = this.$store.state.usermsg.username;
    let api = 'https://elm.cangdu.org/v1/user';
    this.$http.get(api).then(data => {
      this.data = data.data;
      console.log(this.data);
    })
  }
};
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
.vipInfo {
  /* border: 1px solid red; */
  color: #666;
}
.vipInfo>p {
  height: 0.46rem;
  font-size: 0.15rem;
  line-height: 0.46rem;
  padding-left: 0.1rem;
}
.vipInfo>p span {
  font-weight: bold;
  padding: 0.05rem;
}
ul .des {
  display: flex;
  justify-content: space-between;
  padding: 0.13rem;
  border-bottom: 0.01rem solid #f5f5f5;
  font-size: 0.16rem;
   background-color: white;
   color: black;
}
.des span:nth-of-type(1) {
  font-size: 0.18rem;
}
.des span:nth-of-type(2){
   color: #999;
  font-size: 0.16rem;
}
.img1 {
  width: 0.1rem;
  height: 0.1rem;
  /* font-size: 0.1rem; */
}
.free{
  display: flex;
  padding: 0.13rem;
  border-bottom: 0.01rem solid #f5f5f5;
   background-color: white;
}
.free img{
  /* border: 1px solid red; */
  width: 0.4rem;
  height: 0.5rem;
  margin-right: 0.1rem;
}
.free div p{
  /* border: 1px solid red; */
  line-height: 0.2rem;
  display: inline;
  font-size: 0.13rem;
  color: #999;
}
.free div h4{
  color:black;
  font-size: 0.18rem;
}
ul .on{
  height: 0.46rem;
  font-size: 0.16rem;
  line-height: 0.46rem;
  padding-left: 0.1rem;
  border-bottom: 0.01rem solid #f5f5f5;
  background-color: white;
  color: black;
}
.des1{
   margin-top: 0.15rem;
  color: black;
}
.on1{
  margin-top: 0.15rem;
}
.on>div{
  display: flex;
  justify-content: space-between;
}
.sp1{
    margin-left: 0.1rem;
}
.on>div span{
  font-weight: bold;
  border: none;
  color: #f60;
  font-size: 0.15rem;
}
.buy{
  width: 0.6rem;;
  height: 0.3rem;
  margin: auto 0;
  line-height: 0.3rem;
  text-align: center;
  border: 0.008rem solid  #f60; 
  margin-right: 0.15rem;
  border-radius: 0.03rem;
}
.buy span{
  font-size: 0.1rem;
  border: 1px solid black;
}
</style>
