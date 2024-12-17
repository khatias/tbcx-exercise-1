"use client"; // This marks the component as a client-side component

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageSlider from "../../../../../components/ImageSlider";

export default function ProductDetail({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  console.log(product);

  useEffect(() => {
    if (product.product_colors.length > 0) {
      setSelectedColor(product.product_colors[0]); // Set initial color to the first one
    }
  }, [product]);

  // Update the selected color when a color button is clicked
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <div className="px-4">
        <h2 className="text-xl">{product.name}</h2>
        <p className="text-sm text-gray-500 py-2">{product.description}</p>
        <p className="text-lg"> ${product.price}</p>
      </div>

      {/* Image Slider */}
      {selectedColor && <ImageSlider productColor={selectedColor} />}

      <div className="pt-6">
        <span className="px-4 font-semibold">Color:</span>
        <span>
          {selectedColor ? selectedColor.color_id.color_name : "None"}
        </span>
        <div className="flex gap-1 p-4">
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

        <div className=" flex flex-col  px-4">
            <p className=" font-semibold pb-4">Sizes:</p>
            <div className="flex gap-2">
          {product.product_sizes.map((size, index) => (
            <span className="p-2 bg-[#edebe9] text-sm cursor-pointer " key={index}>
              {size.size_id.size}
            </span>
          ))}
          </div>
          <button className="mt-10 px-2 py-3 bg-black text-white uppercase font-semibold">Add to Card</button>
        </div>
      </div>
    </div>
  );
}
