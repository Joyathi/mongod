const success_function = require('../utils/response-handler').success_function;
const error_function =require('../utils/response_handler').error_function;
let users = require('../db/models/users');
const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let dotenv =require('dotenv');
dotenv.config();

exports.login = async function(req,res){
    try{
        console.log("Reached here...");

        let email = req.body.email;
        console.log("email :",email);
        let password = req.body.password;
        console.log("password :",password);

        let user =await users.findone({email});
        console.log("user :",user);

        if(!user){
            let response = errpr_fuction({
                statuscode :404,
                message :"user not found"
            })
            return response.statuscode(response.statuscode).send (reponse);
        }

        let db_password =user.password;
        console.log('db_password :',db_password);

        if(bcrypt.compareSync(password,db_password)){
       
            //Generating JWT token
            let jwt_token=jwt.sing({user_id : user._id}.process.env.PRIVATE_KEY);
            console.log("jwt_token:",jwt_token);

            let response = success_function({
                statuscode :200,
                data :jwt_token,
                message:"Login successfull",
            });

            res.status(response.statuscode).send(response);
            return;
        }else{
            let reponse =error_function({
                statuscode :400,
                message:"failed"
            })
            return res.status(response.statuscode).send(reponse);
        }

    }catch(error){
        console.log("error:",error);
        let response =errorr_function({
            statuscode :400,
            message :error.message ?error.message:error,
        });
        res.status(response.statuscode).send(reponse);
        return;
    }
}

