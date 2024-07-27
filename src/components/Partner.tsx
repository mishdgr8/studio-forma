"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Flexbox from "../../public/Images/partner/flexform-logo-1.png";
import Poliform from "../../public/Images/partner/poliform-logo.png";
import Rima from "../../public/Images/partner/logo-rimadesio-1536x259.png";
import Siematics from "../../public/Images/partner/siematic-logo.png";
import Occhio from "../../public/Images/partner/occhio-logo-1536x439.png";
import Dedon from "../../public/Images/partner/dedon-logo-yellow.svg";
import { Lato } from "next/font/google";
import "./../app/globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

const PartnerSlider = () => {
  const images = [
    Flexbox,
    Poliform,
    Rima,
    Siematics,
    Occhio,
    Dedon,
    Flexbox,
    Poliform,
    Rima,
    Siematics,
    Occhio,
    Dedon,
  ];
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const imageWidth = sliderRef.current.querySelector("div").offsetWidth + 8; // Including margin
      sliderRef.current.scrollBy({ left: -imageWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const imageWidth = sliderRef.current.querySelector("div").offsetWidth + 8; // Including margin
      sliderRef.current.scrollBy({ left: imageWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="partner flex flex-col w-full pl-[4rem] mb-[8rem]">
      <h2 className="text-2xl">Brands we work with</h2>
      <div className="relative mt-8">
        <button
          onClick={scrollLeft}
          className="absolute text-white left-0 z-10 bg-black/20 p-2 rounded-full transform -translate-y-1/2 top-1/2"
        >
          <FaArrowLeft />
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar"
          ref={sliderRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((image, index) => (
            <div key={index} className="mr-2 flex-shrink-0">
              <div className="w-60 h-[10rem] flex items-center justify-center bg-white">
                <Image className="w-28 h-5" src={image} alt="brand" />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute text-white right-0 z-10 bg-black/20 p-2 rounded-full transform -translate-y-1/2 top-1/2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PartnerSlider;
