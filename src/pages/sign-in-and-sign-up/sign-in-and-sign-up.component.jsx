import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/signIn/sign-in.component';
import SignUP from '../../components/signup/sign-up.component';

const SignInAndSignUpPage = () =>(
    <div className="signin-signup-container">
        <SignIn/>
        <SignUP/>
    </div>
);

export default SignInAndSignUpPage;