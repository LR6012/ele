<template>
  <div>
<!-- 头部 -->
 <div class="search">
      <span class="sp1">
        <router-link to="/takeaway">
    <img src="../../../static/img/右.png" alt="">
    </router-link>
    </span>
  <span class="sp2">{{cartName}}</span>
</div>    
  <!-- 分类导航 -->
  <ul class="dh">
  <ul class="ddh">
    <li @click="change()">
      {{cartName}}
      <img src="../../../static/img/下.png" alt="">
      </li>
    <li @click="change1()">排序
      <img src="../../../static/img/下.png" alt="">
    </li>
    <li  @click="change2()">筛选
      <img src="../../../static/img/下.png" alt="">
    </li>
  </ul>
   <ul class="info" v-show="flag1">
      <div>
        <li v-for="(item,index) in arr" :key="item.id" @click="add(index)">
          <span>
            <img src="https://elm.cangdu.org/img/default.jpg"  alt="" class="img1">
            {{item.name}}
          </span> 
          <span>{{item.count}} <img src="../../../static/img/左箭头 (1).png" alt=""></span> 
        </li>
      </div>
      <div>
        <li v-for="value in data" :key="value.id">{{value.name}}
          <span>{{value.count}}</span>
        </li>
      </div>
    </ul>
    <ul class="info1" v-show="flag2">
      <li>
        <img src="../../../static/img/厨师帽.png" alt="">
        <span>智能排序</span>
      </li>
      <li>
        <img src="../../../static/img/水果.png" alt="">
        <span>距离最近</span>
        </li>
      <li>
        <img src="../../../static/img/小吃.png" alt="">
       <span> 销量最高</span>

      </li>
      <li>
 <img src="../../../static/img/小吃.png" alt="">
        起送价最低
        </li>
      <li> <img src="../../../static/img/小吃.png" alt="">配送费最低</li>
      <li> <img src="../../../static/img/小吃.png" alt="">评分最高</li>
    </ul>
    <ul class="info2" v-show="flag3">
      <li>
        <p>配送方式</p>
        <div>
          <p><img src="../../../static/img/巨嘴鸟.png" alt="" class="nn">蜂鸟配送</p>
          </div>
      </li>
      <li>
        <p>商家属性(可以多选)</p>
        <div class="list">
          <li v-for="(item, index) in arrs" :key="index" @click="cl(index)">
          <!-- <p> -->
            <!-- <span>{{item.title}}</span> -->
            <img src="../../../static/img/品.png" class="dui">
            <span>{{item.content}}</span>
            <!-- </p> -->
          </li>
        </div>
      </li>
      <li class="last">
        <button >清空</button>
        <button @click="noshow()">确定</button>
      </li>
    </ul>
    </ul>
   <Seller></Seller>
  </div>
</template>

<script>
import Seller from "../../components/1-Takeaway/component/seller";
import $ from "jquery";
export default {
  name: "bzzp",
  data() {
    return {
      cartName:localStorage.getItem('cart_name'),
      arr: [],
      data: [],
      flag1: false,
      flag2: false,
      flag3: false,
      boll: false,
      arrs: [
        { title: "品", content: "品牌商家" },
        { title: "保", content: "外卖保" },
        { title: "达", content: "准时达" },
        { title: "付", content: "在线支付" },
        { title: "票", content: "开发票" },
        { title: "新", content: "新店" }
      ]
    };
  },
  components: {
    Seller
  },
  methods: {
    change() {
      $(".info2").css("display", "none");
      $(".info1").css("display", "none");
       $('.info').slideToggle(400);
      this.flag1 = !this.flag1;
      if (this.flag1 == true) {
        $("li")
          .eq(0)
          .css("color", "#3190e8");
        $("li")
          .eq(0)
          .find("img")
          .attr("src", "../../static/img/上.png");
          $("li")
          .eq(1)
          .css("color", "");
        $("li")
          .eq(1)
          .find("img")
          .attr("src", "../../static/img/下.png");
          $("li")
          .eq(2)
          .css("color", "");
        $("li")
          .eq(2)
          .find("img")
          .attr("src", "../../static/img/下.png");
      } else {
        $("li")
          .eq(0)
          .css("color", "");
        $("li")
          .eq(0)
          .find("img")
          .attr("src", "../../static/img/下.png");
      }
    },
    change1() {
      $(".info").css("display", "none");
      $(".info2").css("display", "none");
       $('.info1').slideToggle(400);
      this.flag2 = !this.flag2;
      if (this.flag2 == true) {
        $("li")
          .eq(1)
          .css("color", "#3190e8");
        $("li")
          .eq(1)
          .find("img")
          .attr("src", "../../static/img/上.png");
          $("li")
          .eq(0)
          .css("color", "");
        $("li")
          .eq(0)
          .find("img")
          .attr("src", "../../static/img/下.png");
          $("li")
          .eq(2)
          .css("color", "");
        $("li")
          .eq(2)
          .find("img")
          .attr("src", "../../static/img/下.png");
      } else {
        $("li")
          .eq(1)
          .css("color", "");
        $("li")
          .eq(1)
          .find("img")
          .attr("src", "../../static/img/下.png");
      }
    },
    change2() {
      $(".info").css("display", "none");
      $(".info1").css("display", "none");
       $('.info2').slideToggle(400);
      this.flag3 = !this.flag3;
      if (this.flag3 == true) {
        $("li")
          .eq(2)
          .css("color", "#3190e8");
        $("li")
          .eq(2)
          .find("img")
          .attr("src", "../../static/img/上.png");
          $("li")
          .eq(0)
          .css("color", "");
        $("li")
          .eq(0)
          .find("img")
          .attr("src", "../../static/img/下.png");
          $("li")
          .eq(1)
          .css("color", "");
        $("li")
          .eq(1)
          .find("img")
          .attr("src", "../../static/img/下.png");
      } else {
        $("li")
          .eq(2)
          .css("color", "");
        $("li")
          .eq(2)
          .find("img")
          .attr("src", "../../static/img/下.png");
      }
    },
    add(index) {
      console.log(this.arr);
      this.data = this.arr[index].sub_categories;
    },
    cl(index) {
      console.log(index);
      $(".list li")
        .eq(index)
        .css({
          color: "blue",
          fontWeight: "900"
        });
      $(".list li img")
        .eq(index)
        .attr("src", "../../../static/img/对.png");
    },
    noshow() {
      $(".info2").slideUp(200, function() {
        console.log("动画执行完毕");
      });
      // this.flag3=false;
    }
  },

  created() {
    let api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
    this.$http.get(api).then(data => {
      // console.log(data.data);
      this.arr = data.data;
      // console.log(this.arr[0].sub_categories[0].name);
    });
  }
};
</script>
<style scoped>
.dui {
  width: 0.15rem;
}
.nn {
  width: 0.2rem;
}

