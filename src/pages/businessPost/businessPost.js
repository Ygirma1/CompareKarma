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

  const [companyName, setCompanyName] = useState('')
  const { state } = useLocation();
  const dataToFill = state ? state.dataToFill : null;
  const [isEditing, setIsEditing] = useState(false);
  const [desc, setDesc] = useState(dataToFill ? dataToFill.description_of_bootcamp : '');
  const [price, setPrice] = useState(dataToFill ? dataToFill.cost : '');
  const [name, setName] = useState(dataToFill ? dataToFill.course_name : '');
  const [link, setLink] = useState(dataToFill ? dataToFill.link : '');
  const [format, setFormat] = useState(dataToFill ? dataToFill.course_format : '');
  const [courseTypes, setCourseTypes] = useState(dataToFill ? dataToFill.course_type : '');
  const [length, setLength] = useState(dataToFill ? dataToFill.length_of_course : '');

  useEffect(() => {
        const retrieveBusinessInfo = async() => {
            const res = await axios.get(`${base_url}/getBusinessInformation?` + 'business_id=' + id);
            setCompanyName(res.data[0].business_name);
        };
        retrieveBusinessInfo()
    }, []); 

    useEffect(() => {
        if (dataToFill) {
            setIsEditing(true);
        }
        try {
            if (dataToFill.course_format && dataToFill.course_type) {
                setFormat([dataToFill.course_format]);
                setCourseTypes([dataToFill.course_type]);
              } 
        } catch {
            console.log("ERROR")
        }
        
      }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!isEditing) {
        const res = axios.put(`${base_url}/newBusinessCourse?` + 
        'company_name=' + companyName +
        '&course_format=' + format + 
        '&course_name=' + name + 
        '&length_of_course=' + length + 
        '&cost=' + price + 
        '&description_of_bootcamp=' + desc + 
        '&course_type=' + courseTypes + 
        '&link=' + link +
        '&business_id=' + id);

    } else {
        const res = axios.put(`${base_url}/updateBusinessCourse?`+
        'course_id=' + dataToFill.course_id + 
        '&course_format=' + format + 
        '&course_name=' + name + 
        '&length_of_course=' + length + 
        '&cost=' + price + 
        '&description_of_bootcamp=' + desc + 
        '&course_type=' + courseTypes + 
        '&link=' + link + 
        '&sponsored=' + dataToFill.sponsored);
    }

    try {
        closeModal(false);
        navigate('/');
    } catch {
        navigate('/');
    }
  };

  const handleSelectFormat2 = (selectedItem) => {
    setFormat(selectedItem);
  };
  const handleSelectCourseTypes2 = (selectedItem) => {
    setCourseTypes(selectedItem);
  };

  const handleRemoveCourseTypes = (selectedList) => {
    setCourseTypes(selectedList);
  };
  const handleRemoveFormat = (selectedList) => {
    setCourseTypes(selectedList);
  };

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
                    <Multiselect
                        isObject={false}
                        onRemove={handleRemoveFormat}
                        onSelect={handleSelectFormat2}
                        options={['In-Person', 'Online', 'Hybrid']}
                        selectedValues={format}
                        singleSelect={true}
                        avoidHighlightFirstOption={true}
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
                        isObject={false}
                        onRemove={handleRemoveCourseTypes}
                        onSelect={handleSelectCourseTypes2}
                        selectedValues={courseTypes}
                        singleSelect={true}
                        avoidHighlightFirstOption={true}
                        options={['UX/UI', 'Project Management', 'Product Management', 'Data Analytics', 'Technology Sales', 'Software Engineering', 'Digital Marketing']}
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