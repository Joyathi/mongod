const express = require('express');
const app = express();
const connect = require('./db/config');
const userRought =require('./routes/userRoutes');
const authRought =require('./routes/userRoutes');
const dotenv = require ('dotenv');
dotenv.config();

//Database connection
connect();

//client
app.use(express.static(__dirname +'/../client'));

//parsing from datas
app.use(express.urlencoded({extended : ture}));

//parsing JSON data
app.use(express.json());

//userRoutes
app.use(userRought);

//authroutes
app.use(authRoutes);

app.listen(process.env.PORT,()=>{
    console.log (`server running at http://localhost:${process.env.PORT}`);
});