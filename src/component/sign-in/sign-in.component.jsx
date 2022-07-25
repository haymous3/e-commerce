import React from "react";

import './sign-in.styles.scss';

import FormInput from "../Form-input/form-input.component";
import CustomButton from "../Custom-Button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            email: '',
            password: ''
        }
    };

    handleDefault = (event) =>{
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target


        this.setState({[name]: value})
    }


    render(){
        return(
            <div className="sign-in">
                <h1>I already have account</h1>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleDefault}>
                    <FormInput
                    type='email'
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput 
                    type='password'
                    name="password"
                    value={this.state.email}
                    label="password"
                    handleChange={this.handleChange}
                    required
                    />
                    
                    <div className="button">
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } googleBox>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                
                </form>
            </div>
        )
    }



    
}



export default SignIn