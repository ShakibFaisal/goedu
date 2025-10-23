import React from "react";
import Slider from "./Slider";
import 'animate.css';


const Hero = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="animate__animated animate__bounce animate__infinite	infinite animate__delay-3s">
        <h3 className=" text-center font-bold text-3xl md:text-5xl mt-4  md:mt-[60px]">
        We Build <br /> <span className="text-secondary ">Smarter</span>{" "}
        Learners
      </h3>
      </div>
     
      <p className="text-accent text-center my-5">
        At Go Education, we connect passionate learners and skilled mentors to
        share knowledge, <br /> grow careers, and unlock new opportunities — one skill
        at a time.
      </p>
      <div className="mb-[100px]">
        <Slider></Slider>
      </div>
      
    
    </div>
  );
};

export default Hero;
