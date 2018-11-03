<template>
    <div>
<div class="di">
    <!-- 头部 -->
 <div class="search">
      <span class="sp1">
    <router-link to="/zf">
    <img src="../../../static/img/右.png" alt="">
    </router-link>

    </span>
  <span class="sp2">订单备注</span>
</div> 
<ul class="u1">
    <p>快速选择</p>
    <!-- <li >
<span>不要辣</span>
<span>少点辣</span>
<span>多点辣</span>
<span>不要香菜</span>
<span>不要洋葱</span>
<span>不要醋</span>
<span>不要葱</span>
<span>去冰</span>
<span>少冰</span>
    </li> -->
    <li class="lk">
        <span v-for="(item, index) in data" :key="index" @click="ll(index)" >{{item.title}}</span>
    </li>
</ul>
<ul class="u2">
    <h3>其他备注</h3>
    <textarea name="" id="" cols="40" rows="10" placeholder="请输入备注内容(可不选)" class="tx"></textarea>
</ul>
<router-link to="/zf">
<button>确定</button>
</router-link>

</div>

    </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "remarks",
  data() {
    return {
      data: [
        {
          title: "不要辣",
          id: 1
        },
        {
          title: "少点辣",
          id: 2
        },
        {
          title: "多点辣",
          id: 3
        },
        {
          title: "不要香菜",
          id: 4
        },
        {
          title: "不要洋葱",
          id: 5
        },
        {
          title: "去冰",
          id: 6
        },

        {
          title: "不要醋",
          id: 7
        },
        {
          title: "少冰",
          id: 8
        },
        {
          title: "不要洋葱",
          id: 9
        },
        {
          title: "不要葱",
          id: 10
        }
      ]
    };
  },
  methods: {
    ll(index) {
      console.log(index);
      $(".lk span")
        .eq(index)
        .css({
          backgroundColor: "red"
        });
    }
  }
  // created(){
  //     let api = "https://elm.cangdu.org/v1/carts/1/remarks";
  //     this.$http.get(api).then(data=>{
  // this.data=data.data.remarks;
  // console.log(data.data)
  //     })

  // }
};
</script>

<style scoped>
.u2 {
  height: 4.2rem;
  margin-top: 0.2rem;
  border-top: 0.006rem solid gainsboro;
}
button {
  background-color: rgb(10, 168, 10);
  width: 95%;
  padding: 0.1rem;
  color: white;
  font-size: 0.2rem;
  margin-left: 0.1rem;
  border-radius: 0.05rem;
  /* margin-bottom: 1.6rem; */
  position: absolute;
  margin-top: -1.6rem;
}
.tx {
  margin-left: 0.2rem;
  background-color: gainsboro;
  font-size: 0.16rem;
}
h3 {
  padding: 0.1rem;
}
.di {
  background-color: white;
}
ul p {
  padding: 0.1rem;
  font-size: 0.18rem;
}
li span {
  display: flex;
  justify-content: space-around;
  border: 1px solid rgb(51, 51, 161);
  border-radius: 0.1rem;
  /* position: absolute; */
  text-align: center;
  width: 22%;
  float: left;
  margin: 0.05rem 0.15rem;
  padding: 0.05rem;
  font-size: 0.16rem;
}
.u1 {
  /* padding-bottom: 0.1rem; */
  height: 2rem;
  /* border: 1px solid black; */
  background-color: white;
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
</style>
