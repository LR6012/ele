<template>
    <div>
 <div class="search">
  <!-- <router-link to="/mine/logindetail"> -->
      <span class="sp1" >
    <img :src="img" alt="" @click="hh()">
    </span>
  <!-- </router-link> -->
  <span class="sp2">收货地址</span>
  <span class="sp3" v-if="bol" @click="change()">编辑</span>
  <span class="sp3" v-else  @click="change()">完成</span>
</div>
<ul class="list">
    <li v-for="(item,index) in data" :key="index" class="list1">
        <p>{{item.name}}</p>
        <p>{{item.address}}</p>
        <!-- <p>{{item.id}}</p> -->
        <a href="#" @click="clear(index,item.id)">X</a>
    </li>
</ul>
  <div class="addsite">
      <router-link to='/address/add' class="aa">
      <p>
          <span>新增地址</span>
          <span>
               <img :src="img2" alt="" class="img2">
          </span>
      </p>
      </router-link>
  </div>
    </div>
</template>

<script>
import $ from "jquery";
import img2 from "./imgs/左 (1).png";
import img1 from "./imgs/左箭头 (1).png";
export default {
  name: "adrs",
  data() {
    return {
      img: img2,
      img2: img1,
      bol: true,
      data: [],
      datas:[]
    };
  },
  methods: {
    hh() {
      this.$router.go(-1);
    },
    change() {
      //点击,当前布尔值取反
      this.bol = !this.bol;
      $(".list a").css("display", "block");
    },
    clear(n, m) {
      $(".list .list1").eq(n).hide();
      var userId = this.$store.state.usermsg.user_id;
      var address_id = m;
      let apI =
        "https://elm.cangdu.org/v1/users/" +
        userId +
        "/addresses/" +
        address_id;
      this.$http.delete(apI).then(data => {
        this.datas = data.data;
        if(this.datas.success){
            console.log("删除地址成功")
            // alert('删除地址成功');
        }else{
            console.log(this.datas.message);
        }
      })
    }
  },
  created() {
    var userId = this.$store.state.usermsg.user_id;
    let api = "https://elm.cangdu.org/v1/users/" + userId + "/addresses";
    this.$http.get(api).then(data => {
      this.data = data.data;
    });
    if (this.data.length === 0) {
      $(".list").css("display", "none");
    } else {
      $(".list").css("display", "block");
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
  display: flex;
  justify-content: space-between;
}
.sp1 {
  color: white;
  margin-left: 0.01rem;
  font-size: 0.25rem;
}
.sp1 img {
  /* border: 1px solid red; */
  margin-top: 0.05rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
.sp3 {
  margin-right: 0.1rem;
}
.addsite {
  border-top: 0.01rem solid gainsboro;
}
.addsite p {
  margin-top: 0.1rem;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0.15rem;
  border: 0.01rem solid #d9d9d9;
}
.addsite p .img2 {
  width: 0.15rem;
  /* border: 1px solid red; */
}
.aa {
  color: black;
}
.list {
  /* border: 1px solid red; */
  /* padding: 0.1rem;     */
  background-color: #fff8c3;
  /* display: none;  */
}
.list li {
  border-bottom: 0.01rem solid gainsboro;
  background-color: white;
  position: relative;
}
.list li:first-child {
  background-color: #fff8c3;
}
.list p {
  padding: 0.05rem;
  margin-left: 0.1rem;
  line-height: 0.15rem;
  font-size: 0.15rem;
}
.list a {
  display: none;
  position: absolute;
  right: 0.1rem;
  top: 0.15rem;
  color: #999;
}
</style>
