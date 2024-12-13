import React from 'react';

const FoodCard = ({item}) => {
    const {name, recipe, image,price,}= item;
    return (
        <div className="card bg-base-100 shadow-xl">
 
    <img
    className='relative'
      src={image}
      alt="Shoes" />
  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p className='absolute top-5 bg-black text-white p-1 rounded right-5'>$ {price}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 border-b-4 text-amber-500 hover:bg-black hover:text-amber-700">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;