import React from 'react'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-botton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleChange = (event) =>{
        const {name,value}= event.target;
        this.setState({[name]:value})
    }
     handleSubmit = async (event) => {
         event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        };
        try{
            const {user} =  await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName});
        this.setState({
            displayName:'',
            password:'',
            confirmPassword:'',
            email:''
        })
    }catch(error){
        alert(error)
    }
    }
    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput  required type="text" label = "Display Name" name="displayName" value={displayName} onChange = {this.handleChange}/>
                    <FormInput required type="email" label ="Email" name="email" value={email} onChange = {this.handleChange}/>
                    <FormInput  required type="password" label="password" name="password" value={password} onChange = {this.handleChange}/>
                    <FormInput  required type="password" label = "Confirm Password" name="confirmPassword" value={confirmPassword} onChange = {this.handleChange}/>
                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}
export default SignUp