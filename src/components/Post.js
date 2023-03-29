// post is each search result

import React, { Component }  from 'react';
import StarRatings from 'react-star-ratings';

const Post = ({ post }) => {

    // converting cost (double) to price format
    var newCost = post.cost;
    newCost = newCost.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        
        <article>
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
            </div>
        </article>
    )
}

export default Post;