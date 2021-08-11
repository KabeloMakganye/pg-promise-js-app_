<template>
  <div>
    <form>
    <h1>Clocking out</h1>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za"><br><br>
    <button @mouseenter= "clockout(0)" @click= "clockout(1)" type="button">
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
    clockout (i) {
      console.log('button clicked: ', this.email)
      fetch(`http://localhost:3000/out/${this.email}`)
      alert('clocked out, good Bye')
    }
  }
}
</script>

<style scoped>

</style>
