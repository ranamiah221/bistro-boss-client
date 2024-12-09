import React from 'react';

const Menu = ({item}) => {
    const {name, recipe, image, price}=item;
    return (
        <div className='flex items-center justify-between'>
            <img className='w-32 h-24 rounded-es-[200px] rounded-tr-[200px] rounded-br-[200px]' src={image} alt="" />
            <div className='ml-5'>
            <h2 className='text-2xl font-light'>{name}-------</h2>
            <p>{recipe}</p>
            </div>
            <p className='text-base font-medium text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default Menu;