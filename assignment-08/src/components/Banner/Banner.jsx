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
      <div className="p-10 md:p-16 lg:p-20 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <h3 className="font-bold text-xl md:text-3xl lg:text-5xl text-white text-center mb-6 md:mb-8 lg:mb-10">Trusted by Millions, Built for You</h3>
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
          <div className="text-center text-white px-6 md:px-14 lg:px-16">
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px] mb-2 md:mb-3">Total Downloads</p>
            <h2 className="font-extrabold text-2xl md:text-4xl lg:text-[64px] mb-2 lmd:mb-3">29.6M</h2>
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px]">21% More Than Last Month</p>
          </div>
          <div className="text-center text-white px-6 md:px-14 lg:px-16">
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px] mb-2 md:mb-3">Total Reviews</p>
            <h2 className="font-extrabold text-2xl md:text-4xl lg:text-[64px] mb-2 md:mb-3">906K</h2>
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px]">46% More Than Last Month</p>
          </div>
          <div className="text-center text-white px-6 md:px-14 lg:px-16">
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px] mb-2 md:mb-3">Active Apps</p>
            <h2 className="font-extrabold text-2xl md:text-4xl lg:text-[64px] mb-2 md:mb-3">132+</h2>
            <p className="font-normal text-[8px] md:text-[12px] lg:text-[16px]">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
