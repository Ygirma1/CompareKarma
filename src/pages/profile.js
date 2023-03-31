import axios from 'axios';
import React, { useState } from 'react';



const Profile = () => {
    const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')


  const handleSubmit =  (e) => {
    e.preventDefault()
    let formData = new FormData()
    console.log(image.data);
  
    formData.append('file', image.data)
    const response = axios.put('http://localhost:8080/image',formData)
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
   
       <div >
      <h1>Upload Logo</h1>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  
  );
};

export default Profile;