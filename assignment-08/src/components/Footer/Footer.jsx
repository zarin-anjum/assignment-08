import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-neutral-content p-10 mt-10 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-10">

        <div>
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="HERO.IO logo" className="w-5 md:w-8 lg:w-10 h-5 md:h-8 lg:h-10 mb-2"/>
            <h2 className="font-bold text-lg text-white mb-2">HERO.IO</h2>
          </div>
          <p className="font-normal text-[16px] text-gray-400 leading-relaxed">
            HERO.IO is built to simplify app development and deployment. From
            designing user-friendly interfaces to managing backend logic
            efficiently, our platform empowers developers to create, launch, and
            maintain applications seamlessly — all in one place.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">About Us</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Installations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">Services</h3>
          <ul className="space-y-2 text-[16px]">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Deployment & Hosting
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Analytics & Monitoring
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Consulting & Strategy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-xl text-white mb-2">
            Connect With Us
          </h3>
          <ul className="flex items-center gap-4 text-2xl">
            <li>
              <a className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full border-t border-gray-100 mt-6"></div>

      <div className="w-full flex justify-center mt-4 lg:mt-0">
        <p className="text-white font-normal text-sm lg:text-[16px]">
          © 2025 HERO.IO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
