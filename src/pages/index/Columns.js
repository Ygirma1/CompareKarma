import React from 'react';
import Post from '../../components/Post/Post';
import './Columns.css';

const Columns = ({data}) => {
    const results = data.map(post => <Post key={post.course_id} post={post} />)
    return (
        <div className='post-container'>
            {results}
        </div>
        
    )
};

export default Columns;