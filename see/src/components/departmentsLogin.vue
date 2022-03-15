<template>
  <div id="dep">
    <form>
    <div v-if="pass_right === 'true' && department === 'Sales Department'" class="salesdep">
    <div class="navbar">
  <a href="https://eafricatelecoms.co.za/for-you" target="_blank">HOME SOLUTIONS</a>
  <a href="https://eafricatelecoms.co.za/for-your-business" target="_blank">BUSINESS SOLUTIONS</a>
  <div @mouseleave="hidedropdown()" class="dropdown">
    <button  @mouseenter="showdropdown()" @click="showdropdown()" class="dropbtn" > APPLY NOW
      <!-- <i class="fa fa-caret-down"></i> -->
    </button>
    <div class="dropdown-content" id="dropdown-content">
      <a href="javascript:void()" type="button" @click = "showbus(); hide_businessview()" >BUSINESS SOLUTIONS APPLICATION FORM</a>
      <a href="javascript:void()" type="button" @click = "showindiv(); hide_businessview()" >INDIVIDUAL APPLICATION FORM</a>
    </div>
  </div>
  <div @mouseleave="hidedropdown2()" class="dropdown2">
    <button @mouseenter="showdropdown2()" @click="showdropdown2(); hide_businessview()" class="dropbtn2" > FILLED FORMS
      <!-- <i class="fa fa-caret-down"></i> -->
    </button>
    <div class="dropdown-content" id="dropdown-content2">
      <a href="javascript:void()" type="button" @click = "showbusfilled(); getmysales(); hide_businessview()" >BUSINESS SOLUTIONS FILLED FORMS</a>
      <a href="javascript:void()" type="button" @click = "showindivfilled(); getmyindivsales(); hide_businessview()" >INDIVIDUAL FILLED FORMS</a>
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
    <table class="table" border="1px" rad>
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
          <td><span><a href="#" @click="indivsaledetails(salesindivref[nt2-1])" class="table-a" title="Click for more details">{{salesindivref[nt2-1]}}</a></span></td>
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
<div class="businessview" id="businessview">
    <h1>BUSINESS SOLUTIONS APPLICATION FORM</h1>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Sales Date:</p>
      </td>
      </tr>
    </table>
      <input disabled class="forminput" id="formbusinput1" type="date" v-model = "selecteddate_written" placeholder="Date" required>
    <button @click = "setedit('formbusinput1')">Edit</button><br><br>
    </table><br><br>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Product Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput2" type="text" v-model = "selectedproduct_name" placeholder="Product Name" required>
    <button @click = "setedit('formbusinput2')">Edit</button><br><br>
    </table><br><br>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Product Cost:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput3" type="text" v-model = "selectedcost" placeholder="Cost" required>
    <button @click = "setedit('formbusinput3')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Contract Term:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formbusinput4" v-model= "selectedcontract_term" placeholder="selectedcontract_term" required>
      <option value="" disabled selected hidden>{{selectedcontract_term}}</option>
      <option>
        24months
      </option>
      <option>
        36months
      </option>
      <option>
        60months
      </option>
    </select>
     <button @click = "setedit('formbusinput4')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Escallation:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput5" type="text" v-model = "selectedescallation" placeholder="Escallation 0%" required>
    <button @click = "setedit('formbusinput5')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Settlements:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formbusinput6" v-model= "selectedsettlements" placeholder="selectedsettlements" required>
      <option value="" disabled selected hidden>{{selectedsettlements}}</option>
      <option value= true>
        Yes
      </option>
      <option value= false>
        No
      </option>
    </select>
     <button @click = "setedit('formbusinput6')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company Street Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput7" type="text" v-model = "selectedcompany_street_number" placeholder="Street Number" required>
    <button @click = "setedit('formbusinput7')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput8" type="text" v-model = "selectedcompany_name" placeholder="Name" required>
    <button @click = "setedit('formbusinput8')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company Town:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput9" type="text" v-model = "selectedcompany_town" placeholder="Town" required>
    <button @click = "setedit('formbusinput9')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company City:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput10" type="text" v-model = "selectedcompany_city" placeholder="City" required>
    <button @click = "setedit('formbusinput10')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Province:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formbusinput11" v-model= "selectedprovince" placeholder="Province" required>
      <option value="selectedprovince" disabled selected hidden>{{selectedprovince}}</option>
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
    </select>
    <button @click = "setedit('formbusinput11')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput12" type="text" v-model= "selectedregistered_company_name" placeholder="Registered Company Name" required>
    <button @click = "setedit('formbusinput12')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Trading Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput13" type="text" v-model= "selectedtrading_as" placeholder="Trading As" required>
    <button @click = "setedit('formbusinput13')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Years Trading:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput14" type="text" v-model= "selectedyears_trading" placeholder="Years Trading" required>
    <button @click = "setedit('formbusinput14')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Registration Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput15" type="text" v-model= "selectedregistration_number" placeholder="Registration Number" required>
    <button @click = "setedit('formbusinput15')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">VAT Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput16" type="text" v-model= "selectedvat_number" placeholder="Vat Number" required>
    <button @click = "setedit('formbusinput16')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Business Turnover:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput17" type="text" v-model= "selectedturnover" placeholder="Turnover More than 2 Mill or Less" required>
    <button @click = "setedit('formbusinput17')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Owner's ID:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput18" type="text" v-model= "selectedowners_id" placeholder="Owners ID Number" required>
    <button @click = "setedit('formbusinput18')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Designation:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput19" type="text" v-model= "selecteddesignation" placeholder="Designation" required>
    <button @click = "setedit('formbusinput19')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Telephone:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput20" type="tel" v-model= "selectedtelephone" placeholder="Telephone" required>
    <button @click = "setedit('formbusinput20')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Cell Phone:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput21" type="tel" v-model= "selectedcell_number" placeholder="Cell Number" required>
    <button @click = "setedit('formbusinput21')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Fax Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput22" type="tel" v-model= "selectedfax" placeholder="Fax" required>
    <button @click = "setedit('formbusinput22')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Postal Address:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput23" type="text" v-model= "selectedpostal_address" placeholder="Postal Address" required>
    <button @click = "setedit('formbusinput23')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Email address:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput24" type="text" v-model= "selectedemail_address" placeholder="Email Address" required>
    <button @click = "setedit('formbusinput24')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Next Of Kin:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput25"  type="text" v-model= "selectednext_of_kin" placeholder="Next of kin" required>
    <button @click = "setedit('formbusinput25')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Landlord Details:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput26" type="text" v-model= "selectedlandlord_details" placeholder="Landlord Details" required>
    <button @click = "setedit('formbusinput26')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">This Field need to be removed:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput27" type="text" v-model= "selectedcompany" placeholder="Company" required>
    <button @click = "setedit('formbusinput27')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">This Field need to be removed:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput28" type="text" v-model= "selectedno" placeholder="No" required>
    <button @click = "setedit('formbusinput28')">Edit</button><br><br>
    </table><br><br>

    <h4>Banking Details</h4>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Bank Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput29" type="text" v-model= "selectedbank_name" placeholder="Bank name" required>
    <button @click = "setedit('formbusinput29')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Account Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput30" type="text" v-model= "selectedaccount_number" placeholder="Account number" required>
    <button @click = "setedit('formbusinput30')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">This Field need to be removed:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formbusinput31" type="text" v-model= "selectedbranch_name" placeholder="Branch Name" required>
    <button @click = "setedit('formbusinput31')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Trade References:</p>
      </td>
      </tr>
    </table>
    <textarea disabled type= "text" class="forminput2" id="formbusinput32" v-model= "selectedtrade_references" placeholder="3 Trade Reference(3 companies or suppliers you working with)" required></textarea>
    <button @click = "setedit('formbusinput32')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Verification:</p>
      </td>
      </tr>
    </table>
    <label>1 + 1 = </label><input class="forminput3" type="text" v-model= "sumcheck" required>
    </table><br><br>
     <button class="submit-btn" type="button" @click = "updatebusform()">Upload Changes</button><br><br>
