import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();
  const skill = skills.find((skill) => skill.skillId === parseInt(id));
    const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully ");
    e.target.reset()
  };
  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-base-100 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-80 object-cover rounded-2xl shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold mb-3 text-primary">
            {skill.skillName}
          </h1>
          <p className="text-gray-700 mb-4">{skill.description}</p>

          <div className="grid grid-cols-2 gap-3 text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> {skill.category}
            </p>
            <p>
              <span className="font-semibold">Provider:</span>
              {skill.providerName}
            </p>
            <p>
              <span className="font-semibold">Email:</span>
              {skill.providerEmail}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${skill.price}
            </p>
            <p className="flex  items-center h-2.5 gap-1.5">
              <span className="font-semibold">Rating:</span> <span className="text-orange-400"><FaStar /></span> {skill.rating}
            </p>
            <p>
              <span className="font-semibold">Slots Available:</span>
              {skill.slotsAvailable}
            </p>
          </div>

          
        </div>
      </div>
       <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Book a Session with {skill.providerName}
        </h2>
        <form
          
          onSubmit={handleSubmit} className="max-w-md mx-auto bg-base-200 p-5 rounded-xl shadow-sm"
        >
          <div className="form-control mb-4">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
            
              className="input w-full"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
             
              className="input  w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full text-white">
            Book Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
