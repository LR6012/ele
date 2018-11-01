<template>
<div class="total">
    <div class="hongbao" v-for="(item,index) in data" :key="index">
        <div class="hongbao_left">
            <span>¥</span>
            <span>{{item.amount}}</span>
            <span>.</span>
            <span>0</span>
            <p>{{item.description_map.sum_condition}}</p>
        </div>
        <div class="hongbao_right">
            <p>{{item.name}}</p>
            <p>{{item.end_date}}到期</p>
            <p>{{item.description_map.phone}}</p>
        </div>
        <div class="hongbao_time">{{item.description_map.validity_delta}}</div>    
    </div>
    <footer class="hongbao_footer">
           <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p> 
        </footer>
</div>
</template>

<script>
export default {
  name: "radpacket",
  data(){
      return {
          data:[]
      }
  },
  created() {
    var userId = this.$store.state.usermsg.user_id;
    var api =
      "https://elm.cangdu.org/promotion/v2/users/" +
      userId +
      "/hongbaos?limit=20&offset=0";
      this.$http.get(api).then(data => {
      this.data = data.data;
      console.log(this.data);
    });
  }
};
</script>

<style scoped>
.total {
  width: 3.424rem;
  height: 1.2894rem;
  box-sizing: border-box;
  /* border-radius: 0.15rem; */
  margin-bottom: 0.1rem;
  margin-left: 0.16rem;
}
.hongbao {
  height: 0.5639rem;
  font-family: Microsoft Yahei;
  border-top: 0.03rem solid #ff5340;
  background-color: #fff;
  padding: 0.2rem 0.1rem 0.18rem;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.hongbao_left {
  width: 0.8rem;
  height: 0.55rem;
  border-right: 0.01rem dotted #ccc;
}
.hongbao_left span {
  color: #ff5340;
  font-weight: 700;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.hongbao_left span:nth-of-type(1) {
  font-size: 0.18rem;
}
.hongbao_left :nth-of-type(2) {
  font-size: 0.35rem;
  font-weight: normal;
}
.hongbao_left :nth-of-type(3) {
  font-size: 0.18rem;
}
.hongbao_left :nth-of-type(4) {
  font-size: 0.18rem;
}
.hongbao_left p {
  font-size: 0.12rem;
  color: #999;
}
.hongbao_right {
  width: 1.5853rem;
  margin-left: 0.4rem;
  margin-top: 0.05rem;
}
.hongbao_right p {
  height: 0.128rem;
  list-style-type: disc;
  margin-left: -0.2rem;
  font-size: 0.09rem;
  color: #999;
}
.hongbao_right p:nth-of-type(1) {
  height: 0.216rem;
  font-size: 0.17rem;
  color: #666;
  font-style: normal;
  margin-left: -0.2rem;
}
.hongbao_time {
  font-size: 0.16rem;
  color: #ff5340;
}
.hongbao_footer {
  height: 0.1155rem;
  background-color: #f9f9f9;
  padding: 0.1rem 0.1rem 0.1rem 0.2rem;
  font-size: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  color: #999;
}
</style>