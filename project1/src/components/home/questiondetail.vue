<template>
    <div>
        <h1>你好</h1>
<ol>
    <li v-for="item in data" :key="item.id">{{item.supervipContent}}</li>
    
    
</ol>




    </div>


</template>

<script>

export default {
  name: "questiondetail",
  data() {
    return {
      data: [],
    
    };
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http.get(api).then(data => {
      console.log(data);
      this.data = data;
    });
  }
};
</script>

<style>
</style>
