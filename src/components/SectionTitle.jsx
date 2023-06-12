import React from 'react';

const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl uppercase border-dotted border-b-4 border-[#173931] py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;