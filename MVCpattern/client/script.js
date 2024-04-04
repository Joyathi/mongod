async function submitFrom(){
    let firstname = document.getElementById('firstname').Value;
    console.log("first name :",firstname);

    let lastname = document.getElementById('lastname').Value;
    console.log("last name :",lastname);

    let email = document.getElementById('email').Value;
    console.log("email :",email);

    let password = document.getElementById('password').Value;
    console.log("password :",password);

    let data ={
        firstname,
        lastname,
        email,
        password
    }
    let json_data = JSON.stringify(data);

    //get jwt token from localstorage
    let token = localStorage.getItem('token');
    console.log("token :",token);

    let response = await fetch('/users',{
        "method" :"POST",
        "headers":{
            "Content-type" : "application/json",
            "authorization" :`Bearer ${token},`
        },
        "body" :json_data,
    });
    let parsed_response = await response.json();

    if(parsed_response.success){
        console.log(parsed_response.message);
        alert(parsed_response.message);
        return;
        }else{
            alert(parsed_response.message)
            return;
        }
}

async function getData(){
    console.log("Hello World");

    let token = localStorage.getItem('token');
    console.log("token :",token);

    let data =await fetch('http://localhost:3001/getData',{
        "metord" : "GET",
        "headers":{
            "authorization" :`Bearer ${token}`
        }
    });

    console.log("data :",data);

    let parsedData =await data.json();
    console.log("parsedData :",parsedData);

    let pd= parsedData.data;

    let Content =document.getElementById("content");
    console.log("content :", content);

    let rows = "";

    for(let i=0; i<pd.length;i++){
        rows =rows +`
        
        <tr>
        <td>${pd[i]._id}</td>
        <td><input type="text"name="firstname" id="firstname-${pd[i]._id}" value="${pd[i].firstname}" disabled="true"></td>
        <td><input type="text"name="lastname" id="lastname-${pd[i]._id}" value="${pd[i].lastname}" disabled="true"></td>
        <td><input type="text"name="email" id="email-${pd[i]._id}" value="${pd[i].email}" disabled="true"></td>
        <td><input type="text"name="password" id="password-${pd[i]._id}" value="${pd[i].password}" disabled="true"></td>
        <td><button onclick="handleEdit('${pd[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${pd[i]._id}')">Save</button></td>
        </tr>
        `
    }
content.innerHTML =rows;
}

getData();

function handleEdit(id){
    console.log("id :",id);

    let firstname = document.getElementById(`firstname.${id}`);
    console.log("firstname :",firstname);
    firstname.disbled =false;
    

    let lastname = document.getElementById(`lastname.${id}`);
    console.log("lastname :",lastname);
    lastname.disbled =false;
    
    let email = document.getElementById(`email.${id}`);
    console.log("email :",email);
    email.disbled =false;

    let password = document.getElementById(`password.${id}`);
    console.log("password :",password);
    password.disbled =false;

}

async function handleSave (id){
    console.log("id :",id);

    let firstnameTag = document.getElementById(`firstname.${id}`);
    console.log("firstnameTag  :",firstnameTag );
    let firstname = firstnameTag.Value;
    console.log("firstname:",firstname);

    let lastnameTag = document.getElementById(`lastname.${id}`);
    console.log("lastnameTag  :",lastnameTag );
    let lastname = lastnameTag.Value;
    console.log("lastname:",lastname);

    let emailTag = document.getElementById(`email.${id}`);
    console.log("emailTag  :",emailTag );
    let email = emailTag.Value;
    console.log("email:",email);

    let passwordTag = document.getElementById(`password.${id}`);
    console.log("passwordTag  :",passwordTag );
    let password = passwordTag.Value;
    console.log("password:",password);

    let data = {
        id,
        firstname,
        lastname,
        email,
        password,
    }
    let jsonData=JSON.stringify(data);
    console.log("jsonData :",jsonData);

    let response=await fetch('/editData',{
        method :'PUT',
        Headers :{
            "Content-type" : "application/json",
        },
        body : jsonData,
    });
    console.log("response :",response);
    let parsed_response=await response.text();

    if(parsed_response = "success"){
        alert("Updation Success");
    }else{
        alert("Updation Failed")
    }
}

function validatefirstname(){
    let lastname = document.getElementById('lastname').value;
    console.log("lastname :",lastname);

    let lastname_error = document.getElementById("lastname-error");

    let lastname_regex =/^[a-zA-Z]{2,3}([a-zA-Z]{2,30})?$/;

    let islastNameVaild = lastname_regex.text.test(lastname);
    console.log("islastNameValid :",islastNameValid);

    if(islastNameVaild){
        lastname_error.innerHTML = "Invalid Name";
        return;
    }else{
        Lastname_error.innerHTML ="";
        return;
    }
}

function validateEmail(){
    let email = document.getElementById('email').value;
    console.log("email :",email)

    let email_error =document.getElementById('email-error');

    let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-z0.9.-]+\.[a-zA-Z]{2,4}$/;
    
    let isEmailValid=email_regex.test(email);
    console.log("isEmailvalid :",isEmailValid);

    if(!isEmailValid){
        email_error.innerHTML = "Invalid Email";
        return;
    }else{
        email_error.innerHTML ="";
    }
}

function validatepassword(){
    let password = document.getElementById('password').value;
    console.log("password :",password);

    let password_error = document.getElementById('password-error');
  
    let password_regex =/^(?=.*[a-z])(?=.*[A_Z])(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    let ispasswordvalid = password_regex.test(password);
    console.log("ispasswordvalid :",ispasswordvalid);

    if(!ispasswordvalid){
        password_error.innerHtML = "invalid password";
        return;
    }else{
        password_error.innerHTML ="";
        return;
    }
}

//login

async function login(){
    let email = document.getElementById('login_email').value;
    let password = document.getElementById('login_password').value;

    let datas ={
        email,
        password
    }
    let json_datas = JSON.stringify(datas);

    let response = await fetch ('http://localhost:3001/login',{
        method :"POST",
        headers:{
            "Content-Type" :"application/json",
      },
      body : json_datas
    });
    let parsed_response = await response.json();
    console.log ("parsed_response :",parsed_response );

    if(parsed_response.success){
        console.log("Reached here");

        let token = parsed_response.data
        console.log("token:",token);

        alert(parsed_response.message);

        localStorage.setItem('token',token);
        window.location.herf = "get_user.html";

        return;
    }
}


//logout
function logout(){
    localStorage.removeItem('token');
    window.location.href ="login.html";
    return;
}