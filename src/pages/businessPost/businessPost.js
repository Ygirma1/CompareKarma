import React, { useEffect, useState } from 'react';
import './businessPost.css';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const base_url = "http://localhost:8080"

const BusinessPost = ({ closeModal }) => {
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
  const { state } = useLocation();
  const dataToFill = state ? state.dataToFill : null;

  useEffect(() => {
        const retrieveBusinessInfo = async() => {
            const res = await axios.get(`${base_url}/getBusinessInformation?` + 'business_id=' + id);
            setCompanyName(res.data[0].business_name);
        };
        retrieveBusinessInfo()
    }, []); 

    useEffect(() => {
        if (dataToFill.course_format) {
          setFormat([dataToFill.course_format]);
        }
      }, []);
      console.log("FORMAT: " + format)

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
    '&link=' + link +
    '&business_id=' + id);

    closeModal(false);
    navigate('/');
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

  const formatOptions = [
    { key: 'In-Person' },
    { key: 'Online' },
    { key: 'Hybrid' },
  ]

//   console.log(dataToFill.course_format)

  return (
    <div className='post-form-container'>
        <form onSubmit = {handleSubmit} className='post-form'>
            <div className='post-form-div'> 
                <div className="coursename-div">
                    <label className='label2' htmlFor="name">Course Name</label>
                    {!dataToFill?
                        (<input
                            className='courseName'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Course Name"
                        />) : 
                        (<input
                            className='courseName'
                            defaultValue={dataToFill.course_name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Course Name"
                        />)
                    }
                </div>
                <div className='description-div'>
                    <label className='label2' htmlFor="description">Description</label>
                    {!dataToFill?
                        ( <textarea
                            className='postbootcamp-description'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Description"
                        />) : 
                        ( <textarea
                            className='postbootcamp-description'
                            defaultValue={dataToFill.description_of_bootcamp}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Description"
                        />)
                    }
                </div>
                  <label className='label2'>Location</label>
                    {/* {!dataToFill?
                        ( <Multiselect
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
                        />) : 
                        ( <Multiselect
                            className='location'
                            displayValue="key"
                            onRemove={handleRemoveFormat}
                            onSelect={handleSelectFormat}
                            selectedValues={dataToFill.course_format}
                            singleSelect={true}
                            options={[
                                { key: 'In-Person' },
                                { key: 'Online' },
                                { key: 'Hybrid' },
                            ]}
                            showCheckbox
                        />)
                    } */}
                    <Multiselect
                            className='location'
                            displayValue="key"
                            onRemove={handleRemoveFormat}
                            onSelect={handleSelectFormat}
                            options={formatOptions}
                            selectedValues={format}
                            singleSelect={true}
                            showCheckbox
                        />
                   

                <div className='price-div'>
                    <label className='label2' htmlFor="price">Estimated Cost</label>
                    {!dataToFill?
                            (<input
                                className='price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Enter Amount Here'
                            />) :
                            (<input
                                className='price'
                                defaultValue={dataToFill.cost}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Enter Amount Here'
                            />)
                    }   
                </div>
                <div className='length-div'>
                    <label className='label2' htmlFor="length">Length of Course</label>
                    {!dataToFill? 
                        ( <input
                            className='length'
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder='Length of Course'
                        />) : 
                        ( <input
                            className='length'
                            defaultValue={dataToFill.length_of_course}
                            onChange={(e) => setLength(e.target.value)}
                            placeholder='Length of Course'
                        />)
                    }
                   
                </div>
                <div className='link-div'>
                    <label className='label2'>Website Link</label>
                    {!dataToFill? 
                        (<input
                            className='link'
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Link"
                        />) :
                        (<input
                            className='link'
                            defaultValue={dataToFill.link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Link"
                        />)
                    }
                    
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
                        <button type="submit" className='submit-post-bootcamp-button'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
);

};

export default BusinessPost;