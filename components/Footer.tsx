import React from "react";
import { FooterSocialMediaDock } from "./Home_FooterSocialMediaDock";
import { aboutNPfont11 } from "@/lib/font.utils";

const Footer = () => {
  return (
    <footer className="w-screen bg-blue-900 text-white py-20 flex flex-col items-center">
      {/* Title */}
      <div className="z-[900] w-full">
        <p className={`text-[3rem] text-center ${aboutNPfont11.className}`}>
          Prayaan 7.0
        </p>
      </div>

      {/* Divider + Copyright */}
      <div className="w-full border-t border-gray-700 pt-6 flex justify-center px-12">
        <p className="text-white text-sm text-center">
          Indian Maritime University (IMU), Mumbai Port Campus
        </p>
      </div>
    </footer>
  );
};

export default Footer;
