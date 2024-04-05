const mongoose = require('mongoose');

const users = new mongoose.schema({
    firstname :{
        type :"string",
        required :true
    },
    lastname :{
        type :"string",
        required :true
    },
    email :{
        type :"string",
        required :true
    },  

    password :{
        type :"string",
        required :true
    },
})

module.exports = mongoose.model("users",users);