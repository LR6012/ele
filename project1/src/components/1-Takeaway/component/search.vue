<template>
    <div>
        <div id="search_header">
            <router-link to="/city">
                <img src="../../../../static/img/左箭头.png" alt="">
            </router-link> 
            <span>{{position.name}}</span>
            
            <router-link to="/city"><span>切换城市</span></router-link>
        </div> 
        <div id="search_box">
            <form action="">
                <input type="search" id="search_box1" v-model.trim="inputValue" placeholder="输入学校、商务楼、地址"> 
            </form>
            <input type="button" id="search_box2" @click="submit(inputValue)" value="提交">
        </div>
        <ul>
            <li class="search_li" v-for="(item,index) in add" :key="index">
                <h4>{{item.name}}</h4>
                <p>{{item.address}}</p>
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
                position:"",
                data:[],
                inputValue:"",
                // search:[]
                add:"",
                Action:true
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
                // console.log(inputValue);
                 var id = this.$route.params.id;
                 console.log(this.$route);
                var search = "https://elm.cangdu.org/v1/pois?city_id="+id+"&keyword="+inputValue+"&type=search";
                this.$http.get(search).then(data =>{
                    this.add = this.objKeySort(data.data);
                    console.log(this.add);
                })
            }
        },
        created () {
            var id =  this.$route.params.id;
            // console.log(this.$route.params.id);
            var api="https://elm.cangdu.org/v1/cities/"+id;
            this.$http.get(api).then(data =>{
                this.position = data.data;
                // console.log(this.data);
            });
            
        }
    }
</script>

<style scoped>
    #search_header{
        height: 0.257rem;
        background-color: #3190e8;
        padding: .10rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .1rem;
    }
    #search_header img{
        width: 0.346rem;
        height: 0.23rem;
    }
    #search_header span:nth-of-type(1){
        font-size: .19rem;
        font-weight: 800;
        line-height: .25rem;
        color: #fff;
    }
    #search_header span:nth-last-child(1){
        font-size: .14rem;
        font-weight: 400;
        color: #fff;
    }
    #search_box{
        padding: .1rem .2rem;
        border-right: .01rem solid transparent;
        border-left: .01rem solid transparent;
        border: .01rem solid #e4e4e4;
        background-color: #fff;
    }
    #search_box1,#search_box2{
        width: 3.14rem;
        height: 0.328rem;
        border: .01rem solid #e4e4e4;
        border-radius: .05rem;
        margin-bottom: .117rem;
    }
    #search_box1{
        width: 3.34rem;
        padding: 0 .1rem;
        font-size: .16rem;
        outline:none;
    }
    #search_box2{
        width: 3.34rem;
        font-size: .16rem;
        color: #fff;
        background-color: #3190e8;
        outline:none;
    }
    #search_history{
        height: 0.134rem;
        font-size: .13rem;
        padding: .035rem;
        border-top: .02rem solid #e4e4e4;
        border-bottom: .02rem solid #e4e4e4;
        background-color: #f5f5f5;
    } 
    .search_li{
        height: 0.56rem;
        padding-top: .15rem;
        border-bottom: .01rem solid #e4e4e4;
        background-color: #fff;
        
    }
     .search_li h4{
         text-align: left;
         height: 0.2rem;
         font-size: .16rem;
         line-height: .18rem;
         margin: 0 .2rem .1rem .2rem;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
     }
      .search_li p{
          text-align: left;
          font-size: .13rem;
          margin: 0 .2rem .1rem .2rem;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
      #search_clear_history{
          height: 0.464rem;
          line-height: .464rem;
          text-align: center;
          font-size: .17rem;
          color: #666;
          background-color: #fff;
      }
</style>