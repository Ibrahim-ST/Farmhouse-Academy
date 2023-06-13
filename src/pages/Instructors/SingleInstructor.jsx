import React from "react";

const SingleInstructor = ({ instructor }) => {
  const { name, email, image, category, instructor_info, num_students } =
    instructor;
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
        <div className="card-actions ">
          <div className="py-5 text-lg">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;
