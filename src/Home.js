import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Happy Learning', writer: 'Md Ashikur Rahman', body: 'Hey, Learning is great...', id: 1 },
        {title: 'Happy Coding', writer: 'Md Ashikur Rahman', body: 'Hey, coding is great...', id: 2 },
        {title: 'Happy home', writer: 'Md Jillur Rahman', body: 'Hey, i am in my sweet home...' , id: 3}
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs)
    }
    return (
    <div>
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>
        <BlogList blogs={blogs.filter(blog => blog.writer === 'Md Ashikur Rahman')} title="Ashikur's Blogs" handleDelete={handleDelete}></BlogList>
    </div>
    );
}
 
export default Home;