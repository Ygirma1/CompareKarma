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
            <img className="images" src={post.img_url} alt="new"></img>
            <div className="test1">
                <div className='test2'>
                    <h2 className="company-name">{post.company_name}</h2>
                    <div className='stars'>
                        <StarRatings rating={post.review_score} starRatedColor="#ed6e2e" starDimension='25px' starSpacing='5px'/>
                    </div>
                    <div className="sponsored-box">Sponsored</div>
                </div>
                <p className="container">
                    <p className="margin1">
                        <text className="underline">Course Type:</text>
                        <text> {post.course_type}</text>
                    </p>
                    <p className="margin2">
                        <text className="underline">Class Format:</text>
                        <text> {post.course_format}</text>
                    </p>
                    <p className="margin3">
                        <text className="underline">Length:</text>
                        <text> {post.length_of_course}</text>
                    </p>
                    <p className="margin4">
                        <text className="underline">Cost of Attendance:</text>
                        <text> {newCost}</text>
                    </p>
                </p>
                <div className="container2">
                    <p className="course-name">{post.course_name}</p>
                    <p className="description">{post.description_of_bootcamp}</p>
                </div>
            </div>
        </article>
    )
}

export default Post;