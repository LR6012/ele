<template>
    <div class="wd">
    <li>
    <router-link to="/order">
    <img  src="../../../static/img/订单.png" alt="" class="img">
    <span>我的订单</span>
    <img src="../../../static/img/左箭头 (1).png">
    </router-link>
    </li>
    <li>
    <img src="../../../static/img/购物袋.png" alt="" class="img">
    <span>积分商城</span>
    <img src="../../../static/img/左箭头 (1).png">
    </li>
    <li>
    <router-link :to="this.path">
     <img src="../../../static/img/皇冠.png" alt="" class="img">
    <span>饿了么会员卡</span>
    <img src="../../../static/img/左箭头 (1).png">
    </router-link>
    </li>
    <li>
    <router-link to="/service">
    <img src="../../../static/img/订单.png" alt="" class="img">
    <span>服务中心</span>
    <img src="../../../static/img/左箭头 (1).png">
    </router-link>
    </li>
    <li>
    <router-link to="/download">
    <img src="../../../static/img/图标.png" alt="" class="img">
    <span>下载饿了么APP</span>
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
      path:'',
      path1:'/vipcard1',
      path2:'/vipcard'
    };
  },
  created(){
    if(this.$store.state.denglu){
      this.path = this.path2;
    }else{
      this.path = this.path1;
    }
  }
};
</script>

<style scoped>
.wd {
  /* border: 1px solid red; */
  position: absolute;
  top: 2.3rem;
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
