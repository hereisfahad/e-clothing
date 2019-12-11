import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/formInput/form-input.component";
import CustomButton from "../../components/customButton/custom-button.component";
import { SignInWithGoogle, auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = async event => {
    //arrow functions don't need binding
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      //clearing out the inputs
      this.setState(
        {
          email: "",
          password: ""
        },
        () => {
          // console.log(this.state);
        }
      );
    } catch (error) {
      console.log(error.message);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value }); // set state with w.r.t its type
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in With Google{" "}
            </CustomButton>
            <CustomButton onClick={() => this.props.handleState()}>
              {" "}
              Sign Up{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
