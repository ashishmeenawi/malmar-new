"use client";

import { useEffect } from "react";

export default function SecurityProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Disable common developer tools keyboard shortcuts
    const handleKeyDown = (e) => {
      // F12 key
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I / Cmd+Opt+I (Inspect)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "i" || e.keyCode === 73)) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C / Cmd+Opt+C (Inspect Element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "C" || e.key === "c" || e.keyCode === 67)) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J / Cmd+Opt+J (Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "J" || e.key === "j" || e.keyCode === 74)) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U / Cmd+Opt+U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === "U" || e.key === "u" || e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }

      // Ctrl+S / Cmd+S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === "S" || e.key === "s" || e.keyCode === 83)) {
        e.preventDefault();
        return false;
      }

      // PrintScreen key behavior
      if (e.key === "PrintScreen" || e.keyCode === 44) {
        navigator.clipboard.writeText("");
        e.preventDefault();
        return false;
      }
    };

    // 3. Prevent screen recording / screenshot tools from capturing by blurring content on blur
    const handleBlur = () => {
      document.body.style.filter = "blur(50px) grayscale(1) brightness(0)";
    };

    const handleFocus = () => {
      document.body.style.filter = "none";
    };

    // 4. Try to clear clipboard if copying is attempted
    const handleCopy = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return null;
}
