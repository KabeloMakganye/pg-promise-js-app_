<template>
  <div id="dep">
    <form>
    <div v-if="pass_right === 'true' && department === 'Sales Department'" class="salesdep">
    <div class="navbar">
  <a href="https://eafricatelecoms.co.za/for-you" target="_blank">HOME SOLUTIONS</a>
  <a href="https://eafricatelecoms.co.za/for-your-business" target="_blank">BUSINESS SOLUTIONS</a>
  <div class="dropdown">
    <button @click="showdropdown()" class="dropbtn" > APPLY NOW
      <!-- <i class="fa fa-caret-down"></i> -->
    </button>
    <div class="dropdown-content" id="dropdown-content">
      <a href="javascript:void()" type="button" @click = "showbus()" >BUSINESS SOLUTIONS APPLICATION FORM</a>
      <a href="javascript:void()" type="button" @click = "showindiv()" >INDIVIDUAL APPLICATION FORM</a>
    </div>
  </div>
  <div class="dropdown2">
    <button @click="showdropdown2()" class="dropbtn2" > FILLED FORMS
      <!-- <i class="fa fa-caret-down"></i> -->
    </button>
    <div class="dropdown-content" id="dropdown-content2">
      <a href="javascript:void()" type="button" @click = "showbusfilled(); getmysales()" >BUSINESS SOLUTIONS FILLED FORMS</a>
      <a href="javascript:void()" type="button" @click = "showindivfilled(); getmyindivsales()" >INDIVIDUAL FILLED FORMS</a>
    </div>
  </div>
</div>
</div>
<div class="heading-div" v-if="pass_right === 'true'">
    <p class="summary-pa">Department: <span>{{department}}</span></p>
    <p class="summary-pa">User: <span>{{user}}</span></p>
</div>
<div class="choose-department-div" v-if="department === 'Departments'">
    <label>Choose department</label>
      <select v-model="department">
        <option>
          Quality Assurer Department
        </option>
        <option>
          Sales Department
        </option>
        <option>
          Admin Department
        </option>
        <option>
          Finance Department
        </option>
        <option>
          Operations Department
        </option>
        <option>
          IT Department
        </option>
        <option>
          Service Department
        </option>
        <option>
          Marketing Department
        </option>
        <option>
          The Connect#2 Department
        </option>
      </select><br><br>
    </div>
<div class="login-div" v-if="department !== 'Departments'">
<h1 v-if="pass_right === 'false'">{{department}}</h1>
<div v-if="pass_right === 'false'">
<input v-if="pass_right === 'false'" type= "text" v-model="user" placeholder="User name" size = "25">
<br>
<input  v-if="pass_right === 'false'" type= "password" v-model="pass" placeholder="Enter password" autocomplete="off" size = "25">
<br><br>
<button v-if="pass_right === 'false'" @click= "checkpassword(1)" type = "button">
     Log in
</button><br><br>
</div>
</div>

