import { Link } from "react-router-dom";
function LogIn() {
    return (
        <>
            <link rel="stylesheet" href="../../../LogIn.css" />
            <form action="/submit" method="POST">
               
                <div id="email-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onKeyUp="validateEmail()" />
                    <div id="email-error" />
                </div>
                <div id="password-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onkeyup="validatePassword()"
                    />
                    <div id="password-error" />
                </div>
                <div className="btn">
                    <button type="button" onClick="submitForm()">LogIn</button>
                </div>
            </form>
            
        </>

    )
}

export default LogIn;