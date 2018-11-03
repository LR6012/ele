<template>
<div>
  <loading v-if="number != 1"></loading>
<div class="dfd">
  <div class="wrap">  
</div>
<div class="hd">
  <router-link to="/takeaway">
    <img src="../../../static/img/zuo.png" class="oneImg">
</router-link>

    <img src="../../../static/img/小帅.jpg" alt="" class="twoImg">
<h4>{{shopname}}</h4>
<p class="one">商家配送／分钟送达／配送费¥5</p>
<p class="two">公告:欢迎光临,用餐高峰请提前下单,谢谢</p>
<router-link to="/shopdetail/dpdetail">
<img src="../../../static/img/you.png" class="three"></router-link>

</div>
<div class="nav">
    <div class="sc" v-show="!bol"></div>
    <span @click="handle()">商品</span>  
    <span @click="change()">
      评价
<div class="sc2" v-show="bol"></div>
    </span>   
</div>
</div>


<div class="lll" v-show="!bol">
 <ul class="bk">
  <li v-for="(itemss,index) in da" :key="index">
    <a :href="'#top'+itemss.id">{{itemss.name}}</a>
  </li>
 </ul>
<div class="content">
<div class="boby">
  <li v-for="(itemsss,index) in da" :key="index" class="lk">
  <div class="hd2" :id="'top'+itemsss.id">
  <li>
  <strong>{{itemsss.name}}</strong>
  <span class="sp1">{{itemsss.description}}</span>
  <span class="sp2">...</span>
  </li>
</div>
<!-- <p class="rx">热销</p> -->
<div v-for="(val,ind) in itemsss.foods" :key='ind' class="ds">
  <img src="../../../static/img/小帅.jpg" class="th">
  <p class="rg">{{val.name}}</p>
  <p class="zp">{{val.name}}</p>
  <p class="ms">{{val.description}}</p>
  <p class="ll">
    <span>月售{{val.rating_count}}份</span>
    <span>好评率{{val.satisfy_rate}}%</span>
  </p>
  <p class="mm">{{val.description}}</p>
  <img src="../../../static/img/减.png" alt="" class="jt"  @click.stop="jj()"  @click="oddNums(val.name,val._id,val.count)">
  <!-- <p class="pppp" @click.stop="gwc()">{{count1}}</p> -->
  <p class="pppp">{{val.count}}</p>
  <img src="../../../static/img/加.png" alt="" class="jh" @click="get(val.name,val._id,val.count)">
  <!-- <img src="../../../static/img/加.png" alt="" class="jh" @click="gwc()"> -->
  <span class="sj">${{val.specfoods[0].price}}</span>
</div>
  </li>
</div>
</div>
</div>
<div v-show="bol">
<div class="wp" >
<li class="l1" v-for="item in data" :key="item.id">
           <p class="p1">{{Number(data.overall_score).toFixed(1)}}</p>
       <p class="p2">综合评分</p>
     <p class="p3">高于周边商家{{Number(data.compare_rating).toFixed(3)*100}}%</p>
       </li>
<li class="l2">
    <span>服务态度{{Number(data.service_score).toFixed(1)}}</span>
    <span class="start1"><el-rate
  v-model="data.service_score"
  allow-half
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
    <span>菜品评论{{Number(data.food_score).toFixed(1)}}</span>
    <span class="start1"><el-rate
  v-model="data.service_score"
  allow-half
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
    <span>送达时间</span>
    <span> {{data.deliver_time}}分钟</span>
</li>
</div>
<div class="pl" >
    <li v-for="(item, index) in datas" :key="index">
      <p>{{item.name}}</p>({{item.count}})
    </li>

</div>
<div class="bb">
    <ul class="boby1" v-for="(item, index) in dat" :key="index">
<li>
<img :src="'https://fuss10.elemecdn.com/1/5f/'+item.avatar" class="img1">
</li>     
<li>
<p class="bp1">
    <span>{{item.username}}</span>
    <span>{{item.rated_at}}</span>
</p>
<p class="p2">
  <span class="start2"><el-rate
  v-model="item.rating_star"
  allow-half
  text-color="#ff9900"
  score-template="{value}">
</el-rate></span>
<span>{{item.time_spent_desc}}</span>
</p>
</li>
<li class="xs" v-for="(itm, index) in item" :key="index">
  <span v-for="(iem, index) in itm" :key="index">
 <img :src="'https://fuss10.elemecdn.com/'+iem.image_hash+'.jpeg'">
  </span>
   
</li>
<li class="bq">
   <span v-for="(ite,index) in item" :key="index">
     <span v-for="(it, index) in ite" :key="index">{{it.food_name}}</span>     
   </span>

</li>
    </ul>
