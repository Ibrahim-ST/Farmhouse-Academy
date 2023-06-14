import React, { useContext } from "react";
import { FaBook, FaCalendarAlt, FaFutbol, FaHome, FaMale, FaPlus, FaShoppingCart, FaSistrix, FaUsers, FaUserSlash, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log('THIsssssssss',isAdmin, isInstructor);
    const { logOut } = useContext(AuthContext); 

    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> 
          <SectionTitle
          heading={`${isAdmin?'Admin': isInstructor? 'Instructor':'Student'} Dashboard`}
          ></SectionTitle>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#FFAF6E] text-base-content">
            {/* Sidebar content here */}
            {
                isAdmin? <>
                    <li><NavLink to="/dashboard/"><FaHome></FaHome> Admin Home</NavLink></li>                    
                   {/*  <li>
                    <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Courses <span className="badge badge-success text-white p-3 bg-[#173931]">+{cart?.length || 0}</span>
                    </NavLink>                
                     </li> */} 
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                    <li><NavLink to="/dashboard/"><FaFutbol></FaFutbol> Manage Classes</NavLink></li>
                </> : 
                isInstructor? <> 
                <li><NavLink to="/dashboard/"><FaHome></FaHome> Instructor Home</NavLink></li> 
                <li><NavLink to="/dashboard/addClass"> <FaPlus></FaPlus> Add a Class</NavLink></li>
                <li><NavLink to="/dashboard/myclass"> <FaSistrix></FaSistrix> My Classes</NavLink></li>
                </> :
                <>
                 
                <li>
                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Courses <span className="badge badge-success text-white p-3 bg-[#173931]">+{cart?.length || 0}</span>
                 </NavLink>                
                </li>
                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt> My Enrolled Courses</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History  </NavLink></li>
                </>
            }

        

            <div className="divider"></div>

            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li> 
            <li><NavLink to="/instructors"><FaMale></FaMale> Instructors</NavLink></li> 
            <li><NavLink to="/classes"><FaFutbol></FaFutbol> Classes</NavLink></li>
            <li onClick={handleLogOut}><NavLink to="/classes"><FaUserSlash></FaUserSlash> LogOut</NavLink></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
