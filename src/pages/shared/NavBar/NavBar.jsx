import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../providers/AuthProvider';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/instructors">Instructors</Link></li> 
        <li><Link to="/classes">Classes</Link></li> 
        <li><Link to="/">Dashboard</Link></li> 

        {user &&
            <li>
            <Link to="/dashboard"> 
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-success text-white p-3 bg-[#173931]">+{cart?.length || 0}</div>           
            </Link>
            </li>        
        }
        
        {
            user ? <>                 
                <li onClick={handleLogOut} ><Link>LogOut</Link></li>

            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
       
    </>
    return (
        <div>
             <div className="navbar fixed z-10 bg-opacity-0 max-w-screen-xl bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-slate-500">
                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-10' src={logo} alt="" />
                    <Link className=" mx-2 normal-case text-xl  hover: ">Farmhouse Academy</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navOptions} 
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <img src={user?.photoURL} alt="" className= 'object-cover rounded-full w-10 h-10 bg-red-500 z-50 '/>}
                    <a className="mx-2 btn btn-outline border border-b-2 text-white hover:bg-[#173931]">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;