<template>
    <div>
       <div class="search">
  <!-- <router-link to="/mine"> -->
  <span class="sp1">
    <img :src="img" alt="" @click="hh()">
    </span>
  <!-- </router-link> -->
  <span class="sp2">服务中心</span>
</div>
<ul class="tx">
    <li class="one">
        <img src="./imgs/女生.png" alt="">
        <p>在线客服</p>
    </li>
    <li>
        <img src="./imgs/电话 (1).png" alt="">
        <p>在线客服</p>
    </li>
</ul>
<div>
    <h3>热门问题</h3><router-link to="/service/questiondetail">
    <ul class="two">
        <li v-for="item in arr" :key="item.id">
        
            <span>{{item.title}}</span>
            <img src="../../../static/img/左箭头 (1).png" alt="">
            
        </li>
    </ul></router-link>
</div>
    </div>
</template>

<script>
import img2 from './imgs/左 (1).png'
export default {
  name:"service",
  data(){
      return{
          img:img2,
          arr:[
    {title:"超级会员权益问题",id:1,name:"supervipCaption"},
    {title:"签到规则",id:2,name:"signCaption"},
    {title:"用户等级说明",id:3,name:"rankCaption"},
    {title:"教我拍大片",id:4,name:"phototutorialCaption"},
    {title:"支付问题",id:5,name:"paymentCaption"},
    {title:"其他问题",id:6,name:"otherCaption"},
    {title:"准时达问题",id:7,name:"ontimeCaption"},
    {title:"会员说明",id:8,name:"memberTimesCaption"},
    {title:"会员问题",id:9,name:"memberCaption"},
    {title:"红包问题",id:10,name:"hongbaoCaption"},
    {title:"活动细则",id:11,name:"freshmanCaption"},
    {title:"补签规则",id:12,name:"forgotCaption"},
    {title:"优惠说明",id:13,name:"discountCaption"},
    {title:"免责声明",id:14,name:"disclaimerCaption"},
    {title:"代金券说明",id:15,name:"couponCaption"},
    {title:"商务合作",id:16,name:"businessCaption"},
    {title:"余额问题",id:17,name:"balanceCaption"},
    {title:"超赞商家",id:18,name:"awesomeRestaurantCaption"},
    {title:"匿名购买",id:19,name:"anonymousBuyCaption"},
    {title:"活动问题",id:20,name:"activityCaption"},
          ]
      }
  },
  methods:{
      hh(){
          this.$router.go(-1)
      }
  },
}
</script>

<style scoped>
.two li span{
color:black;
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
.one{
border-right: 1px solid rgba(219, 216, 216, 0.486)
}
.tx li{
    display: inline-table;
    padding: 0.3rem 0.4999rem;
    margin-left:0.2rem; 
    text-align: center;
    
}
.tx img{
width: 0.3rem;
}
.tx{
    border: 1px solid rgba(219, 216, 216, 0.486)
}
h3{
    padding: 0.3rem 0 0.3rem 0.2rem;
}
.two li{
   border: 1px solid rgba(219, 216, 216, 0.486);
   padding: 0.16rem;
}
.two img{
    width: 0.16rem;
    float: right;

}
</style>
