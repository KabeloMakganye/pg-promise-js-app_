<template>

  <div>
    <form >
    <h1>Employees table</h1>
    <h2 v-if="pass_right === 'true'">User: {{user}}</h2>
<!--    <input
    type ="date"
    v-model="username"
    placeholder="Enter date"
    ><br><br>
-->
<input v-if="pass_right === 'false'" type= "text" v-model="user" placeholder="User name">
<input  v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Enter password" autocomplete="off" >

<button v-if="pass_right === 'false'" @mouseenter = "checkpassword();" @click= "checkpassword(); " type = "button">
     Log in
</button><br><br>
<input v-if="pass_right === 'true' && is_manager === 'true'" type= "date" v-model="date_" placeholder="yyyy-mm-dd" >
   <button v-if="pass_right === 'true' && is_manager === 'true'" @click= "load()" type="button" >
     Display selected date
     </button><br><br>
<input v-if="pass_right === 'true' && is_manager === 'true'" type= "email" v-model="searchemail" placeholder="employee@eafricatelecoms.co.za">
<button v-if="pass_right === 'true' && is_manager === 'true'" @mouseenter= "getbyemail(0)" @click= "getbyemail(1)" type="button" >
     Display selected employee
     </button><br><br>
   <button  v-if="pass_right === 'true'" @mouseenter= "fetchRes(0)" @click= "fetchRes(1)" type = "button" >
     Display all dates
     </button>
     <button v-if="showtable === 'true' && z >= 2" @click= "removetable()" type = "button">
       Hide table
     </button>
        <br><br>
<label v-if="showtable === 'true' && z >= 2">
<table v-if="pass_right === 'true'" style="width:100%" border="1px">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Log in time</th>
      <th>Log out time</th>
      <th>Date</th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="n in lim" :key= "n">
        <td>{{all_nam[n-1]}}</td>
        <td>{{all_email[n-1]}}</td>
        <td>{{all_in[n-1]}}</td>
        <td>{{all_out[n-1]}}</td>
        <td border="1px" >{{all_date[n-1]}}</td>
      </tr>
    </tbody>
</table><br>
</label>
     <button type = "button" onClick="window.location.href='http://localhost:8080/#/';">
      Home
</button>
<label v-if="is_manager === 'true'">
      <button type = "button" v-if="pass_right === 'true'" @click= "test()">
      Add new user
      </button>
      <input v-if="newuser === 'true'" type ="text" v-model="newEmployee" placeholder="employee name">
    <input v-if="newuser === 'true'" type ='email' v-model="newEmail" placeholder="@eafricatelecoms.co.za">
    <input v-if="newuser === 'true'" type ="checkbox" id="is_superior" name="is_superior" value="yes" @click = 'issuperior_emp ()'>
    <label v-if="newuser === 'true'">Superior user</label>
    <input v-if="newuser === 'true'" type = "password" v-model="newPass" placeholder="Enter password">
    <input v-if="newuser === 'true'" type = "password" v-model="newPass_con" placeholder="Confirm password">
    <button v-if="newuser === 'true'" type= "button" @click = "addEmployee()">Add</button>
    <br><br>
</label>
     </form>
  </div>
