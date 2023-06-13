import React from 'react';

const CoachNote = () => {
    return (
        <div>
            <div className='bg-[#173931] '>
            <div className='flex flex-wrap md:flex-nowrap px-32 py-20 gap-24 items-center'>
                <div className='md:w-2/3'>
                    <img src="http://shippo.imoodev.com/wp-content/uploads/elementor/thumbs/daily-sport-routine-healthy-lifestyle-gray-haired-smiling-coach-man-portrait-in-the-gym-e1683722269801-q69c15ootoreboy3ds1hi9h8uc5xdni6a4ixh6cnt4.jpg" alt="" className='-rotate-12 hover:rotate-0 transition-all' />
                </div>
                <div className='text-white'>
                    <p className='text-2xl border-b pb-2 border-red-600 '>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue."</p>
                     
                    <p className='text-xl'>Andrew Yako</p>
                    <small>Coach of Farmhouse Academy</small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CoachNote;