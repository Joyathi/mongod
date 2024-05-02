import React, {useState} from "react";

export default function Login1(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     onClick(button);
      
    // }

    let content;

    if(isLoggedIn){
        content =<h1>Welcome! You are logged in !</h1>
       
    }else{

        content =  <h1>please login to continue</h1>

       
    }

    return(
        <>

        {content}

        {/* <button onClick={ () =>useState}>
            {`${useState ? 'Login' : 'Logout'}`}

        </button> */}

<button onClick={ toggleLoginLogoff}>
            { isLoggedIn ? 'Logoff' : 'Login'}

        </button>
        </>
        

        
    )
}