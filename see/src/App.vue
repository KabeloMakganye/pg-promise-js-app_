<template>
<body>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       <div class="navbarup">
         <div class="navin">
        <a href="https://web.facebook.com/eafricatelecoms/" ><span class="fa fa-facebook"></span></a>
        <a href="https://www.instagram.com/e_africatelecoms/" ><span class="fa fa-instagram"></span></a>
         </div>
         <div class="navin2">
        <a href="tel:0121117420" title="0121117420" class="fa fa-phone" aria-hidden="true"></a> <a href="tel:0121117420"><span class="num"> 012 111 7420</span></a>
        <a href="tel:0876546448" title="0876546448" class="fa fa-phone" id="b" aria-hidden="true"></a> <a href="tel:0876546448"><span class="num"> 087 654 6448</span> </a>
        <a href="mailto:info@eafricatelecoms.co.za" title="info@eafricatelecoms.co.za" class="fa fa-envelope" aria-hidden="true"></a> <a href="mailto:info@eafricatelecoms.co.za"><span class="num"> info@eafricatelecoms.co.za</span></a>
         </div>
      </div>
  <div id="app">
    <form style="text-align: left;" @dblclick = "closeNav()" id="myForm">
  <div id="mySidebar" class="sidebar" @mouseleave= "closeNav()">
    <a href="javascript:void(0)" class="closebtn" @click = "closeNav()">×</a>
    <a href="https://clock-system-6a6f8.web.app/#/login" @click = "closeNav()">Clock in</a>
    <a href="https://clock-system-6a6f8.web.app/#/logout" @click = "closeNav()">Clock out</a>
    <a href="https://clock-system-6a6f8.web.app/#/departmentsLogin" @click = "closeNav()">Departments</a>
    <a href="https://clock-system-6a6f8.web.app/#/status" @click = "closeNav()">Work status&#128736;&#9888;</a>
    <a href="https://clock-system-6a6f8.web.app/#/view" @click = "closeNav()">Account settings</a>
    <a href="https://clock-system-6a6f8.web.app/#/activity" @click = "closeNav()">Task&#128736;&#9888;</a>
  </div>
  <div id="main">
  <button id="btn" class="openbtn" @click = "openNav()" @mouseenter = "openNav" ontouchstart = "openNav"><span>☰ Menu</span></button>
  <img onClick="window.location.href='https://clock-system-6a6f8.web.app/#/';" src="./assets/eafrica.png">
</div>
</form>
    <router-view/>
  </div>
</body>
</template>

<script>
export default {
  name: 'App',
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
  },
  head: {
    title: {
      inner: 'E-Africa Telecoms Vitual Office'
    },
    link: {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    }
  }
}
</script>

<style>
body {
    background: #f2f2f2;
  margin: 0;
  font-family: 'poppins';
}
img {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin: 0;
  background-color: rgb(255,255,255);
  /*height: 100%;*/
  background-size: cover;
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
  background-color: rgb(255, 255, 255);
  color: white;
  padding: 0;
  border: none;
}
.openbtn span {
  color: rgb(0, 0, 0);
}
.openbtn:hover {
  background-color: rgb(252, 197, 197);
}

#main {
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 420px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
@media screen and (max-width: 600px) {
  .fa-envelope::before {
    color: rgb(134,6,8);
    font-size: 25px;
    padding: 0px 0px 0px 15px;
    margin: 0;
  }
  .fa-phone::before {
    color: rgb(134,6,8);
    font-size: 25px;
    margin: 0;
    padding: 0px 0px 0px 15px;
  }
  #b {
    display: none;
  }
  a .num {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .fa-phone::before {
  color: rgb(134,6,8);
  font-size: 15px;
  margin: 0;
  padding: 0px 0px 0px 15px;
}
.fa-envelope::before {
  color: rgb(134,6,8);
  font-size: 15px;
  padding: 0px 0px 0px 15px;
  margin: 0;
}
}
.fa::before {
  padding: 20px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook::before {
  color: rgb(134,6,8);
  font-size: 25px;
}
.fa-instagram::before {
  color: rgb(134,6,8);
  font-size: 25px;
}

.navbarup {
  background: #f2f2f2;
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
}
.navin {
  padding: 0px;
  display: flex;
  place-content: space-between;
}
.navin2 {
  padding: 0px;
  font-size: 15px;
  display: flex;
  place-content: space-between;
}
a {
  text-decoration: none;
  color: #000000;
}
</style>
