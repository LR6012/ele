<template>
   <div class='nav'>
  
<ul @onmousemove="enter()">
  
    <li v-for="item in custom" :key="item.id" >
        <router-link :to="{name:item.name,params:{id:item.id}}">
        <img :src="item.src" alt="">
        <p>{{item.title}}</p>
        </router-link>   
    </li>
</ul>
   </div>
</template>
<script>
import $ from "jquery";
import animations from "create-keyframe-animation";
export default {
  name: "nv",
  data() {
    return {
      custom: [
        {
          title: "川湘菜",
          id: 1,
          src: "../../static/img/1 (1).jpeg",
          path: "/cxg/",
          name: "cxg"
        },
        {
          title: "麻辣烫",
          id: 2,
          src: "../../static/img/1 (2).jpeg",
          path: "/mlt/",
          name: "mlt"
        },
        {
          title: "包子粥铺",
          id: 3,
          src: "../../static/img/1 (3).jpeg",
          path: "/bzzp/",
          name: "bzzp"
        },
        { title: "鲜花蛋糕", id: 4, src: "../../static/img/1 (4).jpeg" ,name:"dropdown"},
        { title: "日韩料理", id: 5, src: "../../static/img/2.jpeg" },
        { title: "果蔬生鲜", id: 6, src: "../../static/img/2 (1).jpeg" },
        { title: "汉堡薯条", id: 7, src: "../../static/img/2 (2).jpeg" },
        { title: "披萨意 面", id: 8, src: "../../static/img/2 (3).jpeg" },

        { title: "日韩料理", id: 9, src: "../../static/img/2.jpeg" },
        { title: "果蔬生鲜", id: 10, src: "../../static/img/2 (1).jpeg" },
        { title: "汉堡薯条", id: 11, src: "../../static/img/2 (2).jpeg" },
        { title: "披萨意面", id: 12, src: "../../static/img/2 (3).jpeg" },
        {
          title: "川湘菜",
          id: 13,
          src: "../../static/img/1 (1).jpeg",
          path: "/cxg/",
          name: "cxg"
        },
        {
          title: "麻辣烫",
          id: 14,
          src: "../../static/img/1 (2).jpeg",
          path: "/mlt/",
          name: "mlt"
        },
        {
          title: "包子粥铺",
          id: 15,
          src: "../../static/img/1 (3).jpeg",
          path: "/bzzp/",
          name: "bzzp"
        },
        { title: "鲜花蛋糕", id: 16, src: "../../static/img/1 (4).jpeg" }
      ]
    };
  },
  methods: {
    enter() {
      console.log("123");
      // r-='4rem',
      $("ul").animate(
        {
          left: "-4rem"
        },
        100,
        function() {
          if (left >= "-7rem") {
            $("ul").css("left", "0");
          }
        }
      );
    }
  }
};
</script>
<style scoped>
.nav {
  position: absolute;
  /* margin-left:-1rem ; */
  top: 0.43rem;
  left: 0rem;
  width: 100%;
  padding: 0 0 0 0.15rem;
  height: 2.1rem;
  background-color: white;
  overflow: auto;
}
ul {
  width: 195%;
  overflow: hidden;
  position: relative;
}
ul li {
  width: 0.9rem;
  float: left;
  font-size: 0.17rem
}
ul li img {
  width: 90%;
}
</style>