import React, { useState, useEffect }  from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

const base_url = "http://localhost:8080"

const Post = ({ post }) => {
    const id = localStorage.getItem('business_id');
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    // converting cost (double) to price format
    var newCost = post.cost;
    newCost = newCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    const handleClick = (e) => {
        const res = axios.delete(`${base_url}/deleteBusinessCourse?` + 'course_id=' + post.course_id);
        window.location.reload();
    }  
    
    useEffect(() => {
        if (post.business_id == id) {
          setShowDeleteButton(true);
        } else {
          setShowDeleteButton(false);
        }
      }, []);
   

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
                    <a className="linkToBootcamp" href={post.link}>Link to website</a>
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
                    {showDeleteButton ?  <button className='delete-button' onClick={handleClick}> </button> : null}
                </div>
            </div>
        </article>
    )
}

export default Post;