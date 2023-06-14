import React, { useEffect, useState } from "react";
import coach from "../../assets/instructors/class.jpg";
import SectionTitle from "../../components/SectionTitle";
import Cover from "../shared/Cover/Cover";
import SingleClass from "./SingleClass";

const Classes = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    fetch("https://farmhouse-academy-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div>
      <Cover image={coach} title="instructors"></Cover>
      <div className="my-4">
        <SectionTitle heading="All Classes"></SectionTitle>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center">
         {classes?.map(singleClass=> <SingleClass 
         key={singleClass._id}
         singleClass={singleClass}
         ></SingleClass>)}
      </div> 
      </div>
    </div>
  );
};

export default Classes;
