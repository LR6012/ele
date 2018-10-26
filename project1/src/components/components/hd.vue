<template>
       <div class="toubu">
          
        <div class="ss">
        <router-link to='/search'><img src="../../assets/左箭头.png" alt=""></router-link>
        </div>
        
        <div class="dl">
            <router-link to='/login'><a href="###">登陆 |</a></router-link>
            <router-link to='/login1'><a href="###">注册</a></router-link>
        </div>

    <router-view></router-view>
    <div>
<Nv></Nv>
<!-- <Takeaway></Takeaway> -->
    </div>
    
       </div>
       
</template>

<script>
// import Takeaway from '../1-Takeaway/takeaway'
import Nv from "./nv";
// import { Loading } from "element-ui";
export default {
  name: "hd",
  components: {
    Nv,
    // Takeaway
  },
  //   data:()=>({
  // data: [],
  // loading:"true"
  //   }),
  created() {
    // let api = "https://elm.cangdu.org/shopping/restaurants";
  }
};
</script>

<style scoped>
.toubu {
  width: 100%;
  background-color: rgba(75, 122, 224, 0.61);
  display: flex;
  justify-content: space-around;
  /* position: fixed; */
  top: 0;
  left: 0;
}
.ss img {
  /* margin-left: -1rem; */
  width: 0.25rem;
  height: 0.25rem;
  padding: 0.1rem;
}
img {
  width: 1rem;
  height: 1rem;
}
.dl {
  margin-top: 0.16rem;
  margin-left: 2rem;
}
.dl a {
  color: white;
  /* border: 1px solid black */
  font-size: 0.18rem;
}
</style>
