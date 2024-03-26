console.log("Hello javascript");

async function getData() {

    console.log("Reached getData...");

let user_data = await fetch('http://localhost:4000/getData');
console.log("user_data : ", user_data.response);
console.log("typeOf(user_data) : ", typeof(user_data));

let parsed_user_data = await user_data.json();
console.log("parsed_user_data : ", parsed_user_data);
console.log("typeOf(parsed_user_data) : ", typeof(parsed_user_data));

let content = document.getElementById('content');
let dataComponent = '';

for(let i=0; i<parsed_user_data.length; i++) {
    // let edit_datas = {id : parsed_user_data[i]._id,name : parsed_user_data[i].name,email : parsed_user_data[i].email,password : parsed_user_data[i].password};
    // let id = parsed_user_data[i]._id;
    let editTag = `<td value=${parsed_user_data[i]._id}>Edit</td>`;
    console.log("editTag : ", editTag);
    dataComponent = dataComponent + `
    <tr>
    <td>${parsed_user_data[i]._id}</td>
    <td><input type="text" productname="productname" id="name-${parsed_user_data[i]._id}" value="${parsed_user_data[i].productname}" disabled="true"></td>
    <td><input type="category" name="category" id="category-${parsed_user_data[i]._id}" value="${parsed_user_data[i].category}" disabled="true"></td>
    <td><input type="password" name="prise" id="password-${parsed_user_data[i]._id}" value="${parsed_user_data[i].prise}" disabled="true"></td>
    <td><button onclick="handleEdit('${parsed_user_data[i]._id}')">Edit</button></td>
    <td><button onclick="handleSave('${parsed_user_data[i]._id}')">Save</button></td>
    <td><button onclick="handleDelete('${parsed_user_data[i]._id}')">Delete</button></td>
    </tr>
    `;
}

console.log("dataComponent : ", dataComponent);

console.log("content : ", content);
content.innerHTML = dataComponent;

}

// getData();

function handleEdit(id) {
    console.log("id : ", id);

    let productname = document.getElementById(`productname-${id}`);
    name.disabled = false;

    let category = document.getElementById(`category-${id}`);
    email.disabled = false;

    let password = document.getElementById(`prise-${id}`);
    password.disabled = false;

}


async function handleSave(id) {
    console.log("Id : ", id);

    let name = document.getElementById(`productname-${id}`).value;
    console.log("productname : ", productname);

    let email = document.getElementById(`category-${id}`).value;
    console.log("category : ", category);

    let password = document.getElementById(`parise-${id}`).value;
    console.log("prise : ", prise);

    let data = {
        id,
        productname,
        category,
        prise
    }

    let json_data = JSON.stringify(data);
    console.log("json_data : ", json_data);

    let response = await fetch(`/editData`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : json_data,
    }
    )

    let response_data = await response.text();
    console.log("response_data : ", response_data);

    if(response_data === "success") {
        alert("Updation Success");
    }else {
        alert("Updation failed");
    }
    return response_data;

}

async function handleDelete(id) {
    console.log("id : ", id);

     let response = await fetch("http://localhost:4000/deleteData",{
        method : "DELETE",
        headers : {
            "Content-Type" : "text/plain"
        },
        body : id,
    });

    let parsed_response = await response.text();
    console.log("parsed_response : ", parsed_response);

    if(parsed_response === "success") {
        alert("Deletion Success")
    }else {
        alert("Deletion failed");
    }
    
}


//Validations
async function submitForm() {
    console.log("Reached SubmitForm");

    let productname = document.getElementById('productname').value;
    console.log("productname : ", productname);

    //Validate product ̣..........name
    let productnameRegex = /^[A-Za-z]{2,30}( [A-Za-z]{2,30})?$/
    let isproductnameValid = productnameRegex.test(productname);
    console.log("isproductnameValid : ", isproductnameValid);

    let productname_message = document.getElementById('productname-error');
    if(!isproductnameValid) {
        alert("productname not valid");
        return;
    }

    let category = document.getElementById('category').value;
    console.log("category : ", category);

    let prise = document.getElementById('prise').value;
    console.log("prise : ", prise);

    let data = {
        productname,
        category,
        prise,
    }


    let json_data = JSON.stringify(data);
    console.log("json_data : ", json_data);

    let response = await fetch('/submit',{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : json_data,
    });

    let parsed_response = await response.text();

    if(parsed_response === "success") {
        alert("Form submitted successfully");
    }else {
        alert("Form submission failed");
    }
}

function validateproductname() {
    let productname = document.getElementById('productname').value;
    console.log("productname : ", productname);

    let productname_message = document.getElementById('productname-error');
    console.log("productname_message : ", productname_message);

    let name_regex = /[a-zA-z]{2,30}( [a-zA-z]{2,30})?$/;
    let isNameValid = name_regex.test(name);
    console.log("isproductnameValid : ", isproductnameValid);

    if(!isproductnameValid) {
        productname_message.innerHTML = "Invallidproductname";
        return;
    }else {
        productname_message.innerHTML = "";
        return;
    }
}

function validatecategory() {
    let category = document.getElementById('category').value;
    console.log("category : ", category);

    let category_message = document.getElementById('category-error');
    console.log("category_message : ", category_message);

    let category_regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.{1}[a-zA-Z]{2,}$/;
    let iscategoryValid = category_regex.test(email);

    if(!isEmailValid) {
        category_message.innerHTML = "Invalid category";
        return;
    }else {
        category_message.innerHTML = "";
        return;
    }

}