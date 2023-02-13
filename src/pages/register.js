import React, { useEffect, useState } from 'react';
import axios from 'axios';

const base_url = "http://localhost:8080"

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');

    // handles submission of form
    const handleSubmit = (e) => {
        e.preventDefault();
        const rest = axios.put(`${base_url}/newUser?`+
            'business_name=' + name + 
            '&phone_number=' + phone +
            '&business_desc=' + desc + 
            '&verified=0' + 
            '&profit_status=1' + 
            '&email=' + email +
            '&course_type=Online' +
            '&business_password=' + pass)
    };

  return (
    <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Business Name</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Business Name">
            </input>
            
            <label htmlFor="email">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='youremail@gmail.com'>
            </input>
            
            <label htmlFor="name">Phone Number</label>
            <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="xxx-xxx-xxxx">
            </input>
            
            <label htmlFor="name">Description</label>
            <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description">
            </input>

            <label htmlFor="password">Password</label>
            <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder='********'>
            </input>
            
            <button onClick={event => window.location.href='/'} type='submit'>Sign Up</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default Register;