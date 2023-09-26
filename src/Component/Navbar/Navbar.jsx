import { Link, NavLink } from "react-router-dom";
import './navbar.css'
import logo from '/Logo.png'
const Navbar = () => {
    
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 max-w-6xl mx-auto my-5">
            <div className="">
                <Link to='/'>
                <img src={logo} alt="" className="w-[90%]"/>
                </Link>
            </div>
            <div>
                <ul className="flex gap-5 text-lg font-semibold">
                    <NavLink to='/' ><li>Home</li></NavLink>
                    <NavLink to='/donation'><li>Donation</li></NavLink>
                    <NavLink to='/statistics'><li>Statistics</li></NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;