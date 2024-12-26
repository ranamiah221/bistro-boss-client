import React from 'react';

const SectionHeader = ({subHeading, heading}) => {
    return (
        <div className='w-5/12 mx-auto text-center my-8'>
            <p className='text-base font-normal text-[#D99904] mb-2'>---{subHeading}---</p>
            <h2 className='text-3xl font-semibold uppercase border-y-4 py-3'>{heading}</h2>
        </div>
    );
};

export default SectionHeader;