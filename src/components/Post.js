// post is each search result

const Post = ({ post }) => {
    return (
        <article>
            <h2 className="company-name">{post.company_name}</h2>
            <p>{post.course_name}</p>
            <p>{post.description_of_bootcamp}</p>
            <p>Course Type: {post.course_type}</p>
        </article>
    )
}

export default Post;