<div class="formbus" id="formbus">
    <h1>BUSINESS SOLUTIONS APPLICATION FORM</h1>
    <h4>Date</h4>
    <input class="forminput" type="date" v-model = "date_written" placeholder="Date" required>
    <h3>Product</h3>
    <input class="forminput" type="text" v-model = "product_name" placeholder="Product Name" required>
    <input class="forminput" type="text" v-model = "cost" placeholder="Cost" required>
    <h4>Contract Term</h4>
        <input type="radio" id="month1" v-model="set_term" value="24months">
        <label for="month1">24months</label><br><br>
        <input type="radio" id="month2" v-model="set_term" value="36months">
        <label for="month2">36months</label><br><br>
        <input type="radio" id="month3" v-model="set_term" value="60months">
        <label for="month3">60months</label><br><br>
    <input class="forminput" type="text" v-model = "escalation" placeholder="Escallation 0%" required><br>
    <h4>Settlements</h4>
      <input type="radio" id="settle1" v-model="settle" value = true >
      <label for="settle1">Yes</label><br><br>
      <input type="radio" id="settle2" v-model="settle" value = false>
      <label for="settle2">No</label><br><br>
    <h4>Company Details</h4>
    <input class="forminput" type="text" v-model = "streetnumber" placeholder="Street Number" required><br><br>
    <input class="forminput" type="text" v-model = "names" placeholder="Name" required><br><br>
    <input class="forminput" type="text" v-model = "town" placeholder="Town" required><br><br>
    <input class="forminput" type="text" v-model = "city" placeholder="City" required><br><br>
        <select class="forminput" v-model= "bussProvince" placeholder="Province" required>
      <option value="" disabled selected hidden>Choose Province</option>
      <option>
        Gauteng
      </option>
      <option>
        North West
      </option>
      <option>
        Northern Cape
      </option>
      <option>
        Western Cape
      </option>
      <option>
        Eastern Cape
      </option>
      <option>
        KwaZulu-Natal
      </option>
      <option>
        Mpumalanga
      </option>
      <option>
        Free State
      </option>
      <option>
        Limpopo
      </option>
    </select><br><br>
    <input class="forminput" type="text" v-model= "registeredcompanyname" placeholder="Registered Company Name" required><br><br>
    <input class="forminput" type="text" v-model= "tradingas" placeholder="Trading As" required><br><br>
    <input class="forminput" type="text" v-model= "yearstrading" placeholder="Years Trading" required><br><br>
    <input class="forminput" type="text" v-model= "regnum" placeholder="Registration Number" required><br><br>
    <input class="forminput" type="text" v-model= "vatnum" placeholder="Vat Number" required><br><br>
    <input class="forminput" type="text" v-model= "turnover" placeholder="Turnover More than 2 Mill or Less" required><br><br>
    <input class="forminput" type="text" v-model= "ownerid" placeholder="Owners ID Number" required><br><br>
    <input class="forminput" type="text" v-model= "desisgnation" placeholder="Designation" required><br><br>
    <input class="forminput" type="tel" v-model= "telephone" placeholder="Telephone" required><br><br>
    <input class="forminput" type="tel" v-model= "cellnum" placeholder="Cell Number" required><br><br>
    <input class="forminput" type="tel" v-model= "fax" placeholder="Fax" required><br><br>
    <input class="forminput" type="text" v-model= "postaladdress" placeholder="Postal Address" required><br><br>
    <input class="forminput" type="text" v-model= "eaddress" placeholder="Email Address" required><br><br>
    <input class="forminput" type="text" v-model= "nextofkin" placeholder="Next of kin" required><br><br>
    <input class="forminput" type="text" v-model= "landlorddetails" placeholder="Landlord Details" required><br><br>
    <input class="forminput" type="text" v-model= "company" placeholder="Company" required><br><br>
    <input class="forminput" type="text" v-model= "no" placeholder="No" required><br><br>
    <h4>Banking Details</h4>
    <input class="forminput" type="text" v-model= "bankname" placeholder="Bank name" required><br><br>
    <input class="forminput" type="text" v-model= "accountnum" placeholder="Account number" required><br><br>
    <input class="forminput" type="text" v-model= "branchname" placeholder="Branch Name" required><br><br>
    <textarea type= "text" class="forminput2" v-model= "traderef" placeholder="3 Trade Reference(3 companies or suppliers you working with)" required></textarea><br><br>
    <label>1 + 1 = </label><input class="forminput3" type="text" v-model= "sumcheck" required>
    <button type="submit" @click = "uploadbusform()">Submit</button>
</div>

