import React, {useState} from "react";

export default function Login(){
    const [isLoggedIn, setIsLoggedIn] =useState(false);

    return(
        <>
        {isLoggedIn ? (<h1> Welcome!</h1>) : (<h1>please Login</h1>)}
        </>
    )
}