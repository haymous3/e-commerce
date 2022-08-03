import React from "react";

import './sign-in-and-sign-out.style.scss';
import SignIn from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";



const SignInAndSignOut = () => (

    <div className="sign-in-and-sign-out">
        <SignIn/>
        <SignUp/>
    </div>



)


export default SignInAndSignOut;