<div class="formindiv" id="formindiv">
    <h1>INDIVIDUAL APPLICATION FORM</h1>
    <h4>Date</h4>
    <input class="forminput" v-model= "indivDate" type="date" placeholder="Date" required oninvalid="this.setCustomValidity('Enter valid date')" oninput="this.setCustomValidity('')" >
    <h3>Product</h3>
    <select title="" class="forminput" v-model= "indivProductName" required oninvalid="this.setCustomValidity('Choose Product if not found choose other')" oninput="this.setCustomValidity('')">
      <option value="" disabled selected hidden>Choose Product</option>
      <option>
        Home LTE
      </option>
      <option>
        Wireless Home Landline
      </option>
      <option>
        Capped Fibre
      </option>
      <option>
        Uncapped Fibre
      </option>
      <option>
        Other
      </option>
    </select><br><br>
    <!--<div v-if = "indivProductName === 'Other'">
    <input class="forminput" type="text" v-model= "indivProductName" placeholder="Product Name" required oninvalid="this.setCustomValidity('Fill in product name')" oninput="this.setCustomValidity('')">
    </div> -->
    <input class="forminput" type="text" placeholder="Cost" v-model= "indivcost" required oninvalid="this.setCustomValidity('Enter Cost')" oninput="this.setCustomValidity('')">
    <h4>Contract Term</h4>
      <input type="radio" id="month4" v-model="set_term_2" value="24months">
      <label for="month1">24 months</label><br><br>
      <input type="radio" id="month5" v-model="set_term_2" value="monthtomonth">
      <label for="month2">Month to Month</label><br><br>
    <input class="forminput" type="text" v-model= "indivescallation" placeholder="Escallation 0%" required><br>
    <h4>Settlements</h4>
      <input type="radio" id="settle3" v-model="settle_2" value= true>
      <label for="settle1">Yes</label><br><br>
      <input type="radio" id="settle4" v-model="settle_2" value= false>
      <label for="settle2">No</label><br><br>
    <h4>Installation Details</h4>
    <input class="forminput" type="text" v-model= "indivname" placeholder="Name and Surname" required><br><br>
    <input class="forminput" type="text" v-model= "indivstreetnumber" placeholder="Street Number" required><br><br>
    <input class="forminput" type="text" v-model= "indivtown" placeholder="Town" required><br><br>
    <input class="forminput" type="text" v-model= "indivcity" placeholder="City" required><br><br>
    <select class="forminput" v-model= "indivprovince" placeholder="Province" required oninvalid="this.setCustomValidity('Choose Province')" oninput="this.setCustomValidity('')">
      <option value="" disabled selected hidden>Choose Province</option>
      <option>
        Gauteng
      </option>
      <option>
        North West
      </option>
      <option>
        Northern Cape
      </option>
      <option>
        Western Cape
      </option>
      <option>
        Eastern Cape
      </option>
      <option>
        KwaZulu-Natal
      </option>
      <option>
        Mpumalanga
      </option>
      <option>
        Free State
      </option>
      <option>
        Limpopo
      </option>
    </select><br><br>
    <input class="forminput" type="text" v-model= "employeename" placeholder="Employers Name" required><br><br>
    <input class="forminput" type="text" v-model= "indivyearemployee" placeholder="Years at Employment" required><br><br>
    <input class="forminput" type="text" v-model= "indivworktel" placeholder="Work Tel No" required><br><br>
    <input class="forminput" type="text" v-model= "indivworkfax" placeholder="Work Fax No" required><br><br>
    <input class="forminput" type="text" v-model= "individno" placeholder="ID No" required oninvalid="this.setCustomValidity('Enter client Identity Number')" oninput="this.setCustomValidity('')"><br><br>
    <input class="forminput" type="text" v-model= "indivmarital" placeholder="Marital status" required><br><br>
    <input class="forminput" type="text" v-model= "indivdesignation" placeholder="Designation" required><br><br>
    <input class="forminput" type="tel" v-model= "indivcell" placeholder="Cell Number" required><br><br>
    <input class="forminput" type="tel" v-model= "indivtel" placeholder="Telephone" required><br><br>
    <!-- Continue from here -->
    <input class="forminput" type="tel" v-model= "indivfax" placeholder="Fax" required><br><br>
    <input class="forminput" type="tel"  v-model= "indivaltcontact" placeholder="Alternative Contact No" required><br><br>
    <input class="forminput" type="text" v-model= "indivpostaddress" placeholder="Postal address" required><br><br>
    <input class="forminput" type="text" v-model= "indivemail" placeholder="Email address" required><br><br>
    <h4>Next of Kin Contact</h4>
    <input class="forminput"  type="text" v-model= "indivnextofkinname" placeholder="Next of kin name" required><br><br>
    <input class="forminput" type="text" v-model= "indivnextofkincontacts" placeholder="Next of kin Contacts" required><br><br>
    <h4>Banking Details</h4>
    <input class="forminput" type="text" v-model= "indivbankname" placeholder="Bank name" required oninvalid="this.setCustomValidity('Enter Client bank name')" oninput="this.setCustomValidity('')"><br><br>
    <input class="forminput" type="text" v-model= "indivacountnumber" placeholder="Account number" required oninvalid="this.setCustomValidity('Enter client account number')" oninput="this.setCustomValidity('')"><br><br>
    <input class="forminput" type="text" v-model= "indivbranchname" placeholder="Branch Name" required oninvalid="this.setCustomValidity('Enter client branch name')" oninput="this.setCustomValidity('')"><br><br>
    <label>1 + 1 = </label><input class="forminput3" v-model="sumcheck2" type="text" required oninvalid="this.setCustomValidity('What is the sum of 1 + 1')" oninput="this.setCustomValidity('')">
    <button type="submit" @click = "uploadindivform()">Submit</button>
