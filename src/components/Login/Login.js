import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Login</h2>
            <form action=''>
            <div className='input-group'>
               <label htmlFor='email'>Email</label>
               <input type="email" name='' id='' required></input>
            </div>
            <div className='input-group'>
               <label htmlFor='password'>Password</label>
               <input type="password" name='' id='' required></input>
            </div>
            <input className='form-submit' type="submit" value="Login"></input>
            </form>
            <p className='link-position'>
                New to Ema-Jhon? <Link className='form-link' to="/signup">Create an Account</Link>
            </p>
           </div>
           
        
        </div>
    );
};

export default Login;