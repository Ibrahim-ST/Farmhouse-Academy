import React from "react";
import { Link } from "react-router-dom";

const SingleClass = ({ singleClass }) => {
  const { class_name, email, image, price, available_seat, instructor_name,  category } = singleClass;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {class_name}
          <div className="badge badge-success">{category}</div>
        </h2>
        <div className="card-actions ">
          <div className="py-5 text-lg">Instructor Name:  {instructor_name}</div>
        </div>
        <p>Available Seat: {available_seat}</p> 
        <Link to='/instructors'>
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745]">
            Price : ${price}
          </button>
        </Link>
      
      </div>
    </div>
  );
};

export default SingleClass;
