<template>

  <div>
    <form >
    <h1>Activities table</h1>
    <h2 v-if="pass_right === 'true'">User: {{user}}</h2>
<!--    <input
    type ="date"
    v-model="username"
    placeholder="Enter date"
    ><br><br>
-->
<label0 v-if="pass_right === 'false'">
<input v-if="pass_right === 'false'" type= "text" v-model="user" placeholder="User name" size = "25">
<br><br>
<input  v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Enter password" autocomplete="off" size = "25">
<br><br>
<button v-if="pass_right === 'false'" @click= "checkpassword(1)" type = "button">
     Log in
</button><br><br>
</label0>
<label000 v-if="pass_right === 'true' && is_manager === 'true'">
</label000>
   <button  v-if="pass_right === 'true'" @mouseenter= "fetchRes(0)" @click= "fetchRes(1)" type = "button" >
     Display all tasks
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
      <!-- <th>Email</th> -->
      <th>Acticity</th>
      <th>Activity details</th>
      <th>Priority</th>
      <th>Deadline</th>
      <th>Employee feedback</th>
      <th>Manager feedback</th>
      <th>complete?</th>
    </tr>
  </thead>
    <tbody>
      <tr @dblclick="seeing(n)" v-for="n in lim" :key= "n">
        <td>{{all_nam[n-1]}}</td>
        <!-- <td>{{all_email[n-1]}}</td> -->
        <td>{{all_activity[n-1]}}</td>
        <td>{{all_ac_details[n-1]}}</td>
        <td>{{all_priority[n-1]}}</td>
        <td>{{all_deadline[n-1]}}</td>
        <td>{{all_em_feedback[n-1]}}</td>
        <td>{{all_man_feedback[n-1]}}</td>
        <!-- <td>{{all_complete[n-1]}}</td> -->
        <td>
        <!-- <label v-if="is_manager === 'true'"> -->
          <label2 v-if="all_complete[n-1] !== false">
            {{all_complete[n-1]}}
          </label2>
          <label3 v-if="all_complete[n-1] !== true">false
            <!-- <label4><button v-if="lock !== n" type = "button" @click= "seeing(n)">Done</button></label4> -->
          </label3>
        <!-- </label> -->
        </td>
      </tr>
    </tbody>
</table><br>
</label>
<label v-if="is_manager === 'true'">
    <button type = "button" v-if="pass_right === 'true' && newuser === 'false'" @click= "test();viewemployees(2)">
    Create task
    </button>
</label>
    <!--  <input v-if="newuser === 'true'" type ="text" v-model="newEmployee" placeholder="Enter employee name">  -->
    <labelnewtask v-if="is_manager === 'true' && newuser === 'true'">
      <label>Choose employee</label>
      <select v-model="newEmployee">
        <option v-for="p in number_of_employees" :key= "p">
          {{em_nam[p-1]}}
        </option>
      </select><br><br>
      <textarea type= "text" rows= "10" cols="40" v-model= "new_activity" placeholder="Write activity name"></textarea>
      <textarea type= "text" rows= "10" cols="40" v-model= "new_ac_details" placeholder="Write activity details"></textarea>
      <br><br>
      <label111 >Priority:
        <select v-model= "new_priority">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label111>
      <label>Deadline date</label>
      <input type= "date" v-model= "new_deadline">
      <br><br>
      <button @click= "selectedemp(); setfalse();">Upload activity</button>
    </labelnewtask>
    <!--  <input v-if="newuser === 'true'" type ='email' v-model="newEmail" placeholder="Enter employee email">
    <input v-if="newuser === 'true'" type ="checkbox" id="is_superior" name="is_superior" value="yes" @click = 'issuperior_emp ()'>
    <label v-if="newuser === 'true'">Superior user</label>
    <input v-if="newuser === 'true'" type = "password" v-model="newPass" placeholder="Enter password">
    <input v-if="newuser === 'true'" type = "password" v-model="newPass_con" placeholder="Confirm password">
    <button v-if="newuser === 'true'" type= "button" @click = "addEmployee()">Add</button> -->
    <br><br>
<label0000 v-if="is_manager === 'true'" >
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
      <!-- <th>Total hours worked</th> -->
    </tr>
  </thead>
    <tbody>
      <tr v-for="n in number_of_employees" :key= "n">
        <td>{{em_nam[n-1]}}</td>
        <td>{{em_email[n-1]}}</td>
        <td>{{em_manager[n-1]}}</td>
        <!-- <td>{{em_hours[n-1]}}</td> -->
      </tr>
    </tbody>
</table><br>
</label1>
</label0000>
<!-- <label2 v-if="pass_right === 'true'">
  <button v-if="newp === 'false'" type = "button" @click= "newpin()" >Change password</button>
  <input v-if="newp === 'true'" type = "password" v-model="cPass" placeholder="Enter password">
  <input v-if="newp === 'true'" type = "password" v-model="cPass_con" placeholder="Confirm password">
  <button v-if="newp === 'true'" type= "button" @click = "adnewpin()">Update password</button>
  &#128736;
