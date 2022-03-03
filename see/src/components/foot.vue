<template>
  <div>
    <form>
         <div>
      <div>
    <form>
      <div class="navbardown">
        <div class="navin3">
          <table>
            <thead>
              <tr>
                <th><h4>COMPANY</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="">About Us</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">What We Do</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">The Connect</a>
                </td>
              </tr>
                <tr>
                  <td>
                  <a href="">Careers</a>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="navin3">
          <table class="foottable">
            <thead>
              <tr>
                <th><h4>SOLUTIONS</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="">Home Solutions</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">Business Solutions</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="">Internet Solutions</a>
                </td>
              </tr>
                <tr>
                  <td>
                  <a href="">Promotions</a>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="navin3">
          <table class="foottable">
            <thead>
              <tr>
                <th><h4>CONTACT US</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                 <a href="tel:0121117420"><span> 012 111 7420</span></a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="tel:0876546448" title="0876546448"><span> 087 654 6448</span> </a>
                </td>
              </tr>
              <tr>
                <td>
                   <a href="mailto:support@eafricatelecoms.co.za" title="support@eafricatelecoms.co.za"><span> support@eafricatelecoms.co.za</span></a>
                </td>
              </tr>
                <tr>
                  <td>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <div class="navin">
        <a href="https://web.facebook.com/eafricatelecoms/" ><span class="fa fa-facebook"></span></a>
         </div>
                  </td>
              </tr>
              <tr>
                  <td>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <div class="navin">
        <a href="https://www.instagram.com/e_africatelecoms/" ><span class="fa fa-instagram"></span></a>
         </div>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="navin3">
           <table class="foottable">
            <thead>
              <tr>
                <th><h4>BUSINESS HOURS</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Office Hours:
                </td>
              </tr>
              <tr>
                <td>
                  Monday - Friday 8:00-17:00
                </td>
              </tr>
              <tr>
                <td>
                  Support Hours:
                </td>
              </tr>
                <tr>
                  <td>
                  Monday - Friday 8:00-17:00
                  </td>
              </tr>
              <tr>
                  <td>
                  SLA support: 24H
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="feet">
    <h5>Copyright © 2022 All Rights Reserved. Designed by <a href="https://eafricatelecoms.co.za/">E-Africa Telecoms</a> </h5>
      </div>
     </form>
  </div>
  </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'foot',
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
    hello () {
      alert('hello')
    }
  }
}
</script>

<style scoped>
body {
    background: #ffffff;
  margin: 0;
  font-family: 'poppins';
  height: 100%;
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
  .navbardown {
  background: rgb(10,20,40);
  transition: margin-left .5s;
  padding: 16px;
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
.navbardown {
  background: rgb(10,20,40);
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
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
    transition: .8s;
}
.fa-facebook::before {
  color: rgb(134,6,8);
  font-size: 25px;
  transition: .8s;
}
.fa-instagram::before {
  color: rgb(134,6,8);
  transition: .8s;
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
.navin3 a {
  font-family: 'poppins';
  color: white;
  font-size: 14px;
  transition: .8s;
}
.feet {
  background-color: rgb(53, 53, 53);
  border-top: 10px solid rgb(53, 53, 53);
  border-bottom: 10px solid rgb(53, 53, 53);
}
.feet h5 {
  color: white;
  margin: 0%;
}
.feet a {
  color: rgb(224, 15, 19);
}
.navin3 h5 {
  margin: 0;
}
.navin3 {
  padding: 0px;
  display: flex;
  place-content: space-between;
}
.navin3 table, td, th {
  border: 0px solid black;
  text-align: left;
  color: white;
  font-size: 15px;
}
.navin3 table {
  border-collapse: collapse;
  width: 100%;
}
.navin3 td {
  height: 30px;
}
.navin3 h4 {
  color: rgb(201, 160, 160);
}
a:hover {
    opacity: 0.7;
    font-size: 15px;
    transition: .8s;
}
</style>
