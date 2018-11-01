<template>
    <div>
       <div class="search">
          <router-link to="/benefit/hongbao">
            <span class="sp1">
            <img src="../home/imgs/左 (1).png" alt="">
            </span>
          </router-link>
          <span class="sp2">历史红包</span>
        </div>
        <Overdue></Overdue>
        <!-- <Overdue></Overdue>
        <Overdue></Overdue> -->
    </div>
</template>

<script>
import Overdue from './overdue'
    export default {
        name:"exchange",
        components: {
          Overdue
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
  margin-bottom: .2rem;
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