<template>
    <div>
         <div class="search">
          <router-link to="/mine">
            <span class="sp1">
            <img :src="img01" alt="">
            </span>
          </router-link>
          <span class="sp2">我的优惠</span>
        </div>
    </div>
</template>

<script>
import img01 from '../home/imgs/左 (1).png'
export default {
  name:'bef',
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
  margin-top: 0.1rem;
  width: 0.25rem;
}
.sp2 {
  position: absolute;
  right: 43%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
</style>
