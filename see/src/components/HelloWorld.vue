<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button onClick="window.location.href='http://localhost:8080/#/login';">Clock in</button><br><br>
    <button onClick="window.location.href='http://localhost:8080/#/logout';">Clock out</button><br><br>
    <button onClick="window.location.href='http://localhost:8080/#/view';">view all in</button><br><br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Keep your mask on'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
