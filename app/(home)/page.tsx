"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import React, { use, useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import About_VideoSection from "@/components/About_VideoSection";
import { aboutNPfont2 } from "@/lib/font.utils";
import { aboutNPfont, aboutNPfont11, aboutNPfont4 } from "@/lib/font.utils";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import Lenis from "@studio-freight/lenis";
import CountdownTimer from "@/components/HomecountTime";
import Card from "@/components/Home_Home_Card";
import Column from "@/components/Home_Home_Column";
import Section3 from "@/components/Home_Home_Section3";
import Section2 from "@/components/Home_Home_Section2";
import Section1 from "@/components/Home_Home_Section1";

import {
  characters1,
  characters10,
  characters11,
  characters11s,
  characters12,
  characters12s,
  characters13,
  characters13s,
  characters14,
  characters14s,
  characters15,
  characters15s,
  characters16,
  characters16s,
  characters17,
  characters17s,
  characters18s,
  characters19s,
  characters1s,
  characters2,
  characters20s,
  characters21s,
  characters2s,
  characters3,
  characters3s,
  characters4,
  characters4s,
  characters5,
  characters5s,
  characters6,
  characters6s,
  characters7,
  characters8,
  characters9,
  horiscrollimage,
  projects,
  VERimages,
} from "@/lib/utils";
import Section11 from "@/components/Home_Home_Section11";
import TextReveal from "@/components/Home_TextReveal";
import CardStacked from "@/components/Home_CardStack";
import JoinExodiaForm from "@/components/JoinExodiaForm";

