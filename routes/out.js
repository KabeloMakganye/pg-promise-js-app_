const express = require('express')
const router = express.Router()
const db = require('../db')


router.get("/",(req,res)=> {
  db.func("fn_clock_out","hello@eafricatelecoms.co.za")
 // db.any("SELECT * FROM clock_in_out")
  .then(rows => {
      console.log(rows);
      res.json(rows);
  }) 
  .catch(error => {
      console.log(error);
  })

})
module.exports=router;