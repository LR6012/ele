<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <router-view/>
    <!-- <Home></Home> -->
  </div>
</template>

<script>
// import Home from './components/home/home'
export default {
  name: 'App',
  // components:{
  //     Home
  // }
}
</script>

<style>
#app {
}
</style>
