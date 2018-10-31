<template>
    <div>
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
<<<<<<< HEAD
=======
    
    
    <span @click="change()">
      评价
<div class="sc2" v-show="bol"></div>
    </span>
   
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    
    
    <span @click="change()">
      评价
<div class="sc2" v-show="bol"></div>
    </span>
</div>
<div class="lll" v-show="!bol">
<<<<<<< HEAD
 <ul class="bk" @click="slide()">
   <div class="slide"></div>
    <li  v-for="(itemss, index) in da" :key="index">
=======
 <ul class="bk" @click="slide(index)">
   <div class="slide"></div>
    <li  v-for="(itemss, index) in da" :key="index">
      
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    <span>{{itemss.name}}</span>
  </li>
  
 </ul>
<div class="hd2">
  <li>
    <strong>热销榜</strong>
  <span class="sp1">往事纷争,你总太天真</span>
  <span class="sp2">...</span>
  </li>
</div>
<div class="boby">
  <li v-for="(itemsss,index) in da" :key="index" class="lk">

    <p class="rx">热销</p>

  <img src="../../../static/img/小帅.jpg" class="th">
<p class="rg">{{itemsss.foods[0].name}}</p>
<p class="zp">{{itemsss.name}}</p>
<p class="ms">{{itemsss.description}}</p>
<p class="ll">
  <span>月售{{itemsss.foods[0].rating_count}}份</span>
  <span>好评率{{itemsss.foods[0].satisfy_rate}}%</span>
</p>
<p class="mm">{{itemsss.description}}</p>

<img src="../../../static/img/减.png" alt="" class="jt"  @click.stop="jj()">
<<<<<<< HEAD
<p class="pppp" @click.prevent="gwc()">{{vall}}</p>
<img src="../../../static/img/加.png" alt="" class="jh" @click="gwc()">
<span class="sj">${{itemsss.foods[0].specfoods[0].price}}</span>
  </li>
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
<img :src="'https://fuss10.elemecdn.com/'+item.avatar+'.jpeg'" class="img1">
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
  <div class="db">
   <img src="../../../static/img/购物车空.png" alt="" class="gwc">
   <li class="ii" >

     <img src="../../../static/img/购物车空.png" alt="" class="gwc2" @click="show()">
     <span @click="show()" class="sz">{{val}}</span>
   </li>
<div class="ppp1" v-model="count">${{count}}</div>
<div class="ppp2">运送费$5</div>
<p class="js">去结算</p>

  </div>
   

=======
<p class="pppp" @click.stop="gwc()">{{vall}}</p>
<img src="../../../static/img/加.png" alt="" class="jh" @click="gwc()">
<span class="sj">${{itemsss.foods[0].specfoods[0].price}}</span>
  </li>
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
<img src="{'https://fuss10.elemecdn.com/'+item.image
_hash+'.jpeg' ?'//elm.cangdu.org/'+item.image
_hash+'.jpg'}?{'https://fuss10.elemecdn.com/'+item.avatar+'.jpeg'}+{'//elm.cangdu.org/'+item.avatar+'.jpg'}" class="img1">
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
  <div class="db">
   <img src="../../../static/img/购物车空.png" alt="" class="gwc">
   <li class="ii" >
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25

     <img src="../../../static/img/购物车空.png" alt="" class="gwc2" @click="show()">
     <span @click="show()" class="sz">{{val}}</span>
   </li>
<div class="ppp1" v-model="count">${{count}}</div>
<div class="ppp2">运送费$5</div>
<p class="js">去结算</p>
  </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "shopdetail",
  data() {
    return {
      data: [],
      bol: false,
      // value5: 4.5,
      datas: [],
      dat: [],
      da: [],
      count: 0,
      val:0,
      vall:0,
<<<<<<< HEAD
     shopname:localStorage.getItem('shop_name') 
      
=======
      shopname:localStorage.getItem('shop_name')  
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    };
  },

  methods: {
<<<<<<< HEAD
change(shopname){
        localStorage.shop_name=shopname;
        console.log(localStorage.shop_name);
    }
    ,
=======
    

>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    jj(){
      if(this.val<=0|this.count<=0|this.vall<=0){
alert("不能再减了");
      }else{
this.val--;
      this.count -= 20;
      this.vall-=1;
      }
      
    }
    ,
    gwc() {
      this.vall+=1;
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
    },
<<<<<<< HEAD
    slide() {
=======
    slide(index) {
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
      $(".slide").css(
        {
          top: -$(this.li).index() * $(".slide").height() + "px"
        },
        500
      );
      console.log($(this).index());
    }
  },
  created() {
    let api = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores";
    this.$http.get(api).then(data => {
      this.data = data.data;
      // console.log(data.data);
    });
    let apl = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
    this.$http.get(apl).then(data => {
      this.datas = data.data;
      // console.log(data.data);
    });
    let bod =
      "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
    this.$http.get(bod).then(data => {
      this.dat = data.data;
      // console.log(data.data);
    });
    let dp = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1";
    this.$http.get(dp).then(data => {
      this.da = data.data;
      // console.log(data.data[0].foods[0].name);
<<<<<<< HEAD
      console.log(this.da[0].foods[0].attributes[1].icon_name);
=======
      // console.log(this.da[0].foods[0].attributes[1].icon_name);
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
    });
  }
};
</script>

