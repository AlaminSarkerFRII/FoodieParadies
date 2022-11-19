import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      
      
      {/* cards */}
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl ">
          <p className="font-bold text-white text-2xl px-2 pt-4">Sun's Light Over</p>
          <p className="text-white text-xl px-2 my-2">Through 8/26</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-4 ml-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/3139343/pexels-photo-3139343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl ">
          <p className="font-bold text-white text-2xl px-2 pt-4">Sun's Nice Burger</p>
          <p className="text-white text-xl px-2 my-2">Through 8/26</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-4 ml-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative ">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl ">
          <p className="font-bold text-white text-2xl px-2 pt-4">Sun's BOGO's Over</p>
          <p className="text-white text-xl px-2 my-2">Through 8/26</p>
          <button className="border-white bg-white text-black font-bold absolute bottom-4 ml-4">
            Order Now
          </button>
        </div>
        <img
          className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/10500520/pexels-photo-10500520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
