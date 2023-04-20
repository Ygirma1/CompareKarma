import React, { useState } from 'react';
import axios from 'axios';
import '../register/register.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './login.css'

const base_url = "http://localhost:8080"

const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
 

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email, pass);
        const res = await axios.get(`${base_url}/verifyUser?` + 
          'email=' + email +
          '&password=' + pass);
        console.log(res.data.status);
        if (res.data.status) {
          console.log("Props Login")
          props.onLogin();
          //props.setIsLoggedIn(true)
          console.log("TAKE TO HOME PAGE")
          const id = res.data.business_id;
          localStorage.setItem('business_id', id)
         
          window.location.href='/';
    
          
        } else {
          console.log("ERROR MESSAGE")
          setErrorMessage('Incorrect Login!');
        }
    }

    const togglePassword = () => {
      if (!passwordShown) {
          setPasswordShown(true);
      } else {
          setPasswordShown(false);
      }
  }

  return (
    <div className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              className='login-input1'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='youremail@gmail.com'>
            </input>

            <label htmlFor="password">Password</label>

            <div className="login-password-input">
                <input
                    className = 'login-input2'
                    value = {pass}
                    onChange = {(e) => setPass(e.target.value)}
                    type = {passwordShown ? "text" : "password"}
                    placeholder = '********'>
                </input>
                <button type="button" className = "login-toggle-password-visibility-button" onClick={togglePassword}>
                    { !passwordShown ? <FontAwesomeIcon icon={faEye} size="lg" /> : <FontAwesomeIcon icon={faEyeSlash} size="lg"/> }
                </button>
            </div>

            <button className='submit-register-button' type='submit'>Log In</button>

            {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}

        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};

export default Login;