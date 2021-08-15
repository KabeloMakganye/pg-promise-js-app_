<template>
  <div>
    <form>
    <h1>Clocking out</h1>
    <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za"><br><br>
    <button @click= "clockout(1)" type="button">
     Clocking out
     </button>
     <br><br>
     <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/';">
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
    async clockout (i) {
      console.log('button clicked: ', this.email)
      await fetch(`https://warm-springs-22910.herokuapp.com/out/${this.email}`)
      alert('clocked out, good Bye')
    }
  }
}
</script>

<style scoped>

</style>
