import React, { useEffect, useState } from 'react';
import './businessPost.css';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { useNavigate } from 'react-router-dom';

const base_url = "http://localhost:8080"

const BusinessPost = (props) => {
  const navigate = useNavigate();
  const id = localStorage.getItem('business_id');

  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [format, setFormat] = useState('');
  const [courseTypes, setCourseTypes] = useState('');
  const [length, setLength] = useState('');
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
        const retrieveBusinessInfo = async() => {
            const res = await axios.get(`${base_url}/getBusinessInformation?` + 'business_id=' + id);
            setCompanyName(res.data[0].business_name);
        };
        retrieveBusinessInfo()
    }, []); //no dependencies

  const handleSubmit = async(e) => {
    e.preventDefault();

    let newFormat = [];
    format.forEach((e) => newFormat.push(e.key));

    let newCourseTypes = [];
    courseTypes.forEach((e) => newCourseTypes.push(e.key));

    const res = axios.put(`${base_url}/newBusinessCourse?` + 
    'company_name=' + companyName +
    '&course_format=' + newFormat + 
    '&course_name=' + name + 
    '&length_of_course=' + length + 
    '&cost=' + price + 
    '&description_of_bootcamp=' + desc + 
    '&course_type=' + newCourseTypes + 
    '&business_id=' + id)

    navigate("/");
  };

  const handleSelectCourseTypes = (selectedList) => {
    setCourseTypes(selectedList);
  };
  const handleSelectFormat = (selectedList) => {
    setFormat(selectedList);
  };

  const handleRemoveCourseTypes = (selectedList) => {
    setCourseTypes(selectedList);
  };
  const handleRemoveFormat = (selectedList) => {
    setCourseTypes(selectedList);
  };

  const handleChange = (event) => {
    setFormat(event.target.value);
  };


  return (
    <div className='post-form-container'>
        <form className='post-form'>
            <div>
                <div className="coursename-div">
                    <label className='label2' htmlFor="name">Course Name</label>
                    <input
                        className='courseName'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Course Name"
                    />
                </div>
                <div className='description-div'>
                    <label className='label2' htmlFor="description">Description</label>
                    <textarea
                        className='postbootcamp-description'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Description"
                    />
                </div>
                  <label className='label2'>Location</label>
                    <Multiselect
                        className='location'
                        displayValue="key"
                        onRemove={handleRemoveFormat}
                        onSelect={handleSelectFormat}
                        selectedValues={format}
                        singleSelect={true}
                        options={[
                            { key: 'In-Person' },
                            { key: 'Online' },
                            { key: 'Hybrid' },
                        ]}
                        showCheckbox
                    />

                <div className='price-div'>
                    <label className='label2' htmlFor="price">Estimated Cost</label>
                    <input
                        className='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Enter Amount Here'
                    />
                </div>
                <div className='length-div'>
                    <label className='label2' htmlFor="length">Length of Course</label>
                    <input
                        className='length'
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder='Length of Course'
                    />
                </div>
                <div className='link-div'>
                    <label className='label2'>Website Link</label>
                    <input
                        className='link'
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder="Link"
                    />
                </div>
                <div className='coursetype-div'>
                    <label className='label2'>Course Type</label>
                    <Multiselect
                        className='course-type'
                        displayValue="key"
                        onRemove={handleRemoveCourseTypes}
                        onSelect={handleSelectCourseTypes}
                        selectedValues={courseTypes}
                        singleSelect={true}
                        options={[
                            { key: 'UX/UI' },
                            { key: 'Project Management' },
                            { key: 'Product Management' },
                            { key: 'Data Analytics' },
                            { key: 'Technology Sales' },
                            { key: 'Software Engineering' },
                            { key: 'Digital Marketing' },
                        ]}
                        showCheckbox
                    />
                    <div className='post-bootcamp-button-div'>
                        <button className='post-bootcamp-button' /*onClick={(event) => window.location.href='/'}*/ onClick={handleSubmit}
                                type='submit'>Post Bootcamp</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
);

};

export default BusinessPost;