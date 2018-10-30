<template>
    <div>
<div class="search">
  <router-link to="/vipcard">
   <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">我的优惠</span>
</div>
<div class="content">
  <div class="content1">
    <p>
      尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
    </p>
  </div>
  <ul>
    <li>
      <h3>Q1:特权介绍</h3>
      <p>身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
      <p>减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。
     更多特权，敬请期待</p>
    </li>
    <li>
      <h3>Q2:资费介绍</h3>
      <p>饿了么会员卡：20元</p>
    </li>
    <li>
      <h3>Q3:使用说明</h3>
      <p>当用户满足以下任一条件，会员服务自动失效:</p>
      <div class="content2">
        <p>自绑定之日起超过31天；</p>
        <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
      </div>
    </li>
    <li>
      <h3>Q4:购卡说明</h3>
      <p>在线购买：饿了么App>我的>饿了么会员卡</p>
    </li>
    <li>
      <h3>Q5:温馨提示</h3>
      <p>用户在当前会员服务失效前，无法购买新卡。</p>
      <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </li>
  </ul>
</div>
    </div>
</template>

<script>
import img01 from './imgs/左 (1).png'
export default {
   name:'vipdes',
   data(){
       return {
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
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.content{
  /* border: 1px solid paleturquoise; */
  padding: 0.2rem;
}
.content1{
  /* border: 1px solid red; */
  width: 90%;
  margin: 0 auto;
}
.content1>p{
  font-size: 0.16rem;
  font-weight: 500;
  color: black;
  line-height: 0.25rem;
  /* margin:0 50%; */
}
ul li{
  /* border:1px solid blueviolet; */
  margin-top: 0.2rem;
}
ul li h3{
  color: #000;
  font-weight: bold;
  margin-bottom: 0.1rem;
  font-size: 0.2rem;
}
ul li>p{
  line-height: 0.3rem;
  font-size: 0.18rem;
}
.content2{
  /* border:1px solid rebeccapurple; */
}
.content2 p{
  margin-left: 0.5rem;
  line-height: 0.2rem;
}
</style>
