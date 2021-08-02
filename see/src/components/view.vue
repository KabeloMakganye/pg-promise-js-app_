<template>
  <div >
    <form >
    <h1>Employees table</h1>
<!--    <input
    type ="date"
    v-model="username"
    placeholder="Enter date"
    ><br><br>
-->
    <button @click= "fetchRes()" type="button">
     Display
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
      resultsFetched: '', // Tis variable will store the results fetched
      all: '',
      all_email: '',
      all_in: '',
      all_out: '',
      all_day: '',
      space: '           ',
      i: 0
    }
  },
  methods: {
    fetchRes () {
      this.all = ''
      fetch('http://localhost:3000/all')
        .then(response => response.json())// This will convert it to a more readable way
        .then(results => (this.resultsFetched = results))
      console.log(this.resultsFetched)
      for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
        this.all += 'Clock num: ' + this.resultsFetched[this.i].clock_ + '\n' +
        'Email: ' + this.resultsFetched[this.i].email_ + '\n' +
        'Name: ' + this.resultsFetched[this.i].name_ + '\n' +
        'Date: ' + this.resultsFetched[this.i].date_ + '\n' +
        'log in time: ' + this.resultsFetched[this.i].log_in_ + '\n' +
        'log out time: ' + this.resultsFetched[this.i].log_out_ + '\n\n'
      }
      alert(this.all)
    }
  }
}
</script>

<style scoped>

</style>
