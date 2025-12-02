import React from 'react';
import Hero from '../components/Hero';
import { useLoaderData } from 'react-router';
import SkillCard from '../components/SkillCard';
import TopProvider from '../components/TopProvider';

import HowItWork from '../components/HowItWork';
import StudentReviews from '../components/StudentsReviews';


const Home = () => {
    const skills=useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            <Hero></Hero>
            <h3 className='text-black text-center text-5xl font-bold mb-4'>Popular Courses</h3>
           <p className='opacity-80 text-center mb-5 md:mb-7'>Our courses are crafted to equip you with the most in-demand professional skills.  The knowledge, hands-on experience,<br /> and expertise you gain through our programs will prepare you  to secure your desired position in the global market. <br /> You can enroll in any of our online or offline courses from the list below at your convenience.</p>
            <div className='max-w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5'>
                   {skills.map((skill)=><SkillCard key={skill.skillId} skill={skill}></SkillCard>)}
            </div>
            <TopProvider></TopProvider>
            
            <HowItWork></HowItWork>
            <StudentReviews></StudentReviews>
        </div>
    );
};

export default Home;