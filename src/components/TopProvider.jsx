import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const TopProvider = () => {
  const [providers, setProviders] = useState([]);
  useEffect(() => {
    fetch("/topprovider.json")
      .then((res) => res.json())
      .then((data) => setProviders(data));
  }, []);

  return (
    <div className="my-12 md:my-24">
      <h2 className="text-3xl font-bold text-center mb-6">
        Top Rated Providers
      </h2>
      <p className="text-center opacity-70 mb-5">
        Learn from industry-leading instructors who bring real-world experience,
        deep expertise, and a passion for teaching. <br /> Our mentors guide you
        step-by-step to ensure you gain practical, job-ready skills.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {providers.map((p) => (
          <div
            key={p.id}
            className="card w-60 bg-base-100 shadow-md hover:shadow-xl"
          >
            <figure>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-[350px] object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h3 className="font-bold">{p.name}</h3>
              <h3 className="flex items-center h-[30px] text-secondary  gap-2">
                <FaStar /> {p.rating}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProvider;