</div>
<!-- individual application forms-->
<div class="indivitualview" id="indivitualview">
    <h1>Edit Selected Individual Sale</h1>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Sales Date:</p>
      </td>
      </tr>
    </table>
      <input disabled class="forminput" id="formindivinput1" type="date" v-model = "selectedindivdate_written" placeholder="Date" required>
    <button @click = "setedit('formindivinput1')">Edit</button><br><br>
    </table><br><br>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Product Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput2" type="text" v-model = "selectedindivproduct_name" placeholder="Product Name" required>
    <button @click = "setedit('formindivinput2')">Edit</button><br><br>
    </table><br><br>
    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Product Cost:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput3" type="text" v-model = "selectedindivcost" placeholder="Cost" required>
    <button @click = "setedit('formindivinput3')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Contract Term:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formindivinput4" v-model= "selectedindivcontract_term" placeholder="Choose Contract Term" required>
      <option value="selectedindivcontract_term" disabled selected hidden>{{selectedindivcontract_term}}</option>
      <option>
        24months
      </option>
      <option>
        36months
      </option>
      <option>
        60months
      </option>
    </select>
     <button @click = "setedit('formindivinput4')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Escallation:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput5" type="text" v-model = "selectedindivescallation" placeholder="Escallation 0%" required>
    <button @click = "setedit('formindivinput5')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Settlements:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formindivinput6" v-model= "selectedindivsettlements" placeholder="Choose settlement" required>
      <option value="selectedindivsettlements" disabled selected hidden>{{selectedindivsettlements}}</option>
      <option value= true>
        Yes
      </option>
      <option value= false>
        No
      </option>
    </select>
     <button @click = "setedit('formindivinput6')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Client Street Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput7" type="text" v-model = "selectedindivstreet_number" placeholder="Street Number" required>
    <button @click = "setedit('formindivinput7')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Customer Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput8" type="text" v-model = "selectedindivcustomer_name" placeholder="Enter Customer Name" required>
    <button @click = "setedit('formindivinput8')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Customer Town:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput9" type="text" v-model = "selectedindivcustomer_town" placeholder="Town" required>
    <button @click = "setedit('formindivinput9')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Company City:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput10" type="text" v-model = "selectedindivcustomer_city" placeholder="City" required>
    <button @click = "setedit('formindivinput10')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Province:</p>
      </td>
      </tr>
    </table>
    <select disabled class="forminput" id="formindivinput11" v-model= "selectedindivprovince" placeholder="Province" required>
      <option value="selectedindivprovince" disabled selected hidden>{{selectedindivprovince}}</option>
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
    </select>
    <button @click = "setedit('formbusinput11')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Employer Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput12" type="text" v-model= "selectedindivemployers_name" placeholder="Employer Name" required>
    <button @click = "setedit('formindivinput12')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Years Employed:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput13" type="text" v-model= "selectedindivyears_employed" placeholder="Number of year employed" required>
    <button @click = "setedit('formindivinput13')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Work Telephone Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput14" type="text" v-model= "selectedindivwork_telephone_no" placeholder="Enter Work Telephone Number" required>
    <button @click = "setedit('formindivinput14')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Work Fax Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput15" type="text" v-model= "selectedindivwork_fax_no" placeholder="Enter Work Fax Number" required>
    <button @click = "setedit('formindivinput15')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Customer ID Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput16" type="text" v-model= "selectedindivid_no" placeholder="Enter Customer ID Number" required>
    <button @click = "setedit('formindivinput16')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Marital Status:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput17" type="text" v-model= "selectedindivmarital_status" placeholder="Enter Marital Status" required>
    <button @click = "setedit('formindivinput17')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Designation:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput18" type="text" v-model= "selectedindivdesignation" placeholder="Enter Client Designation" required>
    <button @click = "setedit('formindivinput18')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Telephone:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput19" type="tel" v-model= "selectedindivtelephone" placeholder="Enter Client Telephone Number" required>
    <button @click = "setedit('formindivinput19')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Cell Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput20" type="tel" v-model= "selectedindivcell_number" placeholder="Enter Client Cell Number" required>
    <button @click = "setedit('formindivinput20')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Fax Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput21" type="tel" v-model= "selectedindivfax" placeholder="Enter Client Fax Number" required>
    <button @click = "setedit('formindivinput21')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Alternative Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput22" type="tel" v-model= "selectedindivalternative_number" placeholder="Enter Alternative Number" required>
    <button @click = "setedit('formindivinput22')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Postal Address:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput23" type="text" v-model= "selectedindivpostal_address" placeholder="Enter Client Postal Address" required>
    <button @click = "setedit('formindivinput23')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Email address:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput24" type="text" v-model= "selectedindivemail_address" placeholder="Enter Client Email Address" required>
    <button @click = "setedit('formindivinput24')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Next Of Kin:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput25"  type="text" v-model= "selectedindivnext_of_kin" placeholder="Enter Client Next of kin Name" required>
    <button @click = "setedit('formindivinput25')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Next Of Kin Contacts:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput26" type="text" v-model= "selectedindivnext_of_kin_contacts" placeholder="Next of Kin Contacts" required>
    <button @click = "setedit('formindivinput26')">Edit</button><br><br>
    </table><br><br>

    <h4>Banking Details</h4>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Bank Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput27" type="text" v-model= "selectedindivbank_name" placeholder="Enter Client Bank Name" required>
    <button @click = "setedit('formindivinput27')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Account Number:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput28" type="text" v-model= "selectedindivaccount_number" placeholder="Enter Client Account Number" required>
    <button @click = "setedit('formindivinput28')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Branch Name:</p>
      </td>
      </tr>
    </table>
    <input disabled class="forminput" id="formindivinput29" type="text" v-model= "selectedindivbranch_name" placeholder="Branch name" required>
    <button @click = "setedit('formindivinput29')">Edit</button><br><br>
    </table><br><br>

    <table class="table3">
    <table class="table2">
    <tr>
      <td><p class="edit-pa">Verification:</p>
      </td>
      </tr>
    </table>
    <label>1 + 1 = </label><input class="forminput3" type="text" v-model= "sumcheck" required>
    </table><br><br>
     <button class="submit-btn" type="button" @click = "updatebusform()">Upload Changes</button><br><br>
     <button type="button" @click="resetedit()">Test</button>
