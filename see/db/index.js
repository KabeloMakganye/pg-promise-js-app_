const pgp=require("pg-promise")();
const connectionString = 
"postgreSQL://postgres:0000@localhost:5432/clock_data_db";

const db=pgp(connectionString);

module.exports=db;