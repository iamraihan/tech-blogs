import React, { useContext, useEffect, useState } from 'react';
import { blogContext } from '../../App';
import Blog from '../Blog/Blog';

const Home = () => {
    // const [blogs, setBlogs] = useState([])
    const [blogs, setBlogs] = useContext(blogContext)
    useEffect(() => {
        fetch('https://retro-tech-talks.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog._id} blogs={blog}></Blog>)
            }
        </div>
    );
};

export default Home;