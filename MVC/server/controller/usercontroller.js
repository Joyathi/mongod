const users =require('../db/models/users');
const success_function = require('../utils/response_handler').success_function;
const error_function = require('../utils/response_handler').error_function;
const bcrypt = require('bcryptjs');
const{get,default:mongoose}= require('mongoose')

exports.createUser = async function (req, res){
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;

        const email = req.body.email
        const password = req.body.password
        console.log("password :",password)

        //validations

        if(!firstname){
            let response=error_function({
                statuscode :401,
                message:"first name is required"
            });
            res.status(401).send(response);
            return;
        }
        if (!lastname){
            let response=error_function({
                statuscode:401,
                meassage:"last name is required"
            });
            res.status(401).send(response);
            return;
        }
        if (!email){
            let response=error_function({
                statuscode:401,
                meassage:"email is requiresd"
            });
            res.status(401).send(response);
            return;
        }
        if (!password){
            let response=error_function({
                statuscode:401,
                meassage:"password is requiresd"
            });
            res.status(401).send(response);
            return;
        }
        

        let email_count = await users.countDocuments({email});
        if (email_count > 0){

            let response = error_function({
                statuscode :400,
                meassage :"email already  exists",
            });
            res.status(400).send(response);
            return;
        }
        // let firstname_regexp = /^[A-Z]([a-zA-Z]{2,30})?$/;
        // let validFirstName =firstname_regexp.test(firstname);
        
        // if (!validFirstName){
        //     let response = error_function({
        //         statuscode :401,
        //         message : "first name is invalid"
        //     });
        //     res.status(401).send(response);
        //     return;
        // }

        // if (firstname.length < 2){
        //     let response = error_function({
        //         statuscode :401,
        //         message:"first name is too short"
        //     });
        //     res.status(401).send (response);
        //     return;
        // }
        
        // if (firstname.length >30){
        //     let response  = error_function({
        //         statuscode :400,
        //         message:"first name is too long"
        //     });
        //     res.status(400).send(response);
        //     return;
        // }

        let firstname_regexp=/^[A-Z]([a-zA-Z]{2,30})?$/;

        let validlastName = firstname_regexp.test(firstname);
        console.log("validity of firstname:",validlastName);

        if(firstname.length <2){
            let response = error_function({
                statuscode :400,
                message:"Firstname is too short"
            });
            res.status(400).send(response);
            return;
        }
        if (firstname.length>30){
            let response = error_function({
                statuscode :401,
                message:"firstname is too long"
            });
            res.status(401).send(response);
            return;
        }


        let lastname_regexp = /^[A-Z]([a-zA-Z]{2,30})?$/;

        let validLastName =lastname_regexp.test(lastname);
        console.log("validity of firstname :",validLastName);
         
        if(lastname.length < 2){
            let response = error_function({
                statuscode : 401,
                message :"First name is too short"
            });
            res.status(401).send(response);
            return;

        }
        if(lastname.length >30){
            let response = error_function({
                statuscode :401,
                message:"Lastname is too long"
            });
            res.status(401).send(response)
            return;

        }


        let salt = await bcrypt.genSalt(10);
        console.log("salt :",salt);

        let hashed_password = bcrypt.hashSync(password,salt);
        console.log("hashed_password :",hashed_password);

        const new_user = new users({
            firstname :firstname,
            lastname :lastname,
            email,
            password :hashed_password,
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
            res.status(400).send(response);
            return;
        }
    }catch (error){
        let response = error_function({
            statuscode:400,
            message :"something went wrong",
        })
        console.log("error :",error);
        res.status(400).send(response);
    }
}
exports.getUsers = async function (req,res){
    const UserModel = mongoose.model('users')
    try{
        const userData = await UserModel.find();
        if(userData){
            let response = success_function({
                statuscode :200,
                data :userData,
                meassage:"Datas fetched successfully",
            })
            res.status(200).send(response);
            return;
        }else{
            let response = error_function({
                statuscode :400,
                message : "Failed to get Data"
            })
            res.status(400).send(response);
            return;
        }
    }catch (error){
        let response = error_function({
            statuscode:400,
            message:"something went wrong",
        })
        console.log("error:",error);
        res.status(400).send(response);
        return;
    }

}
exports.getSingleUsers = async function (req,res){
try{
    const userId = req.params.id;
    if (!userId){

        let response =error_function({
        statuscode :401,
        message :"user not found"
    });
    res.status(401).send(response);
        return;
    }
    const user = await users.findById(userId);
    if(!user){
        res.status(404).send("user not found");

        let response =error_function({
            statuscode :404,
            message :"user not found"
        });
        res.status(404).send(response);
        return;
    }
    const userData ={
        firstname :user.firstname,
        lastname :user.lastname,
        email:user.email,
    };
    let response =success_function({
        statuscode:200,
        data:userData,
        message:"User found successfully"
    });
    res.status(200).send(response);
    return;
}catch(error){
    let response =error_function({
        statuscode :500,
        message:"Internal server Error",
    });
    console.log("error :",error);
    res.status(500).send(response);
    return;
}
}
exports.updateUsers = async function (req,res){
try{
    const userId = req.body.userId;
    // const updatedData = req.body.updatedData;
           
    console.log("req.body :",req.body)
    //validation
    if(!userId){
       let response = error_function({
            statuscode:401,
            meassage :"User id is required"
       });
       res.status(400).send(response);
       return;
       
    }

    const users = await users.findoneAndupdate({_id:req.body.id},{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,

    },{
        upsert:true//Make this update into an upsert
    })

    console.log("users:",users)

    if(!users){
        res.status(404).send("User not found");
           return;
    }
    else{
        res.status(200).send("user updated succesfully")
        return;
    }
}
catch(error){
    let response ={
        statuscode :500,
        message:"internal server Error",
    };
    console.log("error :",error);
    res.status(500).send(response)
}

}
exports.deleteUsers = async function (req,res){
    try{
        const userId = req.params.id;
        if (!userId){
            res.status(400).send("User ID is required");
            return;
        }
        const user = await users.findById(userId);
        if(!user){
            res.status(404).send("User not found");
            return;
        }
        await users.findByIdAndDelete(userId);

        let response={
            statuscode:200,
            message:"User deleted successfully",o
        };
        res.status(200).send(response);
     }catch(error){
        let response ={
            statuscode :500,
            message:"internal server Error",
        };
        console.log("error :",error);
        res.status(500).send(response)
     }

}
