import React from 'react';
import './css/signin.scss';
import FormInput from './forminput';
import CustomButton from './custombutton';
import { signInWithGoogle } from './firebase/firebase.util';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label='email' required handleChange={this.handleChange} />
                    <FormInput name="password" type="password" label='password'value={this.state.password} required handleChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form' >Sign In</CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;