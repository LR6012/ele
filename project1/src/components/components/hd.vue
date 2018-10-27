<template>
  <div class="toubu">
    <div id="header">
        <router-link to='/search3'><img src="../../assets/搜索.png" alt=""></router-link>
        <router-link to='/' id="span1"><span >{{data.name}}</span></router-link>
        <div id="span2">
          <router-link to='/login' id="span3"><span>登陆</span></router-link>
          <span>|</span>
          <router-link to='/login1' id="span4"><span>注册</span></router-link>
        </div>
    </div>
    <router-view></router-view>
    <div>
      <Nv></Nv>
    </div>
    
</div>
       
</template>

<script>
import Nv from "./nv";
export default {
  name: "hd",
  data(){
    return{
      data:''
    }
  },
  components: {
    Nv
  },
  //   data:()=>({
  // data: [],
  // loading:"true"
  //   }),
  created() {
    var geohash = this.$route.query.geohash;
    // console.log(geohash);
    let api = "https://elm.cangdu.org/v2/pois/"+geohash;
    this.$http.get(api).then(data =>{
      this.data = data.data;
      console.log(this.data);
    })
  }
};
</script>

<style scoped>
/* .toubu {
  width: 100%;
  background-color: rgba(75, 122, 224, 0.61);
  display: flex;
  justify-content: space-around;
} */
#header{
        height: 0.257rem;
        background-color: #3190e8;
        padding: .10rem;
        display: flex;
        justify-content: space-between;
    }
#header img{
    width: 0.21rem;
    height: 0.21rem;
}
#span1{
    width: 1.876rem;
    font-size: .18rem;
    font-weight: 500;
    line-height: .25rem;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#span2{
  font-size: .15rem;
  line-height: .25rem;
  font-weight: 400;
  color: #fff;
}
#span3{
  color: #fff;
}
#span4{
  color: #fff;
}
</style>
