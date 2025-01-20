import React from "react";
import logo_svg from "../assets/svg/logo.svg";
import Facebook from "../assets/svg/facebook.svg";
import Instagram from "../assets/svg/instagram.svg";
import Twitter from "../assets/svg/twitter.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Youtube from "../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <div className="flex md:flex-row items-center justify-between px-4 flex-col md:divide-x-2 py-4 divide-hero space-y-4 md:space-y-0">
      <div>
        <img src={logo_svg} alt="" />
      </div>

      <div className="font-dmSans font-bold text-lg pl-3">
        <a href="">Privacy Policy</a>
      </div>

      <div className="font-dmSans font-bold text-lg pl-3">
        <a href="">Terms &amp; Condition</a>
      </div>

      <div className="font-dmSans font-bold text-lg pl-3">
        <a href="">Sources</a>
      </div>

      <div>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-10 hover:cursor-pointer">
          <a href="">
            <img src={Facebook} alt="" className="h-7" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="" className="h-7" />
          </a>
          <a href="">
            <img src={Twitter} alt="" className="h-7" />
          </a>
          <a href="">
            <img src={Youtube} alt="" className="h-7" />
          </a>
          <a href="">
            <img src={Instagram} alt="" className="h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