</div>
     </form>
  </div>
</template>
<script>

import MD5 from '../../node_modules/crypto-js/md5'
import activity from './activity.vue'
export default {
  components: { activity },
  data () {
    return {

      selectedindivsale_id: '', //  STORES THE SELECTED SALE ID
      selectedindivFetched: '', //  HOLD JSON OF SELECTED SALES FROM DATABASE

      selectedindivdate_written: '',
      selectedindivproduct_name: '',
      selectedindivcost: '',
      selectedindivcontract_term: '',
      selectedindivescallation: '',
      selectedindivsettlements: '',
      selectedindivstreet_number: '',
      selectedindivcustomer_name: '',
      selectedindivcustomer_town: '',
      selectedindivcustomer_city: '',
      selectedindivprovince: '',
      selectedindivemployers_name: '',
      selectedindivyears_employed: '',
      selectedindivwork_telephone_no: '',
      selectedindivwork_fax_no: '',
      selectedindivid_no: '',
      selectedindivmarital_status: '',
      selectedindivdesignation: '',
      selectedindivtelephone: '',
      selectedindivcell_number: '',
      selectedindivfax: '',
      selectedindivalternative_number: '',
      selectedindivpostal_address: '',
      selectedindivemail_address: '',
      selectedindivnext_of_kin: '',
      selectedindivnext_of_kin_contacts: '',
      selectedindivbank_name: '',
      selectedindivaccount_number: '',
      selectedindivbranch_name: '',
      selectedindivagent: '',

      selectedbussale_id: '',
      selectedFetched: '',
      selecteddate_written: '',
      selectedproduct_name: '',
      selectedcost: '',
      selectedcontract_term: '',
      selectedescallation: '',
      selectedsettlements: '',
      selectedcompany_street_number: '',
      selectedcompany_name: '',
      selectedcompany_town: '',
      selectedcompany_city: '',
      selectedprovince: '',
      selectedregistered_company_name: '',
      selectedtrading_as: '',
      selectedyears_trading: '',
      selectedregistration_number: '',
      selectedvat_number: '',
      selectedturnover: '',
      selectedowners_id: '',
      selecteddesignation: '',
      selectedtelephone: '',
      selectedcell_number: '',
      selectedfax: '',
      selectedpostal_address: '',
      selectedemail_address: '',
      selectednext_of_kin: '',
      selectedlandlord_details: '',
      selectedcompany: '',
      selectedno: '',
      selectedbank_name: '',
      selectedaccount_number: '',
      selectedbranch_name: '',
      selectedtrade_references: '',
      selectedis_done: '',
      selectedagent: '',

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
      sumcheck: '0',
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

    //  THIS FUNCTION GET SELECTED INDIVIDUAL SALE FROM DATABASE AND DISPLAY ON DISABLED INPUT BOXES
    async indivsaledetails (i) {
      this.selectedindivsale_id = i
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_get_selected_indiv_sales/${i}`)
        .then(response => response.json())
        .then(results => (this.selectedindivFetched = results))
      if (this.selectedindivFetched.length > 0) {
        alert(this.selectedindivFetched.length)
        this.selectedindivdate_written = this.selectedindivFetched[0].date_written_.substring(0, 10)
        this.selectedindivproduct_name = this.selectedindivFetched[0].product_name_
        this.selectedindivcost = this.selectedindivFetched[0].cost_
        this.selectedindivcontract_term = this.selectedindivFetched[0].contract_term_
        this.selectedindivescallation = this.selectedindivFetched[0].escallation_
        this.selectedindivsettlements = this.selectedindivFetched[0].settlements_
        this.selectedindivstreet_number = this.selectedindivFetched[0].streetnumber_
        this.selectedindivcustomer_name = this.selectedindivFetched[0].customer_name_
        this.selectedindivcustomer_town = this.selectedindivFetched[0].customer_town_
        this.selectedindivcustomer_city = this.selectedindivFetched[0].customer_city_
        this.selectedindivprovince = this.selectedindivFetched[0].province_
        this.selectedindivemployers_name = this.selectedindivFetched[0].employers_name_
        this.selectedindivyears_employed = this.selectedindivFetched[0].years_employed_
        this.selectedindivwork_telephone_no = this.selectedindivFetched[0].work_telephone_no_
        this.selectedindivwork_fax_no = this.selectedindivFetched[0].work_fax_no_
        this.selectedindivid_no = this.selectedindivFetched[0].id_no_
        this.selectedindivmarital_status = this.selectedindivFetched[0].marital_status_
        this.selectedindivdesignation = this.selectedindivFetched[0].designation_
        this.selectedindivtelephone = this.selectedindivFetched[0].telephone_
        this.selectedindivcell_number = this.selectedindivFetched[0].cell_number_
        this.selectedindivfax = this.selectedindivFetched[0].fax_
        this.selectedindivalternative_number = this.selectedindivFetched[0].alternative_number_
        this.selectedindivpostal_address = this.selectedindivFetched[0].postal_address_
        this.selectedindivemail_address = this.selectedindivFetched[0].email_address_
        this.selectedindivnext_of_kin = this.selectedindivFetched[0].next_of_kin_
        this.selectedindivnext_of_kin_contacts = this.selectedindivFetched[0].next_of_kin_contacts_
        this.selectedindivbank_name = this.selectedindivFetched[0].bank_name_
        this.selectedindivaccount_number = this.selectedindivFetched[0].account_number_
        this.selectedindivbranch_name = this.selectedindivFetched[0].branch_name_
        this.selectedindivagent = this.selectedindivFetched[0].agent_
      }
      alert(i + ' ' + this.selectedindivdate_written)
      document.getElementById('businessview').style.display = 'none'
      document.getElementById('business-form').style.display = 'none'
      document.getElementById('individual-form').style.display = 'none'
      document.getElementById('indivitualview').style.display = 'inline'
    },
    async updatebusform () {
      for (let index = 1; index < 33; index++) {
        document.getElementById(`formbusinput${index}`).disabled = true
      }
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('businessview').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (this.sumcheck === '2' && allAreFilled) {
        await fetch(`https://warm-springs-22910.herokuapp.com/fn_update_business_form/${this.selectedbussale_id}/${this.selecteddate_written}/${this.selectedproduct_name}/${this.selectedcost}/${this.selectedcontract_term}/${this.selectedescallation}/${this.selectedsettlements}/${this.selectedcompany_street_number}/${this.selectedcompany_name}/${this.selectedcompany_town}/${this.selectedcompany_city}/${this.selectedprovince}/${this.selectedregistered_company_name}/${this.selectedtrading_as}/${this.selectedyears_trading}/${this.selectedregistration_number}/${this.selectedvat_number}/${this.selectedturnover}/${this.selectedowners_id}/${this.selecteddesignation}/${this.selectedtelephone}/${this.selectedcell_number}/${this.selectedfax}/${this.selectedpostal_address}/${this.selectedemail_address}/${this.selectednext_of_kin}/${this.selectedlandlord_details}/${this.selectedcompany}/${this.selectedno}/${this.selectedbank_name}/${this.selectedaccount_number}/${this.selectedbranch_name}/${this.selectedtrade_references}/${this.selectedagent}`)
        alert(`Ref: ${this.selectedbussale_id} was updated`)
      } else {
        alert('not updated' + this.sumcheck + ' allarefilled:' + allAreFilled)
      }
    },
    resetedit () {
      for (let i = 1; i <= 29; i++) {
        document.getElementById(`formindivinput${i}`).disabled = true
      }
    },
    setedit (i) {
      document.getElementById(i).disabled = false
    },
    async bussaledetails (i) {
      this.selectedbussale_id = i
      await fetch(`https://warm-springs-22910.herokuapp.com/fn_get_selected_business_sale/${i}`)
        .then(response => response.json())
        .then(results => (this.selectedFetched = results))
      if (this.selectedFetched.length > 0) {
        this.selecteddate_written = this.selectedFetched[0].date_written_.substring(0, 10)
        this.selectedproduct_name = this.selectedFetched[0].product_name_
        this.selectedcost = this.selectedFetched[0].cost_
        this.selectedcontract_term = this.selectedFetched[0].contract_term_
        this.selectedescallation = this.selectedFetched[0].escallation_
        this.selectedsettlements = this.selectedFetched[0].settlements_
        this.selectedcompany_street_number = this.selectedFetched[0].company_street_number_
        this.selectedcompany_name = this.selectedFetched[0].company_name_
        this.selectedcompany_town = this.selectedFetched[0].company_town_
        this.selectedcompany_city = this.selectedFetched[0].company_city_
        this.selectedprovince = this.selectedFetched[0].province_
        this.selectedregistered_company_name = this.selectedFetched[0].registered_company_name_
        this.selectedtrading_as = this.selectedFetched[0].trading_as_
        this.selectedyears_trading = this.selectedFetched[0].years_trading_
        this.selectedregistration_number = this.selectedFetched[0].registration_number_
        this.selectedvat_number = this.selectedFetched[0].vat_number_
        this.selectedturnover = this.selectedFetched[0].turnover_
        this.selectedowners_id = this.selectedFetched[0].owners_id_
        this.selecteddesignation = this.selectedFetched[0].designation_
        this.selectedtelephone = this.selectedFetched[0].telephone_
        this.selectedcell_number = this.selectedFetched[0].cell_number_
        this.selectedfax = this.selectedFetched[0].fax_
        this.selectedpostal_address = this.selectedFetched[0].postal_address_
        this.selectedemail_address = this.selectedFetched[0].email_address_
        this.selectednext_of_kin = this.selectedFetched[0].next_of_kin_
        this.selectedlandlord_details = this.selectedFetched[0].landlord_details_
        this.selectedcompany = this.selectedFetched[0].company_
        this.selectedno = this.selectedFetched[0].no_
        this.selectedbank_name = this.selectedFetched[0].bank_name_
        this.selectedaccount_number = this.selectedFetched[0].account_number_
        this.selectedbranch_name = this.selectedFetched[0].branch_name_
        this.selectedtrade_references = this.selectedFetched[0].trade_references_
        this.selectedis_done = this.selectedFetched[0].is_done_
        this.selectedagent = this.selectedFetched[0].agent_
      }
      document.getElementById('businessview').style.display = 'inline'
      document.getElementById('business-form').style.display = 'none'
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
    hidedropdown2 () {
      document.getElementById('dropdown-content2').style.display = 'none'
    },
    showdropdown2 () {
      document.getElementById('dropdown-content2').style.display = 'inline'
    },
    hidedropdown () {
      document.getElementById('dropdown-content').style.display = 'none'
    },
    showdropdown () {
      document.getElementById('dropdown-content').style.display = 'inline'
    },
    hide_businessview () {
      document.getElementById('businessview').style.display = 'none'
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
  transition: 0.9s;
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
.businessview {
  display: none;
  max-width: 80%;
}
.indivitualview {
  display: none;
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
.table {
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: 1px solid black;
}
.table3 {
  transition: 0.9s;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border-radius:1%;
  background-color: rgba(116, 110, 110, 0.274);
  border: 0px solid black;
}
.table2 {
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  border: 0px solid black;
}
td {
  text-align: left;
}
td .td-first {
  text-align: none;
}
.summary-pa {
  text-align-last: left;
  margin-left: 10%;
}
.summary-pa span {
   color: rgb(134,6,8)
}
.edit-pa {
  color: rgb(134,6,8)
}
.submit-btn {
  /*-color: rgba(0, 255, 0, 0.877);*/
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
