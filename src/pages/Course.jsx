import React, { useState } from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import { FaSearch } from "react-icons/fa";

const Course = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const filterdata = data.filter((skill) => {
    const query = search.toLowerCase();
    return skill.skillName?.toLowerCase().includes(query);
  });
  return (
    <div className="max-w-11/12 mx-auto my-12 md:my-[100px]">
      <h3 className="text-center text-5xl mb-11 font-bold">
        All <span className="text-secondary">Course</span>
      </h3>
      {/* Search Box */}
      
      <div className="flex justify-center mb-6">
        <div className="relative w-[90%] md:w-1/2">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e94fe6]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />

          </span>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-4">
        {filterdata.map((skill, index) => (
          <SkillCard key={index} skill={skill}></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Course;
