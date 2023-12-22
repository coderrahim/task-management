
const Navbar = () => {
    const navMenu = <>
        <li><a href='#banner'>Home</a></li>
        <li><a href="#skills" >Skills</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#contact" >Contact</a></li>
    </>
    return (
        <div className="navbar mx-auto max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Task Master</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn bg-pink-600 border-0 text-lg text-white  hover:bg-pink-600 hover:border">Let’s Explore</button>                
            </div>
        </div>
    );
};

export default Navbar;