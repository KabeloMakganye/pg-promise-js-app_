<template>
<body>
  <div class="hello">
   <!-- <h1>{{ msg }}</h1>

    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/login';">Clock in</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/logout';">Clock out</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/status';">Update work status</button><label>BETA</label>&#128736;&#9888;<br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/view';">View all in</button><br><br>
    <button onClick="window.location.href='https://clock-system-6a6f8.web.app/#/activity';">Tasks</button><label>BETA</label>&#128736;&#9888;<br><br> -->
  <!-- <a href="mailto:kabeloref@gmail.com">Send email</a> -->
<form style="text-align: left;" @dblclick = "closeNav()" id="myForm">
  <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click = "closeNav()">×</a>
    <a href="https://clock-system-6a6f8.web.app/#/login">Clock in</a>
    <a href="https://clock-system-6a6f8.web.app/#/logout">Clock out</a>
    <a href="https://clock-system-6a6f8.web.app/#/status">Work status&#128736;&#9888;</a>
    <a href="https://clock-system-6a6f8.web.app/#/view">Account settings</a>
    <a href="https://clock-system-6a6f8.web.app/#/activity">Task&#128736;&#9888;</a>
  </div>
  <div id="main">
  <button id="btn" class="openbtn" @click = "openNav()" @mouseenter= "openNav()" @mouseover= "openNav()"><span>☰ Menu</span></button>
</div>
</form>
<form id="mainForm">
<div>
  <form class="empStatuses" id="empStatus">
  <H1>Employees work Status&#128736;&#9888;</H1>
  <div class="container">
    <div class="innnerContainer">
    <table>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>Kabelo</td>
        <td>Busy</td>
      </tr>
       <tr>
        <td>Kabelo</td>
        <td>Busy</td>
      </tr>
       <tr>
        <td>Kabelo</td>
        <td>Busy</td>
      </tr>
       <tr>
        <td>Kabelo</td>
        <td>Busy</td>
      </tr>
      <tr>
        <td>Prince</td>
        <td>Busy</td>
      </tr>
    </table>
    </div>
  </div>
  </form>
</div>
</form>
  </div>
</body>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Keep your mask on'
    }
  },
  methods: {
    openNav () {
      for (let index = 0; index < 2; index++) {
        document.getElementById('mySidebar').style.width = '250px'
        // document.getElementById('main').style.marginLeft = '250px'
        document.getElementById('btn').style.visibility = 'hidden'
      }
    },
    closeNav () {
      document.getElementById('mySidebar').style.width = '0'
      // document.getElementById('main').style.marginLeft = '0'
      document.getElementById('btn').style.visibility = 'visible'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  font-family: "Lato", sans-serif;
  background: rgb(252, 197, 197);
  margin: 8px;
  font-family: 'poppins';
  height: 100%;
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(169,16,19);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000000;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: rgb(197, 123, 124);
  color: white;
  padding: 10px 15px;
  border: none;
}
.openbtn span {
  color: rgb(0, 0, 0);
}
.openbtn:hover {
  background-color: #444;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
#myForm {
  background-color: rgb(197, 123, 124);
}
#mainForm {
  background-color: rgb(197, 123, 124);
  margin-top: 10px;
  /* margin-bottom: 10px; */
  /* max-height:  100%; */
  padding: 16px;
  height: 100%;
}
.container {
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: rgb(252, 197, 197);
}
.innnerContainer {
  display: grid;
  gap: 10px;
  width: 100%;
}
.box {
  width: 100%;
  height: 100%;
  background-color: rgb(247, 129, 129);
  border-radius: 100px;
}
.box h5 {
  color: rgb(0, 0, 0);
}
@media only screen and (min-width: 0px) {
  .innnerContainer {
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
  }
  .box {
    height: 100%;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: max-content;
  border: 1px solid rgb(247, 129, 129);
}
th, td {
  text-align: left;
  padding: 16px;
}
tr:nth-child(even) {
  background-color: rgb(247, 129, 129);
}
</style>
