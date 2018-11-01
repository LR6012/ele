<template>
<div>
    <div class="search">
  <router-link to="/mine">
      <span class="sp1">
    <img :src="img" alt="">
    </span>
  </router-link>
  <span class="sp2">账号信息</span>
</div>
<ul class="profile">
    <li>
     <!-- 点击提示上传文件  <input type="file" >定位,设置宽度100% 透明度为0--> 
      <input type="file" >
      <span>头像</span>
        <span>
            <img :src="img2" alt="" class="img2">
            <img :src="img1" alt="">
        </span>   

    </li>
       <router-link to='/setusername' class="aa">
        <li>
      <span>用户名</span>
        <span>
            <p>{{username}}</p>
            <img :src="img1" alt="">
        </span>  
            </li> 
        </router-link>
    <router-link to='/address' class="aa">
    <li>
        <span>收货地址</span>
        <span>
            <img :src="img1" alt="">
        </span>  
    </li>
     </router-link>
    <li>
        <span>账号绑定</span>
    </li>
    <li @click="change()">
        <span>手机</span>
        <span>
            <img :src="img1" alt="">
        </span>  
    </li>
     <li>
        <span>安全设置</span>
    </li>
    <router-link to="/forget" class="aa">
    <li>
      <span>登录密码</span>
        <span>
            <p>修改</p>
            <img :src="img1" alt="">
        </span>   
    </li>
    </router-link>
    <button @click="exit()">退出登录</button>
</ul>
  <!-- 弹框界面 -->
<div class="content">
    <img :src="img3" alt="">
    <h2>是否退出登录</h2>
    <button @click="wait()">再等等</button>
    <button @click="unlogin()">退出登录</button>
</div>
</div>
</template>

<script>
import img03 from './imgs/警告.png'
import img01 from "./imgs/头像.png"
import img2 from './imgs/左 (1).png'
import img1 from "./imgs/左箭头 (1).png"
import $ from 'jquery'
export default {
  name:'loginDetail',
  data(){
      return {
          username:'',
          img:img2,
          img1:img1,
          img2:img01,
          img3:img03
      }
  },
  methods:{
      //点击退出登录,弹框显示
     exit(){
         $('.content').css("display",'block');
  },
    //再等等点击事件
    wait(){
          $('.content').css("display",'none');
  },
   //弹框退出登录事件
  unlogin(){
    $('.content').css("display",'none');
      //退出登录接口   
      let api = 'https://elm.cangdu.org/v2/signout';
      this.$http.get(api).then(data => {
        //   console.log(data.data);
        if(data.data.message){
            //  console.log("退出成功");
             this.$store.commit("change",false);
             this.$store.commit("changeusermsg",data.data);
             this.$router.push({name:"mine"})
        }else{
           console.log('留在本页面');
        }
      })
  },
  change(){
        this.$confirm('请在手机APP中设置', {
          confirmButtonText: '确认',
        //   cancelButtonText: '取消',
          type: 'warning',
          center: true//居中显示
        });
  }
  },
  created(){
      this.username = this.$store.state.usermsg.username;
      this.img2 = 'https://elm.cangdu.org/img/'+this.$store.state.usermsg.avatar;     
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
    margin-top: 0.001rem;
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
.aa{
    color:black;
}
input[type="file"]{
    color:red;
    opacity: 0;
    display: block;
    position: absolute;
    top: 8%;
    left: 0;
    width: 100%;
    height: 0.6rem;
    border: 1px solid rebeccapurple;
}
.content{
    display: none;
    position: absolute;
    left:10%;
    top:30%;
    width: 80%;
    /* height:3rem; */
    background-color: white;
    border:0.005rem solid gainsboro;
    /* border:1px solid red; */
    text-align:center;
    padding:0.2rem 0;
}
.content h2{
    margin: 0.1rem 0 0.2rem 0;
}
.content  button{
    border: none;
    outline: none;
    width: 1rem;
    height:0.3rem;
    color: white;
    border-radius: 0.08rem;
}
.content  button:nth-of-type(1){
    background-color: #c1c1c1;
    margin-right: 0.1rem;
}
.content  button:nth-of-type(2){
    background-color:  #dd6b55;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  /* border: 1px solid rebeccapurple; */
  margin-bottom: 0.1rem;
}
.sp1 {
  color: white;
  margin-left: 0.01rem;
  font-size: 0.25rem;
}
.sp1 img {
  /* border: 1px solid red; */
  margin-top: 0.05rem;
  width: 0.2rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.profile {
  /* border: 1px solid red; */
}
.profile li {
  background-color: white;
  height: 0.4rem;
  line-height: 0.4rem;
  border-top: 0.005rem solid #ddd;
  padding: 0.05rem 0.1rem;
  display: flex;
  font-size: 0.15rem;
  justify-content: space-between;
}
.profile li:last-child {
  border-bottom: 0.005rem solid #ddd;
}
.profile li:nth-of-type(1) {
  height: 0.5rem;
  line-height: 0.5rem;
}
.profile li:nth-of-type(1) span img{
  margin-top: 0.15rem;
}
.profile li span{
    display: flex;
    justify-content: space-between;
}
.profile li span p{
    /* border: 1px solid red; */
    color: #999;
}
.profile li span .img2{
    width: 0.3rem;
    height: 0.3rem;;
    /* border: 1px solid red; */
}
.profile li span img{
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.09rem;
  /* border: 1px solid paleturquoise; */
}
.profile li:nth-of-type(2),.profile li:nth-of-type(4){
   background-color: #f5f5f5;
   height: 0.3rem;
   font-size: 0.13rem;
   line-height: 0.3rem;
   color:#666666
}
.profile button{
    /* border: 1px solid palegreen; */
    margin-top: 0.25rem;
    background-color: #d8584a;
    color: white;
    width: 92%;
    margin-left:4%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-radius:0.05rem;
    outline: none;
    border: none; 
}
</style>
