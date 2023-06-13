import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const MyCourses = () => {
  const [cart] = useCart();
  console.log(cart);

    const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>My Courses | Farmhouse Academy</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center gap-4">
                <h3 className="text-3xl">Total Courses: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">PAY</button>
                </Link>
            </div>
    </div>
  );
};

export default MyCourses;