</div>
<div class="major-container" id="major-container">
<div class="business-form" id="business-form">
  <div class="container">
    <h1>
      Business Solutions Clients
    </h1>
    <table class="table" border="1px">
      <thead>
        <tr>
        <th>Refs</th>
        <th>Names</th>
        <th>Products</th>
        <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nt in salesnum" :key= "nt">
          <td><a href="#" class="table-a" @click="bussaledetails(salesref[nt-1])" title="Click for more details">{{salesref[nt-1]}}</a></td>
          <td>{{salesname[nt-1]}}</td>
          <td>{{salesproduct[nt-1]}}</td>
          <td>{{salesdate[nt-1]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="summary-pa">Total sales:<span>{{salesnum}}</span></p>
    <p class="summary-pa">Total sales submited:<span>0</span></p>
</div>

<div class="indivitual-form" id="individual-form">
  <div class="container">
    <h1>
      Individual Clients
    </h1>
    <table class="table" border="1px">
      <thead>
        <tr>
        <th>Refs</th>
        <th>Names</th>
        <th>Products</th>
        <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nt2 in salesindivnum" :key= "nt2">
          <td><span><a href="#" class="table-a" title="Click for more details">{{salesindivref[nt2-1]}}</a></span></td>
          <td>{{salesindivname[nt2-1]}}</td>
          <td>{{salesindivproduct[nt2-1]}}</td>
          <td>{{salesindivdate[nt2-1]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="summary-pa">Total sales:<span>{{salesindivnum}}</span></p>
    <p class="summary-pa">Total sales submited:<span>0</span></p>
</div>
</div>
     </form>
  </div>
</template>
<script>

import MD5 from '../../node_modules/crypto-js/md5'
export default {
  data () {
    return {
      nt: '',
      salesnum: 0,
      salesref: [],
      salesname: [],
      salesproduct: [],
      salesdate: [],
      salesFetched: '',

      nt2: '',
      salesindivnum: 0,
      salesindivref: [],
      salesindivname: [],
      salesindivproduct: [],
      salesindivdate: [],
      salesindivFetched: '',

      sumcheck2: '',
      indivDate: '',
      indivProductName: '',
      indivcost: '',
      set_term_2: '24months',
      indivescallation: '',
      settle_2: false,
      indivstreetnumber: '',
      indivname: '',
      indivtown: '',
      indivcity: '',
      indivprovince: '',
      employeename: '',
      indivyearemployee: '',
      indivworktel: '',
      indivworkfax: '',
      individno: '',
      indivmarital: '',
      indivdesignation: '',
      indivtel: '',
      indivcell: '',
      indivfax: '',
      indivaltcontact: '',
      indivpostaddress: '',
      indivemail: '',
      indivnextofkinname: '',
      indivnextofkincontacts: '',
      indivbankname: '',
      indivacountnumber: '',
      indivbranchname: '',

      date_written: '',
      product_name: '',
      cost: '',
      set_term: '60months',
      escalation: '',
      settle: false,
      streetnumber: '',
      names: '',
      town: '',
      city: '',
      bussProvince: '',
      registeredcompanyname: '',
      tradingas: '',
      yearstrading: '',
      regnum: '',
      vatnum: '',
      turnover: '',
      ownerid: '',
      desisgnation: '',
      telephone: '',
      cellnum: '',
      fax: '',
      postaladdress: '',
      eaddress: '',
      nextofkin: '',
      landlorddetails: '',
      company: '',
      no: '',
      bankname: '',
      accountnum: '',
      branchname: '',
      traderef: '',
      sumcheck: '',
      busiform: 0,
      department: 'Departments',
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
      pass_right: 'false', // set this to false to enable password entering
      lim: 4,
      username: '',
      email: '@eafricatelecoms.co.za',
      resultsFetched_em: '',
      resultsFetched_2: '',
      resultsFetched_3: '',
      resultsFetched: '', // Tis variable will store the results fetched
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
    /* checkKey (evt) {
      console.log(evt.which)
      return evt.which
    },
    invokeFunc () {
      addEventListener('keydown', function (evt) {
        var whichKey = this.checkKey(evt)
        if (whichKey === 13) {
          console.log('successful')
        }
      })
    }, */
    bussaledetails (i) {
      alert(i)
    },
    async getmyindivsales () {
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_get_all_indiv_forms/${this.user}`)
        .then(response => response.json())
        .then(results => (this.salesindivFetched = results))
      let i = 0
      this.salesindivnum = this.salesindivFetched.length
      for (i = 0; i < this.salesindivnum; i++) {
        this.salesindivref[i] = this.salesindivFetched[i].id_
        this.salesindivname[i] = this.salesindivFetched[i].name_
        this.salesindivproduct[i] = this.salesindivFetched[i].product_
        this.salesindivdate[i] = this.salesindivFetched[i].date_.substring(0, 10)
      }
    },
    async getmysales () {
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_get_all_busines_forms/${this.user}`)
        .then(response => response.json())
        .then(results => (this.salesFetched = results))
      let i = 0
      this.salesnum = this.salesFetched.length
      for (i = 0; i < this.salesnum; i++) {
        this.salesref[i] = this.salesFetched[i].id_
        this.salesname[i] = this.salesFetched[i].name_
        this.salesproduct[i] = this.salesFetched[i].product_
        this.salesdate[i] = this.salesFetched[i].date_.substring(0, 10)
      }
    },
    async uploadindivform () {
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('formindiv').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (this.sumcheck2 === '2' && allAreFilled) {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_add_new_sales_indiv_application/${this.indivDate}/${this.indivProductName}/${this.indivcost}/${this.set_term_2}/${this.indivescallation}/${this.settle_2}/${this.indivstreetnumber}/${this.indivname}/${this.indivtown}/${this.indivcity}/${this.indivprovince}/${this.employeename}/${this.indivyearemployee}/${this.indivworktel}/${this.indivworkfax}/${this.individno}/${this.indivmarital}/${this.indivdesignation}/${this.indivtel}/${this.indivcell}/${this.indivfax}/${this.indivaltcontact}/${this.indivpostaddress}/${this.indivemail}/${this.indivnextofkinname}/${this.indivnextofkincontacts}/${this.indivbankname}/${this.indivacountnumber}/${this.indivbranchname}/${this.user}`)
        alert('submitted')
      } else {
        alert('not submitted')
      }
    },
    async uploadbusform () {
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('formbus').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (this.sumcheck === '2' && allAreFilled) {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_add_new_sales_business_application/${this.date_written}/${this.product_name}/${this.cost}/${this.set_term}/${this.escalation}/${this.settle}/${this.streetnumber}/${this.names}/${this.town}/${this.city}/${this.bussProvince}/${this.registeredcompanyname}/${this.tradingas}/${this.yearstrading}/${this.regnum}/${this.vatnum}/${this.turnover}/${this.ownerid}/${this.desisgnation}/${this.telephone}/${this.cellnum}/${this.fax}/${this.postaladdress}/${this.eaddress}/${this.nextofkin}/${this.landlorddetails}/${this.company}/${this.no}/${this.bankname}/${this.accountnum}/${this.branchname}/${this.traderef}/${this.user}`)
        alert('submitted')
      } else {
        alert('not submitted')
      }
    },
    showdropdown2 () {
      document.getElementById('dropdown-content2').style.display = 'inline'
    },
    showdropdown () {
      document.getElementById('dropdown-content').style.display = 'inline'
    },
    showindiv () {
      document.getElementById('formindiv').style.display = 'inline'
      document.getElementById('formbus').style.display = 'none'
      document.getElementById('dropdown-content').style.display = 'none'
      document.getElementById('business-form').style.display = 'none'
      document.getElementById('individual-form').style.display = 'none'
      document.getElementById('major-container').style.display = 'none'
    },
    showbus () {
      document.getElementById('major-container').style.display = 'none'
      document.getElementById('formbus').style.display = 'inline'
      document.getElementById('formindiv').style.display = 'none'
      document.getElementById('dropdown-content').style.display = 'none'
      document.getElementById('business-form').style.display = 'none'
      document.getElementById('individual-form').style.display = 'none'
    },
    showapplydropdown () {
      document.getElementById('formindiv').style.display = 'none'
      document.getElementById('formbus').style.display = 'none'
      document.getElementById('dropdown-content').style.display = 'inline'
    },
    showfilleddropdown () {
      document.getElementById('formbus').style.display = 'none'
      document.getElementById('formindiv').style.display = 'none'
      document.getElementById('dropdown-content2').style.display = 'inline'
    },
    showindivfilled () {
      document.getElementById('major-container').style.display = 'inline'
      document.getElementById('individual-form').style.display = 'inline'
      document.getElementById('formindiv').style.display = 'none'
      document.getElementById('formbus').style.display = 'none'
      document.getElementById('dropdown-content2').style.display = 'none'
      document.getElementById('business-form').style.display = 'none'
    },
    showbusfilled () {
      document.getElementById('major-container').style.display = 'inline'
      document.getElementById('business-form').style.display = 'inline'
      document.getElementById('individual-form').style.display = 'none'
      // alert('business filled form')
      document.getElementById('formindiv').style.display = 'none'
      document.getElementById('formbus').style.display = 'none'
      document.getElementById('dropdown-content2').style.display = 'none'
    },
    showdep () {
      alert(this.department)
    },
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
#dep {
    background: #f2f2f2;
  margin: 0;
  font-family: 'poppins';
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  overflow: hidden;
  background-color: rgb(133, 133, 133);
}

.navbar a {
  float: left;
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  transition: 0.3s;
  font-weight: bold;
}

.dropdown {
  float: left;
  overflow: hidden;
  transition: 0.3s;
}

.dropdown2 {
  float: left;
  overflow: hidden;
  transition: 0.3s;
}

.dropdown .dropbtn {
  float: left;
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: rgb(133, 133, 133);
  font-weight: bold;
}

.dropdown2 .dropbtn2 {
  float: left;
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: rgb(133, 133, 133);
  font-weight: bold;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  color: rgb(165,6,8);
}

.dropdown2:hover .dropbtn2 {
  color: rgb(165,6,8);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: rgb(185, 185, 185);
  font-weight: bold;
}

.dropdown-content a:hover {
  color: rgb(165,6,8);
}

.dropdown:hover .dropdown-content {
  display: inline;
}
.dropdown2:hover .dropdown-content {
  display: inline;
}
.formbus {
    display: none;
    transition: 0.9s;
}
.formindiv {
  display: none;
  transition: 0.9s;
}
.business-form {
  display: none;
  transition: 0.9s;
  max-width: 80%;
}
.indivitual-form {
  display: none;
  transition: 0.9s;
  max-width: 80%;
}
.major-container {
  display: none;
  transition: 0.9s;
  max-width: 80%;
}
.forminput {
    width: 80%;
    height: 30px;
}
.forminput2 {
    width: 80%;
    height: 120px;
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
.forminput3 {
    width: 3%;
    height: 25px;
}
table {
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: 1px solid black;
}
td {
  text-align: left;
}
.summary-pa {
  text-align-last: left;
  margin-left: 10%;
}
.summary-pa span {
   color: rgb(134,6,8)
}
</style>
