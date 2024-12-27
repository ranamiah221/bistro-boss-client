import React from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure, { axiosSecure } from "../../../Hooks/useAxiosSecure";


const Cart = () => {
  const [carts, refetch] = useCart();
  const axiosSecure= useAxiosSecure();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const handleDeleteCart = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
        
      }
    });
  };
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
              {carts.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component"
                      className="w-20 h-16 rounded"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() =>handleDeleteCart(item._id)}
                      className="btn-lg text-red-600"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
