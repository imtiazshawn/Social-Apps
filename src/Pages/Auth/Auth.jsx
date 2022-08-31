import React from 'react';
import './Auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from '../../Components/ItemAuth/Signup';
import LeftAuth from '../../Components/ItemAuth/LeftAuth';



const Auth = () => {

    // alert('Click submit button to go Homepage');
    const notify = () => toast.info("Click the Signup button to go Automatically Homepage", {position: "top-center"});

  return (
    <div className="Auth" onLoad={notify}>
            <ToastContainer />


            {/* The Left side of Auth */}
            <LeftAuth/>

            {/* The Right Side of Auth */}
        
            <Signup/>
        
    </div>
  )
}


export default Auth;