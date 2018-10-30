<template>
    <div>
 <div class="search">
  <router-link to="/mine/logindetail">
      <span class="sp1">
    <img :src="img" alt="">
    </span>
  </router-link>
  <span class="sp2">收货地址</span>
  <span class="sp3" v-if="bol" @click="change()">编辑</span>
  <span class="sp3" v-else  @click="change()">完成</span>
</div>
<ul class="list">
    <li>
        <p>3545</p>
        <p>454354</p>
    </li>
</ul>
  <div class="addsite">
      <router-link to='/address/add' class="aa">
      <p>
          <span>新增地址</span>
          <span>
               <img :src="img2" alt="" class="img2">
          </span>
      </p>
      </router-link>
  </div>
    </div>
</template>

<script>
import img2 from './imgs/左 (1).png'
import img1 from "./imgs/左箭头 (1).png"
export default {
   name:'adrs',
   data(){
       return {
           img:img2,
           img2:img1,
           bol:true,
        //    name:localStorage.getItem('name'),
        //    phone:localStorage.getItem('phone')
       }
   },
   methods:{
       change(){
           //点击,当前布尔值取反    
           this.bol = !this.bol;
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
.sp3{
   margin-right: 0.1rem;
}
.addsite{
    border-top:0.01rem solid gainsboro;
}
.addsite p{
    margin-top: 0.1rem;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 0.15rem;
    border:0.01rem solid #d9d9d9;
}
.addsite p .img2{
    width: 0.15rem;
    /* border: 1px solid red; */
}
.aa{
    color:black;
}
.list{
    border: 1px solid red;
    padding: 0.1rem;    
    background-color: #fff8c3;
    /* display: none;  */
}
.list p{
    line-height: 0.15rem;
    font-size: 0.15rem;
}
</style>
