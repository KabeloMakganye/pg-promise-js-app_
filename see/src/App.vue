<template>
  <div id="app">
    <img src="./assets/eafrica.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin: 10px ;
  background-color: rgb(252, 197, 197);
  /*height: 100%;*/
  background-size: cover;
}
</style>
