import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./Login.css"
import React, {useState} from "react"
import axios from "axios";

import UserNAv from "../UserPage/UserNav";

const Login = () => {
    const submitForm = async (email,password) =>{
        try{
            const response = await axios.post("http://localhost:5173")
            email:email,
            password: password
    
    }}
         console.log ("response :",response)
         if(response.data && response.data.success){
            console.log("reponse.data.data:",response.data.data)
            localStorage.setItem('jwtToken', response.data.data)
            console.log('Token saved to localStorege');
         }else{
            console.error('Token not found in response');
            alert("Token not found in response")
         }catch (error){
            console.error('Error fetching the token:',error);
            alert("Something went Wrong")

         
    }
};