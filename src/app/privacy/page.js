"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
          <span className="uppercase mt-1 font-semibold">PRIVACY POLICY</span>
        </h1>
        {/* Desktop View */}
        <h1
          className="hidden md:block uppercase text-center tracking-wider text-[#111111]"
          style={{ ...headingStyle, fontSize: "44px", lineHeight: "50px", letterSpacing: "4px" }}
        >
          PRIVACY POLICY
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
              At Malmar Studio, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy details how we collect, use, store, and safeguard your information when you interact with our website, subscribe to our newsletter, or engage with our professional architecture, interior design, and project execution services.
            </p>
            <p>
              By accessing our website or utilizing our services, you consent to the collection and use of your information as outlined in this policy. If you do not agree with any terms described herein, please refrain from using our site or services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              1. Information We Collect
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                We may collect various types of information from you depending on how you interact with our studio:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-black font-normal">Personal Identifiable Information:</strong> When you subscribe to our newsletter or submit an inquiry form, we collect your name, email address, telephone number, and any details you provide about the nature of your project.
                </li>
                <li>
                  <strong className="text-black font-normal">Usage and Technical Data:</strong> We automatically collect information about your visit to our website, including your IP address, browser type, device information, operating system, and details about your browsing behavior (pages viewed, time spent on the site).
                </li>
                <li>
                  <strong className="text-black font-normal">Client Project Data:</strong> For clients who commission design projects, we may collect billing information, physical addresses, property documentation, blueprints, and specific client design preferences.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              2. How We Use Your Information
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                The information we collect is utilized strictly to provide a refined experience and execute our design services, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Delivering and managing our architectural and interior design services.</li>
                <li>Responding to inquiries, proposals, and scheduling consultations.</li>
                <li>Sending periodic updates, newsletters, and curated insights regarding Malmar Studio (only with your explicit consent).</li>
                <li>Analyzing website traffic and usage patterns to optimize our online experience and presentation.</li>
                <li>Complying with legal obligations, resolving disputes, and enforcing our agreements.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              3. Data Sharing and Disclosure
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your data with trusted partners and subcontractors only to the extent necessary to deliver our services:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-black font-normal">Service Providers:</strong> We work with third-party vendors who assist with website hosting, email communications, newsletter delivery, and payment processing.
                </li>
                <li>
                  <strong className="text-black font-normal">Collaborative Artisans & Contractors:</strong> For client projects, we may share relevant details with structural engineers, specialized craftsmen, and building contractors involved directly in the execution of your design.
                </li>
                <li>
                  <strong className="text-black font-normal">Legal Compliance:</strong> We may disclose information if required to do so by law, or in response to valid requests by public authorities.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              4. Cookies and Tracking Technologies
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                Our website utilizes cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files placed on your device to remember user preferences, analyze site performance, and monitor navigation patterns.
              </p>
              <p>
                You have the ability to decline cookies through your browser settings. However, doing so may limit your access to certain elements of our site or alter your visual experience.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              5. Data Security
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                The security of your personal data is highly important to us. We employ appropriate technical and organizational measures to safeguard your information from unauthorized access, loss, alteration, or disclosure.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              6. Your Rights and Choices
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                Depending on your geographic location, you may have specific rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access and receive a copy of the personal information we hold about you.</li>
                <li>The right to request the correction or updating of any inaccurate data.</li>
                <li>The right to request the complete deletion of your personal data.</li>
                <li>The right to opt-out of marketing communications and newsletter distributions at any time by clicking the "unsubscribe" link or contacting us directly.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base md:text-lg border-b border-black/5 pb-2" style={sectionHeadingStyle}>
              7. Contact Information
            </h2>
            <div style={bodyStyle} className="space-y-3">
              <p>
                For any questions, requests to exercise your rights, or details concerning this Privacy Policy, please reach out to our studio:
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
