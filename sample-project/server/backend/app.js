const express = require('express');
const app = express();
const connect = require('./db/config');
const userRoutes =require('./routes/userRoutes');
const authRoutes =require('./routes/authRoutes');

//Database connection
connect();

//client
app.use(express.static(__dirname +'/../client'));

//parsing from datas
app.use(express.urlencoded({extended : true}));

//parsing JSON data
app.use(express.json());

//userRoutes
app.use(userRoutes);

//authroutes
app.use(authRoutes);

app.listen(process.env.PORT,()=>{
    console.log (`server running at http://localhost:${process.env.PORT}`);
});