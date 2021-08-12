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
    <button @mouseenter= "clockin(0)" @click= "clockin(1)" type="button">
     Clock in
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
      username: '',
      email: '@eafricatelecoms.co.za',
      resultsFetched_2: '',
      i: '',
      found: 'no',
      x: 0
    }
  },
  methods: {
    async clockin (i) {
      this.x++
      // console.log('button clicked: ', this.username, this.email)
      await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
        if (this.username === this.resultsFetched_2[this.i].name_) {
          if (this.email === this.resultsFetched_2[this.i].email_ && i === 1) {
            await fetch(`https://warm-springs-22910.herokuapp.com/in/${this.username}/${this.email}`)
            this.found = 'yes'
          }
        }
      }
      if (this.found === 'no') {
        alert('Invalid user name')
      }
      if (this.found === 'yes' && i === 1) {
        alert(this.username + '  enjoy your day at work')
      }
      // fetch('http://localhost:3000/results')
    }
  }
}
</script>

<style scoped>

</style>
