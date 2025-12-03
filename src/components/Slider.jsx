import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

const Slider = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="w-full bg-[#F5F9FF] max-h-[70vh] rounded-2xl py-10 mt-8 shadow-xl">
      <Swiper
        modules={[Autoplay, Pagination]}
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
            <div className="max-w-[1350px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-2xl md:text-5xl font-bold leading-snug mb-4">
                  {skill.skillName}
                </h1>

                <p className="text-lg mb-6">
                  Transform your future by learning in-demand skills.
                </p>

                <Link to={`/skilldetail/${skill.skillId}`} className="bg-[#FFC727] hover:bg-[#ffb800] px-8 py-4 rounded-xl text-lg font-semibold">
                  Learn Now →
                </Link>
              </div>
              {/* Right image part */}
              <div className="flex justify-center">
                <img
                  className="rounded-2xl max-h-[70vh] shadow-lg"
                  src={skill.image}
                  alt="slider-img"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
