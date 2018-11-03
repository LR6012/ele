<template>
    <div>
    <div class="search">
  <!-- <router-link to="/address"> -->
      <span class="sp1">
    <img :src="img" alt="" @click="hh()">
    </span>
  <!-- </router-link> -->
  <span class="sp2">新增地址</span>
</div>
<div class="adddetail">
    <input type="search" placeholder="请输入你的名字" v-model="name">
    <router-link to='/add/adddetail'>
    <input type="search" placeholder="小区/写字楼/学校等" v-model='address'>
    </router-link>
    <input type="search" placeholder="请填写详细送餐地址" v-model="detail">
    <input type="search" placeholder="请填写能够联系到您的手机号" v-model="phone" @input="edit()" @blur="change()">
    <p class="p1"></p>
    <input type="search" placeholder="备用联系电话(选填)" v-model="spare">
</div>
    <button @click="plus()">新增地址</button>
    </div>
</template>

<script>
import $ from "jquery";
import img2 from "./imgs/左 (1).png";
export default {
  name: "adds",
  data() {
    return {
      img: img2,
      address: localStorage.getItem("address"),
      name: "",
      detail: "",
      phone: "",
      spare: "",
    };
  },
  methods: {
    hh() {
      this.$router.go(-1);
    },
    edit() {
      $(".p1").text("请输入正确的手机号");
      $(".p1").css({
        color: "#ea3106",
        "font-size": "0.15rem",
        "margin-top": "0.05rem"
      });
    },
    change() {
      $(".p1").text("");
    },
    plus() {
      var userId = this.$store.state.usermsg.user_id;
      let api = "https://elm.cangdu.org/v1/users/" + userId + "/addresses";
      this.$http({
        method: "post",
        url: api,
        withCredentials: true, // 默认的
        data: {
          user_id: userId,
          address: this.address,
          address_detail: "345453",
          geohash: "11",
          name: this.name,
          phone: this.phone,
          tag: "12",
          sex: 1,
          phone_bk: "",
          tag_type: "2"
        }
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
              alert("添加地址成功");
          this.$router.push({ name: "address" });
        }
      });
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
.adddetail {
  margin-top: 0.1rem;
  background-color: white;
  /* border: 1px solid red; */
  padding-left: 0.12rem;
}
input {
  background-color: #f2f2f2;
  width: 95%;
  padding: 0.1rem;
  margin-top: 0.15rem;
  font-size: 0.16rem;
}
input,
button {
  outline: none;
  border: none;
}
input:last-child {
  margin-bottom: 0.1rem;
}
button {
  width: 95%;
  margin: 2%;
  padding: 0.1rem;
  color: white;
  border-radius: 0.03rem;
  background-color: #4cd964;
  font-size: 0.15rem;
  margin-top: 0.15rem;
}
/* .p1{
    margin-top: 0.05rem;
    display: none;
} */
</style>