.ddh {
  padding: 0.05rem 0;
  margin-top: -0.2rem;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
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
.dh > ul:nth-of-type(1) {
  display: flex;
  justify-content: space-around;
}
.dh > ul:nth-of-type(1) li {
  width: 30%;
  height: 0.3rem;
  line-height: 0.25rem;
  text-align: center;
  font-size: 0.15rem;
}
.dh ul:nth-of-type(1) {
  background-color: white;
}
.dh ul:nth-of-type(1) li:nth-of-type(2) {
  border-left: 0.01rem solid #ccc;
  border-right: 0.01rem solid #ccc;
}
.dh > ul > li > img {
  width: 0.12rem;
  height: 0.1rem;
}
.dh .info {
  display: flex;
}
.dh .info div {
  width: 50%;
  height: 3.8rem;
}
.dh .info div:nth-of-type(1) li {
  background-color: #ccc;
}
.dh .info div li {
  height: 0.42rem;
  line-height: 0.4rem;
  /* text-align: center; */
  font-size: 0.15rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  border-bottom: 0.01rem solid #ccc;
}
.dh .info div:nth-of-type(2) li {
  border-bottom: 0.01rem solid #ccc;
}
.dh .info div:nth-of-type(2) {
  overflow: auto;
}
.info div:nth-of-type(1) li img {
  margin-top: 0.1rem;
  width: 0.15rem;
  height: 0.15rem;
  line-height: 0.15rem;
  /* border: 1px solid red; */
}
.dh .info1 {
  /* border: 1px solid red; */
}
.dh .info1 li {
  width: 100%;
  height: 0.46rem;
  line-height: 0.4rem;
  background-color: white;
  border: 0.001rem solid #ccc;
  /* position: fixed; */
  /* border: 1px solid red; */
}
.dh .info1 img {
  width: 0.2rem;
  height: 0.2rem;
}
.dh .info2 li {
  background-color: white;
  padding: 0.1rem;
}
.dh .info2 li p {
  font-size: 0.15rem;
  font-weight: 700;
}
.dh .info2 li:nth-of-type(1) div {
  text-align: center;
  margin-top: 0.05rem;
  width: 30%;
  padding: 0.1rem;
  border: 0.01rem solid #ccc;
}
.dh .info2 li:nth-of-type(2) .list {
  /* border: 1px solid black; */
  margin-top: 0.05rem;
  /* width:100%; */
  padding: 0.1rem;
  overflow: hidden;
  font-size: 0.15rem;
}
.dh .info2 li:nth-of-type(2) .list li {
  width: 25%;
  border: 0.01rem solid #ccc;
  float: left;
  margin-bottom: 0.05rem;
  text-align: center;
}
.dh .info2 li:nth-of-type(2) .list li:nth-of-type(2),
.dh .info2 li:nth-of-type(2) .list li:nth-of-type(5) {
  margin-left: 0.08rem;
  margin-right: 0.08rem;
}
.dh .info2 .last {
  /* border:1px solid palevioletred; */
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
}
.dh .info2 .last button {
  outline: none;
  border: none;
  width: 45%;
  padding: 0.1rem;
  background-color: #56d176;
  color: white;
}
.dh .info2 .last button:nth-of-type(1) {
  background-color: white;
  color: black;
}
.img1 {
  /* border: 1px solid red; */
}
.dh {
  z-index: 1;
  position: absolute;
  width: 100%;
}
</style>
