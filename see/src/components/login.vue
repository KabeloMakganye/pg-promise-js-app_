<template>
  <div>
    <form>
    <h1>Clocking in</h1>
    <label>Employee name:</label>
    <input type ="text" v-model="username" placeholder="employee name">
    <br><br>
    <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za">
    <br><br>
    <button @click= "clockin(1)" type="button">
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
    async clockin (i) { /* NEED TO COME BACK AND CHECK IF ANYONE CLOCK IN ON SAME DAY BEFORE CLOCKING IN AGAIN */
      this.x++
      // console.log('button clicked: ', this.username, this.email)
      await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      if (this.found !== this.username) {
        for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
          if (this.username === this.resultsFetched_2[this.i].name_) {
            if (this.email === this.resultsFetched_2[this.i].email_ && i === 1) {
              await fetch(`https://warm-springs-22910.herokuapp.com/in/${this.username}/${this.email}`)
              this.found = this.username
              alert('Hello ' + this.username + ', Hope you enjoyed your valentine\'s day, enjoy your day at work')
            }
          }
        }
      }
      if (this.found !== this.username) {
        alert('Invalid user name')
      }
      // fetch('http://localhost:3000/results')
    }
  }
}
</script>

<style scoped>

</style>
