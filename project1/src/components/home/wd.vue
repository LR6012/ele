<template>
    <div class="wd">
        <li v-for="item in arr" :key="item.id">
          <router-link :to="item.path">
            <img :src="item.src" alt="" class="img">
    <span>{{item.title}}</span>
    <img src="../../../static/img/左箭头 (1).png">
    </router-link>
        </li>
    </div>
</template>
<script>
export default {
  name: "wd",
  data() {
    return {
      arr: [
        {
          src: "../../../static/img/订单.png",
          title: "我的订单",
          id: 1,
          path: "/order"
        },
        {
          src: "../../../static/img/购物袋.png",
          title: "积分商城",
          id: 2,
          path: "/order"
        },
        {
          src: "../../../static/img/皇冠.png",
          title: "饿了么会员卡",
          id: 3,
          path: "/vipcard"
        },
        {
          src: "../../../static/img/订单.png",
          title: "服务中心",
          id: 4,
          path: "/service"
        },
        {
          src: "../../../static/img/图标.png",
          title: "下载饿了么APP",
          id: 5,
          path: "/download"
        }
      ]
    };
  }
};
</script>

<style scoped>
.wd {
  /* border: 1px solid red; */
  position: absolute;
  top: 2.5rem;
  width: 100%;
  height: 2.1rem;
  margin: 0.05rem 0;
}
li {
  /* border-bottom: 0.01rem solid rgb(216, 211, 211); */
   height: 0.45rem; 
  background-color: white;
  font-size: 0.16rem
}
li:nth-child(3) {
  border: none;
  margin-bottom: 0.08rem;
}
li:nth-child(5) {
  border: none;
}
span {
  /* font-size: 0.1rem; */
  width: 0.1rem;
  position: relative;
  top: 0.2rem;
  left: 0;
  color: black;
}
img {
  width: 0.15rem;
  /* border: 1px solid black; */
  float: right;
  position: relative;
  top: 0.16rem;
  margin-right: 0.1rem;
}
.img {
  width: 0.15rem;
  float: left;
  margin-top: 0.02rem;
  margin-left: 0.1rem;
  /* border: 1px solid red; */
}
li:nth-child(1):before {
  content: "";
  position: absolute;
  left: 0.4rem;
  top: 0.44rem;
  width: 88%;
  height: 0.01rem;
  background-color: rgb(216, 211, 211);
}
li:nth-child(2):before {
  content: "";
  position: absolute;
  left: 0.4rem;
  top: 0.9rem;
  width: 88%;
  height: 0.01rem;
  background-color: rgb(216, 211, 211);
}
li:nth-child(4):before {
  content: "";
  position: absolute;
  left: 0.4rem;
  top: 1.9rem;
  width: 88%;
  height: 0.01rem;
  background-color: rgb(216, 211, 211);
}
</style>