</div>
</div>
  <div class="db" @click="appr()">
   <img src="../../../static/img/购物车空.png" alt="" class="gwc">
   <li class="ii" >
  <img src="../../../static/img/购物车空.png" alt="" class="gwc2">
     <span @click="show()" class="sz">{{val}}</span>
   </li>
<div class="ppp1">${{20*count2}}</div>
<div class="ppp2">运送费$5</div>
<router-link to="/zf">
<p class="js">去结算</p>
</router-link>
  </div>
  <ul class="aa" v-show="flag">
    <li v-for="(value,index) in newData" :key="index">
      <p>食品名称:{{value.name}}</p>
      <p>食品数量:{{value.count1}}</p>
    </li>
  </ul>
  </div>
</template>

<script>
import Loading from "../1-Takeaway/loading";
import $ from "jquery";
import Vue from "vue";

export default {
  name: "shopdetail",
  data() {
    return {
      number: 1,
      newData: [],
      data: [],
      flag: false,
      bol: false,
      datas: [],
      dat: [],
      da: [],
      count: 0,
      val: 0,
      shopname: localStorage.getItem("shop_name"),
      name: "",
      arr: [],
      count1: 0,
      count2: 0
    };
  },
  methods: {
    appr() {
      this.flag = !this.flag;
    },
    //点击+号  购物车中显示商品
    get(n, id, cont) {
      this.name = n;
      this.da.forEach(value => {
        value.foods.forEach(val => {
          if (val._id == id) {
            val.count += 1;
            val.isHave = true;
            this.count1 = val.count;
            // this.count2 += cont;
          }
        });
      });
      this.count2 += this.count1;
      //点击按钮时,更改对象中的name和count值
      var news = {
        name: this.name,
        count1: this.count1
      };
      this.newData.push(news);
      this.$store.commit("shopFoods", this.da);
    },
    //减号 点击数量减少
    oddNums(n, id, cont) {
      this.da.forEach(value => {
        value.foods.forEach(val => {
          if (val._id == id) {
            if (val.count != 0) {
              val.count -= 1;
              this.count1 = val.count;
            }
            if (val.count == 0) {
              alert("不能再减了");
              val.count = 0;
              val.isHave = false;
            }
          }
        });
      });
      this.count2 -= this.count1;
      var news = {
        name: this.name,
        count1: this.count1
      };
      this.newData.pop(news);
      this.$store.commit("shopFoods", this.da);
    },
    jj() {
      // if(this.val<=0|this.count<=0|this.vall<=0){
      //  alert("不能再减了");
      // }else{
      // this.val--;
      // this.count -= 20;
      // this.vall-=1;
      // }
    },
    gwc() {
      this.vall += 1;
      this.val++;
      this.count += 20;
      $(".gwc2").css({
        display: "block"
      });
      $(".sz").css({
        display: "block"
      });
    },
    change() {
      this.bol = true;
    },
    handle() {
      this.bol = false;
    }
  },
  created() {
    this.number -= 1;
    var _this = this;
    var shopId = localStorage.getItem("shop_id");
    let api =
      "https://elm.cangdu.org/ugc/v2/restaurants/" + shopId + "/ratings/scores";
    this.$http.get(api).then(data => {
      _this.data = data.data;
      // console.log(data.data);
    });
    let apl =
      "https://elm.cangdu.org/ugc/v2/restaurants/" + shopId + "/ratings/tags";
    this.$http.get(apl).then(data => {
      _this.datas = data.data;
    });
    let bod =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      shopId +
      "/ratings?offset=0&limit=10";
    this.$http.get(bod).then(data => {
      _this.dat = data.data;
      // console.log(data.data);
    });

    let dp = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + shopId;
    this.$http.get(dp).then(data => {
      console.log(data.data);
      //-----------------------
      var shopFoods = data.data;
      shopFoods.forEach(value => {
        value.foods.forEach(val => {
          Vue.set(val, "count", 0);
          Vue.set(val, "isHave", false);
        });
      });
      _this.$store.commit("shopFoods", shopFoods);
      _this.da = shopFoods;
       this.number += 1;
    });
  },
  watch: {
    da(news) {
      // console.log(news);
    }
  },
  components: {
    Loading
  }
};
</script>

