import React, { useState, useEffect }  from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import DeleteConfirmation from '../DeleteConfirmation';
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const base_url = "http://localhost:8080"

const Post = ({ post }) => {
    const id = localStorage.getItem('business_id');
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);

    // converting cost (double) to price format
    var newCost = post.cost;
    newCost = newCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    // const handleClick = (e) => {
    //     const res = axios.delete(`${base_url}/deleteBusinessCourse?` + 'course_id=' + post.course_id);
    //     window.location.reload();
    // }  
    
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
   

    return (
        
        <article className='delete-container'>
            {/* <img className="images" src={post.img_url} alt="new"></img> */}
            {post.img_url ? <img className="images" src={post.img_url}/> : null}
            <div className="test1">
                <div className='test2'>
                    <h2 className="company-name">{post.company_name}</h2>
                    { post.sponsored == 1 && 
                        <div className="sponsored-box">
                            <span>Sponsored</span>
                        </div>
                    }
                    <div className='stars'>
                        {/* <StarRatings rating={post.review_score} starRatedColor="#ed6e2e" starDimension='25px' starSpacing='5px'/> */}
                    </div>
                    <a className="linkToBootcamp" href={post.link}>Visit Their Website</a>
                </div>
                <div className="container">
                    <div className="margin1">
                        <div className="underline">Course Type:</div>
                        <div> {post.course_type}</div>
                    </div>
                    <div className="margin2">
                        <div className="underline">Class Format:</div>
                        <div> {post.course_format}</div>
                    </div>
                    <div className="margin3">
                        <div className="underline">Length:</div>
                        <div> {post.length_of_course}</div>
                    </div>
                    <div className="margin4">
                        <div className="underline">Cost of Attendance:</div>
                        <div> {newCost}</div>
                    </div>
                </div>
                <div className="container2">
                    <div className="course-name">{post.course_name}</div>
                    <div className="description">{post.description_of_bootcamp}</div>
                </div>
                <div>
                    {showDeleteButton ?  <button className='delete-button' /* onClick={handleClick} */ onClick={showDeleteModal}>
                        <FontAwesomeIcon icon={faTrash} size="2x" color="grey" />
                    </button> : null}
                </div>
            </div>
            <DeleteConfirmation showModal={displayConfirmationModal} message={deleteMessage} hideModal={hideConfirmationModal} confirmModal={submitDelete}/>

        </article>
        
    )
}

export default Post;