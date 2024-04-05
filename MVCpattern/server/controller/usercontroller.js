const user =require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

exports.createUser = async function (req, res){
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;

        const email = req.body.email
        const password = req.body.password
        console.log("password :",password)

        let email_count = await URLSearchParams.countDocuments({email});
        if (email_count >0){
            let response = error_function({
                statuscode :400,
                meassage :"email already  exists",
            });
            res.status(400).send(response);
            return;
        }
        const new_user = new users({
            firstName :firstname,
            lastname :lastname,
            email,
            password,
        });
        const saved_user =await new_user.save();
        if(saved_user){
            let response = success_function({
                statuscode :200,
                data:saved_user,
                message :"User created successfully",
            })
            res.status(200).send(response);
            return;
        }else{
            let response = error_function({
                statuscode:400,
                message:"User creation failed",
            })
            req.status(400).send(response);
            return;
        }
    }catch (error){
        let response = error_function({
            statuscode:400,
            message :"something went wrong",
        })
        console.log("error :",error);
        res.status(200).send(response);
    }
}
exports.getUsers = async function (req,res){

}
exports.getSingleUsers = async function (req,res){

}
exports.ubdateUsers = async function (req,res){

}
exports.deleteUsers = async function (req,res){

}
