<template>
    <ol class="ll">
        <li v-for="item in data" :key="item.id" class="total"  @click="change(item.id,item.name)">
          <router-link to="/shopdetail" >
            <div id="div1">
                <div id="div1_1">
                    <img :src="item.image" alt="" class="seller_img">
                </div>
                    
                <div id="div2">
                    <div id="div3">
                        <div>
                            <h4 id="seller_brand">品牌</h4>
                            <h4 id="seller_store">{{item.name}}</h4>
                        </div>
                        
                        <ol>
                            <li class="seller_service" >保</li>
                            <li class="seller_service">准</li>
                            <li class="seller_service">票</li>
                        </ol>
                    </div>
                    <div id="div4">
                        <div>
                            <!-- 星星评分 -->
                                <el-rate
                                v-model="item.rating"
                                disabled
                                show-score
                                text-color="#ff9900"
                                score-template="{value}">

                                
                                </el-rate>
                            <span id="seller_sale">月售{{item.recent_order_num}}单</span>
                        </div>
                        <div>
                            <span id="seller_distribution">蜂鸟专送</span>
                            <span id="seller_time">准时达</span>
                        </div>
                        
                    </div>
                    <div id="div5">
                        <div>
                            <p>¥{{item.float_minimum_order_amount}}起送/配送费约¥{{item.float_delivery_fee}}</p>
                        </div>
                        <div>
                            <span>{{item.distance}}</span>
                            <span>/</span>
                            <span id="seller_deliveryTime">{{item.order_lead_time}}</span>
                        </div>
                        
                    </div>
           
                </div>
            </div>  
          </router-link>   
        </li>
    </ol> 
</template>

<script>
export default {
  name: "seller",
  data() {
    return {
      data: []
    };
  },
  methods:{
       change(id,name){
        localStorage.shop_id = id;
        localStorage.shop_name = name;
    }
  },
  created() {
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http.get(api).then(data => {
      // console.log(data);
      this.data = data.data;
      // console.log(this.data);
      for(var i=0;i<this.data.length;i++){
         this.data[i].image ='https://elm.cangdu.org/img/'+this.data[i].image_path;
      };
      // console.log(this.data[1].supports[0].icon_name);
    });
    
  }
};
</script>

<style scoped>
.ll{
  /* margin-top: ; */
  /* overflow: auto; */
  width: 100%;
  height: 80%;
  /* border: 1px solid blue; */
  background-color: white;
  color: black
}
div#div1 {
    border: 1px solid rgb(231, 231, 236);
    border-top-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
padding-top: 0.25rem;
}
#div1 {
  height: 0.7rem;
  width: 3.53rem;
  padding: 0.15rem 0.1rem;
  display: flex;
  justify-content: space-between;
color: black
}
#div1_1 {
  width: 0.63rem;
  height: 0.63rem;
  margin-right: 0.1rem;
}
#div2 {
  width: 3rem;
  height: 0.7rem;
  display: inline;
}
.seller_img {
  width: 0.64rem;
  height: 0.64rem;
  
}
#div3 {
  display: flex;
  justify-content: space-between;
}
#seller_brand {
  width: 0.7rem;
  font-size: 0.13rem;
  border-radius: 0.03rem;
  background-color: rgb(255, 238, 0);
  color: black;
  text-align: center;
  display: inline;
}
#seller_store {
  display: inline;
  font-size: .16rem;
  font-weight:550;
}
.seller_service {
  width: 0.01rem;
  font-size: 0.01rem;
  padding: 0.01rem;
  border-radius:0.03rem; 
  border: 0.005rem solid rgb(148, 143, 143);
  display: inline;
  color: #999
}
.el-rate {
  display: inline;
  font-size: 0.1rem;
}
#seller_sale {
  width: 0.37rem;
  height: 0.11rem;
  font-size: 0.1rem;
  display: inline;
}
#seller_distribution {
  background-color: rgb(84, 182, 240);
  color: aliceblue;
  font-size: 0.1rem;
}
#seller_time {
  width: 0.24rem;
  height: 0.11rem;
  color: rgb(84, 182, 240);
  border: 0.01rem solid rgb(84, 182, 240);
  font-size: 0.1rem;
}
#div4 {
  padding-top: 0.1rem;                                       
  display: flex;
  justify-content: space-between;
}

#seller_deliveryTime {
  color: rgb(84, 182, 240);
}
#div5 {
  padding-top: 0.1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.11rem;
}
</style>
<style>
  .el-rate__item{
    width: 0.094rem;
  }
  .el-rate__icon{
    font-size: .1rem;
  }
  .el-rate__text{ 
    font-size: 0.1rem;
  }
</style>
