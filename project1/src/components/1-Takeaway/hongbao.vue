<template>
    <div>
      <header class="hongbao_title">
        <span>有<span id="span3">n</span>个红包即将到期</span>
        <div>
          <img src="../../../static/img/问号.png" alt="">
          <span id="span4">红包说明</span>
        </div>  
      </header>
      <Redpacket></Redpacket>
      <Redpacket></Redpacket>
      <Redpacket></Redpacket>
      <div class="check_history">
        <span >查看历史红包</span>
        <span>></span>
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
.check_history{
  height: 0.1rem;
  padding: .1rem .5rem;
  font-size: 0.12rem;
  text-align: center;
  color: #999;
}
</style>