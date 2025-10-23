import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import  { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div className=''>
           <header><Navbar></Navbar></header>
           <main><Outlet></Outlet></main> 
           <footer><Footer></Footer></footer>
           <Toaster /> 
        </div>
    );
};

export default Root;