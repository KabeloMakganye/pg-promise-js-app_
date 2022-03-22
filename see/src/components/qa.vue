<template>
<body>
  <div>
<div class="navbar">
    <div @mouseleave="hidedropdown()" class="dropdown">
    <button  @mouseenter="showdropdown()" @click="showdropdown()" class="dropbtn" >BUSINESS SALES
      <!-- <i class="fa fa-caret-down"></i> -->
    </button>
    <div class="dropdown-content" id="dropdown-content">
      <a href="javascript:void()" type="button" @click = "showbus(); hide_businessview()" >Verified Sales</a>
      <a href="javascript:void()" type="button" @click = "showindiv(); hide_businessview()" >Unverified Sales</a>
    </div>
  </div>
  <div @mouseleave="hidedropdown2()" class="dropdown2">
    <button @mouseenter="showdropdown2()" @click="showdropdown2(); hide_businessview()" class="dropbtn2" >INDIVIDUAL SALES
    </button>
      <!-- <i class="fa fa-caret-down"></i> -->
    <div class="dropdown-content" id="dropdown-content2">
      <a href="javascript:void()" type="button" @click = "showbusfilled(); getmysales(); hide_businessview()" >Verified Sales</a>
      <a href="javascript:void()" type="button" @click = "showindivfilled(); getmyindivsales(); hide_businessview()" >Unverified Sales</a>
    </div>
  </div>
  <a href="https://eafricatelecoms.co.za/for-you" target="_blank">HOME SOLUTIONS</a>
  <a href="https://eafricatelecoms.co.za/for-your-business" target="_blank">BUSINESS SOLUTIONS</a>
</div>
    <div class="business-sales-list" id="business-sales-list">
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
  </div>
</body>
</template>

<script>
export default {
  name: 'qa',
  /* created () { // using resize event
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  }, */
  data () {
    return {
      a: ''
    }
  },
  methods: {
    /* myEventHandler (e) {
      alert('hello')
    }, */
    see () {
      alert('hy')
    }
  }
}
</script>

<style scoped>
@import 'style.css';
</style>
