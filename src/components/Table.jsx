import React from 'react';
import Post from './Post';

const Table = ({data}) => {
    console.log(data);
    const results = data.map(post => <Post key={post.business_id + post.course_name} post={post} />)
    return (
        <main>{results}</main>
    )
};

export default Table;