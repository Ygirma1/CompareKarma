import React from 'react';
import Post from './Post';

const Table = ({data}) => {
    const results = data.map(post => <Post key={post.company_name} post={post} />)
    return (
        <main>{results}</main>
        // <table>
        //     <tbody>
        //         <tr>
        //             <th>Company Name</th>
        //             <th>Course Name</th>
        //             <th>Description</th>
        //             <th>Course Type</th>
        //             <th>Course Length</th>
        //         </tr>
        //         {data.map((item) => (
        //         <tr key={item.company_name}>
        //             <td>{item.company_name}</td>
        //             <td>{item.course_name}</td>
        //             <td>{item.description_of_bootcamp}</td>
        //             <td>{item.course_type}</td>
        //             <td>{item.length_of_course}</td>
        //         </tr>
        //         ))}
        //     </tbody>
        // </table>
    )
};

export default Table;