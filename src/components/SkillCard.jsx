import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 w-[300px] transition-transform duration-300 hover:scale-105   h-full min-h-[450px] shadow-sm">
      <figure className="h-[200px]">
        
        <img  className="w-full h-full object-cover" 
          src={skill.image}
          alt={skill.skillName}
        />
      </figure>
      <div className="card-body flex flex-col">
        <h2 className="card-title">{skill.skillName}</h2>
        <div className="flex justify-between items-center text-[16px] text-secondary">
           <h3 className="flex items-center h-[30px]  gap-2"><FaStar /> {skill.rating}</h3>
           <h3>Price {skill.price}$</h3>
        </div>
        <div className="card-actions mt-auto justify-end">
               
           <Link to={`/skilldetail/${skill.skillId}`} className="btn btn-primary w-full">View Details</Link>
        
        </div>
      </div>
    </div>
  );
};

export default SkillCard;




