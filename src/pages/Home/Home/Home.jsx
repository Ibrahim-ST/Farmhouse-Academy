import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Gallery from '../Gallery/Gallery';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <PopularInstructor></PopularInstructor>
            <PopularClasses></PopularClasses>
            <Gallery></Gallery>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;