import React, { useState } from "react";
import SignIn from "../../components/signIn/sign-in.component";
import SignUP from "../../components/signup/sign-up.component";

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  margin: "30px auto"
};

const SignInAndSignUpPage = () => {
  const [Form, setForm] = useState(true);
  const handleState = () => {
    setForm(!Form);
  };
  return (
    <div style={containerStyles}>
      {Form ? (
        <SignIn handleState={handleState} />
      ) : (
        <SignUP handleState={handleState} />
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
