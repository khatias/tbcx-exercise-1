"use client"; // This marks the component as a client-side component

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "../../../../../components/ImageSlider";
import TabletImageSlider from "../../../../../components/TabletImageSlider";
export default function ProductDetail({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  console.log(product);

  useEffect(() => {
    if (product.product_colors.length > 0) {
      setSelectedColor(product.product_colors[0]); 
    }
  }, [product]);


  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="md:grid grid-cols-[2fr_1fr] gap-x-8 lg:grid-rows-[1fr_3fr] ">
      <div className="md:flex flex-col justify-center lg:justify-between lg:border-b-slate-300 lg:border-b-[1px] ">
        <h2 className="text-xl md:text-2xl lg:text-3xl pb-4">{product.name}</h2>
        <p className="text-sm text-gray-500 py-2 lg:py-0 ">{product.description}</p>
        <p className="text-lg"> ${product.price}</p>
      </div>

      {/* Image Slider */}
      {selectedColor && <ImageSlider productColor={selectedColor} />}
      <div className="hidden md:block order-first md:row-span-2">
        {selectedColor && <TabletImageSlider productColor={selectedColor} />}
      </div>
      <div className="pt-6 md:col-start-2 md:pt-0 lg:pt-4">
        <span className=" font-semibold">Color:</span>
        <span>
          {selectedColor ? selectedColor.color_id.color_name : "None"}
        </span>
        <div className="flex gap-1 md:pt-3  ">
          {product.product_colors.map((color, index) => (
            <div key={index}>
              {color.color_id.color_image && (
                <>
                  <Image
                    src={color.color_id.color_image}
                    alt={color.color_id.color_name}
                    width={64}
                    height={64}
                    className=" border-2 border-gray-100 cursor-pointer "
                    onClick={() => handleColorChange(color)}
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className=" flex flex-col md:pt-4 ">
          <p className=" font-semibold pb-4 md:pb-3">Sizes:</p>
          <div className="flex gap-2">
            {product.product_sizes.map((size, index) => (
              <span
                className="p-2 bg-[#edebe9] text-sm cursor-pointer "
                key={index}
              >
                {size.size_id.size}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between h-11 w-32 border border-[#d9d9d9] mt-12 ">
            <button className="bg-[#f5f4f2] w-11 h-full  border border-[#d9d9d9]   ">
              -
            </button>
            <input aria-label="Quantity" type="number " placeholder="1" className="w-11 h-full  border border-[#d9d9d9]  text-center  " />
            <button className="bg-[#f5f4f2] w-11 h-full   border border-[#d9d9d9] ">
              +
            </button>
          </div>
          <button className="mt-10 px-2 py-3 bg-black text-white uppercase font-semibold md:mt-8">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}
