<template>
<div>
<div class="search">
  <router-link to="/takeaway">
  <span class="sp1"><</span>
  </router-link>
  <span class="sp2">搜索</span>
</div>
  <div class="search1">
    <input type="text" placeholder="请输入商家或美食名称" v-model="msg" id='input1' @input="myFunction()">
    <a href="#" class="search-del" @click="reset()">x</a>
    <button @click="submit()">提交</button>
  </div>
  <!-- 搜索的结果 -->
  <div class='result'>很抱歉,无搜索结果
  <!-- 显示所有商家 -->
  <ul>
    <li></li>
  </ul>
  </div>
  <!-- 搜索历史 -->
  <div class="content">
    <h4>搜索历史</h4>
    <li>
      <span>{{msg}}</span>
      <a href="#" class="search-del2" @click="del()">x</a>
    </li>
    <p @click="clear()">清空搜索历史</p>
    </div>
    <!-- 尾部组件显示 -->
    <Home></Home>
  </div>
  </div>
</template>
<script>
//引入jquery框架
import $ from "jquery";
import Home from "./home"
export default {
  name: "search",
  data() {
    return {
      msg: ""
    };
  },
  components:{
    Home
  },
  methods: {
    //监听键盘事件   键盘按下,x显示
    myFunction() {
      $(".search-del").css("display", "block");
    },
    // 清空历史纪录
    clear() {
      // 点击p标签,p的父元素div隐藏
      $(".content").hide();
      //点击搜索历史,重置输入框
      this.msg = "";
    },
    //点击x,清空输入框内容
    reset() {
      $("#input1").val("");
      $(".result").css("display", "none");
      $(".content").show();
      $(".content span").text = this.msg;
      $(".search-del").css("display", "none");
    },
    del() {
      $(".content").hide();
    },
    //点击提交按钮
    submit() {
      $(".result").css("display", "block");
    }
  }
};
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
  margin-left: 0.05rem;
  font-size: 0.25rem;
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
  /* border: 1px solid red; */
}
input,
button {
  /* 去除输入框点击时的默认样式  outline:none */
  outline: none;
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
  padding-left: 0.06rem;
}
.search-del {
  position: absolute;
  left: 70%;
  bottom: 0;
  font-size: 0.15rem;
  font-weight: 700;
  display: none;
}
.search-del2 {
  position: absolute;
  right: 5%;
  bottom: 30%;
  font-size: 0.15rem;
  font-weight: 700;
}
button {
  width: 0.77rem;
  height: 0.35rem;
  font-size: 0.15rem;
  font-weight: 700;
  border-radius: 0.05rem;
  background-color: #3190e8;
  border: none;
  color: white;
}
.content {
  display: none;
  /* border: 1px solid red; */
  color: black;
  position: relative;
}
.content h4 {
  font-size: 0.15rem;
  color: #666;
  line-height: 0.46rem;
  /* 首行文本的缩进 text-indent */
  text-indent: 0.12rem;
  font-weight: 700;
  background-color: #f5f5f5;
  height: 0.46rem;
}
.content p {
  text-align: center;
  height: 0.46rem;
  line-height: 0.46rem;
  border: 0.006rem solid #e4e4e4;
  background-color: #fff;
  color: #3190e8;
  font-weight: 700;
  font-size: 0.19rem;
}
.content li span {
  display: inline-block;
  text-indent: 0.12rem;
}
</style>
