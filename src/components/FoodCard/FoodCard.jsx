import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [,refetch]=useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, recipe, image, price, _id } = item;
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 2000,
          });
         refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <img className="relative" src={image} alt="Shoes" />

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p className="absolute top-5 bg-black text-white p-1 rounded right-5">
          $ {price}
        </p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4 text-amber-500 hover:bg-black hover:text-amber-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
