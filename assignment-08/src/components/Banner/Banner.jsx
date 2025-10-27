import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto text-center px-8 md:px-14 lg:px-20 py-8 md:py-14 lg:py-20">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl mb-3 leading-tight">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Prodictive
          </span>{" "}
          Apps
        </h1>
        <p className="font-normal text-sm md:text-[16px] lg:text-[20px] text-[#627382] mb-7 leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://play.google.com/store/games?device=windows"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex items-center gap-4 font-bold text-sm md:text-[16px] lg:text-[20px] border-2-white rounded-sm px-4 py-2"
          >
            <img
              src="/assets/google-play.png"
              alt="Google Play"
              className="w-6 md:w-8 h-6 md:h-8"
            />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex items-center gap-4 font-bold text-sm md:text-[16px] lg:text-[20px] border-2-white rounded-sm px-4 py-2"
          >
            <img
              src="/assets/app-store.png"
              alt="App Store"
              className="w-6 md:w-8 h-6 md:h-8"
            />
            App Store
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/assets/hero.png" alt="hero" className="h-[150px] md:h-[300px] lg:h-[440px] mx-auto"/>
      </div>
    </div>
  );
};

export default Banner;
