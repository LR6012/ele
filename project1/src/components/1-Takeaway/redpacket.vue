<template>
<div class="total">
    <div class="hongbao">
        <div class="hongbao_left">
            <span>¥</span>
            <span>1</span>
            <span>.</span>
            <span>0</span>
            <p>满20元可用</p>
        </div>
        <div class="hongbao_right">
            <p>分享红包</p>
            <p>2017-05-23到期</p>
            <p>限收货手机号为18888888888</p>
        </div>
        <div class="hongbao_time">剩3日</div>    
    </div>
    <footer class="hongbao_footer">
           <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p> 
        </footer>
</div>
</template>

<script>
    export default {
        name:"radpacket"
    }
</script>

<style scoped>
.total{
  width: 3.424rem;
  height: 1.2894rem;
  box-sizing: border-box;
  /* border-radius: 0.15rem; */
  margin-bottom: 0.1rem;
  margin-left: .16rem;
}
.hongbao{
  height: 0.5639rem;
  font-family: Microsoft Yahei;
  border-top: .03rem solid #ff5340;
  background-color: #fff;
  padding: 0.2rem 0.1rem 0.18rem;
  border-top-left-radius: .1rem;
  border-top-right-radius: .1rem;
  display: flex;
  justify-content: space-between;
}
.hongbao_left{
    width: 0.8rem;
    height: 0.55rem;
    border-right:.01rem dotted #ccc;
}
.hongbao_left span{
    color: #ff5340;
    font-weight: 700;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.hongbao_left span:nth-of-type(1){
    font-size: .18rem;
}
.hongbao_left :nth-of-type(2){
    font-size: .35rem;
    font-weight: normal;
}
.hongbao_left :nth-of-type(3){
    font-size: .18rem;
}
.hongbao_left :nth-of-type(4){
    font-size: .18rem;
}
.hongbao_left p{
    font-size: .12rem;
    color: #999;
    
}
.hongbao_right{
    width: 1.5853rem;
    margin-left: .4rem;
    margin-top: .05rem;
}
.hongbao_right p{
    height: 0.128rem;
    list-style-type: disc;
    margin-left: -0.2rem;
    font-size: .09rem;
    color: #999;
}
.hongbao_right p:nth-of-type(1){
    height: 0.216rem;
    font-size: .17rem;
    color: #666;
    font-style: normal;
    margin-left: -0.2rem;
}
.hongbao_time{
    font-size: .16rem;
    color: #ff5340;
}
.hongbao_footer{
    height: 0.1155rem;
    background-color: #f9f9f9;
    padding: .1rem .1rem .1rem .2rem;
    font-size: .1rem;
    border-bottom-left-radius: .1rem;
    border-bottom-right-radius: .1rem;
    color: #999;
}
</style>