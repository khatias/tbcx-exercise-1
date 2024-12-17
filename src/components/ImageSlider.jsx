"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ productColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (productColor) {
      const fetchedImages = productColor.product_images.map((img) => ({
        src: img.image_url,
      }));
      setImages(fetchedImages);
    }
  }, [productColor]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative  mx-auto mt-4 ">
      {images.length > 0 ? (
        <>
          {/* Image display */}
          <div className="relative h-auto group">
            <Image
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              sizes="100vw"
              width={0}
              height={0}
              style={{
                width: '100%',
                height: 'auto',
              }}

              
              
             
           
            />
          </div>

          {/* Image navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray p-2 rounded-full "
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image index label */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-gray-500 bg-opacity-50 px-2 py-1 rounded">
            {currentIndex + 1} of {images.length}
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
