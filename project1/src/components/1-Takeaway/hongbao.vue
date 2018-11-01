<template>
    <div>
      <header class="hongbao_title">
        <span>有<span id="span3">3</span>个红包即将到期</span>
        <div>
          <img src="../../../static/img/问号.png" alt="">
          <router-link to="/benefit/hongbao/hbDescription">
            <span id="span4">红包说明</span>
          </router-link>
        </div>  
      </header>
      <Redpacket></Redpacket>
      <!-- <Redpacket></Redpacket>
      <Redpacket></Redpacket> -->
      <div class="check_history">
        <router-link to="/benefit/hongbao/hbHistory">
          <span class="history">查看历史红包</span>
          <span class="history">></span>
        </router-link>  
      </div>
      <div class="footer">
           <a href="#/benefit/hongbao/exchange">兑换红包</a>
           <a href="#/benefit/hongbao/commend">推荐有奖</a>
         </div>
      
    </div>
</template>
    
<script>
import Redpacket from './redpacket'
    export default {
        name:"hongbao",
        components: {
          Redpacket
        }
    }
</script>

<style scoped>
.hongbao_title{
  height: 0.112rem;
  margin: 0 .165rem;
  padding: .18rem 0;
  display: flex;
  justify-content: space-between;
}
.hongbao_title span{
  font-size: .12rem;
}
.hongbao_title img{
  height: 0.14rem;
  width: 0.14rem;
}
#span3{
  color:#ff5340; 
}
#span4{
  color:#3190e8; 
}
.history{
  color: #999;
}
.check_history{
  height: 0.1rem;
  padding: .1rem .5rem;
  font-size: 0.12rem;
  text-align: center;
  color: #999;
  /* border: 1px solid red; */
  margin-top: 82%;
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