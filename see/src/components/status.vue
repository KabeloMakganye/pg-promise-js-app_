<template>
  <div>
    <form>
    <h1>Work status</h1>
    <!-- <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za" required>
    <br><br> -->
    <form style="text-align: left;">
      <div class="passw" v-if="pass_right === 'false'">
        <input type ="text" v-model="user" placeholder="User name" size="25" required>
        <br><br>
        <input v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Enter password" size="25" autocomplete="off" required>
        <br><br>
        <button v-if="pass_right === 'false'" @click= "checkpassword(1)" type = "button">
        Log in
        </button><br><br>
      </div>

      <div class="setstatus" v-if="pass_right === 'true'">
        <div style="border: 1px solid rgb(185, 15, 29); width: 150px; border-radius: 5px;">
        <label>Choose status:</label><br>
        <input type="radio" id="available" v-model="set_status" value="Available">
        <label for="available">Available</label><br>
        <input type="radio" id="busy" v-model="set_status" value="Busy">
        <label for="busy">Busy</label><br>
        <input type="radio" id="away" v-model="set_status" value="Field work">
        <label for="away">Field work</label><br>
        <input type="radio" id="lunch" v-model="set_status" value="Lunch">
        <label for="lunch">On lunch</label><br>
        <input type="radio" id="meeting" v-model="set_status" value="Meeting">
        <label for="meeting">On meeting</label>
        </div><br><br>
        <label>Short status message:</label><br>
        <input v-model="short_message" title="please keep it short, 18 charectors max" type="text" style="width: 200px;" maxlength="18" placeholder="18 charectors max"><br><br>
        <button @click= "clockin(1)" type="button">
        Update status
        </button>
        <br><br>
            <section class="testimonials-section">
        <div class="container">
            <ul>
                <li  v-for="n in lim" :key= "n">
                    <img src="../assets/kb.jpg" alt="Person">
                    <blockquote >{{all_status[n-1]}}</blockquote>
                    <blockquote>"{{all_note[n-1]}}"</blockquote>
                    <cite>-{{all_nam[n-1]}}</cite>
                </li>
            </ul>
        </div>
    </section>
      </div>
    </form>
     <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/';">
      Home
</button>
    </form>
  </div>
</template>

<script>
import MD5 from '../../node_modules/crypto-js/md5'
export default {
  data () {
    return {
      user: '',
      short_message: '',
      set_status: '',
      pass: '',
      pass_right: 'false',
      email: '@eafricatelecoms.co.za',
      resultsFetched_2: '',
      i: '',
      found: 'no',
      x: 0,
      cpass: '',
      resultsFetched_3: '',
      all_nam: [],
      all_status: [],
      all_note: [],
      lim: 0,
      tst: '',
      n: 0
    }
  },
  methods: {
    async getData () {
      await fetch(`https://warm-springs-22910.herokuapp.com/get_all_status`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_3 = results))
      this.lim = this.resultsFetched_3.length
      for (let index = 0; index < this.resultsFetched_3.length; index++) {
        this.all_nam[index] = this.resultsFetched_3[index].name_
        this.all_status[index] = this.resultsFetched_3[index].status_
        this.all_note[index] = this.resultsFetched_3[index].note_
      }
      let p = this.lim
      this.lim = 0
      this.lim = p
    },
    async checkpassword (i) {
      // console.log('Password: ' + MD5('Tebogompete#3').toString())
      this.x++
      await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      this.cpass = MD5(this.pass).toString()
      for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
        if (this.user === this.resultsFetched_2[this.i].name_) {
          if (this.cpass === this.resultsFetched_2[this.i].password_ && i === 1) {
            this.pass_right = 'true'
            // console.log('      pass right     ')
            this.email = this.resultsFetched_2[this.i].email_
          }
        }
      }
      if (this.pass_right !== 'true' && this.x > 1 && i === 1) {
        alert('incorrect login details')
        this.x = 0
      }
      // console.log(' pass wrong right:  ' + this.user + ' pass: ' + this.cpass)
    },
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
    },
    rerun () {
      setInterval(() => this.getData(), 1000)
    }
  },
  beforeMount () {
    this.rerun()
  }
}
</script>

<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
.passw {
  text-align: center;
}
section {
  padding: 5em 2em;
}
.testimonials-section {
    background: rgb(252, 197, 197);
    color: white;
}
.testimonials-section li {
            background: rgb(197, 123, 124);
            text-align: center;
            padding: 2em 1em;
            width: 80%;
            margin: 0 auto 5em auto;
            border-radius: 1em;
}
.testimonials-section li img {
                width: 5em;
                height: 5em;
                border: 5px solid rgb(197, 123, 124);
                border-radius: 50%;
                margin-top: -4.5em;
}
</style>
