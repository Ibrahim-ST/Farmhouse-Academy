import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import InstructorCard from '../../shared/InstructorCard/InstructorCard';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState();
    useEffect(() => {
        fetch('instructors.json')
        .then(res=> res.json())
        .then(data => {
            setInstructors(data);

        })
    }, [])
    console.log(instructors);
    const popular = instructors?.filter(instructor => instructor.category=='Popular');
    console.log(popular)
    
    return (
        <div className='my-4'>
            <SectionTitle
            heading="Popular Instructors"
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-4 items-center justify-center">
                {
                    popular?.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;