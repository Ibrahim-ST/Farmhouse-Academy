import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, image, category, instructor_info, num_students } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>{instructor_info}</p>
        <div className="card-actions ">
          <div className="badge badge-info bg-[#28A745] text-white py-5 text-lg">Number of students: {num_students}</div>          
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
