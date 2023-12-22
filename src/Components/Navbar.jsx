import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const  {user, LogOut }  = useContext(AuthContext)
    
    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar mx-auto max-w-7xl z-50">
            <div className="navbar-start z-40">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl z-40">Task Master</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            {/* Profile */}
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center justify-center gap-5">

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost shadow-xl btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-right border">
                                    <li>
                                        <li className="text-md text-center font-medium">{user?.displayName} </li>
                                    </li>
                                    <li>
                                        <li className="text-md text-center font-medium">{user?.email} </li>
                                    </li>
                                    <button className="btn btn-primary btn-sm my-3">
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </button>

                                    <button onClick={LogOut} className="btn btn-primary btn-sm md:btn-md">Logout
                                    </button>

                                </ul>
                            </div>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-outline btn-primary btn-sm md:btn-md">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;