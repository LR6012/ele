<template>
    <div>
        <header class="hongbao_title">
        <span>有<span id="span3">n</span>个红包即将到期</span>
        <div>
          <img src="../../../static/img/问号.png" alt="">
          <span id="span4">红包说明</span>
        </div>
        
      </header>
    </div>
</template>
    
<script>
    export default {
        name:"hongbao"
    }
</script>

<style scoped>
    .hongbao_title{
  height: 0.112rem;
  margin: 0 .165rem;
  padding: .18rem 0;
  display: flex;
  justify-content: space-around;
}
.hongbao_title span{
  font-size: .11rem;
}
.hongbao_title img{
  height: 0.14rem;
  width: 0.14rem;
}
#span3{
  color:#ff5340; 
}
#span4{
  line-height: .11rem;
}
</style>