import React from "react";
import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({ items }) => {

  return (
    <div className="grid grid-cols-3 gap-8">
      {items?.map((item) => (
        <FoodCard key={item.key} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
