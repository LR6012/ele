<template>
    <div>
        <div id="search_header">
            <router-link to="/">
                <img src="../../../../static/img/左箭头.png" alt="">
            </router-link> 
            <span>{{cityname}}</span>
            
            <router-link to="/city"><span>切换城市</span></router-link>
        </div> 
        <div id="search_box">
            <form action="">
                <input type="search" id="search_box1" v-model.trim="inputValue" placeholder="输入学校、商务楼、地址"> 
            </form>
            <input type="button" id="search_box2" @click="submit(inputValue)" value="提交">
        </div>
        <ul>
            
            <li class="search_li" v-for="(item,index) in add" :key="index" @click="choose(item.geohash,item.name,inputValue)">
                <router-link to="/Takeaway">
                    <h4>{{item.name}}</h4>
                    <p>{{item.address}}</p>
                </router-link>
            </li>
            
        </ul>
        <div v-show="Action">
            <header id="search_history">搜索历史</header> 
            <ul>
                <li class="search_li">
                    <h4>银盛泰·国贸大厦</h4>
                    <p>山东省青岛市城阳区正阳中路192号</p>
                </li>
            </ul>
        <footer id="search_clear_history">清空所有</footer>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"search",
        data(){
            return{
                data:[],
                inputValue:"",
                arr:[],
                add:"",
                Action:true,
                cityname:localStorage.getItem("cityname")
            }
        },
        methods: {
            objKeySort(arys) {
                var newkey = Object.keys(arys).sort();
                var newObj = {};
                for (var i = 0; i < newkey.length; i++) {
                    newObj[newkey[i]] = arys[newkey[i]];
                }
                return newObj;
            },
            submit(inputValue){
                this.Action = false;
                var id1 = localStorage.getItem("cityid");
                var search = "https://elm.cangdu.org/v1/pois?city_id="+id1+"&keyword="+inputValue+"&type=search";
                this.$http.get(search).then(data =>{
                    this.add = this.objKeySort(data.data);
                });
                
            },
            choose(geohash,name,inputValue){
                // console.log(geohash);
                // vuex传值
                // this.$store.commit("receivegeohash",geohash);
                var value = inputValue;
                this.arr.push(value);
                console.log(this.arr);
                value = "";
                //存储到localstorage中
                localStorage.setItem("geohash",geohash);
                localStorage.setItem("locationname",name);

            }
        }
    }
</script>

<style scoped>
#search_header {
  height: 0.257rem;
  background-color: #3190e8;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.1rem;
}
#search_header img {
  width: 0.346rem;
  height: 0.23rem;
}
#search_header span:nth-of-type(1) {
  font-size: 0.19rem;
  font-weight: 800;
  line-height: 0.25rem;
  color: #fff;
}
#search_header span:nth-last-child(1) {
  font-size: 0.14rem;
  font-weight: 400;
  color: #fff;
}
#search_box {
  padding: 0.1rem 0.2rem;
  border-right: 0.01rem solid transparent;
  border-left: 0.01rem solid transparent;
  border: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
#search_box1,
#search_box2 {
  width: 3.14rem;
  height: 0.328rem;
  border: 0.01rem solid #e4e4e4;
  border-radius: 0.05rem;
  margin-bottom: 0.117rem;
}
#search_box1 {
  width: 3.34rem;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  outline: none;
}
#search_box2 {
  width: 3.34rem;
  font-size: 0.16rem;
  color: #fff;
  background-color: #3190e8;
  outline: none;
}
#search_history {
  height: 0.134rem;
  font-size: 0.13rem;
  padding: 0.035rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.02rem solid #e4e4e4;
  background-color: #f5f5f5;
}
.search_li {
  height: 0.56rem;
  padding-top: 0.15rem;
  border-bottom: 0.01rem solid #e4e4e4;
  background-color: #fff;
}
.search_li h4 {
  text-align: left;
  height: 0.2rem;
  font-size: 0.16rem;
  line-height: 0.18rem;
  margin: 0 0.2rem 0.1rem 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.search_li p {
  text-align: left;
  font-size: 0.13rem;
  margin: 0 0.2rem 0.1rem 0.2rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#search_clear_history {
  height: 0.464rem;
  line-height: 0.464rem;
  text-align: center;
  font-size: 0.17rem;
  color: #666;
  background-color: #fff;
}
</style>