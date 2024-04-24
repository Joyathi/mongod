import { useState } from "react";
// import users from "../../../../MVC/server/db/models/users";
import Form from "./Form";
import Display from "./Display";


function Parent (){
    console.log("parent component rendering...");

    const [data, setData] =useState('');

    const handleSubmit =(data)=>{
        setData(data);
    }
    return(
        <>
    <Form onSubmit ={handleSubmit}/>
    <Display DisplayData ={data} /> 
</>
)

}
export default Parent;