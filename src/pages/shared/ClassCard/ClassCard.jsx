import React from 'react';

const ClassCard = ({classes}) => {
    const {class_name,instructor_name, image, category, instructor_info, number_of_classes, email } = classes;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {class_name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>{instructor_name}</p>
        <p>{instructor_info}</p>
        <div className="card-actions ">
          <div className="badge badge-info  bg-[#28A745] text-white py-5 text-lg">Number of classes: {number_of_classes}</div>          
        </div>
      </div>
    </div>
  );
};

export default ClassCard;