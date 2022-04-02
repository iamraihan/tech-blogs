import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation()
    // console.log(pathname);
    return (
        <nav style={pathname.includes('blog') ? { display: 'none' } : { display: 'block' }} className='shadow-xl'>
            <div className='flex justify-between h-20 items-center w-10/12 mx-auto '>
                <Link to='/'>
                    <div>
                        <h2 className='font-teko text-5xl text-cyan-500'>Tech Blogs</h2>
                    </div></Link>
                <div className='flex gap-4 text-xl text-cyan-400'>
                    <Link to='/'>Home</Link>
                    <Link to='/videos'>Videos</Link>
                    <Link to='/login'>Login</Link>

                </div>
            </div>

        </nav>
    );
};

export default Header;