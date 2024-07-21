import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/../public/Images/heroImage.jpg";
import { Lato } from "next/font/google";
import "./../app/globals.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between pt-24">
      <div className=" flex-col z-10 max-w-screen items-center justify-between   lg:flex">
        <section className="hero h-auto">
          <div className="flex-col items-center justify-around">
            <div
              className={`text-gray-700 text-9xl flex justify-center ${lato.className} mb-8`}
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
            <p className="text-3xl text-gray-600 leading-snug">
              We discreetly emphasize the luxury of the places you want to be.{" "}
              <br />
              Home, office, outdoor: our furniture and designs co-create spaces
              that support your well-being.
            </p>
            <Link href={"/"} className="text-xs">
              <p className="mt-[4rem] text-gray-600"> Read more</p>
            </Link>
          </div>
          <section className="Brand-partners">
            <div></div>
          </section>
        </section>
      </div>
    </main>
  );
}
