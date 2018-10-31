<template>
    <div>
       <div class="search">
          <router-link to="/benefit/hongbao">
            <span class="sp1">
            <img src="../home/imgs/左 (1).png" alt="">
            </span>
          </router-link>
          <span class="sp2">红包说明</span>
        </div>
       <div class="markdown">
           <h3 class="q1-" >Q1: 怎么获得红包？</h3> 
           <ul >
               <li class="listyle" >通过邀请好友获得</li> 
               <li class="listyle" >在下单返红包的商家下单获得</li> 
               <li class="listyle" >抢微信朋友分享的红包获得</li>
            </ul> 
            <h3 class="q1-" >Q2: 红包可以做什么？</h3> 
            <p class="listyle">可以抵扣在线支付时的实际支付金额。</p> 
            <h3 class="q1-" >Q3: 红包的门槛金额按照什么金额计算？</h3> 
            <p class="listyle">红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p> 
            <h3 class="q1-" >Q4: 一个红包能拆开多次使用吗？</h3> 
            <p class="listyle">不能，一个红包只能一次性使用，不能分开使用。</p> 
            <h3 class="q1-" >Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3> 
            <p class="listyle">会的，订单无效后红包会自动返还到您的账户里。</p> 
            <h3 class="q1-" >Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3> 
            <p class="listyle">在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p> 
            <h3 class="q1-" >Q7: 邀请好友了，为什么没获得红包？</h3> 
            <p class="listyle">先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p> 
            <h3 class="q1-" >Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h3> 
            <ul >
                <li class="listyle">预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</li> 
                <li class="listyle">预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</li>
            </ul> 
            <h3 class="q1-" >Q9: 互斥红包怎么使用？</h3> 
            <ul >
                <li class="listyle">互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</li>
            </ul> 
            <h3 class="q1-" >Q10: 返红包活动， 红包领取规则是什么?</h3> 
            <ul >
                <li class="listyle" >同一个手机号一天限领取三个。</li> 
                <li class="listyle">同一注册用户一天限领取三个。</li> 
                <li class="listyle">注册用户红包直接发送至用户账户里。</li> 
                <li class="listyle">非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</li> 
                <li class="listyle">红包的使用周期为1周，自红包发放的第2天开始计算。</li> 
                <li class="listyle">同一个手机号一天最多使用两个红包。</li> 
                <li class="listyle">未收到红包短信的用户注意查看手机里的拦截短信。</li> 
                <li class="listyle">有任何问题请拨打客服电话：10105757。</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "hbDescription"
};
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
.sp1 img {
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
.markdown{
    background-color: #fff;    
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