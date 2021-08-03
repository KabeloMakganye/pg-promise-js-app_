<template>

  <div @load= "fetchRes()">
    <form >
    <h1 @load= "fetchRes()">Employees table</h1>
<!--    <input
    type ="date"
    v-model="username"
    placeholder="Enter date"
    ><br><br>
-->

<button @click= "fetchRes()" type="button">
     Load
</button>
    <button @click= "fetchRes()" type="button">
     Display
     </button>
        <br><br>
<table border="1px">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Log in time</th>
      <th>Log out time</th>
      <th>Date</th>
      <th></th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="n in lim" :key= "n">
        <td>{{all_nam[n-1]}}</td>
        <td>{{all_email[n-1]}}</td>
        <td>{{all_in[n-1]}}</td>
        <td>{{all_out[n-1]}}</td>
        <tb>{{all_date[n-1]}}</tb>
      </tr>
    </tbody>
</table><br>
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
      n: '',
      lim: 4,
      username: '',
      email: '@eafricatelecoms.co.za',
      resultsFetched: '', // Tis variable will store the results fetched
      /* all: '',
      all_email: '',
      all_in: '',
      all_out: '',
      all_day: '',
      space: '           ', */
      i: 0,
      all_nam: [],
      all_email: [],
      all_in: [],
      all_out: [],
      all_date: []
    }
  },
  methods: {
    fetchRes () {
      this.all = ''
      fetch('http://localhost:3000/all')
        .then(response => response.json())// This will convert it to a more readable way
        .then(results => (this.resultsFetched = results))
      console.log(this.resultsFetched)
      /* for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
        this.all += 'Clock num: ' + this.resultsFetched[this.i].clock_ + '\n' +
        'Email: ' + this.resultsFetched[this.i].email_ + '\n' +
        'Name: ' + this.resultsFetched[this.i].name_ + '\n' +
        'Date: ' + this.resultsFetched[this.i].date_ + '\n' +
        'log in time: ' + this.resultsFetched[this.i].log_in_ + '\n' +
        'log out time: ' + this.resultsFetched[this.i].log_out_ + '\n\n'
      }
      alert(this.all) */
      this.lim = this.resultsFetched.length
      for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
        this.all_nam[this.i] = this.resultsFetched[this.i].name_
        this.all_email[this.i] = this.resultsFetched[this.i].email_
        this.all_in[this.i] = this.resultsFetched[this.i].log_in_
        this.all_out[this.i] = this.resultsFetched[this.i].log_out_
        this.all_date[this.i] = this.resultsFetched[this.i].date_
      }

      console.log(this.all_email[0])
    }
  }
}
</script>

<style scoped>

</style>
