<template>
    <div>
<!-- 头部 -->
 <div class="search">
      <span class="sp1">
    <router-link to="/shopdetail/zf">
    <img src="../../../static/img/右.png" alt="">
    </router-link>

    </span>
  <span class="sp2">选择发票抬头</span>
</div> 
<div class="nav">
    <span>选择发票抬头</span>
    <input type="radio" class="ra">
</div>
<button @click="confim()">确定</button>
    </div>
</template>

<script>
export default {
   methods:{
       confim(){
            this.$router.push({name:'zf'});
       }
   }
}
</script>

<style scoped>
button{
background-color: rgb(10, 168, 10);
width: 95%;
padding: 0.1rem;
color: white;
font-size: 0.2rem;
margin-left: 0.1rem;
border-radius: 0.05rem;
}
.nav{
    padding: 0.15rem;
    background-color: white;
    font-size: 0.16rem
}
.ra{
    float: right;
    margin-right: 0.2rem;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  margin-bottom: 0.1rem;
}
.sp1 img {
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 50%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
</style>
