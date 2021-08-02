<template>
  <div>
    <form>
    <h1>Clocking out</h1>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za"><br><br>
    <button @click= "clockin()" type="button">
     Clocking out
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
      email: '@eafricatelecoms.co.za'
    }
  },
  methods: {
    clockin () {
      console.log('button clicked: ', this.email)
      fetch(`http://localhost:3000/out/${this.email}`)
      // you can write it here
    }
  }
}
</script>

<style scoped>

</style>
