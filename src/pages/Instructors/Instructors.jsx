import React, { useEffect, useState } from "react";
import Cover from "../shared/Cover/Cover";
import coach from "../../assets/instructors/coach.png";
import SectionTitle from "../../components/SectionTitle";
import InstructorCard from "../shared/InstructorCard/InstructorCard";
import SingleInstructor from "./SingleInstructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);
  console.log(instructors);
  return (
    <div>
      <Cover image={coach} title="classes"></Cover>
      <div className="my-4">
      <SectionTitle heading="All Instructors"></SectionTitle>

      <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center">
        {instructors?.map((instructor) => (
          <SingleInstructor
            key={instructor._id}
            instructor={instructor}
          ></SingleInstructor>
        ))}
      </div> 
    </div>
    </div>
  );
};

export default Instructors;
