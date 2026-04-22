import React from "react";
import { useNavigate } from "react-router-dom";


const NewsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-gray-100 relative overflow-hidden rounded-lg flex flex-col h-full">
            <div className="p-8 flex-grow">
              <h3 className="text-3xl font-bold mb-6">
                Premium eyewear collection now available
              </h3>
              <p className="mb-6">
                Discover our new collection of designer sunglasses, eyeglasses,
                and blue-light glasses crafted for style and comfort.
              </p>
              <button onClick={()=> navigate("/view-all-products")} className="font-medium flex items-center group">
                <span className="relative">
                  SHOP NOW
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <div className="h-64 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&auto=format&fit=crop&q=60"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-gray-100 relative overflow-hidden rounded-lg flex flex-col h-full">
            <div className="p-8 flex-grow">
              <h3 className="text-3xl font-bold mb-6">
                Designer frames collection
              </h3>
              <p className="mb-6">
                Explore our latest collection of premium eyeglasses and sunglasses
                from top brands.
              </p>
              <button onClick={()=> navigate("/view-all-products")} className="font-medium flex items-center group">
                <span className="relative">
                  SHOP NOW
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <div className="h-64 bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=900&auto=format&fit=crop&q=60"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
