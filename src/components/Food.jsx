import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //Filter TYpe burger/pizza/etc

  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };

  //filter by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h2 className="text-4xl text-orange-600 text-center font-bold">
        Top Reated Food
      </h2>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          {/* Filter type */}
          <h2 className="text-xl font-bold text-gray-700 my-4">Filter Type</h2>
          <div className="flex justify-start flex-wrap">
            <button onClick={()=>setFoods(data)} className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              All
            </button>
            <button onClick={()=>filterType('burger')} className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              Burger's
            </button>
            <button onClick={()=>filterType('pizza')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              Pizza
            </button>
            <button onClick={()=>filterType('salad')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              Salad's
            </button>
            <button onClick={()=>filterType('chicken')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <h2 className="text-xl font-bold text-gray-700 my-4">
            Filter Price
          </h2>
          <div className="flex justify-between w-full max-w-[390px]">
            <button onClick={()=>filterPrice('$')} className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              $
            </button>
            <button onClick={()=>filterPrice('$$')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              $$
            </button>
            <button onClick={()=>filterPrice('$$$')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')}  className="m-1 border-orange-500 hover:bg-orange-400 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food, index) => (
          <div
            key={index}
            className="border p-2 rounded-md shadow-lg hover:scale-105 duration-300 "
          >
            <img
              src={food.image}
              alt={food.name}
              className="rounded-lg object-cover w-full h-[200px]"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className=" rounded-full bg-orange-500 text-white p-1">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
