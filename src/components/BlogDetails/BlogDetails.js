import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogContext } from '../../App';
import { FaChevronLeft } from 'react-icons/fa';

const BlogDetails = () => {
    const { id } = useParams()
    const [blogs, setBlogs] = useContext(blogContext)
    // console.log(blogs);
    // const { imageURL, title, admin, blog, _id } = blogs
    const navigate = useNavigate()

    const blog = blogs.find(blog => blog._id == id)
    // console.log(blogs);
    return (
        <div>
            <div className='bg-sky-400 pt-20 mb-20 '>
                <div className='ml-96 '>
                    <img className='  mt-10 ml-96 mb-0 w-[500px] p-3 shadow-md' src={blog?.imageURL} alt="" />
                    <div onClick={() => navigate(-1)} className='absolute top-2 flex left-5 font-bold text-white text-2xl'>
                        <FaChevronLeft className='mt-1 '></FaChevronLeft> <button>Back</button>
                    </div>
                </div>
            </div>


            <h2 className='text-center text-4xl text-sky-900 m-5'>{blog?.title}</h2>
            <p className='text-2xl w-9/12 mx-auto text-sky-900'>{blog?.blog}</p>

        </div>
    );
};

export default BlogDetails;