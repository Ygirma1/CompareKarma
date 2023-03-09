import React, { useEffect, useState } from 'react';
import './businessPost.css';
import Multiselect from 'multiselect-react-dropdown';

const BusinessPost = (props) => {
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [courseTypes, setCourseTypes] = useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
  };


  const handleSelect = (selectedList) => {
    setCourseTypes(selectedList);
  };

  const handleRemove = (selectedList) => {
    setCourseTypes(selectedList);
  };

  return (
    <div className='post-form-container'>
    <form className='post-form' onClick={handleSubmit}>
        <div className="coursename-div">
        <label className='label2' htmlFor="name">Course Name</label>
        <input
          className='courseName'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Course Name">
        </input>
        </div>

        <div className='description-div'>
        <label className='label2' htmlFor="description">Description</label>
        <textarea
            className='description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description">
        </textarea>
        </div>

        <div className='price-div'>
        <label className='label2' htmlFor="price">Price</label>
        <input
            className='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Price'>
        </input>
        </div>

        <div className='link-div'>
        <label className='label2'>Website Link</label>
        <input
          className='link'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link">
        </input>
        </div>

        <div className='coursetype-div'>
          <label className='label2'>Course Type</label>
          <Multiselect
            className='course-type'
            displayValue="key"
            onRemove={handleRemove}
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
          <div className='post-bootcamp-button-div'>    
            <button 
              className='post-bootcamp-button' onClick={event => window.location.href='/'} type='submit'>Post Bootcamp
            </button>
          </div>
        </div>
    </form>
  </div>
);
};

export default BusinessPost;