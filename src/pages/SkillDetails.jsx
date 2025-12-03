import React, { use } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiFillCarryOut } from "react-icons/ai";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const skill = skills.find((skill) => skill.skillId === parseInt(id));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
       Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to Login",
      confirmButtonText: "Login Now",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
    }
    toast.success("Session booked successfully ");
    e.target.reset();
  };
  return (
    <div className="max-w-11/12 mx-auto my-12 p-6 bg-base-100 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  items-center">
        <div className="">
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
              <span className="font-semibold">Rating:</span>{" "}
              <span className="text-orange-400">
                <FaStar />
              </span>{" "}
              {skill.rating}
            </p>
            {/* <p>
              <span className="font-semibold">Slots Available:</span>
              {skill.slotsAvailable}
            </p> */}
          </div>
          <div className="my-3.5 grid grid-cols-2 md:grid-cols-3 items-center">
            <div className="p-1.5 m-2 bg-[#FAF0F0] border border-gray-300 shadow-sm max-w-[180px] rounded-[10px] ">
              <p className="flex gap-1.5">
                {" "}
                <span className="text-red-600 text-2xl">
                  <RiLiveLine />{" "}
                </span>
                <span className="opacity-70">
                  {skill.totalClasses} Live Class
                </span>
              </p>
            </div>
            <div className="p-1.5 m-2 bg-[#FAF0F0] border border-gray-300 shadow-sm max-w-[180px] rounded-[10px] ">
              <p className="flex gap-1.5">
                {" "}
                <span className="text-red-600 text-2xl">
                  <MdOutlineHomeWork />{" "}
                </span>
                <span className="opacity-70">
                  {skill.totalProjects} Projects
                </span>
              </p>
            </div>
            <div className="p-1.5 bg-[#FAF0F0] border border-gray-300 shadow-sm max-w-[350px] rounded-[10px] ">
              <p className="flex gap-1.5">
                {" "}
                <span className="text-red-600 text-2xl">
                  <RiLiveLine />{" "}
                </span>
                <span className="opacity-70">{skill.liveClassTimePerWeek}</span>
              </p>
            </div>
          </div>
        </div>
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full h-80 object-cover rounded-2xl  shadow-md"
        />
      </div>
      <div className="my-12 md:my-[100px]">
        <h3 className="text-5xl text-center font-bold mb-11">Modules</h3>
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {skill.classDetails.map((week, index) => (
            <div
              key={index}
              className="p-1.5 py-7 bg-[#FAF0F0] border border-gray-300 shadow-sm rounded-[10px]"
            >
              <p className="flex gap-1.5 justify-center items-center font-bold">
                <span className="text-red-600 text-2xl">
                  <MdOutlineHomeWork />
                </span>
                <span className="opacity-70">{week}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* What will learn */}
      <div className="my-12 md:my-[100px]">
        <h3 className="text-5xl text-center font-bold mb-11">You Will Learn</h3>
        <div className="space-y-3 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {skill.whatYouWillLearn.map((week, index) => (
            <div
              key={index}
              className="p-1.5 py-7 bg-[#FAF0F0] border border-gray-300 shadow-sm rounded-[10px]"
            >
              <p className="flex gap-1.5 justify-center items-center font-bold">
                <span className="text-red-600 text-2xl">
                  <AiFillCarryOut />
                </span>
                <span className="opacity-70">{week}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* book session */}
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Book a Session with {skill.providerName}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-base-200 p-5 rounded-xl shadow-sm"
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
