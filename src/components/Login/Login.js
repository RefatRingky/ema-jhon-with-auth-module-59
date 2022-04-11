import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>Login</h2>
            <div className='input-group'>
               <label htmlFor='email'>Email</label>
               <input type="email" name='' id=''></input>
            </div>
            <div className='input-group'>
               <label htmlFor='password'>Password</label>
               <input type="password" name='' id=''></input>
            </div>
           </div>
        
        </div>
    );
};

export default Login;