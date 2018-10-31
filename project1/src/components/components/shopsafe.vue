<template>
    <div>
        <div class="search" >
      <span class="p1">
    <router-link to="/shopdetail/dpdetail">
    <img src="../../../static/img/左箭头.png" alt="">
    </router-link>
    </span>
  <span class="p2">食品监督安全公示</span>
</div> 
<p href="##" class="pp">
        <span>食品监督安全公示</span>
       
    </p>
<div class="nav_header">
        <img src="../../../static/img/小帅.jpg" alt="">
        <p>
            <span>监督检查结果:</span>
            <span>良好</span>
        </p>
        <p>检查日期</p>
    </div>

<div class="nnav">
    <header>工商登录信息</header>
<ul>
    <p>企业姓名</p>
<p>工商执照注册号</p>
<p>注册资本</p>
<p>注册地址</p>
<p>属地监管所</p>
<p>法定代表人</p>
<p>经营范围</p>
</ul>
</div>
<div class="nnav1">
    <header>餐饮许可证</header>
<ul>
    <p>营业范围</p>
<p>许可证有效期</p>
<p>许可证号</p>
<p>发证时间</p>
<p>发证机关</p>
</ul>
</div>
<div class="footer">
    <footer>许可证书</footer>
    <img src="###">
    <img src="###">
</div>

    </div>
</template>

<script>
export default {
name:"shopsafe",
data(){
return{
    bol:false
}
},



}
</script>

<style scoped>
.footer{
    background-color: white; 
    margin-top: 0.2rem;
    padding: 0.1rem 0.1rem 0.5rem 0.1rem; 
}
.nnav1{
    background-color: white; 
    margin-top: 0.2rem;
}
.nnav1 p{
border-bottom: 0.006rem solid rgb(234, 234, 236);
padding: 0.1rem ;
font-size: 0.12rem;
}
.nnav{
    background-color: white; 
}
.nnav p{
border-bottom: 0.006rem solid rgb(234, 234, 236);
padding: 0.1rem ;
font-size: 0.15rem;
}
.pp {
  color: black;
  border-bottom:0.006rem solid rgb(224, 221, 221);
  padding: 0.15rem;
  width: 100%;
  background-color: white;
}
.nav_header p:nth-child(2) {
  margin: -0.6rem 0 0rem 1rem;
  
}
.nav_header p span:nth-child(2) {
  /* margin: -0.6rem 0 0rem 1rem; */
  /* border: 1px solid blue; */
  color: rgb(10, 245, 10); 
}
.nav_header p:nth-child(3) {
  margin: 0.2rem 0 0.3rem 1rem;
  /* border: 1px solid blue;  */
  padding-bottom: 0.1rem
}
.nav_header img {
  border-radius: 50%;
  width: 0.6rem;
  margin: 0.2rem;
}
.nav_header {
  background-color: white;
  font-size: 0.1rem;
}
.search {
  height: 0.46rem;
  line-height: 0.46rem;
  color: white;
  background-color: #3190e8;
  position: relative;
  margin-bottom: 0.1rem;
}
.p1 img {
  margin-top: 0.05rem;
}
.p2 {
  position: absolute;
  right: 30%;
  top: 0;
  font-size: 0.18rem;
  font-weight: 700;
}
header{
  font-size: 0.22rem;
  border-bottom: 0.006rem solid gainsboro;
  padding: 0.1rem;
  /* background-color: white; */
}
footer{
   font-size: 0.22rem;
  border-bottom: 0.006rem solid gainsboro;
  padding: 0.1rem
}
</style>
