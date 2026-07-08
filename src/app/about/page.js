"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const headingStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    letterSpacing: "4px",
    lineHeight: "1.1",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: "14px",
    lineHeight: "22px",
  };

  return (
    <main className="min-h-screen bg-[#f0ede6] selection:bg-stone-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen max-md:h-[62vh] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/commnew1.jpeg')" }}
        />
        <div className="relative z-10 text-center px-6 w-full">
          <h1
            className="text-[30px] md:text-[45px] leading-tight md:leading-[0.9] drop-shadow-lg"
            style={{ ...headingStyle, color: "rgb(244, 242, 238)", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            ABOUT
          </h1>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section className="py-32 max-md:py-16 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto overflow-x-hidden">
        <div className="mb-24 max-md:mb-10">
          <h2
            style={{
              fontFamily: "'SageNav', sans-serif",
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
              letterSpacing: "0px",
              lineHeight: "40.5px",
            }}
            className="text-[30px] md:text-[45px] max-w-[1000px] max-md:w-full text-black uppercase"
          >
            <span className="block">A singular vision.</span>
            <span className="pl-16 md:pl-18 max-md:pl-6 inline-block italic">Exceptional spaces.</span>
          </h2>
        </div>

        {/* 2-Column Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 max-w-4xl">
          <div style={bodyStyle}>
            <p className="mb-0 md:mb-6">
              Malmar is a multidisciplinary design studio founded with a singular vision: to create exceptional spaces through the seamless integration of architecture, interior design, and project execution. By bringing every discipline together under one studio, we ensure a cohesive process from concept to completion.
            </p>
          </div>
          <div style={bodyStyle}>
            <p className="mb-0 md:mb-6">
              Our signature design process comes standard. We believe in creating spaces with longevity, purpose and a conscious connection to their environment. Through responsible sourcing, timeless materials and collaboration with skilled artisans, we aim to deliver projects that are both refined and enduring.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric Image Section */}
      <section className="bg-[#ede8df] py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="overflow-hidden shadow-xl aspect-[4/5] w-[60%] mx-auto">
            <img
              src="/b:w.jpeg"
              alt="Architecture Interior 1"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden shadow-xl aspect-[4/5] w-[60%] mx-auto md:mt-24">
            <img
              src="/WhatsApp Image 2026-07-09 at 01.58.37.jpeg"
              alt="Architecture Interior 2"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Refined Process Section */}
      <section className="relative w-full bg-[#fcefd4] px-10 md:px-20 py-32 max-md:py-16 max-md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-32 max-md:mb-10 md:pl-46">
            <h2
              className="text-[32px] md:text-[40px] font-light uppercase relative"
              style={{ ...headingStyle, lineHeight: "40.5px" }}
            >
              <span className="block">OUR</span>
              <span className="block mt-2 italic">PROCESS</span>
            </h2>
          </div>

          <div className="relative md:pl-46">
          {[
            {
              title: "DISCOVERY",
              text: "Every project begins with understanding. We listen deeply, uncovering your aspirations and lifestyle requirements to build a foundation of purpose.",
            },
            {
              title: "DEVELOPMENT",
              text: "We translate ideas into atmosphere and narrative, layering concept, mood, and materiality to shape a vision that is both unique and timeless.",
            },
            {
              title: "DETAILING",
              text: "The vision becomes tangible. We refine every element, from architectural detailing and bespoke joinery to finishes, ensuring precision and artistry.",
            },
            {
              title: "DELIVERY",
              text: "We seamlessly orchestrate installation and handover, managing every detail to ensure the final result is a space ready to be admired and enjoyed.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="mb-12 max-md:mb-8 flex flex-col md:flex-row gap-16 md:gap-24 max-md:gap-4"
            >
              <div className="w-full md:w-1/3">
                <h3
                  className="tracking-widest uppercase"
                  style={{
                    ...headingStyle,
                    fontSize: "22px",
                    lineHeight: "26px",
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div className="w-full md:w-2/3">
                <p
                  className="font-light text-black max-w-[320px] text-[14px] md:text-[16px] leading-[22px]"
                  style={{
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                    fontWeight: 400,
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Selected Work Gallery */}
      <section className="bg-[#ede8df] py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-24 text-center">
            <h2
              className="text-[32px] md:text-[40px] uppercase text-black"
              style={headingStyle}
            >
              SELECTED WORK
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {[
              { title: "The Penthouse - London", image: "/arc1.jpg" },
              { title: "Coastal Retreat - Ibiza", image: "/arc2.jpg" },
              { title: "Modern Sanctuary", image: "/arc3.jpg" },
              { title: "Imperial Suite", image: "/arc4.jpeg" },
            ].map((product, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-200 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <h3
                  className="uppercase tracking-wider text-center text-[14px]"
                  style={{
                    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                    fontWeight: 400,
                    lineHeight: "1.2",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
