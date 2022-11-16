import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}

        <div className="absolute w-full h-full max-h-[500px] bg-black/75 text-gray-200 flex flex-col justify-center items-center">
          <h2 className="px-4  font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200">
            The <span className="text-orange-500">Best</span>
          </h2>
          <h2 className="px-4 font-bold  text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200">
           <span className="text-orange-500">Delivered</span> Food
          </h2>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero-banner"
        />
      </div>
    </div>
  );
};

export default Hero;
