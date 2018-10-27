<template>
    <div>
        <div class="search">
            <router-link to="/mine">
                <span class="sp1">
                    <img src="../home/imgs/左 (1).png" alt="">
                </span>
            </router-link>
            <span class="sp2">搜索</span>
        </div>
        <div class="sh">
            <div class="search1">
            <input type="search" placeholder="请输入商家或美食名称"  id='input1' v-model="title">
            <button @click="submit()">提交</button>
        </div>
  
    </div>

    <ol class="liu" else>
        <ul>
            <h4 v-show="bbol" class="ss">搜索历史</h4>
        <!-- <h4 v-show="!bbol">很抱歉,没有搜索结果</h4> -->
            <li v-for="(item,index) in arr" :key=index >
                <span v-show="bbol" @click="handle(index)" >x</span>
                <h3>{{item.title}}</h3>
            </li>
            <p @click="change()" v-show="bbol">清空历史记录</p>
        </ul>
    </ol>

<!-- <router-link to="/shopdetail"><button class="oo">点击去往店铺页</button>"></router-link> -->
    <Home></Home>

    </div>
    
</template>

<script>
import $ from "jquery";
import Home from "../home/home";
export default {
  name: "search2",
  data() {
    return {
      bol: false,
      title: this.title,
      arr: [],
      bbol: false
    };
  },
  components: {
    Home  
  },
  methods: {
    submit() {
      this.bol = !this.bol;
      this.bbol = true;
      // console.log("我要这天,再遮不住我眼");
      var data = {
        title: this.title
      };
      this.arr.push(data);
      this.title = "";
      $("ul").css("display", "block");
    },

    change() {
      // document.getElementsByTagName("ol").remove();
      // $("li").slideUp("500");
      $("li").remove();
      $("ul").css("display", "none");
      this.title = "";
    },
    handle(index) {
      //  this.bbol=!true;
      this.arr.splice(index, 1);
    }
  }
};
</script>

<style>
.oo {
  position: fixed;
  top: 3rem;
}
.liu span {
  float: right;
}
.liu li {
  border-bottom: 0.006rem solid gainsboro;
  padding: 0.2rem;
}
.liu {
  /* text-align: center; */
  background-color: #fff;
  position: absolute;
  top: 1.5rem;
  width: 100%;
  border: 0.006rem solid gainsboro;
}
.liu p {
  font-size: 0.21rem;
  text-align: center;
  padding: 0.16rem;
  color: #3190e8;
  font-weight: 600;
}
.sh {
  /* border: 1px solid black; */
  padding: 0.1rem 0;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0.46rem;
}
.ss {
  font-weight: 700;
  position: absolute;
  top: -0.31rem;
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
.sp1 img {
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 50%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.search1 {
  text-align: center;
  position: relative;
  left: 0.2rem;
  /* border: 1px solid red; */
  width: 90%;
}
input,
button {
  /* 去除输入框点击时的默认样式  outline:none */
  outline: none;
}
.search1 button {
  font-size: 0.16rem;
  background-color: #3190e8;
  color: white;
  border: 0.01rem solid #3190e8;
  border-image-repeat: 0.015rem;
  padding: 0.05rem 0.14rem;
  margin-left: 0.1rem;
}
.result {
  color: black;
  display: none;
  text-align: center;
}
input {
  background-color: #f5f5f5;
  width: 2.7rem;
  height: 0.35rem;
  font-size: 0.15rem;
  font-weight: 700;
  padding: 0.1rem;
  margin-left: -0.1rem;
}
</style>
