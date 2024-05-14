
<body>
    <link rel="stylesheet" href="../../../signin.css"/>
    <form action="/submit" method="post">
        <h2>Sign in</h2>
        <div id="firstname-group">
            <label for="name">First Name</label>
            <input type="text" id="firstname" name="firstname" onkeyup="validatefirstname()"/>
            <div id="firstname-error"></div>
        </div>
        <div id="lastname-group">
            <label for="name">Last Name</label>
            <input type="text" id="lastname" name="lastname" onkeyup="validatelastnamename()"/>
            <div id="lastname-error"></div>
        </div>
        <div id="email-group">
            <label for="name">Email</label>
            <input type="text" id="email" name="email" onkeyup="validateemail()"/>
            <div id="email-error"></div>
        </div>
        <div id="password-group">
            <label for="name">Password</label>
            <input type="text" id="password" name="password" onkeyup="validatepassword()"/>
            <div id="password"></div>
        </div>
        <div class="btn">
            <button type="button" onclick="submitform()">Sign In</button>
        </div>
    </form>
</body>
