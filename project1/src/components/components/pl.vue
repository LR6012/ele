<template>
    <div>

<div class="wp" >
<li class="l1">
            <p class="p1">5</p>
            <p class="p2">综合评分</p>
            <p class="p3">高于周边商家</p>
</li>
<li class="l2">
    <p>
        <span>服务态度</span>
          </p>
    <p class="start1">
        <el-rate
  v-model="value5"
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate></p>
  
    <p>
        <span>菜品评论</span>
    <p class="start1">
        <el-rate
  v-model="value5"
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate></p>  
    <p>
        <span>送达时间 22分钟</span> 
    </p>
</li>
</div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      data: [],
       value5: 3.7
    };
  },
  created() {}
};
</script>

<style scoped>
.bp2 .start1{
 display: inline-block;
 margin: 0.3rem 0 2rem -1.6rem;
  border:1px solid red;
}
.bp1 span{
    display: inline-block;
    /* justify-content: space-around; */
    /* margin-right: 0.5rem; */
    border:1px solid blue;
     float: left;
     padding: 0.1rem;
     margin: -0.9rem 0 2rem 0.55rem;
}
.boby1{
    border:1px solid blue;
    height: 1.8rem;
    /* font-size: 0.12rem; */
}
.tx{
    border-radius: 50%;
    width: 0.5rem;
    float: left;
    padding: 0.15rem;
    margin-right: 1rem;
}
.pl ul{
    background-color: white;
    border:1px solid black;
    width: 100%;
    height: 2.2rem;
}
.pl li:nth-child(1){
    background-color: rgb(18, 240, 240);
    color: white;

}
.pl li{
    display: flex;
    justify-content: space-between;
width: 26%;
border:1px solid black;
float: left;
text-align: center;
margin: 0.1rem;
padding: 0.1rem 0;
}
.l2 p{
    float: left;
    font-size: 0.12rem;
    padding-bottom: 0.1rem;
}
.l2{
    width: 60%;
    padding-top: 0.4rem;
    margin-left: -0.3rem;
    border:1px solid rgb(29, 28, 28);
    height: 1.2rem;
}
.l1 p:nth-child(1){
    padding: 0.3rem;
    font-size: 0.4rem;
    color: red
}
.li p:nth-child(2){
    font-weight: 900;
}
.wp{
    display: flex;
    justify-content: space-between;
    border:1px solid red;
    height:  1.3rem;
    text-align: center;
    padding: 0.2rem;
}
.l2{
    float: right;
}



</style>
