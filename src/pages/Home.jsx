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
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                   {skills.map((skill)=><SkillCard key={skill.skillId} skill={skill}></SkillCard>)}
            </div>
            <TopProvider></TopProvider>
            <HowItWork></HowItWork>
            <StudentReviews></StudentReviews>
        </div>
    );
};

export default Home;