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
<div v-if="pass_right === 'false'">
  <input v-if="pass_right === 'false'" type= "text" v-model="user" placeholder="User name" size = "25">
  <br><br>
  <input  v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Enter password" autocomplete="off" size = "25">
  <br><br>
  <button v-if="pass_right === 'false'" @click= "checkpassword(1)" type = "button">
     Log in
  </button><br><br>
</div>
<div v-if="pass_right === 'true' && is_manager === 'true'">
  <input v-if="pass_right === 'true' && is_manager === 'true'" type= "date" v-model="date_" placeholder="yyyy-mm-dd" >
   <button v-if="pass_right === 'true' && is_manager === 'true'" @mouseenter= "load(0)" @click= "load(1)" type="button" >
     Display selected date
     </button><br><br>
  <input v-if="pass_right === 'true' && is_manager === 'true'" type= "email" v-model="searchemail" placeholder="employee@eafricatelecoms.co.za">
  <button v-if="pass_right === 'true' && is_manager === 'true'" @mouseenter= "getbyemail(0)" @click= "getbyemail(1)" type="button" >
     Display selected employee
     </button><br><br>
</div>
   <button  v-if="pass_right === 'true'" @mouseenter= "fetchRes(0)" @click= "fetchRes(1)" type = "button" >
     Display all dates
     </button>
     <button v-if="showtable === 'true' && z >= 2" @click= "removetable()" type = "button">
       Hide table
     </button>
        <br><br>
<div v-if="showtable === 'true' && z >= 2">
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
        <td>
        <label v-if="is_manager === 'true'">
          <label2 v-if="all_out[n-1] !== 'Not out yet'">
            {{all_out[n-1]}}
          </label2>
          <label3 v-else>
              <button v-if="lock !== n" type = "button" @click= "seeing(n)">Clock out</button> <!-- come back here -->
               <labela v-if="lock === n">
                <input type="time" v-model="offtime" placeholder="17:00:00" step="1" >
                <button type = "button" @click= "customlockout(n)">Set time</button>
              </labela> <!-- come back here -->
          </label3>
        </label>
        <label55 v-else>{{all_out[n-1]}}</label55>
        </td>
        <td>{{all_date[n-1]}}</td>
      </tr>
    </tbody>
</table><br>
</div>
<div v-if="is_manager === 'true'">
    <button type = "button" v-if="pass_right === 'true'" @click= "test()">
    Add new employee
    </button>
    <input v-if="newuser === 'true'" type ="text" v-model="newEmployee"  placeholder="Enter employee name">
    <input v-if="newuser === 'true'" type ='email' v-model="newEmail" placeholder="Enter employee email">
    <input v-if="newuser === 'true'" type ="checkbox" id="is_superior" name="is_superior" value="yes" @click = 'issuperior_emp ()'>
    <label v-if="newuser === 'true'">Superior user</label>
    <input v-if="newuser === 'true'" type = "password" v-model="newPass" placeholder="Enter password">
    <input v-if="newuser === 'true'" type = "password" v-model="newPass_con" placeholder="Confirm password">
    <button v-if="newuser === 'true'" type= "button" @click = "addEmployee()">Add</button>
    <br><br>
</div>
<div v-if="is_manager === 'true'" >
    <button v-if="is_manager === 'true'" type = "button" @click= "viewemployees(1)">
      View all employees
    </button>
    <!--   STILL NEEDS TO BE FIXED VISIT WHEN THERE IS TIME -->
      <button v-if="employeesTable === 'true'" type = "button" @click= "calc()">
      Calculate hours
    </button>
    <button v-if="employeesTable === 'true'" type = "button" @click= "calc2()">
      update table
    </button>
    <button v-if="employeesTable ==='true'" type = "button" @click= "hide_emp_table()">
      hide table
    </button><br><br>

<label1 v-if="employeesTable === 'true'">
<table style="width:100%" border="1px">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Superior user</th>
      <th>Total hours worked</th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="n in number_of_employees" :key= "n">
        <td>{{em_nam[n-1]}}</td>
        <td>{{em_email[n-1]}}</td>
        <td>{{em_manager[n-1]}}</td>
        <!-- <td>BETA</td> --> <td>{{em_hours[n-1]}}</td>
      </tr>
    </tbody>
</table><br>
</label1>
</div>
<form>
<div class="changepin-div" id="changepin-div" v-if="pass_right === 'true'">
  <button v-if="newp === 'false'" type = "button" @click= "newpin()" >Change password</button>
  <input id="pin1" v-if="newp === 'true'" type = "password" v-model="cPass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required placeholder="Enter password">
  <input v-if="newp === 'true'" type = "password" v-model="cPass_con" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required placeholder="Confirm password">
  <button v-if="newp === 'true'" type= "submit" @click = "adnewpin()">Update password</button>
  &#128736;
