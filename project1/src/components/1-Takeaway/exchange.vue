<template>
    <div class="exchange">
       <div class="search">
          <router-link to="/benefit/hongbao">
            <span class="sp1">
            <img src="../home/imgs/左 (1).png" alt="">
            </span>
          </router-link>
          <span class="sp2">兑换红包</span>
        </div>
        <form class="exchange_code" >
            <input class="exchange_input" type="text" placeholder="请输入兑换码" > 
            <section class="input_container captcha_code_container" >
                <input class="exchange_input1" type="text" maxlength="4" placeholder="验证码" > 
                <div class="img_change_img" >
                    <img :src="code&&code" > 
                    <div class="change_img" >
                        <p >看不清</p> 
                        <p @click="getCode()">换一张</p>
                    </div>
                </div>
            </section>
        </form>
        <div class="determine" >兑换</div>
    </div>
</template>

<script>
    export default {
        name:"exchange",
        data () {
            return {
                code:''
            }
        },
        methods: {
            getCode() {
                const url = "https://elm.cangdu.org/v1/captchas";
                this.$http({
                    method: "post",
                    url: url,
                    //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
                    //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
                    withCredentials: true // 默认false
                }).then(res => {
                    // console.log("tap", res);
                    // if (res.data.status == 200) {
                    this.code = res.data.code;
                    // }  
                });
            },
        },
        created() {
            this.getCode();
        }
    }
</script>

<style scoped>
.exchange{
    box-sizing: border-box;

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
.exchange_code{
    margin-top: .2rem;
    padding: 0 .15rem;
}
.exchange_input{
    width: 3.25rem;
    height: 0.3rem;
    font-size: .15rem;
    border-radius: .05rem;
    padding: .1rem;
}
.input_container{
    display: flex;
    justify-content: space-around;
}
.img_change_img{
    /* border: 1px solid red; */
    background-color: #fff;
    width: 1.4rem;
    margin-top: .15rem;
    margin-left: .05rem;
    padding: 0 .05rem ;
    border-radius: .05rem;
    display: flex;
    justify-content: space-around;
}
.change_img{
    font-size: .12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.change_img p:nth-of-type(2){
    color: #3190e8;
}
.img_change_img  img{
    margin-top: .1rem;
    margin-right: .05rem;
    width: 0.78rem;
    height: 0.35rem;
}
.exchange_input1{
    width: 2.07rem;
    height: 0.31rem;
    font-size: .15rem;
    border-radius: .05rem;
    margin-top: .15rem;
    padding: .1rem;
}
.determine{
    background-color: #ccc;
    font-size: .15rem;
    color: #fff;
    text-align: center;
    margin: 0 .17rem;
    line-height: .4rem;
    border-radius: .05rem;
    margin-top: .2rem;
}
</style>