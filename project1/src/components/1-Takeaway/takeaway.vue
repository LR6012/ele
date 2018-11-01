<template>
    <div>
       <Swiper></Swiper>
      <div id="seller_header">
        <img src="../../../static/img/商家.png" alt="">
        <p>附近商家</p>
      </div>
        <Seller></Seller>
    </div>
</template>
<script>
import Seller from "./component/seller.vue";
import Swiper from '../../components/components/swiper'
export default {
  name: "takeaway",
  data() {
    return {  
        // id1:localStorage.getItem("geohash")
    }
  },
  components: {
    Seller,
    Swiper
  }
  /*
  利用计算属性取出vuex中的数据
  computed: {
    id(){
      return this.$store.state.id;
    }
  }*/
  };
</script>

<style scoped>
  #seller_header{
    padding: 0.1rem .1rem;
    margin-top: 0.2rem;
    background-color: white;
  }
  #seller_header img{
    width: 0.18rem;
    height: 0.18rem;
    margin-right: .05rem;
  }
  #seller_header p{
    display: inline;
    font-size: .13rem; 
    
  }
</style>