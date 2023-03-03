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
        <label className='label2' htmlFor="name">Course Name</label>
        <input
          className='courseName'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Course Name">
        </input>

        <label className='label2' htmlFor="description">Description</label>
        <input
            className='description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description">
        </input>

        <label className='label2' htmlFor="price">Price</label>
        <input
            className='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Price'>
        </input>

        <label>Website Link</label>
        <input
          className='link'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Link">
        </input>

        Course Type
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

          <button onClick={event => window.location.href='/'} type='submit'>Post Bootcamp</button>

    </form>
</div>
  );
};

export default BusinessPost;