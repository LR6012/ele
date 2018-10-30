<template>
    <div>
    <div class="search">
  <router-link to="/mine/logindetail">
      <span class="sp1">
    <img :src="img" alt="">
    </span>
  </router-link>
  <span class="sp2">修改用户名</span>
</div>
<div class="list">
    <input type="text" placeholder="输入用户名" v-model="name">
    <p>用户名只能修改一次（5-24字符之间</p>
    <button @click="edit()">确认修改</button>
</div>
    </div>
</template>

<script>
import img2 from './imgs/左 (1).png'
export default {
  name:'setusername',
  data(){
      return {
          img:img2,
          data:[],
          name:''
      }
  },
  methods:{
      edit(){
        //   console.log(this.name);
          this.$store.state.usermsg.username = this.name;
          this.$router.push({name:"logindetail"});
      }
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
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.list{
    padding: 0.1rem 0.15rem;
}
.list input{
    width: 97%;
    height: 0.5rem;
    background-color:#f5f5f5;;
    border: 0.01rem solid #ddd;
    font-size: 0.17rem;
    padding-left: 3%;
}
.list p{
    color:#666;
    font-size: 0.1rem;
    margin: 0.12rem 0 0.2rem 0;
}
input,button{
    outline: none;
    border: none;
}
button{
    width: 100%;
    background-color: #3190e8;
    height: 0.5rem;
    color:white;
    font-size: 0.16rem;
}
</style>
