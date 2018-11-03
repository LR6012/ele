<template>
    <div>
        <div class="header">
            <img class="img2" src="../../../static/img/问号.png" alt="">
            <router-link to="/benefit/daijinquan/djqDescription">
                <span class="sp1">商家代金券说明</span>
            </router-link>
            
        </div>
        <div class="unable_use"></div>
        <div class="img">
            <img class="img1" src="../../../static/img/找不到.png" alt="">
        </div>
        <p class="p1">无法使用代金券</p>
        <p class="p2">非客户端或者客户端版本过低</p>
        <div class="p3"><router-link to="/download" id="a1">下载或者升级客户端</router-link></div>
    </div>
</template>

<script>
    export default {
        name:"daijinquan"
    }
</script>

<style scoped>
.header{
    height: 0.2rem;
    padding: .1rem .1rem;
    line-height: .264rem;
    font-size: .12rem;
    color: #3190e8;
    position: absolute;
    left: 2.5rem;
}
.img2{
    width: .14rem;
    height: .14rem;
}
.unable_use{
    height: 1.873rem;
}
.img{
    display: flex;
    justify-content: center;
    margin-bottom: .1rem;
}
.img1{
   width: 1.4rem;
   height: .8rem;
   line-height: .8rem;
}
.sp1{
    color: #3190e8;
    line-height: .25rem;
}
.p1{
    color: #666;
    font-size: 0.17rem;
    text-align: center;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.p2{
    margin: .1rem 0;
    font-size: 0.12rem;
    text-align: center;
    font-family: Helvetica Neue,Tahoma,Arial;
}
.p3{
    font-size: 0.16rem;
    height: .3465rem;
    width: 1.45rem;
    padding: 0 .1rem;
    background-color: #56d176;
    line-height: .345rem;
    margin: 0 1.05rem;
    border-radius: .05rem;
}
#a1{
   color: #fff; 
}
</style>