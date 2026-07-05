"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    consent: false
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.consent) {
      alert("Please fill all fields and consent to the privacy policy.");
      return;
    }
    
    setStatus("submitting");
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/Info@malmarstudio.com", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: '', lastName: '', email: '', consent: false });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const letters = "MALMAR".split("");

  const antiqueStyle = {
    fontFamily: "'Elicyon', serif",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    lineHeight: "1.6",
    color: "rgb(0, 0, 0)"
  };

  const navLinks = [
    { name: "PROJECTS", path: "/projects" },
    { name: "SERVICES", path: "/services" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <footer className="relative bg-[#fdf0d5] text-[#1a1a1a] pt-20 md:pt-32 pb-16 md:pb-24 px-6 md:px-16 overflow-hidden flex flex-col">

      <div className="max-w-[1400px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT: NEWSLETTER FORM */}
          <div className="flex flex-col">

            <style>{`
              .footer-mobile-title {
                font-size: 5.5vw;
                line-height: 1;
              }

              @media (min-width: 400px) {
                .footer-mobile-title {
                  font-size: 20px;
                  line-height: 1;
                }
              }

              @media (min-width: 768px) {
                .footer-mobile-title {
                  font-size: 24px;
                  line-height: 0.9;
                }
              }
            `}</style>

            <h2
              className="mb-6 uppercase footer-mobile-title"
              style={{
                fontFamily: "'SageNav', sans-serif",
                fontWeight: 400,
                color: "rgb(0, 0, 0)"
              }}
            >

              {/* DESKTOP */}
              <div className="hidden md:block">
                <div>
                  JOIN{" "}
                  <span
                    className="italic lowercase"
                    style={{ textTransform: "none" }}
                  >
                    the
                  </span>
                </div>

                <div>WORLD</div>

                <div>
                  <span
                    className="italic lowercase mr-2"
                    style={{ textTransform: "none" }}
                  >
                    of
                  </span>{" "}
                  MALMAR
                </div>
              </div>

              {/* MOBILE */}
              <div
                className="block md:hidden"
                style={{ lineHeight: "1.2" }}
              >
                <div className="whitespace-nowrap">
                  JOIN{" "}
                  <span
                    className="italic lowercase mx-1"
                    style={{ textTransform: "none" }}
                  >
                    the
                  </span>{" "}
                  WORLD
                </div>

                <div className="whitespace-nowrap">
                  <span
                    className="italic lowercase mr-2"
                    style={{ textTransform: "none" }}
                  >
                    of
                  </span>{" "}
                  MALMAR
                </div>
              </div>
            </h2>

            <p
              className="text-[9px] md:text-[17px] leading-relaxed mb-5 max-w-sm"
              style={{
                fontFamily: "'Elicyon', serif",
                fontWeight: 400,
                color: "rgb(0, 0, 0)"
              }}
            >
              Subscribe to join our community and stay up to date with the studio.
            </p>

            <form className="space-y-5 w-full max-w-md" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Newsletter Subscription" />

              <div className="flex flex-row gap-3 md:gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME *"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{
                    ...antiqueStyle,
                    fontSize: "8.5px"
                  }}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME *"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{
                    ...antiqueStyle,
                    fontSize: "8.5px"
                  }}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="EMAIL *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-b border-black/30 w-full py-1 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                style={{
                  ...antiqueStyle,
                  fontSize: "8.5px"
                }}
              />

              <label className="flex items-start gap-3 cursor-pointer mt-3">

                <div className="relative flex items-center justify-center w-3 h-3 mt-1 shrink-0">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="peer appearance-none w-full h-full border border-black/40 rounded-none checked:bg-black cursor-pointer m-0 transition-colors"
                  />
                  <svg className="absolute inset-0 w-full h-full text-white opacity-0 peer-checked:opacity-100 pointer-events-none p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                <p
                  className="text-[8px] md:text-[14px] leading-relaxed opacity-70"
                  style={{
                    fontFamily: "'Elicyon', serif",
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)"
                  }}
                >
                  I consent to my information being collected in accordance with the Malmar privacy policy
                </p>

              </label>

              <div className="flex flex-col items-start">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="border-b border-black pb-0.5 hover:opacity-50 transition-opacity mt-1.5 text-[9px] md:text-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    ...antiqueStyle,
                    fontWeight: 600
                  }}
                >
                  {status === "submitting" ? "SUBMITTING..." : "SUBMIT FORM"}
                </button>
                {/* Success popup is displayed globally inside AnimatePresence */}
                {status === "error" && (
                  <p className="mt-2 text-red-600 text-[10px] md:text-xs">Oops! Something went wrong.</p>
                )}
              </div>

            </form>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 gap-4 md:gap-10 pt-1 lg:pt-0">

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className="cursor-pointer hover:opacity-50 transition-opacity text-[9px] md:text-[11px]"
                  style={antiqueStyle}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-2">
              {["INSTAGRAM", "PINTEREST"].map((link) => (
                <span
                  key={link}
                  className="cursor-pointer hover:opacity-50 transition-opacity text-[9px] md:text-[11px]"
                  style={antiqueStyle}
                >
                  {link}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>



      {/* DESKTOP LEGAL */}
      <div className="hidden md:block w-full py-2 z-10 bg-[#fdf0d5] mt-20">
        <div
          className="max-w-[1400px] mx-auto flex flex-row justify-between items-center gap-4 text-[9px] opacity-60"
          style={antiqueStyle}
        >

          <div className="flex gap-4 hover:opacity-100 transition-opacity">
            <Link href="/privacy" className="cursor-pointer font-bold">
              Privacy Policy
            </Link>

            <Link href="/terms" className="cursor-pointer font-bold">
              Terms & Conditions
            </Link>
          </div>

          <div className="text-right">
            <span>REGISTERED TRADE MARK OF MALMAR STUDIO © 2026</span>
          </div>

        </div>
      </div>

      {/* MOBILE BOTTOM LAYER */}
      <div className="relative flex flex-col md:hidden w-full mt-10 pb-6 z-10">

        {/* MOBILE LEGAL TEXT */}
        <div
          className="w-full flex flex-col text-[7.5px] uppercase opacity-70 tracking-widest font-medium pr-[95px]"
          style={antiqueStyle}
        >

          <div className="flex justify-start gap-[10%] w-full mb-2">
            <Link href="/terms" className="cursor-pointer">
              TERMS OF SERVICE
            </Link>

            <Link href="/privacy" className="cursor-pointer">
              PRIVACY POLICY
            </Link>
          </div>

          <div className="text-left w-full">
            <span>REGISTERED TRADE MARK OF MALMAR 2026</span>
          </div>

        </div>

        {/* MOBILE LOGO REMOVED */}

      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#fdf0d5] text-[#1a1a1a] p-8 md:p-12 max-w-sm mx-4 text-center border border-black/10 shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setStatus("")}
                className="absolute top-4 right-4 text-[9px] tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "'Elicyon', serif" }}
              >
                [CLOSE]
              </button>

              <h3 
                className="text-[16px] md:text-[20px] mb-4 tracking-[0.2em] font-light text-black"
                style={{ fontFamily: "'SageNav', sans-serif" }}
              >
                THANK YOU
              </h3>
              
              <div 
                className="w-12 h-[1px] bg-black/20 mx-auto mb-6"
              />

              <p 
                className="text-[10px] md:text-[12px] leading-relaxed tracking-[0.1em] text-black"
                style={{ fontFamily: "'Elicyon', serif" }}
              >
                YOUR MESSAGE HAS BEEN DELIVERED.<br />
                WE APPRECIATE YOU CONNECTING WITH US.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}