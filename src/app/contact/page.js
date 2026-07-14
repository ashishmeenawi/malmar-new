"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    nature: '',
    message: '',
    consent: false
  });
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.nature || !formData.message || !formData.consent) {
      return;
    }

    const subject = `Enquiry from ${formData.firstName} ${formData.lastName} - ${formData.nature}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telephone: ${formData.telephone || 'N/A'}
Nature of Enquiry: ${formData.nature}

Message:
${formData.message}

Consent to Privacy Policy: Yes`;

    window.location.href = `mailto:ashishwebintegrators@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const textStyle = {
    fontFamily: 'SageNav, sans-serif',
    fontWeight: 400,
    color: "#000",
    lineHeight: "35.2px"
  };

  const subtextStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)"
  };

  const labelStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: "400",
    color: "rgb(0, 0, 0)",
    textTransform: "uppercase",
  };

  const inputStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    color: "black",
    caretColor: "black"
  };

  const elicyonStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center flex-col pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
          <div className="flex flex-col items-center gap-2 mb-10">
            <style>{`
              .contact-title {
                font-family: 'SageNav', sans-serif;
                font-size: 32px;
                font-weight: 400;
                line-height: 48.5px;
                color: #000;
              }
              @media (min-width: 768px) {
                .contact-title {
                  font-size: 48px;
                  line-height: 48.5px;
                }
              }
            `}</style>
            <h1 className="contact-title relative text-left" style={{ ...textStyle, lineHeight: "48.5px" }}>
              <span className="block">The WORLD</span>
              <span className="block ml-14 md:ml-36 -mt-4 md:-mt-3">
                of
                <span className="inline md:hidden ml-2">MALMAR</span>
                <span className="hidden md:inline md:ml-3">MALMAR</span>
              </span>
            </h1>
          </div>

          {/* Subtext Paragraphs */}
          <div className="max-w-xl mx-auto space-y-8">
            <p
              className="font-light text-stone-800 text-center"
              style={{
                ...subtextStyle,
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Whether you’re planning a private residence, a hospitality destination, or a commercial space, we are delighted to hear about your vision. Every project begins with a conversation, an opportunity to understand your ambitions, explore possibilities, and discuss how we can bring your ideas to life. </p>
          </div>
        </div>
      </section>

      {/* Editorial Section Detail */}
      <section className="relative w-full overflow-hidden bg-[#f4f1ea] flex flex-col lg:flex-row items-stretch border-t border-stone-200">
        {/* Left Image Pane */}
        <div className="relative w-full lg:w-1/2 h-[300px] md:h-[450px] lg:h-auto min-h-[400px] lg:min-h-[560px]">
          <img src="/insite22.jpeg" alt="Dubai Villa" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Right Content Pane */}
        <div className="w-full lg:w-1/2 bg-[#d8d3cd] flex flex-col items-center justify-center py-8 px-8 text-center min-h-[400px] lg:min-h-[560px] gap-8">
          <div className="max-w-md mx-auto">
            <style>{`
              .dubai-villa-title {
                font-size: 32px;
                line-height: 35.2px;
              }
              @media (min-width: 768px) {
                .dubai-villa-title {
                  font-size: 48px;
                  line-height: 37.2px;
                }
              }
            `}</style>
            <h2 className="dubai-villa-title uppercase" style={{ fontFamily: textStyle.fontFamily, fontWeight: textStyle.fontWeight, color: textStyle.color }}>
              CRAFTED <br /> <span className="italic">DETAIL</span>
            </h2>
          </div>
          <div className="w-full max-w-[280px] aspect-[4/5] overflow-hidden shadow-2xl">
            <img src="/contactimgnew.jpeg" alt="Architectural Detail" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8 mb-8">
            <p className="uppercase tracking-widest text-stone-800" style={{ fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif', fontSize: "14px", color: "rgb(0, 0, 0)" }}>

            </p>
            <div className="flex justify-center">
              <a
                href="mailto:marieke@malmarstudio.com"
                className="border-b border-black pb-0.5 hover:opacity-50 transition-opacity text-[9px] md:text-[10px] uppercase block tracking-wider"
                style={{
                  ...elicyonStyle,
                  fontWeight: 600,
                  color: "rgb(0, 0, 0)"
                }}
              >
                EMAIL ME
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-[#f4f1ea] py-24 px-6 md:px-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          <div className="flex flex-col justify-start">
            <style>{`
              .story-title {
                font-size: 32px;
                line-height: 35.2px;
              }
              @media (min-width: 768px) {
                .story-title {
                  font-size: 48px;
                  line-height: 37.2px;
                }
              }
            `}</style>
            <h2 className="story-title uppercase tracking-tight text-black"
              style={{ fontFamily: textStyle.fontFamily, fontWeight: textStyle.fontWeight, color: textStyle.color }}>
              EVERY SPACE STARTS <br /> with a STORY. LET&apos;S <br /> START YOURS
            </h2>
          </div>

          <div className="w-full">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {/* First Name */}
                <div className="relative group">
                  <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    style={inputStyle}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.firstName ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.firstName && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">First name is required</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={inputStyle}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.lastName ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.lastName && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Last name is required</p>
                  )}
                </div>

                {/* Email */}
                <div className="relative group">
                  <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-stone-900 font-light ${showErrors && !formData.email ? 'border-red-500' : 'border-stone-800'}`}
                  />
                  {showErrors && !formData.email && (
                    <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Email is required</p>
                  )}
                </div>

                {/* Telephone */}
                <div className="relative group">
                  <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    style={inputStyle}
                    className="w-full bg-transparent border-b border-stone-800 py-2 focus:outline-none focus:border-stone-400 transition-colors text-stone-900 font-light"
                  />
                </div>
              </div>

              {/* dropdown */}
              <div className="relative group pt-4">
                <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                  Nature of Enquiry (Please Select) *
                </label>
                <div className={`relative border-b ${showErrors && !formData.nature ? 'border-red-500' : 'border-stone-800'}`}>
                  <select
                    value={formData.nature}
                    onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
                    style={inputStyle}
                    className="w-full bg-transparent py-2 focus:outline-none appearance-none cursor-pointer text-stone-900 font-light"
                  >
                    <option value="">Select an option</option>
                    <option value="residential">Residential Design</option>
                    <option value="commercial">Commercial Design</option>
                    <option value="bespoke">Bespoke Furniture</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                </div>
                {showErrors && !formData.nature && (
                  <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Please select a nature of enquiry</p>
                )}
              </div>

              {/* Message */}
              <div className="relative group pt-4">
                <label style={labelStyle} className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-2 block">
                  Message *
                </label>
                <textarea
                  rows="1"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={inputStyle}
                  className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors resize-none text-stone-900 font-light ${showErrors && !formData.message ? 'border-red-500' : 'border-stone-800'}`}
                ></textarea>
                {showErrors && !formData.message && (
                  <p className="absolute -bottom-6 left-0 text-[10px] text-red-500 font-medium">Message is required</p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-10">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input type="checkbox" className="mt-1 accent-stone-800" />
                  <span style={labelStyle} className="text-[11px] uppercase tracking-[0.1em] text-stone-600 font-medium">Join our community</span>
                </label>
                <div className="relative">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="checkbox"
                      className={`mt-1 h-3 w-3 accent-stone-800 outline outline-offset-2 ${showErrors && !formData.consent ? 'outline-red-500' : 'outline-transparent'}`}
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <span style={labelStyle} className="text-[11px] uppercase tracking-[0.1em] text-stone-600 font-medium leading-relaxed">
                      I consent to my information being collected <br className="hidden md:block" /> in accordance with the Malmar privacy policy
                    </span>
                  </label>
                  {showErrors && !formData.consent && (
                    <p className="absolute -bottom-6 left-8 text-[10px] text-red-500 font-medium">You must consent to data collection</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-16 flex justify-center lg:justify-start">
                <button
                  type="submit"
                  style={labelStyle}
                  className="relative py-2 text-[#111] uppercase tracking-[0.3em] font-bold text-[13px] group inline-block"
                >
                  <span className="relative z-10 transition-opacity hover:opacity-80">SUBMIT ENQUIRY</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Professional Enquiries Section */}
      <section className="relative w-full flex flex-col lg:flex-row items-stretch">
        <style>{`
          .enquiries-title {
            font-size: 32px;
            line-height: 35.2px;
          }
          @media (min-width: 768px) {
            .enquiries-title {
              font-size: 48px;
              line-height: 37.2px;
            }
          }
        `}</style>
        {/* Left: General Enquiries */}
        <div className="w-full lg:w-1/2 bg-[#d4cdc5] py-16 lg:py-24 px-6 md:px-12 flex flex-col items-center text-center text-[#111] lg:min-h-[800px] gap-12 lg:gap-0 lg:justify-between">
          <h2 className="enquiries-title uppercase tracking-tight" style={{ fontFamily: textStyle.fontFamily, fontWeight: textStyle.fontWeight, color: textStyle.color }}>
            GENERAL <br /> <span className="italic">ENQUIRIES</span>
          </h2>

          <div className="space-y-12 lg:-translate-y-24">
            <div className="space-y-2">
              <p style={{ ...labelStyle, ...elicyonStyle }} className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">London Studio</p>
              <a href="mailto:info@malmarstudio.com" style={{ ...subtextStyle, ...elicyonStyle }} className="text-[16px] block hover:opacity-70 transition-opacity">info@malmarstudio.com</a>
              <p style={{ ...subtextStyle, ...elicyonStyle }} className="text-[14px]">+44 (0) 203 772 0011</p>
            </div>


            <div className="space-y-2">
              <p style={{ ...labelStyle, ...elicyonStyle }} className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Paris Studio</p>
              <a href="mailto:info@malmarstudio.com" style={{ ...subtextStyle, ...elicyonStyle }} className="text-[16px] block hover:opacity-70 transition-opacity">info@malmarstudio.com</a>
              <p style={{ ...subtextStyle, ...elicyonStyle }} className="text-[14px]">+336 5222 7780</p>
            </div>


            <div className="space-y-4 pt-4">
              <p style={{ ...labelStyle, ...elicyonStyle }} className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Careers</p>
              <Link href="/careers" className="relative group inline-block py-1">
                <span style={{ ...subtextStyle, ...elicyonStyle }} className="text-[16px]">View open positions</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111] transition-transform duration-500 ease-in-out origin-left group-hover:origin-right scale-x-100 group-hover:scale-x-0"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Press Enquiries */}
        <div className="w-full lg:w-1/2 bg-[#d4cdc5] py-16 lg:py-24 px-6 md:px-12 flex flex-col items-center text-center text-[#111] lg:min-h-[800px] gap-12 lg:gap-0 lg:justify-between">
          <h2 className="enquiries-title uppercase tracking-tight" style={{ fontFamily: textStyle.fontFamily, fontWeight: textStyle.fontWeight, color: textStyle.color }}>
            PRESS <br /> <span className="italic">ENQUIRIES</span>
          </h2>

          <div className="space-y-12 flex flex-col items-center">
            <div className="space-y-2">
              <p style={{ ...labelStyle, ...elicyonStyle }} className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60">Press</p>
              <a href="mailto:marketing@malmarstudio.com" style={{ ...subtextStyle, ...elicyonStyle }} className="text-[14px] block hover:opacity-70 transition-opacity">marketing@malmarstudio.com</a>
            </div>

            <div className="w-full max-w-[280px] sm:max-w-[400px] aspect-[1/1.2] overflow-hidden shadow-2xl bg-stone-100">
              <img
                src="/elylast.png"
                alt="Forbes Malmar Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
};

export default ContactPage;
