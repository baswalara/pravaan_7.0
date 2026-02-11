"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact_Card from "@/components/Contact_Card";
import { aboutNPfont11 } from "@/lib/font.utils";
import React from "react";

const page: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* CONTACT SECTION */}
      <div className="p-0 m-0 h-full min-h-screen">
        <div
          className={`mt-[8rem] mb-7 text-white text-[5rem] max-sm:text-[3rem] ${aboutNPfont11.className}`}
        >
          Contact Us
        </div>

        <div className="flex justify-center items-center max-sm:flex-col max-sm:p-4">
          <Contact_Card
            src="https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Arnav_bhardwaj.jpeg?raw=true"
            title="Arnav Bhardwaj"
            desc="Convener"
          />

          <Contact_Card
            src="https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Aditya_Singh.jpeg?raw=true"
            title="Aditya Singh"
            desc="Convener"
            contact=""
          />

          <Contact_Card
            src="https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Rohit_mathur.jpeg?raw=true"
            title="Rohit Mathur"
            desc="Head"
            contact="+91-7976173727"
          />

          <Contact_Card
            src="https://github.com/aariivermaaa-cloud/PRAYAAN-7.0/blob/main/contact%20us/Aaryan_Verma.jpeg?raw=true"
            title="Aaryan Verma"
            desc="Head"
            contact="+91-8700158227"
          />
        </div>

        {/* LOCATION LINK */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://maps.app.goo.gl/UmSkrVK2Ax1us61g9"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-12 py-4 text-white text-[1.5rem] hover:bg-white hover:text-black transition duration-300"
          >
            LOCATION
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
