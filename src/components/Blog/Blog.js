import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import indicator from '../../Assets/Image/indicator.svg'

const Blog = ({ blogs }) => {
    // console.log(blogs);
    const { imageURL, title, admin, blog, _id } = blogs
    const navigate = useNavigate()

    return (
        <Link to={`/blog/${_id}`}>
            <div className='font-raleway grid grid-cols-2 w-9/12 mx-auto mt-16'>
                <div className='shadow p-3 w-72'>
                    <img className='w-96 w-72  object-cover' src={imageURL} alt="" />
                </div>
                <div >
                    <h3 className='text-base text-sky-900'>{title}</h3>
                    <div className='flex m-8 relative'>
                        <img src={indicator} alt="" />
                        <p className='text-sky-900 absolute left-16 top-2'>Posted By{admin}</p>
                    </div>
                    <p className='text-sky-900'>{blog.length < 400 ? blog.length : blog.slice(0, 400)} <span onClick={() => navigate(`/blog/${_id}`)} className='font-bold cursor-pointer'>...Read More</span> </p>

                </div>

            </div>
        </Link>
    );
};

export default Blog;