<template>
    <div>
    <div class="search">
  <router-link to="/mine">
  <span class="sp1"><</span>
  </router-link>
  <span class="sp2">我的优惠</span>
  </div>
    </div>
</template>

<script>
export default {
name:"benefit"
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
.sp1 {
  color: white;
  margin-left: 0.05rem;
  font-size: 0.27rem;
  /* border: 1px solid black; */
}
.sp2 {
  position: absolute;
  right: 45%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
</style>
