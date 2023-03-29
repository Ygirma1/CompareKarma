import React from 'react';
import Post from './Post';

const Table = ({data}) => {
    const results = data.map(post => <Post key={post.course_id} post={post} />)
    return (
        <main>{results}</main>
    )
};

export default Table;