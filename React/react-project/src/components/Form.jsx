import { useState } from "react";

function Form({onsubmit}){
    console.log("Form component rendering...");

    const [inputData,setInputData]= useState('');
    //console.log("inputData :",inputData);

    const handleSubmit = (e) =>{
        e.preventDefault();
        onsubmit(inputData);
    }
    const handleInputChange = (e) =>{
        setInputData(e.target.value);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="first-name" id="first-name" onChange={handleInputChange}  value ={inputData}/>
           <button type="submit">Submit</button>       
        </form>
        </>
    )
}
export default Form;