</label2><br><br> -->
<button type = "button" onClick="window.location.href='https://clock-system-6a6f8.web.app/#/';">
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
      gtemail: 0,
      searchemail: '@eafricatelecoms.co.za',
      z: 0,
      showtable: 'false',
      is_manager: '',
      newPass: '',
      newPass_con: '',
      is_superior: 'no',
      date_: 'n',
      newuser: 'false',
      pass: '',
      cpass: '',
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
      newEmployee: '',
      newEmail: '',
      new_activity: '',
      new_ac_details: '',
      new_priority: '',
      new_deadline: '',
      user: '', // aslo passed to activity trackiing as manager who assigned the task
      all_nam: [], // activity arrays
      all_email: [],
      all_activity: [],
      all_ac_details: [],
      all_priority: [],
      all_deadline: [],
      all_em_feedback: [],
      all_man_feedback: [],
      all_complete: [], //  activity arrays
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
      cPass: '',
      cPass_con: '',
      lock: 'false',
      offtime: '17:00:00'
    }
  },
  methods: {
    setfalse () {
      this.newuser = 'false'
    },
    get_nam (i) {
      // this.newEmployee = this.em_nam[i - 1]
      this.newEmail = this.em_email[i - 1]
      alert(this.newEmail + ' i=' + i)
    },
    async selectedemp () {
      this.newuser = 'false'
      for (let index = 0; index < this.number_of_employees; index++) {
        if (this.newEmployee === this.em_nam[index]) {
          this.newEmail = this.em_email[index]
        }
      }
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_add_new_activity/${this.newEmployee}/${this.newEmail}/${this.new_activity}/${this.new_ac_details}/${this.new_priority}/${this.new_deadline}/${this.user}`)
      alert(this.newEmployee + this.new_activity + this.new_priority + this.newEmail + 'done' + this.newuser)
    },
    async customlockout (i) {
      this.showtable = 'false'
      i = i - 1
      this.all_out[i] = this.offtime
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_cunstomlockout/${this.all_email[i]}/${this.all_date[i]}/${this.all_out[i]}`)
      this.showtable = 'true'
    },
    seeing (i) {
      // this.lock = i
      alert('button clicked' + i)
    },
    async calc () {
      this.employeesTable = 'false'
      for (this.c_2 = 0; this.c_2 < this.number_of_employees; this.c_2++) {
        await fetch(`https://warm-springs-22910.herokuapp.com/get_tot_hours/${this.em_email[this.c_2]}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched_4 = results))
        this.em_hours[this.c_2] = Math.round(this.resultsFetched_4[0].hours_)
        console.log(this.em_email[this.c_2] + ' hours: ' + this.em_hours[this.c_2])
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
            console.log(Math.round(this.em_hours[this.c_2]))
          } else {
            this.em_hours[this.c_2] = '0'
          }
        } else {
          this.em_hours[this.c_2] = '0'
        }
      }
      this.employeesTable = 'true'
    },
    async adnewpin () {
      if (this.cPass === this.cPass_con) {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_change_password/${MD5(this.cPass_con).toString()}/${this.email}`)
        this.newp = 'false'
        alert('Password changed')
        this.cpass = ''
        this.cPass_con = ''
      } else {
        alert('Passwords did not match')
      }
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
      if (i === 2) {
        this.employeesTable = 'false'
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
        await fetch('https://warm-springs-22910.herokuapp.com/fn_get_activities')
          .then(response => response.json())// This will convert it to a more readable way
          .then(results => (this.resultsFetched = results))
        if (i === 1) {
          this.lim = this.resultsFetched.length
          for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched[this.i].name_get_
            this.all_email[this.i] = this.resultsFetched[this.i].email_get_
            this.all_activity[this.i] = this.resultsFetched[this.i].task_
            this.all_ac_details[this.i] = this.resultsFetched[this.i].task_details_
            this.all_priority[this.i] = this.resultsFetched[this.i].priority_
            this.all_deadline[this.i] = this.resultsFetched[this.i].deadline_
            this.all_em_feedback[this.i] = this.resultsFetched[this.i].progress_comment_
            this.all_man_feedback[this.i] = this.resultsFetched[this.i].manager_progress_feedback_
            if (this.resultsFetched[this.i].done_ === 'true') {
              this.all_complete[this.i] = this.resultsFetched[this.i].done_
            } else {
              this.all_complete[this.i] = this.resultsFetched[this.i].done_ // 'Not out yet'
            }
          }
          this.showtable = 'true'
        }
      } else {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_get_activitiy_by_email/${this.email}`)
          .then(response => response.json())
          .then(results => (this.resultsFetched = results))
        this.lim = this.resultsFetched.length
        if (i === 1) {
          for (this.i = 0; this.i < this.resultsFetched.length; this.i++) {
            this.all_nam[this.i] = this.resultsFetched[this.i].name_
            this.all_email[this.i] = this.resultsFetched[this.i].email_get_
            this.all_activity[this.i] = this.resultsFetched[this.i].task_
            this.all_ac_details[this.i] = this.resultsFetched[this.i].task_details_
            this.all_priority[this.i] = this.resultsFetched[this.i].priority_
            this.all_deadline[this.i] = this.resultsFetched[this.i].deadline_
            this.all_em_feedback[this.i] = this.resultsFetched[this.i].progress_comment_
            this.all_man_feedback[this.i] = this.resultsFetched[this.i].manager_progress_feedback_
            if (this.resultsFetched[this.i].done_ === 'true') {
              this.all_complete[this.i] = this.resultsFetched[this.i].done_
            } else {
              this.all_complete[this.i] = this.resultsFetched[this.i].done_ // 'Not out yet'
            }
            /* this.all_email[this.i] = this.email
            this.all_in[this.i] = this.resultsFetched[this.i].log_in_
            if (this.resultsFetched[this.i].log_out_ !== '00:00:00') {
              this.all_out[this.i] = this.resultsFetched[this.i].log_out_
            } else {
              this.all_out[this.i] = 'Not out yet'
            }
            this.all_date[this.i] = this.resultsFetched[this.i].date_
            this.all_pass[this.i] = this.resultsFetched[this.i].password_ */
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

</style>
