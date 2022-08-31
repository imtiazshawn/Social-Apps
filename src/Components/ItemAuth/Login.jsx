import React from 'react';
import LeftAuth from './LeftAuth';
import Signup from './Signup';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="Auth">
        <LeftAuth/>
        <div className="a-right">
            {/* <div></div> */}
            <form className='infoForm authForm login-box'>

                <h3>Login</h3>
                <div>
                    <input 
                        type="text" 
                        placeholder='username' 
                        className='info-input' 
                        name='firstname'
                    />
                </div>

                <div>
                    <input 
                        type="password" 
                        className="info-input" 
                        name='password' 
                        placeholder='Password'
                    />
                </div>

                <div className='log-d'>
                    <span style={{fontSize: '12px'}}>Don't have an account?
                    <Link to="/" className='link-l'> Signup</Link></span>          
                </div>
                <Link to="/home" className='button info-button'>Login</Link>
            </form>

            
        </div>
    </div>
  )
}

export default Login