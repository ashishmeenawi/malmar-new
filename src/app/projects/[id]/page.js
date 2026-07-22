"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getProjectByIdOrSlug, getAdjacentProjects } from "@/data/projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const idOrSlug = params?.id;

  const project = getProjectByIdOrSlug(idOrSlug);
  const { nextProject } = getAdjacentProjects(project.id);

  // Exact Site-Wide Typography Specifications
  const headingStyle = {
    fontFamily: "'SageNav', sans-serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    letterSpacing: "4px",
    lineHeight: "1.1",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "14px",
    lineHeight: "22px",
  };

  const labelStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "10px",
    lineHeight: "10px",
    letterSpacing: "0.05em",
  };

  const elicyonStyle = {
    fontFamily: "'Elicyon', serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  return (
    <main className="min-h-screen bg-[#f5f3f0] text-black">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 uppercase opacity-60 hover:opacity-100 transition-opacity"
            style={labelStyle}
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            <span>BACK TO PROJECTS</span>
          </Link>
        </div>

        {/* Category Tag & Title */}
        <div className="max-w-5xl">
          <span className="block mb-4 uppercase" style={labelStyle}>
            {project.category} — {project.location}
          </span>

          {/* Mobile Title */}
          <h1
            className="md:hidden uppercase tracking-tight text-[#111111] mb-4"
            style={{
              ...headingStyle,
              fontSize: "32px",
              lineHeight: "32.5px",
              letterSpacing: "0.05em",
            }}
          >
            {project.title}
          </h1>

          {/* Desktop Title */}
          <h1
            className="hidden md:block uppercase tracking-tight text-[#111111] mb-6"
            style={{
              ...headingStyle,
              fontSize: "52px",
              lineHeight: "40.5px",
              letterSpacing: "4px",
            }}
          >
            {project.title}
          </h1>

          {project.subtitle && (
            <p
              className="text-[18px] md:text-[24px] opacity-80 max-w-3xl leading-relaxed"
              style={elicyonStyle}
            >
              {project.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Full Cover Image */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16 md:mb-24">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden shadow-xl">
          <img
            src={project.heroImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Narrative Story, Quote & Specs Sidebar */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Main Narrative Text & Vision Quote */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            <h2
              className="uppercase mb-4"
              style={{
                ...headingStyle,
                fontSize: "24px",
                lineHeight: "1.2",
                letterSpacing: "2px",
              }}
            >
              THE PROJECT
            </h2>

            <div className="space-y-4">
              {project.overview.map((paragraph, idx) => (
                <p key={idx} style={bodyStyle}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architectural Vision Quote */}
            {project.quote && (
              <div className="pt-8 mt-8 border-t border-black/10">
                <p
                  className="text-[20px] md:text-[26px] italic leading-relaxed text-black"
                  style={elicyonStyle}
                >
                  "{project.quote}"
                </p>
              </div>
            )}
          </div>

          {/* Minimal Meta Specs Sidebar */}
          <div className="md:col-span-5 lg:col-span-4 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-black/10 md:pl-10 lg:pl-12 space-y-6">
            <div>
              <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                LOCATION
              </span>
              <span style={bodyStyle}>{project.location}</span>
            </div>
            <div>
              <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                YEAR
              </span>
              <span style={bodyStyle}>{project.year}</span>
            </div>
            <div>
              <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                CATEGORY
              </span>
              <span style={bodyStyle}>{project.category}</span>
            </div>
            <div>
              <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                AREA
              </span>
              <span style={bodyStyle}>{project.specs.area}</span>
            </div>
            <div>
              <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                SERVICES
              </span>
              <span style={bodyStyle}>{project.specs.scope}</span>
            </div>
            {project.specs.materials && (
              <div>
                <span className="block mb-1 uppercase opacity-50" style={labelStyle}>
                  MATERIALS
                </span>
                <span style={bodyStyle}>{project.specs.materials}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="border-t border-black/10 py-16 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
        <span className="block mb-4 uppercase opacity-50" style={labelStyle}>
          NEXT PROJECT
        </span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group inline-flex flex-col items-center max-w-full"
        >
          {/* Mobile Next Title */}
          <h2
            className="md:hidden uppercase tracking-tight text-[#111111] group-hover:opacity-50 transition-opacity mb-4"
            style={{
              ...headingStyle,
              fontSize: "32px",
              lineHeight: "32.5px",
              letterSpacing: "0.05em",
            }}
          >
            {nextProject.title}
          </h2>

          {/* Desktop Next Title */}
          <h2
            className="hidden md:block uppercase tracking-tight text-[#111111] group-hover:opacity-50 transition-opacity mb-6"
            style={{
              ...headingStyle,
              fontSize: "52px",
              lineHeight: "40.5px",
              letterSpacing: "4px",
            }}
          >
            {nextProject.title}
          </h2>

          <span
            className="uppercase border-b border-black pb-0.5 group-hover:opacity-50 transition-opacity"
            style={labelStyle}
          >
            VIEW PROJECT →
          </span>
        </Link>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
