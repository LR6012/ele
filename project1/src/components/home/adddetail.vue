<template>
    <div>
        <div class="search">
  <router-link to="/address/add">
      <span class="sp1">
    <img :src="img" alt="">
    </span>
  </router-link>
  <span class="sp2">搜索地址</span>
</div>
<div class="search1">
  <input type="text" placeholder="请输入小区/写字楼/学校等">
  <button>确认</button>
</div>
<div class="warnpart">
    为了满足商家的送餐要求，建议您从列表中选择地址
</div>
<div class="content">
   <p>找不到地址？</p>
   <p>请尝试输入小区、写字楼或学校名</p> 
   <p>详细地址（如门牌号）可稍后输入哦。</p>
</div>
<ul>
    <li v-for="item in data" :key="item.id">{{item.name}}</li>
</ul>
</div>
</template>

<script>
import img2 from './imgs/左 (1).png'
export default {
  name:'detail',
  data(){
      return {
          img:img2,
          id:'',
          username:'',
          data:[]
      }
  },
  created(){
      
      this.id = this.$store.state.usermsg.user_id;
      this.name = this.$store.state.usermsg.username;
      let api = "https://elm.cangdu.org/v1/users/" + this.id + "/addresses";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          user_id:this.id,
          name:this.name
        }
      }).then(res => {
          console.log(res.data);
        //   if(res.data.message){
        //      console.log("335");
        //   }else{
        //      this.$store.commit("edit",true);
        //      this.$store.commit("editinfo",res.data);
        //      this.data = this.$store.state.info;
        //      console.log(this.data);
        //   }
      });
  }
}
</script>

<style scoped>
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  /* border: 1px solid rebeccapurple; */
  display: flex;
  justify-content: space-between;
}
.sp1 {
  color: white;
  margin-left: 0.01rem;
  font-size: 0.25rem;
}
.sp1 img {
  /* border: 1px solid red; */
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.search1{
    /* border:1px solid red; */
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    background-color: white;
}
.search1 input{
    width: 80%;
    height: 0.3rem;
    padding: 0.05rem;
    border-radius: 0.05rem;
    background-color:#f2f2f2;
    color:black;
}
.search1 button{
     width: 15%;
     border-radius: 0.05rem;
     background-color: #3199e8
}
input,button{
    outline: none;
    border: none;
    color:white;
}   
.warnpart{
    padding: 0.1rem;
    color:#ff883f ;
    font-size: 0.15rem;
    background-color: #fff6e4;
}
.content{
    /* border: 1px solid red; */
    width:80%;
    margin: 50% auto;
    text-align: center;
}
.content p{
    /* 设置行间距 */
    line-height: 0.3rem;
    color: #969696
}
</style>
