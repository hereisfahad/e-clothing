import React from 'react';
import  FormInput from '../formInput/form-input.component';
import CustomButton from '../customButton/custom-button.component';
import {auth, createUserDocumentInFireStore} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword:''
        }
    }
    
    handleChange = event => {
        const { value, name } = event.target;
        // console.log(value, name); //e.g name:displayName and Value:fahad
        this.setState({ [name]: value });// set state with w.r.t its type
    };

    handleSubmit = async (event) => { //arrow functions don't need binding
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('password doesnt match');
             return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);  //create user
            //why user have to be in brackets????confusing...otherwise displayName remain Null
            console.log(user);
            await createUserDocumentInFireStore(user, {displayName});  //store user in firestore
            this.setState({//this will clear out the form...but was not working.. bc we hv to use value in formInput
                                                            //value tag.
                displayName: '',
                email: '',
                password:'',
                confirmPassword:''
                },()=>{
                // console.log(this.state)
            });
        } catch (error) {
            console.log(error.message);
        }

    };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className="title">I don't have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type="text"
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />
                    <CustomButton type='submit'> Sign up </CustomButton>  
            </form>
        </div>
        );
    }
}

export default SignUp;