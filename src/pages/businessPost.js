import React, { useEffect, useState } from 'react';
import './businessPost.css';

const BusinessPost = (props) => {
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    window.location.href='/';
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

        <button type='submit'>Post Bootcamp</button>

    </form>
</div>
  );
};

export default BusinessPost;