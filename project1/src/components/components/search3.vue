<template>
  <div>
        <div id="search_header">
            <img @click="aa()" src="../home/imgs/左 (1).png" alt="">
            <span>搜索</span>
        </div>
        <div id="search_box">
            <form action="">
              <input type="search" placeholder="请输入商家或美食名称"  id="search_box1" v-model.trim="inputValue">
            </form>
            <button id="search_box2"  @click="submit(inputValue)">提交</button>
            
        </div>
        <ul> 
            <li class="search_li" v-for="(item,index) in add" :key="index" @click="choose(item.geohash,item.name,item.address)">
                <router-link to="/shopdetail">
                    <h4>{{item.name}}</h4>
                    <p>{{item.address}}</p>
                </router-link>
            </li>
        </ul>
    <div  v-show="Action" >
        <header id="search_history">搜索历史</header>
        <ul>
            <li class="search_li"  v-for="item in allhistory" :key=item.id @click="choose(item.geohash,item.name,item.address)" >
              <router-link to="/shopdetail">
                  <h4>{{item.name}}</h4>
                  <p>{{item.address}}</p>
                </router-link>
            </li>    
        </ul>
         <footer id="search_clear_history" @click="clear">清空所有历史记录</footer>
    </div>
  </div> 
</template>

<script>
export default {
  name: "search2",
  data() {
    return {
      data:[],
      inputValue:"",
      add:"",
      Action:true,
      allhistory:[]
    }
  },
  methods: {
    aa(){
      this.$router.go(-1);
    },
    objKeySort(arys) {
                var newkey = Object.keys(arys).sort();
                var newObj = {};
                for (var i = 0; i < newkey.length; i++) {
                    newObj[newkey[i]] = arys[newkey[i]];
                }
                return newObj;
            },
            submit(inputValue){
                if(inputValue == ""){
                    alert("搜索内容不能为空!");
                    return;
                }
                this.Action = false;
                var id1 = localStorage.getItem("cityid");
                var search = "https://elm.cangdu.org/v1/pois?city_id="+id1+"&keyword="+inputValue+"&type=search";
                this.$http.get(search).then(data =>{
                    this.add = this.objKeySort(data.data);
                });
                
            },
            choose(geohash,name,address){
                // console.log(geohash);
                // vuex传值
                // this.$store.commit("receivegeohash",geohash);
                //存储到localstorage中
                localStorage.setItem("geohash1",geohash);
                localStorage.setItem("shop_name",name);
                // 历史记录
                 var comment = {name: name,address:address,geohash:geohash};
                 var list1 = JSON.parse(localStorage.getItem("historys")||"[]");
                //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
                 list1.unshift(comment);
                 localStorage.setItem("historys",JSON.stringify(list1));
                 this.name = this.address = this.geohash = '';    
            },
    clear(){
                this.allhistory = [];
                localStorage.removeItem("historys");
            },
            // 去重的方法
            dedup(arr) {
                let hashTable = {};
                return arr.filter(el => {
                    let key = JSON.stringify(el);
                    let match = Boolean(hashTable[key]);
                    return match ? false : (hashTable[key] = true);
                });

            }
  },
  created () {
                //获取本地存储的值如果是复杂类型的数据的字符串使用JSON.parse(复杂类型字符串) 转成JS能够识别的复杂类型对象 或者数组
                this.allhistory= this.dedup(JSON.parse(localStorage.getItem("historys")) || []);
        }
  
};
</script>

<style scoped>
#search_header {
  height: 0.257rem;
  background-color: #3190e8;
  padding: 0.1rem;
  
}
#search_header img {
  width: 0.346rem;
  height: 0.23rem;
  float: left;
}
#search_header span:nth-last-child(1) {
  margin-right: .446rem;
  font-size: 0.19rem;
  font-weight: 700;
  line-height: 0.25rem;
  color: #fff;
  display: flex;
  justify-content: center;
}
#search_box {
  padding: 0.1rem 0.1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
#search_box1,
#search_box2 {
  height: 0.328rem;
  border: 0.01rem solid #e4e4e4;
  border-radius: 0.05rem;
}
#search_box1 {
  width: 2.8rem;
  padding: 0 0.1rem;
  font-size: 0.16rem;
  outline: none;
}
#search_box2 {
  width: .7rem;
  font-size: 0.16rem;
  color: #fff;
  background-color: #3190e8;
  outline: none;
}
#search_history {
  height: 0.134rem;
  font-size: 0.13rem;
  padding: 0.035rem;
  border-bottom: 0.01rem solid #e4e4e4;
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
