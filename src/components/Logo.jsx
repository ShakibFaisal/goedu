import React from 'react';
import logoimg from "../assets/logo.png"
const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <img className="max-w-[70px] md:max-w-[120px] h-auto " src={logoimg} alt="" />
            <h3 className='text-[16px] md:text-3xl font-extrabold'><span className='text-[#8C3CAB]'>Go</span><span className='text-secondary'>Edu</span></h3>
        </div>
    );
};

export default Logo;