</div><br><br>
    </form>
<div v-if="is_manager === 'true'">
  <button v-if="newp1 === 'false'" type = "button" @click= "newpin1()" >Reset password</button>
  <input v-if="newp1 === 'true'" type = "email" v-model="email_reset_pin" placeholder="Enter Email" required>
  <button v-if="newp1 === 'true'" type= "button" @click = "adnewpin1()">Update password</button>
  &#128736;
</div>
     </form>
  </div>
</template>
<script>
import MD5 from '../../node_modules/crypto-js/md5'
export default {
  data () {
    return {
      email_reset_pin: '@eafricatelecoms.co.za',
      resultsFetched_7: '',
      pic: '',
      gtemail: 0,
      searchemail: '@eafricatelecoms.co.za',
      z: 0,
      showtable: 'false',
      is_manager: '',
      newPass: '',
      newPass_con: '',
      is_superior: 'no',
      newEmployee: '',
      newEmail: '',
      date_: 'n',
      newuser: 'false',
      user: '',
      pass: '',
      cpass: '',
      cPass1: '0000',
      n: '',
      pass_right: 'false',
      lim: 4,
      username: '',
      email: '@eafricatelecoms.co.za',
      resultsFetched_em: '',
      resultsFetched_2: '',
      resultsFetched_3: '',
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
      employeesTable: 'false',
      em_nam: [],
      em_email: [],
      em_superior: [],
      em_manager: [],
      em_hours: [],
      number_of_employees: 0,
      x: 0,
      count: 0,
      c_2: 0,
      newp: 'false',
      newp1: 'false',
      cPass: '',
      cPass_con: '',
      lock: 'false',
      offtime: '17:00:00'
    }
  },
  methods: {
    async customlockout (i) {
      this.showtable = 'false'
      i = i - 1
      this.all_out[i] = this.offtime
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_cunstomlockout/${this.all_email[i]}/${this.all_date[i]}/${this.all_out[i]}`)
      this.showtable = 'true'
    },
    seeing (i) {
      this.lock = i
    },
    async calc () {
      this.employeesTable = 'false'
      for (this.c_2 = 0; this.c_2 < this.number_of_employees; this.c_2++) {
        await fetch(`https://warm-springs-22910.herokuapp.com/get_tot_hours/${this.em_email[this.c_2]}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched_4 = results))
        this.em_hours[this.c_2] = Math.round(this.resultsFetched_4[0].hours_)
      }
      alert('Done calculating press update')
      this.employeesTable = 'true'
    },
    async calc2 () {
      this.employeesTable = 'false'
      for (this.c_2 = 0; this.c_2 < this.number_of_employees; this.c_2++) {
        if (this.em_hours[this.c_2] !== null) {
          if (this.em_hours[this.c_2] !== undefined) {
            await fetch(`https://warm-springs-22910.herokuapp.com/fn_set_hours/${this.em_email[this.c_2]}/${this.em_hours[this.c_2]}`)
          } else {
            this.em_hours[this.c_2] = '0'
          }
        } else {
          this.em_hours[this.c_2] = '0'
        }
      }
      this.employeesTable = 'true'
    },
    async adnewpin1 () {
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_change_password/${MD5(this.cPass1).toString()}/${this.email_reset_pin}`)
      this.newp1 = 'false'
      this.email_reset_pin = '@eafricatelecoms.co.za'
    },
    // this function change the password of user who i loged in.
    // the function is called when the update password button is pressed
    // it will validate if the required password pattern is entered
    // if not it will send the user to reenter password again
    async adnewpin () {
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('changepin-div').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      // Before changing password we confirm if all input box with required attribute are entered
      // and also check if the pattern spicified is also entered
      if (this.cPass === this.cPass_con && allAreFilled === true && this.cPass.match(/[a-z]/g) && this.cPass.match(/[A-Z]/g) && this.cPass.match(/[0-9]/g) && this.cPass.length >= 8) {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_change_password/${MD5(this.cPass_con).toString()}/${this.email}`)
        this.newp = 'false'
        alert('Password changed')
        this.cpass = ''
        this.cPass_con = ''
      } else {
        if (this.cPass.match(/[a-z]/g) && this.cPass.match(/[A-Z]/g) && this.cPass.match(/[0-9]/g) && this.cPass.length >= 8) {
          alert('Passwords did not match')
        }
      }
    },
    newpin1 () {
      this.newp1 = 'true'
    },
    newpin () {
      this.newp = 'true'
    },
    hide_emp_table () {
      this.employeesTable = 'false'
    },
    async viewemployees (i) {
      await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_3 = results))
      if (i === 1) {
        this.employeesTable = 'true'
        this.number_of_employees = this.resultsFetched_3.length
        for (this.count = 0; this.count < this.number_of_employees; this.count++) {
          this.em_nam[this.count] = this.resultsFetched_3[this.count].name_
          this.em_email[this.count] = this.resultsFetched_3[this.count].email_
          this.em_manager[this.count] = this.resultsFetched_3[this.count].manager_
          this.em_hours[this.count] = this.resultsFetched_3[this.count].hours_
          // console.log('hours for'+ this.em_nam[this.count] + ' are :' + this.em_hours[this.count])
        }
      }
    },
    removetable () {
      this.showtable = 'false'
    },
    async addEmployee () {
      const supercherckbox = document.getElementById('is_superior')
      if (this.newEmployee === '') {
        alert('Please enter new employee name')
      } else if (this.newEmail === '') {
        alert('Please enter new employee email')
      } else if (this.newPass === '') {
        alert('Please enter new employee password')
      } else if (this.newPass === this.newPass_con) {
        await fetch(`https://warm-springs-22910.herokuapp.com/neweployee/${this.newEmail}/${this.newEmployee}/${MD5(this.newPass).toString()}/${supercherckbox.checked}`)
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
      // console.log('check box: ' + supercherckbox.checked)
      if (supercherckbox.checked) {
        this.is_superior = 'yes'
      } else {
        this.is_superior = 'no'
      }
      // console.log(this.is_superior)
    },
    async load (i) {
      if (this.date_ !== 'n') {
        this.z++
        await fetch(`https://warm-springs-22910.herokuapp.com/bydate/${this.date_}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched = results))
        if (i === 1) {
          this.showtable = 'true'
          // console.log(this.resultsFetched)
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
      }
    },
    test () {
      this.newuser = 'true'
      // console.log(this.newuser)
    },
    async checkpassword (i) {
      /* console.log('Password: ' + MD5('Tebogompete#3').toString()) */
      this.x++
      await fetch(`https://warm-springs-22910.herokuapp.com/getall_workers`)
        .then(response => response.json())
        .then(results => (this.resultsFetched_2 = results))
      console.log(this.resultsFetched_2)
      for (this.i = 0; this.i < this.resultsFetched_2.length; this.i++) {
        if (this.user === this.resultsFetched_2[this.i].name_) {
          if (MD5(this.pass).toString() === this.resultsFetched_2[this.i].password_ && i === 1) {
            this.pass_right = 'true'
            // console.log('      pass right     ')
            this.email = this.resultsFetched_2[this.i].email_
            if (this.resultsFetched_2[this.i].manager_) {
              this.is_manager = 'true'
            } else {
              this.is_manager = 'false'
            }
          }
        }
      }
      if (this.pass_right !== 'true' && this.x > 1 && i === 1) {
        alert('incorrect login details')
        this.x = 0
      }
      // console.log(' pass wrong right:  ' + this.user + ' pass: ' + this.cpass)
    },
    async fetchRes (i) {
      this.z++
      this.all = ''
      if (this.is_manager === 'true') {
        await fetch('https://warm-springs-22910.herokuapp.com/all')
          .then(response => response.json())// This will convert it to a more readable way
          .then(results => (this.resultsFetched = results))
        // console.log(this.resultsFetched)
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
        await fetch(`https://warm-springs-22910.herokuapp.com/get_by_email/${this.email}`)
          .then(response => response.json())// This will convert it to a more readable way
          .then(results => (this.resultsFetched = results))
        this.lim = this.resultsFetched.length
        if (i === 1) {
          for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched[this.i].name_
            this.all_email[this.i] = this.email
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
      }
      //   console.log('Password: ' + MD5('Tebogompete#3').toString())
    },
    async getbyemail (i) {
      if (this.searchemail !== '@eafricatelecoms.co.za' && this.searchemail !== '') {
        this.gtemail++
        await fetch(`https://warm-springs-22910.herokuapp.com/get_by_email/${this.searchemail}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched_em = results))
        // console.log(this.resultsFetched_em)
        if (this.gtemail > 1 && i === 1) {
          this.showtable = 'true'
          this.lim = this.resultsFetched_em.length
          for (this.i = 0; this.i < this.resultsFetched_em.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched_em[this.i].name_
            this.all_email[this.i] = this.searchemail
            this.all_in[this.i] = this.resultsFetched_em[this.i].log_in_
            if (this.resultsFetched_em[this.i].log_out_ !== '00:00:00') {
              this.all_out[this.i] = this.resultsFetched_em[this.i].log_out_
            } else {
              this.all_out[this.i] = 'Not out yet'
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
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
