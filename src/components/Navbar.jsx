import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsTruck } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiDinosaurBones } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        <div className=" hidden lg:flex justify-center items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black rounded-full text-white p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}

      <div className="rounded-full bg-gray-200 flex items-center w-[200px] sm:w-[400px] lg:w-[500px] px-2">
        <AiOutlineSearch size={25} />

        <input
          className="bg-transparent focus:outline-none w-full p-2"
          type="text"
          placeholder="search food"
        />
      </div>

      {/* cart button  */}
      <button className="hidden md:flex items-center rounded-full bg-black text-white py-2">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* mobile layout Menu */}

      {/* overlay */}

      {nav ? (
        <div className="bg-black/80 w-full h-screen z-10 top-0 left-0 fixed"></div>
      ) : (
        ""
      )}

      {/* side drawer menu*/}
      <div className={ nav ? 'fixed top-0 left-0 bg-white w-[300px] h-screen z-10 duration-300' : 'fixed top-0 left-[-100%] bg-white w-[300px] h-screen z-10 duration-300'}>
        <h1 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h1>
        <AiOutlineClose
        onClick={()=>setNav(!nav)}
          size={20}
          className="absolute cursor-pointer right-4 top-4"
        />

        <nav>
          <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
            <li className="flex items-center py-4 text-xl ">
              <BsTruck size={25} className="mr-4" /> Orders
            </li>
            <li className="flex items-center py-4 text-xl ">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex items-center py-4 text-xl ">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex items-center py-4 text-xl ">
              <BiBarChartAlt2 size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex items-center py-4 text-xl ">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex items-center py-4 text-xl ">
              <GiDinosaurBones size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex items-center py-4 text-xl ">
              <FaUserFriends size={25} className="mr-4" /> InviteFriends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
