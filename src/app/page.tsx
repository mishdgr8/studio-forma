import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/../public/Images/heroImage.jpg";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between pt-24">
      <div className="  z-10 max-w-screen items-center justify-between   lg:flex">
        <section className="hero">
          <div className="flex-col items-center justify-around">
            <div
              className={`text-9xl flex justify-center ${lato.className} mb-8`}
            >
              STUDIO FORMA 96
            </div>
            <div className="hero-video h-44 w-full">
              <Image alt="HERO IMAGE" src={Hero} className="px-2" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
