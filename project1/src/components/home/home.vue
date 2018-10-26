<template>
<div>
    <!--路由出口-->
  <router-view></router-view>
  <div class="home">
    <li v-for="(img,index) in imgs" :key="img.id" @click="handle(index)">
    <router-link :to="img.path">
    <img :src="img.src1" alt="" v-if="img.flag">
    <img :src="img.src2" alt="" v-else>
    <span>{{img.title}}</span>
    </router-link>
    </li>
  </div>
</div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      imgs: [
        {
          title: "外卖",
          src1: require("./imgs/饿了么.png"),
          src2: require("./imgs/饿了么1.png"),
          path:'/takeaway',
          flag:true,
          id: 1
        },
        {
          title: "搜索",
          src1: require("./imgs/指南针.png"),
          src2: require("./imgs/指南针1.png"),
          path:'/search3',
          flag:true,
          id: 2
        },
        {
          title: "订单",
          src1: require("./imgs/订单.png"),
          src2: require("./imgs/订单1.png"),
          path:'/order',
          flag:true,
          id: 3
        },
        {
          title: "我的",
          src1: require("./imgs/我的.png"),
          src2: require("./imgs/我的1.png"),
          path:'/mine',
          flag:true,
          id: 4
        }
      ]
    };
  },
  methods:{
    handle(index){
      // 循环数组中的所有对象,将flag全部置为true   把当前点击元素的flag设为false
      this.imgs.map(function(item,index){
        return item.flag = true;
      })
      this.imgs[index].flag = false;
    }
  }
};
</script>

<style scoped>
.home {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.7rem;
  border-top: 0.03rem solid beige;
  display: flex;
  /* text-align: center; */
  justify-content: space-around;
  /* border: 1px solid red; */
  background-color: white;
}
.home li {
  margin: 0.06rem;
}
.home li img {
  width: 0.3rem;
  height: 0.3rem;
  margin-bottom: 0.05rem;
  /* border: 1px solid blue; */

}
.home span {
  display: block;
  color: black;
  font-size: 0.16rem;
  /* border: 1px solid palegreen; */
}
</style>
