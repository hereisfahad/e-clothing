import React from "react";
import SignIn from "../../components/signIn/sign-in.component";
import SignUP from "../../components/signup/sign-up.component";

const containerStyles = {
  display: "flex",
  width: "1000px",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "30px auto"
};

const SignInAndSignUpPage = () => (
  <div style={containerStyles}>
    <SignIn />
    <SignUP />
  </div>
);

export default SignInAndSignUpPage;
