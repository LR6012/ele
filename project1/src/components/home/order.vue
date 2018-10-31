<template>
<div class="search">
  <router-link to="/mine">
    <span class="sp1">
    <img :src="img2" alt="">
    </span>
  </router-link>
  <span class="sp2">订单列表</span>
  <div class="orderList">
    <!-- 订单列表展示 -->
    <ul>
      <div v-for="item in data" :key="item.id" class="div1">
      <li>
        <!-- 图片地址需要拼接  查看原网页地址格式 -->
        <img :src="'https://elm.cangdu.org/img/'+item.restaurant_image_url" class="img1">
      </li>
      <li>
          <p>
          <span>{{item.restaurant_name}}
            <img :src="img" alt="" class="img2">
          </span>
          <span>{{item.status_bar.title}}</span>
          </p>
       <p>{{item.formatted_created_at}}</p>
       <p>
         <span>{{item.basket.group[0][0].name}}</span>
         <span>¥{{item.total_amount}}</span>
         </p>
        <div><p>再来一单</p></div>
      </li>
      </div>
    </ul>
  </div>

</div>
</template>
<script>
import img2 from './imgs/左 (1).png'
import img1 from './imgs/小箭头.png'
export default {
  name: "order",
  data() {
    return {
      data: [],
      img:img1,
      img2:img2
    };
  },
  created() {
    let api = "https://elm.cangdu.org/bos/orders?offset=0&limit=10";
    this.$http.get(api).then(data => {
      // console.log(data);       
      this.data = data.data;
      // console.log(this.data[0]);
      // console.log(this.data[0].basket.group[0][0].name);
    });
  }
};
</script>

<style scoped>
.search {
  height: 0.46rem;
  /* border: 1px solid red; */
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2 {
  position: absolute;
  right: 40%;
  top: 0;
  font-size: 0.19rem;
  font-weight: 700;
}
/*订单列表*/
.orderList {
  /* border: 1px solid red; */
  /* background-color: white; */
}
.orderList .img1 {
  width: 0.47rem;
  height: 0.47rem;
  /* border: 1px solid blue; */
  margin: 0 0.1rem 0 0.05rem;
}
.orderList .div1{
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  color: black;
  margin-bottom: 0.1rem;
  background-color: white;
}
.orderList ul li{
  /* border: 1px solid blueviolet; */
  margin-top: 0.1rem;
}
ul li p {
  padding: 0.01rem;
  width: 3rem;
  display: flex;
  line-height: 0.19rem;
  justify-content: space-between;
  /* border: 1px solid paleturquoise; */
  font-size: 0.18rem;
}
ul li p span:nth-child(2){
  font-size: 0.15rem;
  color: #333;
}
ul li>p+p{
   color: #999;
   font-size: 0.15rem;
}
ul li p:nth-of-type(3){
  margin: 0.15rem 0;
}
ul li p:nth-of-type(3) span:nth-child(1){
    color: #333
}
ul li p:nth-of-type(3) span:nth-child(2){
 color: #f60;
 font-weight: bold;
}
ul li div{
  width: 0.6rem;
   margin-left:78%;
  border:1px solid rgb(49, 144, 232);
  border-radius: 0.05rem;
}
ul li div p{
  width: 0.58rem;
  font-size: 0.14rem;
  color:rgb(49, 144, 232); 
  /* border: 1px solid red; */
}
.img2{
  margin-left: -0.09rem;
  width:0.18rem;
  height: 0.15rem;
  /* border: 1px solid red; */}

</style>
