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
    <button @mouseenter= "clockin()" @click= "clockin()" type="button">
     Clock in
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
      email: '@eafricatelecoms.co.za',
      resultsFetched_2: '',
      i: '',
      found: 'no',
      x: 0
    }
  },
  methods: {
    clockin () {
      this.x++
      // console.log('button clicked: ', this.username, this.email)
      fetch(`http://localhost:3000/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
        if (this.username === this.resultsFetched_2[this.i].name_) {
          if (this.email === this.resultsFetched_2[this.i].email_) {
            fetch(`http://localhost:3000/in/${this.username}/${this.email}`)
            this.found = 'yes'
          }
        }
      }
      if (this.found === 'no' && this.x >= 2) {
        alert('Invalid user name error: 001')
      }
      // fetch('http://localhost:3000/results')
    }
  }
}
</script>

<style scoped>

</style>
