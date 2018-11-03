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
  <form action="">
  <input type="search" placeholder="请输入小区/写字楼/学校等" v-model.trim="val">
  </form>
  <button @click="submit(val)">确认</button>
</div>
<div class="warnpart">
    为了满足商家的送餐要求，建议您从列表中选择地址
</div>
<div class="content" v-show="bol">
   <p>找不到地址？</p>
   <p>请尝试输入小区、写字楼或学校名</p> 
   <p>详细地址（如门牌号）可稍后输入哦。</p>
</div>
<ul>   
<li class="search_li" v-for="(item,index) in data" :key="index" @click="add(item)">
    <h4>{{item.name}}</h4>
    <p>{{item.address}}</p>
</li>   
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
          data:[],
          val:'',
          bol:true
      }
  },
  methods:{
      submit(val){
      this.bol = false;
      var id = localStorage.getItem('id');
      let api = 'https://elm.cangdu.org/v1/pois?city_id='+id+'&keyword='+this.val+'&type=search';
      this.$http.get(api).then(data => {
           this.data = data.data;
      })
  },
  add(item){
      localStorage.setItem('address',item.name);
      this.$router.push({name:'add'});
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
.search1 form{
    /* border: 1px solid black; */
    width: 80%;
    /* background-color:#f2f2f2; */
    border-radius: 0.05rem;
}
.search1 input{
    /* border: 1px solid red; */
    height: 0.3rem;
    padding: 0.05rem;
    width: 100%;
    /* border-radius: 0.05rem; */
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
.search_li{
        height: 0.56rem;
        padding-top: .15rem;
        border-bottom: .01rem solid #e4e4e4;
        background-color:#f2f2f2;
        
    }
.search_li h4{
         text-align: left;
         height: 0.2rem;
         font-size: .16rem;
         line-height: .18rem;
         margin: 0 .2rem .1rem .2rem;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
     }
.search_li p{
          text-align: left;
          font-size: .13rem;
          margin: 0 .2rem .1rem .2rem;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
</style>
