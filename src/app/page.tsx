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
import { FaArrowCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <div className="flex-col z-10 max-w-screen items-center justify-between lg:flex">
        <section className="hero h-auto">
          <div className="flex-col items-center justify-around">
            <div
              className={`text-gray-700 text-9xl flex justify-center ${lato.className} mb-[6rem] mt-[4rem]`}
            >
              STUDIO FORMA 96
            </div>
            <div className="hero-video leading-none flex-row justify-around items-start ">
              <Link
                href={"/"}
                className="relative text-white p-8 w-full h-[40vh] hover:bg-black/40 transition-all duration-300 group"
              >
                <p className="text-xs text-gray-400">OFERTA</p>
                <h2 className="text-2xl text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-2">
                  Jak <br /> pracujemy?
                </h2>
                <br />
                <FaArrowRight className=" text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-4" />
              </Link>
              <Link
                href={"/"}
                className="border-x-[1px] border-white  
                  relative text-white p-8 w-full h-[40vh] hover:bg-black/40 transition-all duration-300 group"
              >
                <p className="text-xs text-gray-400">MARKI</p>
                <h2 className="text-2xl text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-2">
                  Marki, z ktorymi <br />
                  pracujemy
                </h2>
                <br />
                <FaArrowRight className=" text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-4" />
              </Link>
              <Link
                href={"https://www.sf96.pl/oferta/"}
                className="relative text-white p-8 w-full h-[40vh] hover:bg-black/40 transition-all duration-300 group"
              >
                <p className="text-xs text-gray-400">REALIZACUE</p>
                <h2 className="text-2xl text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-2">
                  Projekty, ktore <br /> pomagalismy <br />
                  tworzyc
                </h2>
                <br />
                <FaArrowRight className=" text-[#f4f4f4] transform transition-transform duration-300 group-hover:translate-y-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="my-[10rem] ml-[28rem]">
          <div className="">
            <p className="text-3xl leading-snug">
              We discreetly emphasize the luxury of the places you want to be.{" "}
              <br />
              Home, office, outdoor: our furniture and designs co-create spaces
              that support your well-being.
            </p>
            <Link href={"/"} className="text-xs">
              <p className="mt-[4rem]"> Read more</p>
            </Link>
          </div>
        </section>

        <PartnerSlider />
      </div>
    </main>
  );
}
