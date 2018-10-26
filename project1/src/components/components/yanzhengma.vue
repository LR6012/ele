<template>
   <div>
     <h1>你好啊,someone</h1>
  
<canvas id="canvas" width='3rem'></canvas>
      <button @click="diyfun" type="button">Click</button>
  
      
  </div>
</template>

<script>
 import myFun from '../../static/js/aa' //注意路径
export default {
  name:"yanzhengma",
  data () {
    return {
      testvalue: ''
    }
  },
  methods:{
      diyfun:function(){
          myDraw();
      }
  }
}
</script>

<style scoped>


h1{
  color: black;
  border: 1px solid black
}
</style>
