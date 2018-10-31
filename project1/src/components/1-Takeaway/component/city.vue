<template>
    <div>
        <nav>
            <div id="city_header">
                <!-- <router-link to="/city" id="city_header_ele">ele.me</router-link>  -->
                <div id="city_header_ele" @click="aa">ele.me</div>
                <div id="city_header_land">
                    <router-link to="/login"><span>登陆</span></router-link>
                    <span>|</span>
                    <router-link to="/login1"><span>注册</span></router-link> 
                </div>
            </div>
            <div id="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在列表中选择</span>
            </div>
            <router-link to="/search" >
                <div id="city_location" @click="choose(position.id,position.name)">
                    <span>{{position.name}}</span>
                    <img src="../../../../static/img/右箭头.png" alt="">
                </div>
            </router-link>  
        </nav>
        <div id="city_hot">
            <h4 id="city_hot_title">热门城市</h4>
            <li class="city_hot_li" v-for="item in data" :key="item.id" @click="choose(item.id,item.name)">
                <router-link to="/search" class="router1">{{item.name}}</router-link> 
            </li>
        </div>
        <div id="city_title">
            <ol v-for="(key,index) in list" :key="index">
                <li class="city_title_letter" v-if="index == 'A'">{{index}} <span>(按字母排序)</span> </li>
                <li class="city_title_letter" v-if="index != 'A'">{{index}}</li>
                
                <li class="city_title_li" v-for="a in key" :key="a.id" @click="choose(a.id,a.name)">
                  <router-link to="/search"  class="router2">{{a.name}}</router-link>
                </li>
                 
            </ol>
            
        </div>
    </div>
</template>

<script>
export default {
  name: "city",
  data() {
    return {
      position: "",
      data: [],
      list: []
    };
  },
  created() {

    // 请求定位城市
    let guess = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http.get(guess).then(data => {
      this.position = data.data;
    });

    // 请求热门城市
    let api = "https://elm.cangdu.org/v1/cities?type=hot";
    this.$http.get(api).then(data => {
      this.data = data.data;
      // console.log(this.data);
    });

    //请求所有城市
    let add = "https://elm.cangdu.org/v1/cities?type=group";
    this.$http.get(add).then(data => {
      this.list = this.objKeySort(data.data);
    });
  },
  methods: {
    aa(){
       this.$router.go(0)
     },
    objKeySort(arys) {
      var newkey = Object.keys(arys).sort();
      var newObj = {};
      for (var i = 0; i < newkey.length; i++) {
        newObj[newkey[i]] = arys[newkey[i]];
      }
      return newObj;
     },
     choose(id,cityname){
      //  alert(id);
       localStorage.cityid=id;
       localStorage.setItem('cityname',cityname);
     }   
  }
};
</script>

<style scoped>
nav {
  height: 1.33rem;
  margin-bottom: 0.1rem;
  background-color: #f5f5f5;
}
#city_header {
  height: 0.2rem;
  padding: 0.128rem;
  display: flex;
  justify-content: space-between;
  background-color: #3190e8;
}
#city_header_ele {
  font-size: 0.17rem;
  font-weight: normal;
  color: aliceblue;
}
#city_header_land span {
  height: 0.2rem;
  font-size: 0.15rem;
  color: aliceblue;
}
#city_tip {
  height: 0.136rem;
  padding: 0.2rem 0.1rem 0.1rem 0.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
#city_tip span {
  font-size: 0.13rem;
}
#city_tip span:nth-child(2) {
  color: #9f9f9f;
  font-weight: bold;
}
#city_location {
  height: 0.174rem;
  padding: 0.123rem 0.1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
#city_location span {
  font-size: 0.17rem;
  color: #3190e8;
}
#city_location img {
  width: 0.14rem;
  height: 0.14rem;
}
#city_hot {
  margin-bottom: 0.1rem;
}
#city_hot_title {
  height: 0.136rem;
  font-size: 0.13rem;
  color: #666;
  padding: 0.1rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
.city_hot_li {
  display: inline-block;
  width: 0.916rem;
  height: 0.41rem;
  line-height: 0.41rem;
  font-size: 0.14rem;
  text-align: center;
  border: 0.01rem solid #e4e4e4; 
 
  background-color: #fff;
}
.city_title_letter {
  height: 0.372rem;
  font-size: .14rem;
  line-height: 0.372rem;
  padding-left: 0.1rem;
  margin-top: 0.1rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  color: #999999;
  background-color: #fff;
}
.city_title_letter span{
    font-size: .12rem;
    margin-left: .05rem; 
    color: #999;
}
.city_title_li {
  display: inline-block;
  width: 0.926rem;
  height: 0.41rem;
  font-size: 0.14rem;
  line-height: 0.41rem;
  text-align: center;
  border-right: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;  
  background-color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.router1{
   color: #3190e8;
}
.router2{
    color: #7e8c8d;
}
</style>