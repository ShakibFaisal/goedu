import React from "react";
import { FaStar } from "react-icons/fa";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={skill.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skill.skillName}</h2>
        <div className="flex justify-between items-center text-[16px] text-secondary">
           <h3 className="flex items-center h-[30px]  gap-2"><FaStar /> {skill.rating}</h3>
           <h3>Price {skill.price}$</h3>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
