import React from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const [carts] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <SectionHeader
        heading={"WANNA ADD MORE?"}
        subHeading={"My Cart"}
      ></SectionHeader>
      <div className="w-3/4 mx-auto">
        <div className="flex justify-between items-center my-5">
          <h2 className="text-4xl font-bold">Total Cart : {carts.length}</h2>
          <h2 className="text-4xl font-bold">Total Price :$ {totalPrice} </h2>
          <button className="btn bg-amber-600 text-white">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                carts.map((cart,index)=> <tr key={cart._id}>
                    <th>
                     {index + 1}
                    </th>
                    <td>
                     
                            <img
                              src={cart.image}
                              alt="Avatar Tailwind CSS Component"
                              className="w-20 h-16 rounded"/>
                       
                    </td>
                    <td>
                     {cart.name}
                    </td>
                    <td>{cart.price}</td>
                    <th>
                      <button className="btn-lg text-red-600"><FaTrash></FaTrash></button>
                    </th>
                  </tr>)
              }
              
            
            </tbody>     
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
