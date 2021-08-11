const pgp=require("pg-promise")();
const connectionString = 
"postgres://ghzvmsyfmzeegq:9646b53aef56ec3ac4f5de82abd5359a7725f313b010ecc682ede70738e269a5@ec2-3-227-44-84.compute-1.amazonaws.com:5432/d34rrp3s0q9nsc";


var pg = require('pg');
pg.defaults.ssl = true

const db=pgp(connectionString);

module.exports=db;
