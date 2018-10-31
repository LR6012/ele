<template>
<div>
<div class="search">
  <router-link to="/mine">
    <span class="sp1">
            <img :src="img01" alt="">
            </span>
  </router-link>
  <span class="sp2">下载</span>
</div>
<div class="download">
    <img :src="img" alt="">
    <p class="p1">下载饿了么APP</p>
    <button @click="open()">下载</button>
</div>
</div>
</template>
<script>
import img1 from '../home/imgs/左 (1).png'
import img01 from './imgs/图标.png'
export default {
  name:"download",
  data(){
      return {
          img:img01,
          img01:img1
      }
  },
  methods:{
      open(){
           this.$confirm('IOS用户请前往AppStore下载', {
          confirmButtonText: '确定',
        //   cancelButtonText: '取消',
          type: 'warning',
          center: true//居中显示
        });
      }
  }

}
</script>
<style>
.el-message-box__status::before {
    width: 1rem;
    height: 1rem;
    padding-left: 1px;
    font-size: 0.7rem;
}
.el-icon-warning:before {
    content: "\E62E";
}
/* 设置p标签字体大小*/
.el-message-box__message p {
    margin: 0;
    line-height: 24px;
    color: black;
    font-size: 0.18rem;
}
.el-message-box__btns button:first-child{
   display: none;
}
.el-message-box__btns button:nth-child(2) {
     width: 2.5rem;
    height: 0.3rem;
    background-color: #4cd964;
    margin-top: 0.02rem;
    font-size: 0.16rem;
}
/* 设置弹框绝对定位*/
.el-message-box {
    /* 绝对定位 */
    position: absolute;
    left:10%;
    top:40%;
    display: inline-block;
    width: 3rem;
    height: 1.8rem;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: #fff;
    border-radius:0.1rem;
    border: 1px solid #ebeef5;
    font-size: 18px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: left;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>
<style scoped>
.search{
  height: 0.46rem;
  /* border: 1px solid red; */
  line-height: 0.46rem;
  color:white;
  background-color:#3190e8;
  position: relative;
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2{
  position: absolute;
  right:40%;
  top:0;
  font-size: 0.19rem;
  font-weight: 700;
}
.download{
    /* border: 1px solid red; */
    text-align: center;
    padding: 0.3rem;
}
.download img{
    width: 1.8rem;
    height: 1.8rem;
    /* border: 1px solid blueviolet; */
    border-radius: 0.2rem;
    margin-bottom: 0.1rem;
}
.p1{
    font-size:0.2rem;
    color: #666;
    margin-bottom:0.2rem; 
}
button{
    /* border: 1px solid red; */
    /* 去除边框  去除点击时的默认样式 outline */
    border: none;
    outline: none;
    width: 3.2rem;
    height: 0.4rem;
    font-size:0.17rem;
    line-height: 0.4rem;
    color: white;
    background-color: #4cd964;
    border-radius: 0.05rem;
}
</style>
