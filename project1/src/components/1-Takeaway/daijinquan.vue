<template>
    <div>
        <div class="header">
            <img src="../../../static/img/问号.png" alt="">
            
            <span>商家代金券说明</span>
        </div>
        <div class="unable_use"></div>
        <img class="img1" src="../../../static/img/找不到.png" alt="">
    </div>
</template>

<script>
    export default {
        name:"daijinquan"
    }
</script>

<style scoped>
.header{
    height: 0.464rem;
    line-height: .464rem;
    position: absolute;
    right: .1rem;
    font-size: .12rem;
}
.unable_use{
    height: 1.873rem;
}
.img1{
   width: 1.4rem;
   height: .8rem; 
}
</style>