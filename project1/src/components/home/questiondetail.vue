<template>
    <div>
        <div class="search">
  
  <span class="sp1">
    <img src="../../../static/img/zuo.png" alt="" @click="hh()">
    </span>
  
  <span class="sp2">服务中心</span>
</div>
<ol>
    <li v-for="item in data" :key="item.id">{{item}}</li> 
</ol>
    </div>


</template>

<script>
// import img2 from '../../../static/img/左箭头.png'
export default {
  name: "questiondetail",
  data() {
    return {
      data: [],
    
    };
  },
  methods:{
hh(){
  this.$router.go(-1)
}
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api).then(data => {
      console.log(data);
      this.data = data;
    });
  }
};
</script>

<style scoped>
.search{
  height: 0.46rem;
  /* border: 1px solid red; */
  line-height: 0.46rem;
  color:white;
  background-color:#3190e8;
  position: relative;
}
.sp1 img{
  margin-top: 0.05rem;
  width: 0.25rem;
}
.sp2{
  position: absolute;
  right:40%;
  top:0;
  font-size: 0.19rem;
  font-weight: 700;
}

</style>
