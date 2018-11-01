<template>
<div>
<div class="total" v-for="(value,index) in data" :key="index">
    <div class="hongbao">
        <div class="hongbao_left">
            <span>¥</span>
            <span>{{value.amount}}</span>
            <span>.</span>
            <span>0</span>
            <p>{{value.description_map.sum_condition}}</p>
        </div>
        <div class="hongbao_right">
            <p>{{value.name}}</p>
            <p>{{value.description_map.validity_periods}}</p>
            <p>{{value.description_map.phone}}</p>
        </div>
        <img class="hongbao_time" src="../../../static/img/过期.png" alt=""> 
    </div>
    <!-- <footer class="hongbao_footer">
           <p>限品类：快餐便当、特色菜系</p> 
        </footer> -->
</div>
</div>
</template>

<script>
export default {
  name: "overdue",
  data() {
    return {
      data: []
    };
  },
  created() {
    var userId = this.$store.state.usermsg.user_id;
    let api =
      'https://elm.cangdu.org/promotion/v2/users/'+userId+'/expired_hongbaos?limit=8&offset=0';
    this.$http.get(api).then( data => {
        this.data = data.data;
        console.log(this.data);
    })
  }
};
</script>

<style scoped>
.total {
  width: 3.424rem;
  height: 1.2894rem;
  box-sizing: border-box;
  /* border-radius: 0.15rem; */
  margin-bottom: 0.3rem;
  margin-left: 0.16rem;
  /* border: 1px solid red; */
}
.hongbao {
  height: 0.6639rem;
  font-family: Microsoft Yahei;
  border-top: 0.03rem solid #ccc;
  background-color: #fff;
  padding: 0.2rem 0.1rem 0.18rem;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.hongbao_left {
  width: 1.4rem;
  height: 0.65rem;
  border-right: 0.01rem dotted #ccc;
  /* border: 1px solid red; */
}
.hongbao_left span {
  color: #ccc;
  font-weight: 700;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.hongbao_left span:nth-of-type(1) {
  font-size: 0.18rem;
}
.hongbao_left :nth-of-type(2) {
  font-size: 0.4rem;
  font-weight: normal;
}
.hongbao_left :nth-of-type(3) {
  font-size: 0.18rem;
}
.hongbao_left :nth-of-type(4) {
  font-size: 0.18rem;
}
.hongbao_left p {
  /* line-height: 0.35rem; */
  font-size: 0.05rem;
  color: #999;
}
.hongbao_right {
  width: 1.5853rem;
  margin-left: 0.3rem;
  margin-top: 0.05rem;
}
.hongbao_right p {
  height: 0.128rem;
  list-style-type: none;
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
  width: 0.8rem;
  height: 0.7rem;
}
.hongbao_footer {
  height: 0.1155rem;
  background-color: rgba(175, 175, 180, 0.4);
  padding: 0.1rem 0.1rem 0.1rem 0.2rem;
  font-size: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  color: #999;
}
</style>