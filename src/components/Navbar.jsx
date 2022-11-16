import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
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
        <BsFillCartFill size={20} className="mr-2"/>        Cart
    </button>

    </div>
  );
};

export default Navbar;
