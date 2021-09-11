<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/login';">Clock in</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/logout';">Clock out</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/view';">View all in</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/activity';">Tasks</button><label>BETA</label>&#128736;&#9888;<br><br>
  <!-- <a href="mailto:kabeloref@gmail.com">Send email</a> -->
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
