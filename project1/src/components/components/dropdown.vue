<template>
    <div class="hk">
   <ul>
    <li class="ll">
        <router-link to='/head'><img src="../../static/img/右.png" alt="">
        </router-link>
        <span>包子粥铺</span>
    </li>
</ul>
<div class="kk">
<div @click="change()" class="ccc">
    <span>商超便利</span>
    <img src="../../static/img/下.png" alt="">
    
</div>

<div @click="change()" class="ddd">
    <span>排序</span>
    <img src="../../static/img/下.png" alt="">
    
</div>
<div class="eee">
    <span>筛选</span>
    <img src="../../static/img/下.png" alt="">
</div>
</div>
<!-- <div class="kk1" v-show="bol">
    <ul class="ll1">
        <li v-for="(item,index) in arr1" :key="item.id" @click="edit(index)">
            <section>
            <span>{{item.title}}</span>
            <img src="../assets/左箭头 (1).png" alt="">
</section>
        </li>
        </ul>
        <ul class="ll2">
        <li v-for="item in arr" :key="item.id" >
<span>{{item.title}}</span>
       </li>  
    </ul>
</div> -->
    </div>


</template>

<script>
import $ from "jquery";
export default {
  name: "dropdown",
  data() {
    return {
      bol:true
    };
  },
  methods: {
    change() {
      this.bol = !this.bol;
      if(this.bol==true){
   $(".ccc img").attr("src","../../static/img/上.png");
     $(".ccc span").css({color:"#3190e8"});
       $(".ccc span").text("分类");
      }else{
          $(".ccc img").attr("src","../../static/img/下.png");
          $(".ccc span").css({color:"black"});
          $(".ccc span").text("商超便利");
      }  
     },
     edit(index){
       console.log(index);
         var list = this.arr1.map(function(item,index){
             return item.title;
         })
         console.log(list[index]);
     }
  }
};
</script>

<style scoped>
.ll2 p {
  float: right;
}
.ll2 li {
  border-bottom: 0.001rem solid gainsboro;
  font-size: 0.2rem;
  height: 0.25rem;
  padding: 0.1rem 0;
}
.kk1 .ll2 {
  border: 0.001rem solid gainsboro;
  position: absolute;
  float: right;
  width: 50%;
  top: 0.48rem;
  right: 0;
  background-color: white;
  
}
.kk1 .ll1 {
  border-bottom: 0.001rem solid gray;
  float: left;
  width: 100%;
  /* height: 0.3rem; */
}
.ll1 img {
  width: 0.16rem;
  float: right;
}
.kk1 .ll1 li {
  border-bottom: 0.001rem solid gray;
  font-size: 0.2rem;
  width: 50%;
  height: 0.25rem;
  padding: 0.1rem 0;
}
.kk div img {
  width: 0.1rem;
}
.kk div {
  border: 1px solid blue;
  width: 33%;
  /* line-height: 0.3rem; */
  padding: 0.15rem 0.327rem;
}
.kk {
  font-size: 0.16rem;
  display: flex;
  justify-content: space-around;
  background-color: white;
}
.hk {
  margin-top: -0.6rem;
  position: absolute;
  top: 16%;
}
.ll {
  background-color: rgb(45, 59, 182);
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
}
.ll img {
  width: 0.3rem;
  float: left;
  /* border: 1px solid black; */
  margin: 0.1rem 0 0 0.1rem;
}
.ll span {
  font-size: 0.16rem;
  color: white;
  position: absolute;
  left: 45%;
  top: 25%;
}
</style>
