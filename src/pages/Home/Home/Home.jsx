import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CoachNote from "../CoachNote/CoachNote";
import Facilities from "../Facilities/Facilities";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => { 
  return (
    <div>
      <Helmet>
        <title>Home | Farmhouse Academy</title>
      </Helmet>
      <Banner></Banner>
      <PopularInstructor></PopularInstructor>
      <PopularClasses></PopularClasses>
      <Gallery></Gallery>
      <Facilities></Facilities>
      <CoachNote></CoachNote>
    </div>
  );
};

export default Home;
