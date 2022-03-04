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

app.get('/get_all_status',(req,res)=> {
    db.func("get_all_status")
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
app.get('/set_room2on/:pin',(req,res)=> {
    db.func("set_room2on",req.params.pin)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})


app.get('/get_pir/',(req,res)=> {
    db.func("get_pir")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_get_chat/',(req,res)=> {
    db.func("fn_get_chat")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_add_chat/:name/:email/:chat',(req,res)=> {
    db.func("fn_add_chat",
    [
        req.params.name,
        req.params.email,
        req.params.chat
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_get_gitlink/',(req,res)=> {
    db.func("fn_get_gitlinks")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get("/fn_set_seen/:message",(req,res)=> {
    db.func("fn_set_seen",req.params.message)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/set_status/:sts_/:email_/:note_",(req,res)=> {
    db.func("set_status",
    [
        req.params.sts_,
        req.params.email_,
        req.params.note_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/fn_add_new_github/:program_name_/:githublink_/:addedBy",(req,res)=> {
    db.func("fn_add_new_github",
    [
        req.params.program_name_,
        req.params.githublink_,
        req.params.addedBy
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/fn_add_new_sales_business_application/:date_written_/:product_name_/:cost_/:contract_term_/:escallation_/:settlements_/:company_street_number_/:company_name_/:company_town_/:company_city_/:province_/:registered_company_name_/:trading_as_/:years_trading_/:registration_number_/:vat_number_/:turnover_/:owners_id_/:designation_/:telephone_/:cell_number_/:fax_/:postal_address_/:email_address_/:next_of_kin_/:landlord_details_/:company_/:no_/:bank_name_/:account_number_/:branch_name_/:trade_references_/:agent_",(req,res)=> {
    db.func("fn_add_new_sales_business_application",
    [
        req.params.date_written_,
        req.params.product_name_,
        req.params.cost_,
        req.params.contract_term_,
        req.params.escallation_,
        req.params.settlements_,
        req.params.company_street_number_,
        req.params.company_name_,
        req.params.company_town_,
        req.params.company_city_,
        req.params.province_,
        req.params.registered_company_name_,
        req.params.trading_as_,
        req.params.years_trading_,
        req.params.registration_number_,
        req.params.vat_number_,
        req.params.turnover_,
        req.params.owners_id_,
        req.params.designation_,
        req.params.telephone_,
        req.params.cell_number_,
        req.params.fax_,
        req.params.postal_address_,
        req.params.email_address_,
        req.params.next_of_kin_,
        req.params.landlord_details_,
        req.params.company_,
        req.params.no_,
        req.params.bank_name_,
        req.params.account_number_,
        req.params.branch_name_,
        req.params.trade_references_,
        req.params.agent_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
/*
app.get("/fn_add_new_sales_indiv_application/:date_written_/:product_name_/:cost_/:contract_term_/:escallation_/:settlements_/:street_number_/:customer_name_/:customer_town_/:customer_city_/:province_/:employers_name_/:years_employed_/:work_telephone_no_/:work_fax_no_/:id_no_/:marital_status_/:designation_/:telephone_/:cell_number_/:fax_/:alternative_number_/:postal_address_/:email_address_/:next_of_kin_/:next_of_kin_contacts_/:bank_name_/:account_number_/:branch_name_/:agent_",(req,res)=> {
    db.func("fn_add_new_sales_indiv_application",
    [
        req.params.date_written_,
        req.params.product_name_,
        req.params.cost_,
        req.params.contract_term_,
        req.params.escallation_,
        req.params.settlements_,
        req.params.street_number_,
        req.params.customer_name_,
        req.params.customer_town_,
        req.params.customer_city_,
        req.params.province_,
        req.params.employers_name_,
        req.params.years_employed_,
        req.params.work_telephone_no_,
        req.params.work_fax_no_,
        req.params.id_no_,
        req.params.marital_status_,
        req.params.designation_,
        req.params.telephone_,
        req.params.cell_number_,
        req.params.fax_,
        req.params.alternative_number_,
        req.params.postal_address_,
        req.params.email_address_,
        req.params.next_of_kin_,
        req.params.next_of_kin_contacts_,
        req.params.bank_name_,
        req.params.account_number_,
        req.params.branch_name_,
        req.params.agent_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})*/

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