<style scoped>
.pppp{
  margin: 0.2rem 2.3rem;
  width: 0.2rem;
  /* display: none; */
}
.jt{
width: 0.2rem;
margin: 0rem 1rem -0.5rem 1.9rem;
padding: 0;
/* display: none; */
}
.sz{
  background-color: red;
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.1rem;
  text-align: center;
  border-radius: 50%;
  color: white;
  margin: -0.6rem 0 0rem -0.65rem;
  display: block;
  line-height: 0.15rem;
  display: none;
}
.ii img{
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
<<<<<<< HEAD
  width: 10%;
  padding: 0.02rem 0.15rem;
=======
  /* width: 10%; */
  padding: 0.02rem 0.1rem;
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
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
  height: 1.7rem;
  margin-top: 0.2rem;
  background-color: white;
  border: 1px solid rgb(235, 233, 233);
}
.l1 {
  width: 50%;
  text-align: center;
  margin: 0.1rem 0 0 0rem;
  position: absolute;
  top: 1.8rem;
}
.wp {
  background-color: white;
  height: 1.6rem;
}
.pl li:nth-child(1) {
  background-color: #3190e8;
}
.l2 {
  width: 49%;
  float: right;
  margin: 0.4rem 0rem 0 0rem;
  font-size: 0.14rem;
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
  font-size: 0.16rem;
  margin-top: -0.15rem;
}
.boby img {
  padding: 0.1rem;
}
.rx {
  width: 0.4rem;
  padding: 0.3rem 0.18rem 0.1rem;
  transform: rotate(-45deg);
  margin: -0.25rem;
  background-color: #4cd964;
  color: white;
  font-size: 0.12rem;

  z-index: -1;
}
.rg {
  margin: -0.75rem 0 0 0.8rem;
  font-size: 0.18rem;
}
.boby strong {
  display: inline;
  font-size: 0.18rem;
}
.lk {
  width: 100%;
<<<<<<< HEAD
  height: 2rem;
=======
  height: 1.7rem;
>>>>>>> 47ab1e2ee1160f441a3834ddc0bc608776052f25
  margin-bottom: 0.05rem;
  background-color: white;
  padding-bottom: 0.1rem;
  overflow: hidden;
}
.boby {
  width: 1rem;
  height: 1.2rem;
  width: 73%;
  position: absolute;
  right: 0;
  top: 2.3rem;
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
  position: absolute;
  right: -0.5rem;
  top: 0.08rem;
}
.hd2 {
  border: 1px solid balck;
  /* width: 0.2rem; */
  /* float: right; */
  position: absolute;
  left: 1rem;
  padding: 0.2rem;
  /* font-size: 0.12rem; */
}

.slide {
  width: 0.05rem;
  height: 0.55rem;
  background-color: #3190e8;
  position: absolute;
}
.bk {
  position: relative;
  top: 0;
  float: left;
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
.sc {
  width: 0.35rem;
  height: 0.03rem;
  position: absolute;
  top: 1.55rem;
  left: 0.75rem;
  background-color: #3190e8;
  font-size: 0.12rem;
}
.sc2 {
  width: 0.36rem;
  height: 0.03rem;
  position: absolute;
  top: 1.55rem;
  left: 2.62rem;
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
  margin-top: 0rem;
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
  position: absolute;
  top: 0.1rem;
  left: 0rem;
}
.wrap {
  width: 100%;
  z-index: -1;
  height: 1.2rem;
  background: url(../../../static/img/小帅.jpg) repeat-y;
  background-size: cover;
  /* -webkit-filter: blur(0.05rem);
  -moz-filter: blur(0.05rem);
  -o-filter: blur(0.05rem);
  -ms-filter: blur(0.05rem);
  filter: blur(0.05rem); */
}
.oneImg {
  width: 0.22rem;
  position: absolute;
  /* padding: 0.15rem; */
  top: 0.05rem;
  left: 0.1rem;
  /* border: 1px solid black; */
  z-index: 2;
}
</style>
