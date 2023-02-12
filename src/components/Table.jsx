import React from 'react';
import Post from './Post';

const Table = ({data}) => {
    const results = data.map(post => <Post key={post.company_name} post={post} />)
    return (
        <main>{results}</main>
    )
};

export default Table;