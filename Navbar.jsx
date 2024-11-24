import React, { useState } from "react";
import logo from "../assets/tc.png";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
function Navbar() {
  const [visible, setvisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
     <Link to="/"> <img src={logo} className="w-8" alt="" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-3 w-36 bg-slate-100 text-gray-500 rounded">
              <p className="hover:text-black cursor-pointer">My Profile</p>
              <p className="hover:text-black cursor-pointer">Order</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded">
            0
          </p>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden "
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"}`}>

              <div className="flex flex-col text-gray-600">
                <div className="flex items-center gap-4 cursor-pointer"onClick={()=>setvisible(false)}>
                   <img  className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
                   <p >Back</p>
                </div>
                <NavLink onClick={()=>setvisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                <NavLink onClick={()=>setvisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>

                <NavLink onClick={()=>setvisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>

                <NavLink onClick={()=>setvisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>

              </div>
          </div>
    </div>
  );
}

export default Navbar;
