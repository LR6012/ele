<template>
    <div>
<div class="search">
  <router-link to="/mine">
    <span class="sp1">
    <img :src="img01" alt="">
    </span>
  </router-link>
  <span class="sp2">订单列表</span>
</div>
    </div>
</template>

<script>
import img1 from '../home/imgs/左 (1).png'
    export default {
        name:"ordertotal",
        data(){
            return {
                img01:img1
            }
        }
    }
</script>

<style scoped>
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
</style>