<template>
    <div>
     <div class="search">
  <router-link to="/vipcard">
   <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">兑换会员</span>
</div>
<div class="ct">
    <p>成功兑换后将关联到当前帐号：<span>{{name}}房贷首付</span></p>
    <input type="text" placeholder="请输入10位卡号">
    <input type="text" placeholder="请输入6位卡密">
</div>  
 <div class="cm">
   <button>兑换</button>
   <div class="cm1">
      <h2>——温馨提示——</h2>
      <p>
    新兑换的会员服务，权益以「会员说明」为准。</p>
    <p>月卡：30次减免配送费。</p>
    <p>季卡：90次减免配送费。</p>
    <p>年卡：360次减免配送费。</p>
    <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>   

   </div>
 </div>
    </div>
</template>

<script>
import img01 from './imgs/左 (1).png'
export default {
   name:'cad',
   data(){
       return {
           img01:img01,
           name:''
       }
   },
   created(){
       this.name = this.$store.state.usermsg.username;
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
.ct{
    /* border: 1px solid red; */
}
.ct>p{
    padding: 0.15rem;
}
.ct>p>span{
    font-weight: bold;
}
.ct input{
    background-color: white;
    width: 100%;
    padding: 0.15rem;
    font-size: 0.16rem;
}
input:nth-of-type(1){
    border-bottom: 0.001rem solid gainsboro;
}
input,button{
    outline: none;
    border: none;
}
.cm{
    /* border: 1px solid rebeccapurple; */
     margin-top:0.2rem; 
}
.cm button{
    width: 90%;
    padding: 0.1rem;
    margin-left: 5%;
    color: white;
    font-size: 0.17rem;
    background-color: #ccc
}
.cm .cm1{
    /* border: 1px solid rebeccapurple; */
    margin-top: 0.3rem;
    /* text-align: center; */
    color: #aaa
}
.cm .cm1 h2{
  margin-bottom: 0.2rem;
  text-align: center;
}
.cm .cm1 p{
   line-height: 0.23rem;
   margin-left: 0.3rem;
}
</style>
