// post is each search result

const Post = ({ post }) => {
    return (
        <article>
            <h2 className="company-name">{post.company_name}</h2>
            <p className="container">
                <p className="margin">
                    <text className="underline">Course Type:</text>
                    <br></br>
                    <text> {post.course_type}</text>
                </p>
                <p className="margin">
                    <text className="underline">Class Format:</text>
                    <br></br>
                    <text> {post.course_format}</text>
                </p>
                <p className="margin">
                    <text className="underline">Length:</text>
                    <br></br>
                    <text> {post.length_of_course}</text>
                </p>
                <p className="margin">
                    <text className="underline">Cost of Attendance:</text>
                    <br></br>
                    <text> {post.cost}</text>
                </p>
            </p>
            <p className="course-name">{post.course_name}</p>
            <p className="description">{post.description_of_bootcamp}</p>
        </article>
    )
}

export default Post;