const HomePage = () => {
  const futureDate = new Date("2025-03-01T00:00:00").getTime(); // Change to your target date

  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const y = useTransform(
    scrollYProgress1,
    [0, 1],
    [0, height * (isMobile ? 0.5 : 2)],
  );
  const y2 = useTransform(
    scrollYProgress1,
    [0, 1],
    [0, height * (isMobile ? 1.2 : 3)],
  );
  const y3 = useTransform(
    scrollYProgress1,
    [0, 1],
    [0, height * (isMobile ? 0.5 : 1.25)],
  );

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // for scaled image on scroll
  const imagescontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: imagescontainer,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress4, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress4, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress4, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress4, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress4, [0, 1], [1, 9]);
  const pictures = [
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/events%20photos/IMG_1632.JPG.jpeg?raw=true",
      scale: scale4,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/31bffa73-d684-4849-948c-dfa0147202fd.jpeg?raw=true",
      scale: scale5,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/WhatsApp%20Image%202026-02-08%20at%2011.10.22%20PM%20(1).jpeg?raw=true",
      scale: scale6,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/WhatsApp%20Image%202026-02-08%20at%2011.10.22%20PM.jpeg?raw=true",
      scale: scale5,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/WhatsApp%20Image%202026-02-08%20at%2011.10.23%20PM.jpeg?raw=true",
      scale: scale6,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/dfd.jpeg?raw=true",
      scale: scale8,
    },
    {
      src: "https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/photos/fsfsdfsdf.jpeg?raw=true",
      scale: scale9,
    },
  ];
  const getImageContainerStyles = (index: number) => {
    const styles = [
      "w-[25vw] h-[25vh] max-sm:top-[2vh]", // Default - 1st image
      "w-[35vw] h-[30vh] top-[-30vh] max-sm:top-[-27vh] left-[5vw]", // 2nd image
      "w-[30vw] h-[45vh] top-[-10vh] left-[-30vw]", // 3rd image
      "w-[25vw] h-[25vh] max-sm:top-[2vh] left-[27.5vw]", // 4th image
      "w-[20vw] h-[25vh] top-[27.5vh] max-sm:top-[28.5vh] left-[5vw]", // 5th image
      "w-[30vw] h-[25vh] top-[27.5vh] max-sm:top-[28vh] left-[-22.5vw]", // 6th image
      "w-[15vw] h-[15vh] top-[22.5vh] max-sm:top-[23vh] left-[25vw]", // 7th image
    ];
    return styles[index] || styles[0]; // Default to first style if out of range
  };

  {
    /* crads stacked animation  */
  }
  const maincardstackedcontainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: maincardstackedcontainer,
    offset: ["start start", "end end"],
  });

  const cardstackedCard = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress6 } = useScroll({
    target: cardstackedCard,
    offset: ["start end", "end end"],
  });

  {
    /* page ke upar page transition  */
  }
  const PageKeUparTransitionMain = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYProgress7 } = useScroll({
    target: PageKeUparTransitionMain,
    offset: ["start start", "end end"],
  });

  // text zoom to video
  const textZoomToVideocontainer = useRef<HTMLDivElement>(null);
  const textZoomToVideostickyMask = useRef<HTMLDivElement>(null);
  const textZoomToVideoinitialMaskSize = 0.4;
  const textZoomToVideotargetMaskSize = 70;
  const textZoomToVideoeasing = 0.1;
  let textZoomToVideoeasedScrollProgress = 0;
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);
  const animate = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current)
      return;

    const maskSizeProgress =
      textZoomToVideotargetMaskSize * getScrollProgress();
    textZoomToVideostickyMask.current.style.webkitMaskSize = `${(textZoomToVideoinitialMaskSize + maskSizeProgress) * 100}%`;
    requestAnimationFrame(animate);
  };
  const getScrollProgress = () => {
    if (!textZoomToVideostickyMask.current || !textZoomToVideocontainer.current)
      return 0;

    const scrollProgress =
      textZoomToVideostickyMask.current.offsetTop /
      (textZoomToVideocontainer.current.getBoundingClientRect().height -
        window.innerHeight);

    const delta = scrollProgress - textZoomToVideoeasedScrollProgress;
    textZoomToVideoeasedScrollProgress += delta * textZoomToVideoeasing;

    return textZoomToVideoeasedScrollProgress;
  };

  // for horizontal moving cards on scroll
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  // for video intro
  const [showHome, setShowHome] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div ref={targetRef} className="m-0 p-0 ">
        <Navbar />

        <FloatingNav namex="P" className="max-md:hidden" />
        {/* 1 */}
        {/* page ke upar page transition  */}
        <div ref={PageKeUparTransitionMain} className="relative h-[100vh] ">
          <Section1 scrollYProgress={scrollYProgress7} />
          {/* <Section11 scrollYProgress={scrollYProgress7} /> */}
        </div>

        {/* 3 - Vertical Parallax Gallery */}
        <div
          ref={gallery}
          className="max-sm:hidden homeverticalParallax glass relative flex gap-[2vw] p-[2vw] box-border overflow-hidden h-[175vh]"
        >
          <Column
            images={[
              VERimages[0],
              VERimages[1],
              VERimages[2],
              VERimages[11],
              VERimages[1],
            ]}
            y={y}
          />
          <Column
            images={[
              VERimages[3],
              VERimages[4],
              VERimages[5],
              VERimages[3],
              VERimages[4],
            ]}
            y={y2}
          />
          <Column
            images={[
              VERimages[6],
              VERimages[7],
              VERimages[8],
              VERimages[9],
              VERimages[10],
            ]}
            y={y3}
          />
        </div>

        {/* Section Title */}
        <div className="h-[20vh] flex justify-center items-end px-4">
          <div
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center ${aboutNPfont11.className}`}
          >
            Explore Flagship Events
          </div>
        </div>

        {/* 4 - Cards Stacked Animation */}
        <CardStacked scrollYProgress={scrollYProgress} />

        <div className="flex justify-end items-start w-[90%] px-4 sm:px-6">
          <div
            className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer hover:scale-110 sm:hover:scale-125 transform transition-all duration-300 ${aboutNPfont11.className}`}
          >
            <Link href="/pdf/event brochure 2.pdf">Explore More ....</Link>
          </div>
        </div>

        {/* 11 - Text Reveal Section */}
        <div
          className={`flex flex-col justify-center items-center gap-3 sm:gap-5 h-[40vh] sm:h-[50vh] w-[95%] sm:w-[90%] mx-auto px-4`}
        >
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters1}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters2}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters3}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters4}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters5}
            fontClassName={aboutNPfont2.className}
          />

          {/* Mobile versions */}
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters1s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters2s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters3s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters4s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters5s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters6s}
            fontClassName={aboutNPfont2.className}
          />
        </div>

        {/* 5 - Scaled Images Container */}
        <div ref={imagescontainer} className="h-[300vh] relative mb-3">
          <div className="sticky overflow-hidden top-0 h-[100vh]">
            {pictures.map(({ src, scale }, i) => {
              return (
                <motion.div
                  key={i}
                  style={{ scale }}
                  className="absolute max-sm:top-[1rem] flex justify-center items-center w-full h-full"
                >
                  <div className={`relative ${getImageContainerStyles(i)}`}>
                    <Image
                      src={src}
                      alt="image"
                      fill
                      className="object-cover rounded-2xl border-2 border-white/[0.2]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 5-new - About EXODIA Text Section */}
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-5 h-[40vh] sm:h-[50vh] w-[95%] sm:w-[90%] mx-auto px-4">
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters1}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters2}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters3}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters4}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-2xl sm:text-3xl md:text-4xl max-sm:hidden"
            text={characters5}
            fontClassName={aboutNPfont2.className}
          />

          {/* Mobile versions */}
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters1s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters2s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters3s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters4s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters5s}
            fontClassName={aboutNPfont2.className}
          />
          <TextReveal
            className="text-xs sm:text-sm sm:hidden"
            text={characters6s}
            fontClassName={aboutNPfont2.className}
          />
        </div>

        {/* 6 - Horizontal Scroll Cards (Rotated) */}
        <div className="mt-12 sm:mt-20 rotate-[3deg] max-sm:rotate-0">
          <div className="sticky top-0 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-2 sm:gap-4">
              {horiscrollimage.map((imgsrc, i) => {
                return <Card key={i} imgsrc={imgsrc} i={i} />;
              })}
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <About_VideoSection />

        {/* Horizontal Scroll Cards (Reverse Rotation) */}
        <div className="mb-2 max-sm:mb-2 -rotate-[3deg] max-sm:rotate-0">
          <div className="sticky top-0 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-2 sm:gap-4">
              {horiscrollimage.map((imgsrc, i) => {
                return <Card key={i} imgsrc={imgsrc} i={i} />;
              })}
            </motion.div>
          </div>
        </div>

        {/* 9 - Text Zoom to Video Section */}
        <div
          ref={textZoomToVideocontainer}
          className="relative h-[300vh] bg-white [clip-path:polygon(0_4%,100%_0%,100%_100%,0%_100%)] max-sm:[clip-path:polygon(0_1%,100%_0%,100%_100%,0%_100%)]"
        >
          <div
            ref={textZoomToVideostickyMask}
            className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
          >
            <video autoPlay muted loop className="h-screen w-full object-cover">
              <source src="/assets/homefifth/mdi.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Blue Section with Text */}
        <div className="bg-blue-900 min-h-screen text-white flex justify-center items-center py-12 px-4">
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-5 h-auto max-w-4xl mx-auto">
            <TextReveal
              className="text-2xl sm:text-3xl md:text-4xl"
              text={characters6}
              fontClassName={aboutNPfont2.className}
            />
            <TextReveal
              className="text-2xl sm:text-3xl md:text-4xl"
              text={characters7}
              fontClassName={aboutNPfont2.className}
            />
            <TextReveal
              className="text-2xl sm:text-3xl md:text-4xl"
              text={characters8}
              fontClassName={aboutNPfont2.className}
            />
            <TextReveal
              className="text-2xl sm:text-3xl md:text-4xl"
              text={characters9}
              fontClassName={aboutNPfont2.className}
            />
            <TextReveal
              className="text-2xl sm:text-3xl md:text-4xl"
              text={characters10}
              fontClassName={aboutNPfont2.className}
            />
          </div>
        </div>
      </div>

      {/* 10 - FINAL COUNTDOWN & FOOTER SECTION - FIXED */}
      <div className="relative min-h-screen bg-white">
        <div className="sticky top-0 min-h-screen flex flex-col">
          {/* COUNTDOWN CONTENT */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
            <div
              className={`
                flex flex-col items-center gap-4 sm:gap-6 md:gap-8
                text-blue-900
                ${aboutNPfont11.className}
                text-center
                w-full
                max-w-6xl
              `}
            >
              <div className="space-y-2 sm:space-y-4">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-4">
                  Prayaan 7.0
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4">
                  06–07 March 2026
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 w-full px-4">
                <CountdownTimer />
              </div>
            </div>
          </div>

          {/* FOOTER - Fixed at bottom */}
          <div className="mt-auto w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
