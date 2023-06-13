import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";

const SingleClass = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState(false);
  const [, refetch]= useCart();
  const {
    class_name,
    email,
    image,
    price,
    available_seat,
    instructor_name,
    category,
    _id,
  } = singleClass;

  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (item) => {
    if (user && user.email) {
      const cartItem = { courseId: _id,class_name,image,price,email: user.email,};
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            setSelected(true);
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Course selected successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select the course!",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#28A745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {class_name}
          <div className="badge badge-success">{category}</div>
        </h2>
        <div className="card-actions ">
          <div className="py-5 text-lg">Instructor Name: {instructor_name}</div>
        </div>
        <p>Available Seat: {available_seat}</p>
        <p>
          <span className="font-bold">Price</span> : ${price}
        </p>

        <button
          disabled={selected}
          onClick={() => handleSelect(singleClass)}
          className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745]"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default SingleClass;
