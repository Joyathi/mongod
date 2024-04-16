const users =require('../db/models/users');
const success_function = require('../utils/response_handler').success_function;
const error_function = require('../utils/response_handler').error_function;

exports.createUser = async function (req, res){
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;

        const email = req.body.email
        const password = req.body.password
        console.log("password :",password)

        let email_count = await users.countDocuments({email});
        if (email_count > 0){

            let response = error_function({
                statuscode :400,
                meassage :"email already  exists",
            });
            res.status(400).send(response);
            return;
        }
        const new_user = new users({
            firstname :firstname,
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
        res.status(400).send("User ID is required");
        return;
    }
    const user = await users.findById(userId);
    if(!user){
        res.status(404).send("user not found");
        return;
    }
    const userData ={
        firstname :user.firstname,
        lastname :user.lastname,
        email:user.email,
    };
    let response ={
        statuscode:200,
        data:userData,
        message:"User found successfully"
    };
    res.status(200).send(response);
}catch(error){
    let response ={
        statuscode :500,
        message:"Internal server Error",
    };
    console.log("error :",error);
    res.status(500).send(response);
}
}
exports.updateUsers = async function (req,res){
try{
    const userId = req.body.userId;
    const updatedData = req.body.updatedData;

    if(!userId){
        res.status(400).send("User ID is required")
        return;
    }
    if(!updateData || Object.keys(updateData).length===0){
        res.status(400).send("Updated data is required");
        return;
    }
    const user = await users.findById(userId);

    if(!user){
        res.status(404).send("User not found");
        return;
    }
    for(let key in updatedData){
        user[key]=updatedData[key]
    }
    const updatedUser await user.save();
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
            message:"User deleted successfully",
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
