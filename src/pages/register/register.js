import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Checkbox, FormControl, FormLabel, FormControlLabel, Typography, Radio, RadioGroup } from '@mui/material';
import Multiselect from 'multiselect-react-dropdown';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { FlashOnTwoTone } from '@material-ui/icons';
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const base_url = "http://localhost:8080"

const Register = (props) => {
    const navigate = useNavigate();
    const [image, setImage] = useState({ preview: '', data: '' })

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [profit, setProfit] = useState();
    const [courseTypes, setCourseTypes] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);

    // handles submission of form
    const handleSubmit =  (e) => {
        e.preventDefault();

        // get just keys from course type array
        let newCourseTypes = [];
        courseTypes.forEach((e) => newCourseTypes.push(e.key));

        const res =  axios.put(`${base_url}/newUser?`+
        'business_name=' + name + 
        '&phone_number=' + phone +
        '&business_desc=' + desc + 
        '&verified=0' +  
        '&profit_status=' + Number(profit) + 
        '&email=' + email +
        '&course_type=' + newCourseTypes + 
        '&business_password=' + pass)
        .then(response => {
            localStorage.setItem('business_id', JSON.stringify(response.data.business_id));
            props.onLogin();
            window.location.href='/';
        })
    };

    const handleChange = (event) => {
        if (event.target.value === "1")
            setProfit(1);
        else if (event.target.value === "0")
            setProfit(0);
    };

    const handleSelect = (selectedList) => {
        setCourseTypes(selectedList);
    };

    const handleRemove = (selectedList) => {
        setCourseTypes(selectedList);
    };

    const togglePassword = () => {
        if (!passwordShown) {
            setPasswordShown(true);
        } else {
            setPasswordShown(false);
        }
    }

  return (
    <div className='auth-form-container'>
        <form className='register-form' onSubmit={handleSubmit}>
            <label className='label2' htmlFor="name">Business Name</label>
            <input
                className='input2'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Business Name">
            </input>
            
            <label className='label2' htmlFor="email">Email</label>
            <input
                className='input2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='youremail@gmail.com'>
            </input>
            
            <label className='label2' htmlFor="number">Phone Number</label>
            <input
                className='input2'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="xxx-xxx-xxxx">
            </input>
            
            <label className='label2' htmlFor="description">Description</label>
            <input
                className='input2'
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Description">
            </input>

            <label className='label2' htmlFor="password">Password</label>
            <div className="password-input">
                <input
                    className = 'input2'
                    value = {pass}
                    onChange = {(e) => setPass(e.target.value)}
                    type = {passwordShown ? "text" : "password"}
                    placeholder = '********'>
                </input>
                <button type="button" className = "toggle-password-visibility-button" onClick={togglePassword}>
                    { !passwordShown ? <FontAwesomeIcon icon={faEye} size="lg" /> : <FontAwesomeIcon icon={faEyeSlash} size="lg"/> }
                </button>
            </div>

            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={profit}
                    onChange={handleChange}
  >
                    <FormControlLabel value="1" control={<Radio />} label="For-Profit" />
                    <FormControlLabel value="0" control={<Radio />} label="Non-Profit" />
                </RadioGroup>
            </FormControl>

            {/*<FormControlLabel
                control={<Checkbox value={profit} onChange={handleChange} />}
                label={<label>Profit Status</label>}
                className='profit-label'
            />*/}

            Course Type
            <Multiselect
                className='course-type'
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
            
            <button className='submit-register-button'/*onClick={event => window.location.href='/'}*/ type='submit'>Sign Up</button>
        </form>
        
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default Register;