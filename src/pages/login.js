import React, { useState }from 'react';
import axios from 'axios';

const base_url = "http://localhost:8080"

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email, pass);
        const res = await axios.get(`${base_url}/verifyUser?` + 
          'email=' + email +
          '&password=' + pass);
        console.log(res.data.status);
        if (res.data.status) {
          console.log("TAKE TO HOME PAGE")
          window.location.href='/';
        } else {
          console.log("ERROR MESSAGE")
          setErrorMessage('Incorrect Login!');
         
        }

    }

  return (
    <div className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='youremail@gmail.com'>
            </input>

            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder='********'>
            </input>

            <button type='submit'>Log In</button>

            {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}

        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  );
};

export default Login;