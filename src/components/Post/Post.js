import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import DeleteConfirmation from '../DeleteConfirmation';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const base_url = "http://localhost:8080"

const Post = ({ post }) => {
    const id = sessionStorage.getItem('business_id');
    const navigate = useNavigate();
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    // converting cost (double) to price format
    var newCost = post.cost;
    newCost = newCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    
    useEffect(() => {
        if (post.business_id == id) {
          setShowDeleteButton(true);
        } else {
          setShowDeleteButton(false);
        }
      }, []);

    const showDeleteModal = () => {
        setDeleteMessage("Are you sure you want to delete this post?");
        setDisplayConfirmationModal(true);
    };

    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };
    
    const submitDelete = () => {
        const res = axios.delete(`${base_url}/deleteBusinessCourse?` + 'course_id=' + post.course_id);
        window.location.reload();
        setDisplayConfirmationModal(false);
    };

    const handleEdit = () => {
        console.log(post.course_id, post.course_format, post.course_name, post.length_of_course, post.cost, post.description_of_bootcamp, post.course_type, post.link, post.sponsored)
        const res = axios.put(`${base_url}/updateBusinessCourse?`+
        'course_id=' + '59' + 
        '&course_format=' + 'Online' + 
        '&course_name=' + 'UPDATED NAME TEST TEST' + 
        '&length_of_course=' + '123' + 
        '&cost=' + '123' + 
        '&description_of_bootcamp=' + '123' + 
        '&course_type=' + 'Data Analytics' + 
        '&link=' + 'saf' + 
        '&sponsored=' + '1');

        const dataToFill = {
            course_id: post.course_id,
            course_name: post.course_name,
            description_of_bootcamp: post.description_of_bootcamp,
            length_of_course: post.length_of_course,
            course_format: post.course_format,
            cost: post.cost,
            link: post.link,
            course_type: post.course_type,
            sponsored: post.sponsored

        };
        navigate('/post', { state: { dataToFill } });
    }
    const [imageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState({ preview: '', data: '' })
      useEffect( () => {
        fetch('http://localhost:8080/imagepathcourse?course_id='+post.course_id, {
        
        method:'GET',
        headers: {
        //"Content-Type": 'application/json, charset=UTF-8',
        "Accept": "application/json, text/html",
        
        }, credentials:"include"
        
          }).then(data=> data.json())
          .then((data)=> {
        // console.log(data + "This is the packet img returned")
        setImage("http://localhost:8080/getimg/"+ data.image)
        // console.log(image)
        
          });
        })

    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    return (
        
        <article className={isDashboard ? 'delete-container' : 'delete-container-2'}>
            {/* <img className="images" src={post.img_url} alt="new"></img> */}
           
            <div className="test1">
                <div className='test2'>
                    <a className="linkToBootcamp" href={post.link} target="_blank">
                        <h2 className="company-name">{post.company_name}: {post.course_name}</h2>
                    </a>
                    
                    { post.sponsored == 1 && 
                        <div className="sponsored-box">
                            <span>Sponsored</span>
                        </div>
                    }
                    <div className='stars'>
                    </div>
                </div>
                {/* <img src={image} alt="Loaded Image" /> */}
                <div className="container">
                    <div className="margin1">
                        <div className="underline">Course Type:</div>
                        <div> {post.course_type}</div>
                    </div>
                    <div className="margin2">
                        <div className="underline">Location:</div>
                        <div> {post.course_format}</div>
                    </div>
                    <div className="margin3">
                        <div className="underline">Length:</div>
                        <div> {post.length_of_course + " weeks"} </div>
                    </div>
                    <div className="margin4">
                        <div className="underline">Estimated Cost:</div>
                        <div> {newCost}</div>
                    </div>
                </div>
                <div className='container2'>
                    <div className="description">{post.description_of_bootcamp}</div>
                </div>
                
                <div className='edit-delete'>
                    {showDeleteButton ?  <button className='delete-button' onClick={showDeleteModal}>
                        <FontAwesomeIcon icon={faTrash} size="2x" color="grey" />
                    </button> : null}
                    {showDeleteButton ?  <button className='edit-button' onClick={handleEdit}>
                        <FontAwesomeIcon icon={faPencil} size="2x" color="gray"/>
                    </button> : null}
                    
                </div>
            </div>
            <DeleteConfirmation showModal={displayConfirmationModal} message={deleteMessage} hideModal={hideConfirmationModal} confirmModal={submitDelete}/>
        </article>
        
    )
}

export default Post;