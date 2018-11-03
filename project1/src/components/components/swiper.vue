<template>
<div>
  <div id="hao3">
  <div id="hao">
         <router-link to="/search3"> 
          <img src="../../assets/搜索.png" alt="">
          </router-link>        
 </div>
 <div id="hao2">
    <router-link to='/search' ><span>{{locationname}}</span>
    </router-link>
 </div>
 <div id="hao1">
     <router-link to="/login"> 
              <span>登录|注册</span>
          </router-link>
 </div>
 </div>
<swiper id="d6" :options="swiperOption" ref="mySwiper">
       <swiper-slide id="d1" >
         <div class="s1" v-for="item in imgs1" :key="item.id" @click="get(item.title)">
           <router-link :to="{name:item.name,params:{id:item.id}}">
         <img  width="40"  :src="item.src" alt="">
         </router-link>
         <p>{{item.title}}</p>
         </div>
         </swiper-slide>
         <swiper-slide id="d2">
         <div class="s1" v-for="(item,index) in imgs2" :key="index" @click="get(item.title)">
           <router-link :to="{name:item.name,params:{id:item.id}}">
         <img  width="40"  :src="item.src" alt="">
         </router-link>
         <p>{{item.title}}</p>         
         </div>
         </swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
</swiper> 
 </div>

</template>

<script>

//引入loading样式
// import { Loading } from "element-ui";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import img1 from "../../../static/img/1 (1).jpeg";
import img2 from "../../../static/img/1 (2).jpeg";
import img3 from "../../../static/img/1 (3).jpeg";
import img4 from "../../../static/img/1 (4).jpeg";
import img5 from "../../../static/img/2 (1).jpeg";
import img6 from "../../../static/img/2 (2).jpeg";
import img7 from "../../../static/img/2 (3).jpeg";
import img8 from "../../../static/img/2.jpeg";
import img9 from "../../../static/img/3 (1).jpeg";
import img10 from "../../../static/img/3 (2).jpeg";
import img11 from "../../../static/img/3 (3).jpeg";
import img12 from "../../../static/img/3 (4).jpeg";
import img13 from "../../../static/img/4 (1).jpeg";
import img14 from "../../../static/img/4 (2).jpeg";
import img15 from "../../../static/img/4 (3).jpeg";
import img16 from "../../../static/img/4 (4).jpeg";
//创建组件
let Swiper = {
  //组件名
  name: "swiper"
};
//导出模块:组件必须是default
export default {
  Swiper,
  components: {
    swiper,
    swiperSlide, 
  },
  data: () => ({
    data: [],
     imgs1: [
      { title: "川湘菜", src: img1, path: "/bzzp/",
          name: "bzzp",id:1},
      { title: "麻辣烫", src: img2 , path: "/cxg/",
          name: "bzzp",id:2},
      { title: "包子粥铺", src: img3, path: "/mlt/",
          name: "bzzp" ,id:3},
      { title: "鲜花蛋糕", src: img4, path: "/bzzp/",
          name: "bzzp" ,id:4},
      { title: "日韩料理", src: img5, path: "/bzzp/",
          name: "bzzp", id:5},
      { title: "果蔬生鲜", src: img6, path: "/bzzp/",
          name: "bzzp",id:6 },
      { title: "汉堡薯条", src: img7, path: "/bzzp/",
          name: "bzzp" ,id:7},
      { title: "披萨意面", src: img8 , path: "/bzzp/",
          name: "bzzp",id:8}
    ],
    imgs2: [
      { title: "甜品饮品", src: img1, path: "/bzzp/",
          name: "bzzp",id:9},
      { title: "商超便利", src: img2 , path: "/cxg/",
          name: "bzzp",id:10},
      { title: "美食", src: img3, path: "/mlt/",
          name: "bzzp" ,id:11},
      { title: "简餐", src: img4, path: "/bzzp/",
          name: "bzzp" ,id:12},
      { title: "新店特惠", src: img5, path: "/bzzp/",
          name: "bzzp", id:13},
      { title: "准时达", src: img6, path: "/bzzp/",
          name: "bzzp",id:14 },
      { title: "预定早餐", src: img7, path: "/bzzp/",
          name: "bzzp" ,id:15},
      { title: "土豪推荐", src: img8 , path: "/bzzp/",
          name: "bzzp",id:16}
 
    ],
     locationname:localStorage.getItem("locationname"),
    swiperOption: {
      notNextTick: true,
      loop: true,
      initialSlide: 0,
      autoplay: false,
      effect: "slide",
      speed: 800,
      direction: "horizontal",
      on: {
        slideChangeTransitionEnd: function() {}
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    },
    swiperSlides: [1, 2]
  }),
  methods:{
    get(n){
      localStorage.setItem('cart_name',n);
    }
},
  created() {
      //  let loadingInstance = Loading.service({
      //   fullscreen:true
      // });
   
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api).then(data => {
        //在成功的时候,关闭加载提示
        // loadingInstance.close();
      this.data = data.data;
    });
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
#sum {
  /* border: 1px solid lightgray; */
  margin-top: 3%;
  width: 100%;
  height: 0.3rem;
}
#sum img {
  width: 0.2rem;
  margin-top: 0.05rem;
  margin-left: 0.1rem;
}
.s1 {
  /* border: 1px solid yellow; */
  width: 25%;
  height: 30%;
  text-align: center;
}
#d6 {
  width: 100%;
  height: 40%;
  /* border: 1px solid lightgray; */
  background-color: white;
}
#d1 {
  /* border: 1px solid black; */
  padding-bottom: 5%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.5rem;
  font-size: 0.16rem
}
#d2 {
  /* border:1px solid black; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.5rem;
  font-size: 0.16rem
}
#hao3 {
  /* border: 1px solid black; */
  background: #3190e8;
  height: 0.5rem;
  width: 100%;
  position: fixed;
  z-index: 6;
}
#hao2{
  width:1.5rem;
  height: 0.25rem;
  float: left;
  text-align: center;
  margin-top: 0.15rem;
  margin-left: 0.45rem;
  line-height: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#hao2 span {
  font-size: 0.18rem;
  color: white;
  
}
#hao img {
  width: 0.3rem;
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.15rem;
}
#d1 img,
#d2 img {
  width: 60%;
  margin-top: 0.1rem;
}
#hao1 span {
  float: right;
  color: white;
  margin-top: 0.2rem;
  margin-right: 0.15rem;
  font-size: 0.16rem;
}
.swiper-slide {
  height: 2rem;
}
</style>
