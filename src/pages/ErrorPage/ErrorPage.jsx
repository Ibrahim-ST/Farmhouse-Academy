import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/e.jpg";


const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <img src={image} className="h-2/3 opacity-95 hover:opacity-100 blur hover:blur-none " alt="" />
          <div className="absolute left-32 top-20 items-center flex  justify-center">
            <span className="text-white text-lg">
              <div className="flex flex-col ">
                <h1 className="text-2xl md:text-9xl text-[#173931] text-center font-extrabold">
                  <span className="text-white">Got</span> Lost?
                </h1>
                <h3 className="text-2xl md:text-9xl text-center font-extrabold">
                  4<span className="text-[#173931]">0</span>4
                </h3>
                <span className="text-2xl md:text-9xl  font-extrabold">
                  <span className="text-[#173931]">Page not</span> found.
                </span>
            <div className="text-center">
            <Link to="./">
              <button className="text-center btn btn-outline hover:bg-slate-900">Farmhouse Academy</button>
            </Link>
            </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
