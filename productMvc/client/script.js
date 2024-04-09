async function submitFrom(){
    let product = document.getElementById('product').Value;
    console.log("product  :",product);

    let category = document.getElementById('category').Value;
    console.log("category :",category);

    let prise = document.getElementById('prise').Value;
    console.log("prise :",prise);

    let size = document.getElementById('size').Value;
    console.log("size :",size);

    let quantity = document.getElementById('quantity').Value;
    console.log("quantity :",quantity);

    let data ={
        product,
        category,
        prise,
        size,
        quantity
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
        <td><input type="text"name="product" id="product-${pd[i]._id}" value="${pd[i].product}" disabled="true"></td>
        <td><input type="text"name="category" id="category-${pd[i]._id}" value="${pd[i].category}" disabled="true"></td>
        <td><input type="text"name="prise" id="prise-${pd[i]._id}" value="${pd[i].prise}" disabled="true"></td>
        <td><input type="text"name="size" id="size-${pd[i]._id}" value="${pd[i].size}" disabled="true"></td>
        <td><input type="text"name="quantity" id="qunatity-${pd[i]._id}" value="${pd[i].quantity}" disabled="true"></td>
        
        <td><button onclick="handleEdit('${pd[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${pd[i]._id}')">Save</button></td>
        <td><button onclick="handleDelete('${pd[i]._id}')">Delete</button></td>

        </tr>
        `
    }
content.innerHTML =rows;
}

getData();

function handleEdit(id){
    console.log("id :",id);

    let product = document.getElementById(`product.${id}`);
    console.log("product :",product);
    product.disbled =false;
    
    let category = document.getElementById(`category.${id}`);
    console.log("category :",category);
    prise.disbled =false;
    
    let prise = document.getElementById(`prise.${id}`);
    console.log("prise :",prise);
    prise.disbled =false;
    
    let size = document.getElementById(`size.${id}`);
    console.log("size :",size);
    size.disbled =false;

    let quantity = document.getElementById(`quantity.${id}`);
    console.log("quantity :",quantity);
    quantity.disbled =false;

}

async function handleSave (id){
    console.log("id :",id);

    let firstnameTag = document.getElementById(`priduct.${id}`);
    console.log("productTag  :",productTag );
    let product = productTag.Value;
    console.log("product:",product);

    let categoryTag = document.getElementById(`category.${id}`);
    console.log("categoryTag  :",categoryTag );
    let category  = categoryTag.Value;
    console.log("category:",category);

    let priseTag = document.getElementById(`prise.${id}`);
    console.log("priseTag  :",priseTag );
    let prise = priseTag.Value;
    console.log("prise:",prise);

    let sizeTag = document.getElementById(`size.${id}`);
    console.log("sizeTag  :",sizeTag );
    let size = sizeTag.Value;
    console.log("size:",size);

    let quantityTag = document.getElementById(`.quantity${id}`);
    console.log(" quantityTag :",quantityTag );
    let quantity = quantityTag.Value;
    console.log("quantity:",quantity);

    

    let data = {
        id,
        product,
        category,
        prise,
        size,
        quantity
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

function validateprodut(){
    let produt = document.getElementById('product').value;
    console.log("lastname :",lastname);

    let product_error = document.getElementById("product-error");

    let product_regex =/^[a-zA-Z]{2,3}([a-zA-Z]{2,30})?$/;

    let isproductVaild = product_regex.text.test(product);
    console.log("isproductValid :",isproductValid);

    if(isproductVaild){
        product_error.innerHTML = "Invalid product";
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