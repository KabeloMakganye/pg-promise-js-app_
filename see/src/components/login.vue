<template>
  <div>
    <form>
    <h1>Clocking in</h1>
    <input
    type ="text"
    v-model="username"
    placeholder="employee name"
    ><br><br>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za"><br><br>
    <button @click="clockin()" type="button">
     Clockin
     </button>
     <br><br>
     <button onClick="window.location.href='http://localhost:8080/#/';">
      Home
</button>
     </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '@eafricatelecoms.co.za'
    }
  },
  methods: {
    clockin () {
      // console.log('button clicked: ', this.username, this.email)
      fetch(`http://localhost:3000/in/${this.username}/${this.email}`)
      // fetch('http://localhost:3000/results')
    }
  }
}
</script>

<style scoped>

</style>
