import React from "react"; 

const Cover = ({ image }) => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745] mt-96 ">See All classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
