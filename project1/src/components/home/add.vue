<template>
    <div>
    <div class="search">
  <router-link to="/address">
      <span class="sp1">
    <img :src="img" alt="">
    </span>
  </router-link>
  <span class="sp2">新增地址</span>
</div>
<div class="adddetail">
    <input type="text" placeholder="请输入你的名字">
    <router-link to='/add/adddetail'>
    <input type="text" placeholder="小区/写字楼/学校等">
    </router-link>
    <input type="text" placeholder="请填写详细送餐地址">
    <input type="text" placeholder="请填写能够联系到您的手机号">
    <input type="text" placeholder="备用联系电话(选填)">
</div>
    <button>新增地址</button>
    </div>
</template>

<script>
import img2 from './imgs/左 (1).png'
export default {
  name:'adds',
  data(){
      return {
          img:img2
      }
  }
}
</script>

<style scoped>
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  /* border: 1px solid rebeccapurple; */
  margin-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.sp1 {
  color: white;
  margin-left: 0.01rem;
  font-size: 0.25rem;
}
.sp1 img {
  /* border: 1px solid red; */
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.adddetail{
    margin-top: 0.1rem;
    background-color: white;
    /* border: 1px solid red; */
    padding-left:0.12rem;
}
input{
    background-color: #f2f2f2;
    width: 90%;
    padding: 0.1rem;
    margin-top: 0.1rem;
    font-size: 0.16rem;
}
input,button{
    outline: none;
    border: none;
}
input:last-child{
    margin-bottom: 0.1rem;
}
button{
    width: 95%;
    margin: 2%;
    padding: 0.1rem;
    color:white;
    border-radius: 0.03rem;
    background-color: #4cd964;; 
    font-size: 0.15rem;
    margin-top: 0.15rem;
}
</style>
