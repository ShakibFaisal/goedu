import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      
  }, []);

  return (
    <div className=" w-full max-w-[1200px]  mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.skillId}>
            <div
              className="relative bg-cover h-[400px] md:h-[500px]  bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${skill.image})` }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
              <div className="relative z-10 text-white px-5">
                <h2 className="text-3xl md:text-5xl  font-bold mb-4">
                  {skill.skillName}
                </h2>
               
                <button className="btn btn-secondary mt-5 text-white border-white hover:bg-[#FF4081] hover:border-[#FF4081]">
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
