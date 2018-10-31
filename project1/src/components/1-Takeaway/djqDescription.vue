<template>
    <div class="page">
       <div class="search">
          <router-link to="/benefit/daijinquan">
            <span class="sp1">
            <img src="../home/imgs/左 (1).png" alt="">
            </span>
          </router-link>
          <span class="sp2">代金券说明</span>
        </div>
        <div class="markdown" >
            <h3 class ="q1-">Q1: 什么是商家代金券？</h3> 
            <p class = " listyle ">商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。</p> 
            <h3 class ="q1-" >Q2: 怎么获得商家代金券？</h3> 
            <ul >
                <li class = " listyle ">进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。</li> <li class = " listyle ">「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</li>
            </ul> 
            <h3 class ="q1-">Q3: 商家代金券使用条件</h3> 
            <ul >
                <li class = " listyle ">商家代金券仅限在指定商家使用</li> 
                <li class = " listyle ">商家代金券仅限在线支付使用</li> 
                <li class = " listyle ">每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"djqDescription"
    }
</script>

<style scoped>
.page{
    height: 6.67rem;
    background-color: #fff;
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
  right: 39%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 600;
}
.markdown{   
    padding-left: .15rem;
    padding-right: .1rem;
}
.q1-{
    color: #333;
    font-size: .17rem;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    padding: .1rem 0;
    line-height: .23rem;
}
.listyle{
    color: #666;
    font-size: .14rem;
    font-weight: 400;
    font-family: Helvetica Neue,Tahoma,Arial;
    box-sizing: border-box;
    margin: .06rem 0;
    line-height: .22rem;
}
</style>