import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import InstructorCard from "../../shared/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    fetch("https://farmhouse-academy-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  console.log(instructors);
  const popular = instructors?.filter(
    (instructor) => instructor.category == "Popular"
  );
  console.log(popular);

  return (
    <div className="my-4">
      <SectionTitle heading="Popular Instructors"></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center">
        {popular?.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to='/instructors'>
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745]">
            View All Instructors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructor;
