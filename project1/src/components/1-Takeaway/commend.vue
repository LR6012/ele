<template>
    <div class="page" >
       <div class="search">
          <router-link to="/benefit/hongbao">
            <span class="sp1">
            <img src="../home/imgs/左 (1).png" alt="">
            </span>
          </router-link>
          <span class="sp2">推荐有奖</span>
        </div>
        <img src="../../../static/img/activity.png" id="img1"> 
        <section class="invite_firend" >
            <div class="invite_firend_style" >
                <img src="../../../static/img/wx.png" class="tubiao"> 
                <p class="wenzi">邀请微信好友</p>
            </div> 
            <div class="invite_firend_style" >
                <img src="../../../static/img/qq.png" class="tubiao"> 
                    <p class="wenzi">邀请QQ好友</p>
            </div> 
            <div class="invite_firend_style" >
                <img src="../../../static/img/二维码.png" class="tubiao"> 
                <p class="wenzi">面对面邀请</p>
            </div>
        </section> 
        <section class="invite_num" >
            <div class="invite_num_style" >
                <p class="wenzi">累计收益</p> 
                <p class="wenzi">
                    <span class="sp3">0</span>元
                </p>
            </div> 
            <div class="invite_num_style invite_people" >
                <p class="wenzi">成功邀请</p> 
                <p class="wenzi">
                    <span class="sp4">0</span>人
                </p>
            </div>
        </section> 
        <p class="income_detail">-收益明细-</p> 
        <section class="incom_tips" >
            <img src="../../../static/img/红包.png" > 
            <p >还不赶紧去邀请好友</p>
        </section> 
    </div>
</template>

<script>
    export default {
        name:"commend"
    }
</script>

<style scoped>
.search {
  height: 0.46rem;
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
#img1{
    height:2.3438rem;
    width:100%;
    margin-bottom:.05rem;
}
.invite_firend{
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: .2rem 0;
    margin-bottom: .2rem;
    background-color: #fff;
}
.invite_firend_style{
    width: 1.25rem;
    height: .81rem;
    flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.tubiao{
    height:.5859rem;
    width:.5859rem;
    margin-bottom: .05rem;
}
.wenzi{
    font-size:.12rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.invite_num{
     display: flex;
    justify-content: space-between;
    /* padding: .2rem 0; */
}
.invite_num_style{
    width: 1.8731rem;
    text-align: center;
}
.invite_people{
    border-left: 1px solid #ddd;
}
.sp3{
  line-height: .25rem;
  font-size: .22rem;
  color: #ff5633; 
  font-weight: 700;
}
.sp4{
  line-height: .25rem;
  font-size: .22rem;
  color: #666; 
  font-weight: 700;
}
.income_detail,.incom_tips{
    text-align: center;
    margin-top: .2rem;
    font-size:.12rem;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.incom_tips{
    margin-top: .3rem;
    line-height: .2rem;
}
.incom_tips img{
    width: .3046rem;
    height: .375rem;
}
</style>