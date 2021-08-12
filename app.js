var http = require('http')

const express = require("express");
const port = 3000;

const bodyParser = require("body-parser")
const cors = require("cors")
const morgan=require("morgan")



const app = express();

/* process.env["node_tls_reject_unauthorized"]=0; */

const db = require("./db");


app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.json());

const clock_in = require('./routes/in');
const clock_out = require('./routes/out');
const get_all=require('./routes/all_employees');

// app.use("/in", clock_in);
// app.use("/out", clock_out);
// app.use("/all_employees",get_all);

var em;
var nm;

class ad{
    constructor()
    {
        var add;
    }
}
z=new ad();
app.get('/in/:name/:email',(req,res,next)=> {
    db.func("fn_add_new_clock",[req.params.email,req.params.name])
    // db.any("SELECT * FROM clock_in_out")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     }) 
     .catch(error => {
         console.log(error);
     })
})


app.get("/out/:email",(req,res,next)=> {
    db.func("fn_clock_out",req.params.email)
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })
app.get('/all',(req,res)=> {
    db.func("getall_employees")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/bydate/:date',(req,res)=> {
    db.func("get_by_date",req.params.date)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/neweployee/:email/:name/:pass/:man',(req,res,next)=> {
    db.func("fn_add_new_employee",[req.params.email,req.params.name,req.params.pass,req.params.man])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/getall_workers',(req,res)=> {
    db.func("getall_workers")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/get_by_email/:email',(req,res)=> {
    db.func("get_by_email",req.params.email)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.listen(process.env.PORT)
module.exports=ad;
app.listen(port, () =>
 console.log(`server running at http://localhost:${port}`)
);
