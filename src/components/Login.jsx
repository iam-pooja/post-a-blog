import React from 'react';
import {auth, provider} from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login({setIsAuth}) {

let navigate = useNavigate()

const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((res) => { 
      localStorage.setItem('isAuth', true); 
      setIsAuth(true);
      navigate('/');
    });
}

  return (
    <div className='login-page'>
      <p>Sign in with google to continue</p>
      <button className='login-btn' onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login;