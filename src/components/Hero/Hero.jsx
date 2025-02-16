import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {Scale} from 'lucide-react'
import "./Hero.css";

const Hero = () => {

    const scrollToSection = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        className="bgimg absolute inset-0 w-full h-full object-cover brightness-75"
        src="https://cdn.pixabay.com/photo/2024/04/06/17/32/ai-generated-8679700_1280.jpg"
        alt="Legal Advisor Background"
        />

      {/* Overlay Text */}
      <div className="relative text-center text-white max-w-3xl px-6">
        <h1 className="text-6xl font-bold mb-4">Legal Advisor</h1>
        <p className="text-xl mb-6">
          Your one-stop solution for all{" "}
          <span className="underline">Legal Help.</span>
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToSection}
          className="flex items-center gap-3 bg-yellow-800 text-white mx-auto px-8 py-4 text-2xl font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300"
        >
          <Scale size={40} />
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <DotLottieReact className='herogif w-1/2 pt-20'
src="https://lottie.host/8dc3dbaf-96f5-4586-819e-3e1ed4290cb6/NhsmMchDOG.lottie"
loop
autoplay
/> */
}
