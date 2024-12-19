"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ productColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const visibleThumbnails = 5; 

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

  const prevThumbnails = () => {
    setThumbnailStartIndex(
      (prevIndex) =>
        Math.max(prevIndex - 1, 0) 
    );
  };

  const nextThumbnails = () => {
    setThumbnailStartIndex(
      (prevIndex) =>
        Math.min(prevIndex + 1, images.length - visibleThumbnails) 
    );
  };

  return (
    <div className="relative lg:grid grid-flow-col gap-8  ">
      {images.length > 0 ? (
        <>
          {/* Main Image Display */}
          <div className="relative h-auto group lg:order-last">
            <Image
              src={images[currentIndex].src}
              alt={`Image ${currentIndex + 1}`}
              sizes="100vw"
              width={0}
              height={0}
              className="w-full h-auto pb-3 lg:h-full lg:pb-0"
            />
          </div>

          {/* Thumbnails Section */}
          <div className="relative flex items-center lg:flex-col lg:order-first lg:h-full">
            {/* Thumbnail Navigation - Previous */}
            <button
              onClick={prevThumbnails}
              className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-gray-500 bg-white p-2 rounded-full lg:top-auto lg:left-1/2 lg:transform -translate-x-1/2 "
              disabled={thumbnailStartIndex === 0}
            >
              <ChevronLeft size={20} className="lg:rotate-90" />
            </button>

            <div className="flex w-full justify-between overflow-hidden lg:flex-col lg:h-full">
              {images
                .slice(
                  thumbnailStartIndex,
                  thumbnailStartIndex + visibleThumbnails
                )
                .map((img, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setCurrentIndex(thumbnailStartIndex + index)
                    }
                    className={`cursor-pointer ${
                      currentIndex === thumbnailStartIndex + index
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <Image
                      src={img.src}
                      width={89}
                      height={80}
                      className="lg:w-28"
                      alt={`Thumbnail ${thumbnailStartIndex + index + 1}`}
                    />
                  </div>
                ))}
            </div>

            {/* Thumbnail Navigation - Next */}
            
            <button
              onClick={nextThumbnails}
              className="absolute top-1/2 -right-9 transform -translate-y-1/2 text-gray-500 bg-white p-2 rounded-full lg:top-auto  lg:-bottom-10 lg:right-1/4 lg:transform -translate-x-1/2   "
              disabled={
                thumbnailStartIndex + visibleThumbnails >= images.length
              }
            >
              <ChevronRight size={20} className="lg:rotate-90" />
            </button>
          </div>

          {/* Image Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray p-2 rounded-full lg:hidden "
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray p-2 rounded-full lg:hidden"
          >
            <ChevronRight size={20} />
          </button>

          {/* Image Index Label */}
          <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-gray-500 bg-opacity-50 px-2 py-1 rounded md:text-sm">
            {currentIndex + 1} of {images.length}
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
