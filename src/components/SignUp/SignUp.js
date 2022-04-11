import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleconfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password did not match')
            return;
        }
        if(password.length <6){
            setError('paswword must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)
        
    }
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
            <div className='input-group'>
               <label htmlFor='email'>Email</label>
               <input onBlur={handleEmailBlur} type="email" name='' id=''  required></input>
            </div>
            <div className='input-group'>
               <label htmlFor='password'>Password</label>
               <input onBlur={handlePasswordBlur} type="password" name='' id='' required></input>
            </div>
            <div className='input-group'>
               <label htmlFor='confirm-password'>Confirm-Password</label>
               <input onBlur={ handleconfirmPasswordBlur} type="password" name='confirm-password' id='' required></input>
            </div>
            <p style={{color:"red"}}>{error}</p>
            <input className='form-submit' type="submit" value="Sign Up"></input>
            </form>
            <p className='link-position'>
                Already have an account? <Link className='form-link' to="/login">Login</Link>
            </p>
           </div>
           
        
        </div>
    );
};

export default SignUp;