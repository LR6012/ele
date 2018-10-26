<template>
<div class="wrap">
  <div class="top">
    <span>注册</span>
  </div>

<div v-show="bol" class="tishi">
  <span>验证码已发送至您的手机请注意查收</span>
</div>


  <div class="inp1">
    <!-- <img src="../../static/img/1 (1).jpeg" alt=""> -->
     <div class="xian"></div>
    <div @click="cha()" class="cha">x</div>
    <input type="text" class="phone" placeholder="请输入手机号">
  </div>

  <div class="inp2">
    <!-- <img src="../../static/img/1 (2).jpeg" alt=""> -->
    <div class="xian"></div>
    <input type="text" value="" class="yanz01" placeholder="输入手机验证码">
    <button @click="abc()" class="yanz">获取验证码</button>
  </div>

  <div class="inp1">
    <!-- <img src="../../static/img/1 (3).jpeg" alt=""> -->
    <div class="xian"></div>
    <input type="text" value="" placeholder="请输入邀请码">
  </div>

  <div class="btn">
    <button class="qux">取消</button>
    <button class="wanc">完成</button>
  </div>

</div>
</template>

<script>
    export default {
        name: "zhuce",
        data(){
          return{
      bol:false
          }
        },
      methods:{
       abc() {
         var _this = this;
         var a= 60+'秒';
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if(!myreg.test($(".phone").val()))
      {
        alert('请输入有效的手机号码！');
        return false;
      }else {
          _this.bol = true;
          $(".yanz").html(a);
         clearInterval(time);
          var time = setInterval(function(){
            a-=1;
            $(".yanz").html(a+"秒");
            if (a==0){
              $(".yanz").html('重新获取');
              clearInterval(time);
            }
          },1000);
          setTimeout(function () {
            var aa = Math.floor(Math.random()*(999999-0)+0);
            $(".yanz01").val(aa);
          },10000);

      }
    },
        cha(){
          $(".cha").click(function () {
            $("#phone").val('');
          });
        }
      },
      mounted:function () {

      }
    }
</script>

<style scoped>

 .wrap{background-color: #f2f2f2;
   width: 100%;
   height: 12.8rem;
 }
  .top{
    width: 100%;
    height: 1rem;
    background-color: red;
  }
  
  
  
  
</style>
