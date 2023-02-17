import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox, FormControlLabel } from '@mui/material';
import Multiselect from 'multiselect-react-dropdown';
import './register.css';

const base_url = "http://localhost:8080"

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [profit, setProfit] = useState(false);
    const [courseTypes, setCourseTypes] = useState([]);

    // handles submission of form
    const handleSubmit = (e) => {
        e.preventDefault();

        // get just keys from course type array
        let newCourseTypes = [];
        courseTypes.forEach((e) => newCourseTypes.push(e.key));

        const res = axios.put(`${base_url}/newUser?`+
        'business_name=' + name + 
        '&phone_number=' + phone +
        '&business_desc=' + desc + 
        '&verified=0' +  
        '&profit_status=' + Number(profit) + 
        '&email=' + email +
        '&course_type=' + newCourseTypes + 
        '&business_password=' + pass)
    };

    const handleChange = () => {
        setProfit(!profit)
    };

    const handleSelect = (selectedList) => {
        setCourseTypes(selectedList);
    }

    const handleRemove = (selectedList) => {
        setCourseTypes(selectedList);
      }

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

            <FormControlLabel
                control={<Checkbox value={profit} onChange={handleChange} />}
                label="Profit Status"
            />

            Course Type
            <Multiselect
                displayValue="key"
                onKeyPressFn={function noRefCheck(){}}
                onRemove={handleRemove}
                onSearch={function noRefCheck(){}}
                onSelect={handleSelect}
                selectedValues={courseTypes}
                options={[
                    {
                    key: 'UX/UI'
                    },
                    {
                    key: 'Project Management'
                    },
                    {
                    key: 'Product Management'
                    },
                    {
                    key: 'Data Analytics'
                    },
                    {
                    key: 'Technology Sales'
                    },
                    {
                    key: 'Software Engineering'
                    },
                    {
                    key: 'Digital Marketing'
                    }
                ]}
                showCheckbox
            />
            
            <button onClick={event => window.location.href='/'} type='submit'>Sign Up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default Register;