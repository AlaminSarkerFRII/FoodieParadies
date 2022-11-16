import React from "react";
import { categories } from "../data/data";

const Category = () => {
    

  return (
    <div className="max-w-[1640px] mx-auto px-4 my-12">
        <h2 className="text-center font-bold text-orange-500 text-4xl">Top Retad Menu Items</h2>
      {/* categories  */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300">
            <h2 className="font-bold sm:text-2xl">{item.name}</h2>
            <img className="w-20 object-cover" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
