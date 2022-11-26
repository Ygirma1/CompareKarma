// post is each search result

const Post = ({ post }) => {
    return (
        <article>
            {/* <div>{post.img_url}</div> */}
            <img className="images" src={post.img_url} alt="new"></img>
            <div className="test">
                <h2 className="company-name">{post.company_name}</h2>
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
                        <text> {post.cost}</text>
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