import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="a-right">
            <form className='infoForm authForm'>

                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='info-input' name='firstname'/>
                    <input type="text" placeholder='Last Name' className='info-input' name='lastname'/>
                </div>
                <div>
                    <input type="text" className="info-input" placeholder='username' name='username'/>
                </div>
                <div>
                    <input type="text" className="info-input" name='password' placeholder='Password'/>
                    <input type="text" className="info-input" name='confirmpass' placeholder='Confirm Passwork'/>
                </div>

                <div className='log-d'>
                    <span style={{fontSize: '12px'}}>Already have an account?
                    <Link to="/login" className='link-l'> Login</Link></span>          
                </div>
                  <Link to="/" className='button info-button'>Signup</Link>
            </form>

            
        </div>
  )
}

export default Signup;