import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
useEffect( () => {
  fetch('http://localhost:8080/imagepath?business_id='+localStorage.getItem("business_id"), {
  
  method:'GET',
  headers: {
  //"Content-Type": 'application/json, charset=UTF-8',
  "Accept": "application/json, text/html",
  
  }, credentials:"include"
  
    }).then(data=> data.json())
    .then((data)=> {
  console.log(data)
  setImages("http://localhost:8080/getimg/"+ data.image)
  console.log(images)
  
    });
  })
  const navigate = useNavigate();
    const [image, setImage] = useState({ preview: '', data: '' })
    const [images, setImages] = useState("")
  const [status, setStatus] = useState('')
  const [uploadStatus, setUploadStatus] = useState('');

  const handleSubmit =  (e) => {  
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    
  
 
    const response = fetch('http://localhost:8080/image?business_id='+localStorage.getItem("business_id"),{

      method:"POST",
      body: formData,
      headers:{
          "Accept": "multipart/form-data",

      },
      credentials:"include"

    }).then(res=>res.json())
    .then(res=>{
      
     setUploadStatus(res.msg)
    // navigate("/");
    }).catch(error=>{

console.error(error)

    })
  }


  const handleFileChange = (e) => {  // this just changes the file image when you upload it
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
      {image && <img src={image} alt="img"/>}
  
      
      
    
    </div>
  
  );
};

export default Profile;