import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import img1 from '../../../assets/Banner/1.jpg'

 

const Gallery = () => {
     
  return (
    <div> 
      <div className="relative my-8">
        <img
          className="w-full rounded"
          src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/04/11084112/Gavi-Barcelona-Sevilla.jpg"
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center ">

        <h3 className=" text-center uppercase text-2xl md:text-6xl font-extrabold font-sans text-white w-1/2 mx-auto">
          Ignite Your <span className="text-orange-500">Passion</span>: <br />{" "}
          Thrive in the <br />
          <span className="text-orange-500">
            {" "}
            World of <span className="italic">Sports</span>!
          </span>
        </h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
