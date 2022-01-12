<template>
  <div>
    <form>
    <h1>Work status</h1>
    <!-- <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za" required>
    <br><br> -->
    <form style="text-align: left;">
    <label>email:</label>
    <input type ="email" v-model="email" placeholder="Employee email" required>
    <br><br>
    <label>Password:</label>
    <input v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Employee password" autocomplete="off" disabled>
    <br><br>
    <div style="border: 1px solid rgb(185, 15, 29); width: 150px; border-radius: 5px;">
    <label>Choose status:</label><br>
    <input type="radio" id="available" v-model="set_status" value="Available">
    <label for="available">Available</label><br>
    <input type="radio" id="busy" v-model="set_status" value="Busy">
    <label for="busy">Busy</label><br>
    <input type="radio" id="away" v-model="set_status" value="Field work">
    <label for="away">Field work</label><br>
    <input type="radio" id="lunch" v-model="set_status" value="Lunch">
    <label for="lunch">On lunch</label>
    </div><br><br>
    <label>Short status message:</label><br>
    <input v-model="short_message" title="please keep it short, 18 charectors max" type="text" style="width: 200px;" maxlength="18" placeholder="18 charectors max"><br><br>
    <button @click= "clockin(1)" type="button">
     Update status
     </button>
     <br><br>
    </form>
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
      short_message: '',
      set_status: '',
      pass: '',
      pass_right: 'false',
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
      await fetch(`https://warm-springs-22910.herokuapp.com/set_status/${this.set_status}/${this.email}/${this.short_message}`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      alert('Status updated')
      /* await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      if (this.found !== this.username) {
        for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
          if (this.username === this.resultsFetched_2[this.i].name_) {
            if (this.email === this.resultsFetched_2[this.i].email_ && i === 1) {
              await fetch(`https://warm-springs-22910.herokuapp.com/in/${this.username}/${this.email}`)
              this.found = this.username
              alert(this.username + '  enjoy your day at work')
            }
          }
        }
      }
      if (this.found !== this.username) {
        alert('Invalid user name')
      }
      // fetch('http://localhost:3000/results')
      */
    }
  }
}
</script>

<style scoped>

</style>
