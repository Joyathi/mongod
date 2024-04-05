const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

async function connection (){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connection established...");
    }catch(error){
        console.log("Database coonection error :",error)
    }
}

module.exports = connect;//Default exports in commonjs module system