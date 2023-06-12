import React from "react";

import img1 from "../../../assets/Banner/1.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Gallery = () => {
  const image = (
    <>
      <img
        className="w-full rounded"
        src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/04/11084112/Gavi-Barcelona-Sevilla.jpg"
        alt=""
      />
    </>
  );

  return (
    <div title="scroll in the middle of the image for more">
      <div className="w-2/3 mx-auto">
        <SectionTitle heading="The Academy Gallery"></SectionTitle>
        <div className="h-[450px]  carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full ">
            <img
              src="https://contents.mediadecathlon.com/p1414902/k$f1c7539e031653fd23b374f4080676a4/1800x0/2854pt2515/4171xcr2125/Les-qualit%25C3%25A9s-pour-%25C3%25AAtre-un-bon-entra%25C3%25AEneur.jpg?format=auto"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://cdne-totv8-prod-westeurope.azureedge.net/media/v4ojlpoe/malaga.png"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://previews.123rf.com/images/matimix/matimix1905/matimix190500025/125833962-boys-training-football-dribbling-in-a-field-kids-running-the-ball-players-develop-soccer-dribbling.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://www.chi.ac.uk/app/uploads/2022/03/21-Astro-Football_0043_21-Astro-Football-35-1024x576.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://goalballlive.com/wp-content/uploads/2020/12/Football-Coaching-Courses-Top-24-Schools-In-Europe-1.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://www.coervercoaching.com/wp-content/uploads/2020/09/IMG_4482-scaled.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item h-full ">
            <img
              src="https://media.istockphoto.com/id/1149105577/photo/adult-soccer-training-session-football-player-with-ball-on-the-field.jpg?s=612x612&w=0&k=20&c=00cyVaJcinYSkFI1g1Ph0iWvZ-6vZRbnvuVT2BgWRII="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
