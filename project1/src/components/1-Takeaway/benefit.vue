<template>
    <div class="total">
        <div class="search">
          <router-link to="/mine">
            <span class="sp1">
            <img :src="img01" alt="">
            </span>
          </router-link>
          <span class="sp2">我的优惠</span>
        </div>
        <div id="header">
            <router-link to="/benefit/hongbao" class="title"><span class="title_span">红包</span></router-link>
            <router-link to="/benefit/daijinquan" class="title"><span class="title_span">商家代金券</span></router-link>
         </div>
         <div id="unuse"></div>
         <router-view></router-view>  
    </div>

</template>

<script>
import img01 from '../home/imgs/左 (1).png'
export default {
name:"benefit",
data(){
  return {
    img01:img01
  }
}
}
</script>

<style scoped>
.total{
  position: relative;
}
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
#header{
  height: 0.3888rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 0.4688rem;
}
#unuse{
  height: 0.08rem;
  background-color: #fff;
}
.title{
  color:#333; 
  
}
.title_span{
  height: 0.3em;
  width: 0.27rem;
  font-size: .15rem;
  font-family: Helvetica Neue,Tahoma,Arial;
  
}
.router-link-active{
    color: rgba(136, 63, 167, 0.74);
    color:#3190e8; 
    padding-bottom: .05rem;
    border-bottom: .015rem solid #3190e8;
    
}

</style>
