import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/formInput/form-input.component';
import CustomButton from '../../components/customButton/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
    }
    handleSubmit = event => { //arrow functions don't need binding
        event.preventDefault();
        this.setState({ email: '', password: '' });
      };
    
    handleChange = event => {
      const { value, name } = event.target;
      this.setState({ [name]: value });// set state with w.r.t its type
    };
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                      <CustomButton type='submit'> Sign in </CustomButton>
                      <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> Sign in With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;