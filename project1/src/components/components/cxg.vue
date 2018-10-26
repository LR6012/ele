<template>
    <div>
        <ul>
    <li class="ll">
        <router-link to='/head'><img src="../../../static/img/右.png" alt=""></router-link>

        <span>川香馆</span>
    </li>
</ul>

    </div>
</template>

<script>
export default {
name:"cxg",

}
</script>

<style scoped>
div{
    padding: 0;
    margin: 0;
}
ul{
    margin-top:-0.6rem;
    position:relative;
}
.ll{
background-color: rgb(45, 59, 182);
width: 3.75rem;
height: 0.5rem;
}
.ll img{
    width: 0.2rem;
    float: left;
    /* border: 1px solid black; */
    margin:0.16rem 0 0 0.1rem 
}
.ll span{
    font-size: 0.2rem;
    color: white;
    position: absolute;
    left: 45%;
    top:25%;   
    
}

</style>
