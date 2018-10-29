<template>
    <div>
        <header class="search">
          <router-link to="/mine">
          <span class="sp1"><</span>
          </router-link>
          <span class="sp2">我的优惠</span>
      </header>
      <div id="benefit_title">
          <span><router-link to="/benefit/hongbao">红包</router-link></span>
          
          <span><router-link to="/benefit/daijinquan">商家代金券</router-link></span>
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
}
.sp2 {
  position: absolute;
  right: 45%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
#benefit_title{
  height: 0.1968rem;
  display: flex;
  justify-content: space-around;
  padding: .136rem 0;
  background-color: #fff;
}
#benefit_title span{
  font-size: .15rem;
  padding-bottom: .2rem;
  border-bottom: .015rem solid #3190e8;
  color: #3190e8;

}

</style>