</template>
<script>
import MD5 from '../../node_modules/crypto-js/md5'
export default {
  data () {
    return {
      gtemail: 0,
      searchemail: '@eafricatelecoms.co.za',
      z: 0,
      showtable: 'false',
      is_manager: '',
      newPass: '',
      newPass_con: '',
      is_superior: 'no',
      newEmployee: '',
      newEmail: '@eafricatelecoms.co.za',
      date_: 'n',
      newuser: 'false',
      user: '',
      pass: '',
      cpass: '',
      n: '',
      pass_right: 'false',
      lim: 4,
      username: '',
      email: '@eafricatelecoms.co.za',
      resultsFetched_em: '',
      resultsFetched_2: '',
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
      all_date: [],
      all_pass: [],
      all_man: [],
      x: 0
    }
  },
  methods: {
    removetable () {
      this.showtable = 'false'
    },
    addEmployee () {
      const supercherckbox = document.getElementById('is_superior')
      if (this.newPass === this.newPass_con) {
        fetch(`http://localhost:3000/neweployee/${this.newEmail}/${this.newEmployee}/${MD5(this.newPass).toString()}/${supercherckbox.checked}`)
        alert('Registration for ' + this.newEmployee + ' was successful')
        this.newuser = 'false'
        this.newEmail = ''
        this.newEmployee = ''
        this.newPass = ''
        this.newPass_con = ''
      } else {
        alert('Passwords did not match')
      }
    },
    issuperior_emp () {
      const supercherckbox = document.getElementById('is_superior')
      console.log('check box: ' + supercherckbox.checked)
      if (supercherckbox.checked) {
        this.is_superior = 'yes'
      } else {
        this.is_superior = 'no'
      }
      console.log(this.is_superior)
    },
    load () {
      if (this.date_ !== 'n') {
        this.z++
        this.showtable = 'true'
        fetch(`http://localhost:3000/bydate/${this.date_}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched = results))
        console.log(this.resultsFetched)
        this.lim = this.resultsFetched.length
        for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
          this.all_nam[this.i] = this.resultsFetched[this.i].name_
          this.all_email[this.i] = this.resultsFetched[this.i].email_
          this.all_in[this.i] = this.resultsFetched[this.i].log_in_
          if (this.resultsFetched[this.i].log_out_ !== '00:00:00') {
            this.all_out[this.i] = this.resultsFetched[this.i].log_out_
          } else {
            this.all_out[this.i] = 'Not out yet'
          }
          this.all_date[this.i] = this.resultsFetched[this.i].date_
          this.all_pass[this.i] = this.resultsFetched[this.i].password_
        }
      }
    },
    test () {
      this.newuser = 'true'
      console.log(this.newuser)
    },
    checkpassword () {
      this.x++
      fetch(`http://localhost:3000/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      this.cpass = MD5(this.pass).toString()
      for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
        if (this.user === this.resultsFetched_2[this.i].name_) {
          console.log('1      pass right     ')
          if (this.cpass === this.resultsFetched_2[this.i].password_) {
            this.pass_right = 'true'
            console.log('2      pass right     ')
            this.email = this.resultsFetched_2[this.i].email_
            if (this.resultsFetched_2[this.i].manager_) {
              this.is_manager = 'true'
            } else {
              this.is_manager = 'false'
            }
          }
        }
      }
      if (this.pass_right !== 'true' && this.x > 1) {
        alert('incorrect login details')
        this.x = 0
      }
      console.log(' pass wrong right:  ' + this.user + ' pass: ' + this.cpass)
    },
    fetchRes (i) {
      this.z++
      this.all = ''
      if (this.is_manager === 'true') {
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
        if (i === 1) {
          this.lim = this.resultsFetched.length
          for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched[this.i].name_
            this.all_email[this.i] = this.resultsFetched[this.i].email_
            this.all_in[this.i] = this.resultsFetched[this.i].log_in_
            if (this.resultsFetched[this.i].log_out_ !== '00:00:00') {
              this.all_out[this.i] = this.resultsFetched[this.i].log_out_
            } else {
              this.all_out[this.i] = 'Not out yet'
            }
            this.all_date[this.i] = this.resultsFetched[this.i].date_
            this.all_pass[this.i] = this.resultsFetched[this.i].password_
          }
          this.showtable = 'true'
        }
      } else {
        fetch(`http://localhost:3000/get_by_email/${this.email}`)
          .then(response => response.json())// This will convert it to a more readable way
          .then(results => (this.resultsFetched = results))
        this.lim = this.resultsFetched.length
        for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
          this.all_nam[this.i] = this.resultsFetched[this.i].name_
          this.all_email[this.i] = this.email
          this.all_in[this.i] = this.resultsFetched[this.i].log_in_
          if (this.resultsFetched[this.i].log_out_ !== '00:00:00') {
            this.all_out[this.i] = this.resultsFetched[this.i].log_out_
          }
          this.all_date[this.i] = this.resultsFetched[this.i].date_
          this.all_pass[this.i] = this.resultsFetched[this.i].password_
        }
        this.showtable = 'true'
      }
      //   console.log('Password: ' + MD5('Tebogompete#3').toString())
    },
    getbyemail (i) {
      if (this.searchemail !== '@eafricatelecoms.co.za') {
        this.gtemail++
        fetch(`http://localhost:3000/get_by_email/${this.searchemail}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched_em = results))
        console.log(this.resultsFetched_em)
        if (this.gtemail > 1 && i === 1) {
          this.showtable = 'true'
          this.lim = this.resultsFetched_em.length
          for (this.i = 0; this.i < this.resultsFetched_em.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched_em[this.i].name_
            this.all_email[this.i] = this.searchemail
            this.all_in[this.i] = this.resultsFetched_em[this.i].log_in_
            if (this.resultsFetched_em[this.i].log_out_ !== '00:00:00') {
              this.all_out[this.i] = this.resultsFetched_em[this.i].log_out_
            }
            this.all_date[this.i] = this.resultsFetched_em[this.i].date_
            this.all_pass[this.i] = this.resultsFetched_em[this.i].password_
          }
          this.gtemail = 0
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
