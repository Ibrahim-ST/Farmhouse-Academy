import React from 'react';

const Banner = () => {
    return (
        <div>
            <img className='w-full rounded' src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2022/04/11084112/Gavi-Barcelona-Sevilla.jpg" alt="" />
            <h3 className="text-center uppercase -mt-96 text-6xl font-extrabold font-sans text-white w-1/2 mx-auto">Ignite Your <span className='text-orange-500'>Passion</span>: <br /> Thrive in the <br /><span className='text-orange-500'> World of <span className='italic'>Sports</span>!</span></h3>
        </div>
    );
};

export default Banner;