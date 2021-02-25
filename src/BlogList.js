const BlogList = ({blogs, handleDelete, title}) => {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(blog => (
                <div className="blog" key={blog.id}>
                <h1>{blog.title}</h1>
                <span>--Written By {blog.writer}</span>
                <p>{blog.body}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
            </div>
            ))}
        </div> 
    );
}
 
export default BlogList;