<style scoped>
.dfd{
  position: fixed;
  top: 0;
}
.pppp {
  margin: 0.2rem 2.3rem;
  width: 0.2rem;
  /* display: none; */
}
.jt {
  width: 0.2rem;
  margin: 0rem 1rem -0.5rem 1.9rem;
  padding: 0;
  /* display: none; */
}
.sz {
  background-color: red;
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.1rem;
  text-align: center;
  border-radius: 50%;
  color: white;
  margin: -0.2rem 0 0rem -0.7rem;
  display: block;
  line-height: 0.15rem;
  /* display: none; */
}
.ii img {
  background-color: #3190e8;
}
.jh {
  /* position: absolute; */
  margin: -0.48rem 0 0.4rem 2.4rem;
  width: 0.2rem;
}
.ppp1 {
  overflow: hidden;
  margin: 0.05rem 0.9rem 0 -0.2rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
  display: inline-block;
}
.ppp2 {
  /* border:1px solid black; */
  margin: 0.35rem 0 0 -1.3rem;
  font-weight: bold;
  color: white;
}
.js {
  background-color: #4cd964;
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
  position: absolute;
  float: right;
  right: 0.15rem;
  top: 0;
  height: 95%;
  font-size: 0.2rem;
  color: white;
  line-height: 0.2rem;
  text-align: center;
}
.gwc2 {
  display: none;
  width: 0.3rem;
  height: 0.3rem;
  padding: 0.1rem;
  background-color: #333;
  border-radius: 50%;
  margin: -0.15rem 0.2rem -0.15rem -1.1rem;
  border: 0.05rem solid #333;
}
.gwc {
  width: 0.3rem;
  height: 0.3rem;
  padding: 0.1rem;
  background-color: #333;
  border-radius: 50%;
  margin: -0.15rem 0.5rem -0.15rem 0.1rem;
  border: 0.05rem solid #333;
}
.db {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.55rem;
  background-color: #333;
  padding: 0 0.15rem;
}
.bb {
  background-color: white;
}
.bq {
  margin: 1.4rem -2.9rem;
  background-color: white;
  width: 0.5rem;
  height: 0.2rem;
  text-align: center;
  border-radius: 0.05rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.15rem;
  border: 0.01rem solid gainsboro;
}
.xs img {
  width: 0.5rem;
  margin: -1rem -2.9rem;
}
.p2 span:nth-child(2) {
  font-size: 0.1rem;
}
.bp1 span:nth-child(2) {
  margin: 0 0rem 0 1.5rem;
}
.start2 {
  float: left;
  font-size: 0.1rem;
  width: 1.2rem;
}
.img1 {
  border-radius: 50%;
  width: 0.45rem;
  margin: 0rem 0.1rem;
}

