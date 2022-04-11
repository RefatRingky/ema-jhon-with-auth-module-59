import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleconfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Sign Up</h2>
            <form action=''>
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