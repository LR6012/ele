<template>
    <div class="total">
        <div class="search">
          <router-link to="/vipcard">
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
         <router-view></router-view>
         <div class="footer">
           <a href="###">兑换红包</a>
           <a href="###">推荐有奖</a>
         </div>
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
  margin-top: 0.05rem;
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
  height: 0.4688rem;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 0.4688rem;
}
.title{
  color:#333; 
  
}
.title_span{
  height: 0.3em;
  width: 0.27rem;
  font-size: .15rem;
}
.router-link-active{
    color: rgba(136, 63, 167, 0.74);
    color:#3190e8; 
    padding-bottom: .05rem;
    border-bottom: .015rem solid #3190e8;
}
.footer{
  position: fixed;
  bottom: 0;
  height: .464rem;
  width: 100%;
  display: flex;
}
.footer a{
  width:1.87rem;
  height: .464rem;
  font-size: .15rem;
  text-align: center;
  line-height: .464rem;
  color: #555;
  background-color: #fff;
}
.footer a:nth-last-of-type(1){
  border-right: 1px solid rgb(245, 245, 245);
}
</style>
