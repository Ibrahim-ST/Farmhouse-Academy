import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import ClassCard from '../../shared/ClassCard/ClassCard';

const PopularClasses = () => {
    const [classes, setClasses] = useState();
    useEffect(() => {
        fetch('https://farmhouse-academy-server.vercel.app/classes')
        .then(res=> res.json())
        .then(data => {
            setClasses(data);
        })
    }, [])
    
    const popularClass = classes?.filter(classes => classes.category=='Popular');     
    return (
        <div>
            <div className='my-4'>
            <SectionTitle
            heading="Popular Classes"
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-4 items-center justify-items-center">
                {
                    popularClass?.map(classes => <ClassCard
                        key={classes._id}
                        classes={classes}
                    ></ClassCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default PopularClasses;