.boby1 {
  width: 100%;
  height: 2rem;
  display: flex;
  /* margin: 2.9rem 0rem 0 0rem; */
  /* align-items: center; */
  border: 1px solid rgb(240, 239, 239);
  /* padding:0.1rem 1rem 0.6rem 0.2rem; */
}
.boby1 > .bp1 {
  display: flex;
  justify-content: space-between;
}
.boby1 li:nth-of-type(2) {
  /* width: 80%; */
  height: 0.2rem;
  margin: 0.1rem 0;
}
.pl li {
  width: 10%;
  padding: 0.02rem 0.15rem;
  text-align: center;
  /* line-height: 0.1rem; */
  margin: 0.08rem 0.03rem 0.08rem;
  float: left;
  border-radius: 0.05rem;
  background-color: #ebf5ff;
  font-size: 0.08rem;
}
.pl {
  width: 99.9%;
  padding-top: 0.1rem;
  height: 1.8rem;
  margin-top: 2.7rem;
  background-color: white;
  border: 1px solid rgb(235, 233, 233);
}
.l1 {
  width: 50%;
  text-align: center;
  margin: 0.1rem 0 0 0rem;
  position: absolute;
  top: 2.4rem;
  
}
.wp {
  background-color: white;
  height: 1.3rem;
  /* overflow: scroll; */
 
  
}
.pl li:nth-child(1) {
  background-color: #3190e8;
}
.l2 {
  width: 49%;
  float: right;
  height: 1rem;
  font-size: 0.14rem;
  margin-top: 2.5rem;
  /* overflow: auto; */
  z-index: -1;

}
.p1 {
  font-size: 0.5rem;
  color: #f60;
}
.p2 {
  font-size: 0.15rem;
  margin: 0.1rem 0;
}
.p3 {
  margin: 0.1rem 0;
}
.sj {
  display: inline-block;
  color: #ff0000;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 700;
  margin: -0.7rem 0 0.5rem 0.7rem;
  border: 0.01rem dotted red;
  float: left;
}
.mm {
  border: 0.01rem dotted red;
  color: #ff0000;
  padding: 0 0.15rem;
  font-size: 0.12rem;
  margin-top: 2rem;
  display: inline-block;
  margin: 0.1rem 0 0rem 0.8rem;
  border-radius: 0.3rem;
}
.ll {
  margin: 0.1rem 0 0 0.8rem;
  font-size: 0.12rem;
}
.ms {
  width: 50%;
  font-size: 0.12rem;
  margin: 0.1rem 0.8rem 0 0.8rem;
}
.zp {
  float: right;
  color: #ff0000;
  border: 0.01rem dotted red;
  padding: 0 0.1rem;
  border-radius: 0.3rem;
  width: 0.5rem;
  font-size: 0.16rem;
  margin-top: -0.15rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.boby img {
  padding: 0.1rem;
}
.rx {
  width: 0.4rem;
  padding: 0.1rem 0.18rem 0.1rem;
  transform: rotate(-45deg);
  margin: -0.5rem 0 0 0 ;
  background-color: #4cd964;
  color: white;
  font-size: 0.12rem;

  /* z-index: -1; */
}
.rg {
  margin: -0.8rem 0 0 0.8rem;
  font-size: 0.18rem;
}
.boby strong {
  display: inline;
  font-size: 0.18rem;
}
.lk {
  width: 100%;
  height: 7rem;
  margin-bottom: 0.05rem;
  padding-bottom: 0.1rem;
  /* overflow: hidden; */
   overflow: scroll;
}
.boby {
  /* width: 1rem; */
  height: 3.7rem;
  width: 73%;
  position:fixed;
  float: right;
  right: 0;
  top: 2.2rem;
  overflow: hidden;
}
.hd2 {
  /* border:1px solid black; */
  /* margin-bottom: 0.6rem; */
  padding: 0.07rem;
  background-color: gainsboro;
}
.th {
  width: 0.6rem;
  margin: 0.05rem 0 0 0.05rem;
}
.sp1 {
  font-size: 0.12rem;
}
strong {
  font-weight: 700;
  font-size: 0.2rem;
}
.sp2 {
  font-size: 0.2rem;
  border: 1px solid balck;
  /* position: absolute; */
  /* position: fixed; */
  float: right;
  z-index: -19;
}
.slide {
  width: 0.05rem;
  height: 0.55rem;
  background-color: #3190e8;
  position: absolute;
}
.bk {
  /* position: relative; */
  position: absolute;
  top: 2.1rem;
  float: left;
  z-index: -1;
}
.bk li {
  width: 0.6rem;
  
  padding: 0.2rem;
  border-bottom: 0.001rem solid rgb(207, 205, 205);
  border-right: 0.001rem solid rgb(207, 205, 205);
}
.bk span {
  font-size: 0.15rem;
  /* font-weight: 700; */
}
.bk{
   overflow: hidden;
  /* overflow-y:visible */
}

.sc {
  width: 0.35rem;
  height: 0.03rem;
  position: absolute;
  top: 2rem;
  left: 0.75rem;
  background-color: #3190e8;
  font-size: 0.12rem;
}
.sc2 {
  width: 0.36rem;
  height: 0.03rem;
  position: absolute;
  top: 2rem;
  left: 2.65rem;
  background-color: #3190e8;
  font-size: 0.12rem;
}
.nav span {
  color: black;
}
.nav {
  width: 100%;
  justify-content: space-around;
  display: flex;
  font-size: 0.16rem;
  padding: 0.15rem 0;
  background-color: white;
  border-bottom: 0.006rem solid gainsboro;
}
.three {
  width: 0.2rem;
  float: right;
  top: 0.5rem;
  right: 0.1rem;
  position: absolute;
}
h4 {
  position: absolute;
  left: 1.1rem;
  top: 0.2rem;
  font-weight: bold;
  color: white;
  font-size: 0.18rem;
}
.one,
.two {
  font-size: 0.1rem;
  position: absolute;
  left: 1.1rem;
  top: 0.5rem;
  color: white;
  font-size: 0.1rem;
}
.two {
  top: 0.85rem;
}
.twoImg {
  width: 0.8rem;
  padding: 0.12rem;
  position: fixed;
  top: 0.15rem;
  left: 0.05rem;
}
.wrap {
  width: 3.75rem;
  height: 1.6rem;
  background: url(../../../static/img/小帅.jpg) repeat-y;
  background-size: cover;

}
.oneImg {
  
  width: 0.22rem;
  position: fixed;
  /* padding: 0.15rem; */
  top: 0.05rem;
  left: 0.1rem;
  /* border: 1px solid black; */
  z-index: 2;
}
/*  设置超出滚动  父级设置:overflow:hidden  */
.content {
  overflow: scroll;
  height: 2rem;
}
.content::-webkit-scrollbar {
  display: none;
}
a {
  color: black;
}
.aa {
  width: 100%;
  /* height: 1rem; */
  border: 1px solid rebeccapurple;
  position: fixed;
  left: 0;
  bottom: 0.8rem;
  background-color: white;
}
.aa li {
  border-bottom: 0.01rem solid rgb(207, 205, 205);
}
.ds{
  /* border:1px solid black; */
  overflow: hidden;
  z-index: -19;

  
}
</style>
