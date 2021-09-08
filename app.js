var http = require('http')

const express = require("express");
const port = 3000;

const bodyParser = require("body-parser")
const cors = require("cors")
const morgan=require("morgan")



const app = express();


process.env["NODE_TLS_REJECT_UNAUTHORIZED"]=0;

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

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

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

app.get("/get_tot_hours/:email",(req,res,next)=> {
    db.func("get_tot_hours",req.params.email)
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get("/fn_set_hours/:email/:hours",(req,res,next)=> {
    db.func("fn_set_hours",[req.params.email,req.params.hours])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })
  app.get("/fn_change_password/:pass/:email",(req,res,next)=> {
    db.func("fn_change_password",[req.params.pass,req.params.email])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get("/fn_cunstomlockout/:email/:date/:tim",(req,res,next)=> {
    db.func("fn_customlockout",[req.params.email,req.params.date,req.params.tim])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get('/fn_get_activities',(req,res)=> {
    db.func("fn_get_activities")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})


app.get("/fn_add_new_activity/:name/:email/:newac/:newacdes/:newpriority/:newdeadline/:byuser",(req,res,next)=> {
    db.func("fn_add_new_activity",
    [
        req.params.name,
        req.params.email,
        req.params.newac,
        req.params.newacdes,
        req.params.newpriority,
        req.params.newdeadline,
        req.params.byuser
    ])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get('/fn_get_activitiy_by_email/:email',(req,res)=> {
    db.func("fn_get_activitiy_by_email",req.params.email)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/set_on/:pin',(req,res)=> {
    db.func("set_on",req.params.pin)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

/* http.createServer(function(request, response) {
    response.writeHead(200, {"Constent-Type": "test/plain"})
    response.end("kabelo TESTING\n")
}).listen(process.env.PORT) */

app.use(cors());
app.listen(process.env.PORT)
module.exports=ad;
app.listen(port, () =>
 console.log(`server running at::: http://localhost:${port}`)
);
