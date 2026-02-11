import { aboutNPfont11 } from "@/lib/font.utils";
import { videoLinks } from "@/lib/utils";
import React from "react";

const About_VideoSection = () => {
  const handleYearClick = (year: number) => {
    const url = videoLinks[year][0];
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex max-xl:flex-col w-full mx-auto items-center justify-center gap-[5rem] max-sm:gap-[2rem] pt-[5rem] pb-[5rem] max-sm:pt-[2.5rem] max-sm:pb-[2.5rem]">
      <div className="max-xl:flex max-xl:flex-col max-xl:items-center">
        {/* Heading */}
        <div
          className={`text-white text-[4rem] max-xl:text-[2.8rem] max-lg:text-[2.3rem] max-sm:text-[2.5rem] mb-[2rem] ${aboutNPfont11.className}`}
        >
          Flash Backs
        </div>

        {/* Year Buttons */}
        <div className="w-full flex flex-row flex-wrap gap-[32px] items-center justify-center mx-auto">
          {Object.keys(videoLinks).map((year) => (
            <div
              key={year}
              onClick={() => handleYearClick(Number(year))}
              className="
                flex items-center justify-center
                min-w-[120px] min-h-[80px]
                px-12 py-6
                text-[1.25rem]
                rounded-3xl
                border-4 border-white/[0.25]
                bg-white/[0.9] text-black
                cursor-pointer
                transition-all duration-200
                hover:scale-105 hover:bg-white
                max-md:min-w-[100px] max-md:min-h-[70px]
                max-md:text-[1.1rem]
                max-sm:min-w-[90px] max-sm:min-h-[60px]
                max-sm:text-[1rem]
              "
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About_VideoSection;
