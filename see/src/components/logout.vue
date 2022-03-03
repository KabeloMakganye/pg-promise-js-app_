<template>
  <div id="page-div">
    <form>
    <h1>Clocking out</h1>
    <div id="log-div">
    <label>Employee email:</label>
    <input type ='email' v-model="email" placeholder="@eafricatelecoms.co.za" required><br><br>
    <button @click= "clockout(1)" type="submit">
     Clocking out
     </button>
     <br><br>
    </div>
     </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '@eafricatelecoms.co.za'
    }
  },
  methods: {
    async clockout (i) {
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('log-div').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (allAreFilled) {
        await fetch(`https://warm-springs-22910.herokuapp.com/out/${this.email}`)
        alert('clocked out, good Bye')
      }
    }
  }
}
</script>

<style scoped>
#page-div {
    background: #f2f2f2;
  margin: 0;
  font-family: 'poppins';
}
body {
  font-family: Arial, Helvetica, sans-serif;
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
</style>
