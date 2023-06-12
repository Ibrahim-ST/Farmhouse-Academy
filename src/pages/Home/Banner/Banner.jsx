import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import img1 from "../../../assets/Banner/1.jpg";
import img2 from "../../../assets/Banner/2.jpg";
import img3 from "../../../assets/Banner/3.jpg";
import img4 from "../../../assets/Banner/4.jpg";

const Banner = () => {
  const bannerText = (
    <>
      <h3 className="text-center uppercase mb-40 -mt-[600px] h-full text-6xl font-extrabold font-sans text-white w-1/2 mx-auto">
        Ignite Your <span className="text-orange-500">Passion</span>: <br />{" "}
        Thrive in the <br />
        <span className="text-orange-500">
          {" "}
          World of <span className="italic">Sports</span>!
        </span>
      </h3>
    </>
  );
  return (
    <div className="">
      <Carousel>
        <div>
          <img className="" src={img1} />
          {bannerText}
        </div>
        <div>
          <img className="" src={img2} />
          {bannerText}
        </div>
        <div>
          <img className="" src={img3} />
          {bannerText}
        </div>
        <div>
          <img className="" src={img4} />
          {bannerText}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
