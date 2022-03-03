<template>
  <div id="page-div">
    <form>
    <h1>Clocking in</h1>
    <div id="log-div">
    <label>Employee name:</label>
    <input type ="text" v-model="username" placeholder="employee name" required oninvalid="this.setCustomValidity('Enter user name')" oninput="this.setCustomValidity('')">
    <br><br>
    <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za" required oninvalid="this.setCustomValidity('Enter user email')" oninput="this.setCustomValidity('')">
    <br><br>
    <button id="log-btn" @click= "clockin(1)" type="submit">
     Clock in
     </button>
     <br><br>
    </div>
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
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('log-div').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (allAreFilled) {
        this.x++
        document.getElementById('log-btn').disabled = true
        await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
          .then(response => response.json())
          .then(results => (this.resultsFetched_2 = results))
        if (this.found !== this.username) {
          for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
            if (this.username === this.resultsFetched_2[this.i].name_) {
              if (this.email === this.resultsFetched_2[this.i].email_ && i === 1) {
                await fetch(`https://warm-springs-22910.herokuapp.com/in/${this.username}/${this.email}`)
                this.found = this.username
                alert('Hello ' + this.username + ', enjoy your day at work')
              }
            }
          }
        }
        if (this.found !== this.username) {
          alert('Invalid user name')
          document.getElementById('log-btn').disabled = false
        }
      }
      // fetch('http://localhost:3000/results')
    }
  }
}
</script>

<style scoped>
#page-div {
    background: #f2f2f2;
  margin: 0;
  font-family: 'poppins';
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
input, textarea, select {
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid #DDDDDD;
}
input:focus, textarea:focus, select:focus {
  box-shadow: 0 0 5px rgb(165,6,8);;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgb(165,6,8);;
}
</style>
