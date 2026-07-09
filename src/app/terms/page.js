"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  const headingStyle = {
    fontFamily: "'SageNav', sans-serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    letterSpacing: "2px",
    lineHeight: "1.2",
    textTransform: "uppercase",
  };

  const sectionHeadingStyle = {
    fontFamily: "'SageNav', sans-serif",
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    letterSpacing: "1.5px",
    lineHeight: "1.4",
    textTransform: "uppercase",
  };

  const bodyStyle = {
    fontFamily: '"AntiqueLegacy", serif',
    fontWeight: 300,
    color: "rgba(26, 26, 26, 0.75)",
    fontSize: "14px",
    lineHeight: "26px",
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-16 flex items-center justify-center px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        {/* Mobile View */}
        <h1
          className="md:hidden text-center tracking-tight flex flex-col items-center justify-center text-[#111111]"
          style={{ ...headingStyle, fontSize: "28px", lineHeight: "36px" }}
        >
          <span className="italic lowercase" style={{ textTransform: "none" }}>malmar</span>
          <span className="uppercase mt-1 font-semibold">TERMS & CONDITIONS</span>
        </h1>
        {/* Desktop View */}
        <h1
          className="hidden md:block uppercase text-center tracking-wider text-[#111111]"
          style={{ ...headingStyle, fontSize: "44px", lineHeight: "50px", letterSpacing: "4px" }}
        >
          TERMS & CONDITIONS
        </h1>
      </section>

      {/* Content Section */}
      <section className="flex-grow px-6 md:px-12 pb-32 max-w-4xl mx-auto w-full">
        <div className="border-t border-black/10 pt-12 space-y-12">
          
          <div className="text-center md:text-left">
            <p className="italic text-xs opacity-50" style={bodyStyle}>
              Last Updated: July 10, 2026
            </p>
          </div>

          <div style={bodyStyle} className="space-y-4">
            <p>
              Welcome to the website of Malmar Studio ("we", "our", "us"). These Terms & Conditions govern your access to and use of our website, as well as your interactions with our professional architecture, interior design, and project execution services.
            </p>
            <p>
              By browsing this website, subscribing to our newsletter, or initiating design inquiries, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, you must discontinue your use of our website and services immediately.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              1. Intellectual Property Rights
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                Unless otherwise indicated, the website and all of its content—including source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics, and architectural renderings (collectively, the "Content")—are owned or licensed by Malmar Studio.
              </p>
              <p>
                The Content is protected by copyright, trademark, and other intellectual property laws. You are granted a limited license to access and view the website for personal, non-commercial purposes. No part of the website or Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever without our prior written consent.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              2. User Representations
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                By using the site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All registration or submission information you provide is true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                <li>You have the legal capacity and agree to comply with these Terms & Conditions.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>Your use of the site will not violate any applicable law or regulation.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              3. Professional Design & Execution Services
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                The information provided on this website regarding our architecture, interior design, and project execution services is for informational purposes only:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-black font-normal">Service Agreements:</strong> Any business relationship, consultancy, or commission of architectural or interior design work is subject to a separate, legally binding written agreement executed between you and Malmar Studio.
                </li>
                <li>
                  <strong className="text-black font-normal">Project Estimates:</strong> Any cost projections, architectural diagrams, project timelines, or material estimates provided on this website or during preliminary consultations are tentative and subject to change based on structural assessments, vendor availability, and site conditions.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              4. Prohibited Activities
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                You may not access or use the website for any purpose other than that for which we make the website available. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Systematically retrieving data or other content from the site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Circumventing, disabling, or otherwise interfering with security-related features of the website.</li>
                <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information.</li>
                <li>Using the website to advertise or offer to sell goods and services.</li>
                <li>Disparaging, tarnishing, or otherwise harming, in our opinion, us and/or the website.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              5. Disclaimer of Warranties
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                The website is provided on an as-is and as-available basis. You agree that your use of the website and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We make no warranties or representations about the accuracy or completeness of the site's content or the content of any websites linked to this site, and we assume no liability or responsibility for any errors, mistakes, or inaccuracies of content, personal injury or property damage of any nature, or any unauthorized access to or use of our secure servers.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              6. Limitation of Liability
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                In no event will Malmar Studio, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              7. Governing Law
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                These Terms & Conditions and your use of the website are governed by and construed in accordance with the laws governing the business registrations of Malmar Studio, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts of appropriate jurisdiction.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              8. Contact Information
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                If you have any questions or require clarification regarding these Terms & Conditions, please contact us:
              </p>
              <p className="mt-4 font-normal text-black" style={{ fontFamily: "'SageNav', sans-serif", letterSpacing: "1px" }}>
                MALMAR STUDIO
              </p>
              <p>
                Email: <a href="mailto:info@malmarstudio.com" className="underline hover:opacity-75 transition-opacity">info@malmarstudio.com</a>
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
