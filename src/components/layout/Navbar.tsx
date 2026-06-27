"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Download", href: "/download" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
];

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px 20px 0",
    }}>

      {/* Floating Pill — Desktop */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "820px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 10px",
          borderRadius: "9999px",
          background: scrolled ? "rgba(4, 10, 20, 0.97)" : "rgba(8, 18, 35, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)"
            : "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          paddingLeft: "4px",
        }}>
          <div style={{
            width: "34px",
            height: "34px",
            background: "#059669",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 14px rgba(5,150,105,0.6)",
            flexShrink: 0,
          }}>
            <Zap size={16} fill="white" color="white" strokeWidth={0} />
          </div>
          <span style={{
            color: "white",
            fontWeight: 600,
            fontSize: "16px",
            letterSpacing: "-0.3px",
          }}>
            Chabok
          </span>
        </Link>

        {/* Nav Links — Desktop only */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
        }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                padding: "7px 14px",
                fontSize: "13.5px",
                color: hoveredLink === link.label ? "white" : "rgba(148,163,184,1)",
                background: hoveredLink === link.label ? "rgba(255,255,255,0.08)" : "transparent",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "all 0.18s ease",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          paddingRight: "4px",
        }}>
          {/* GitHub */}
          <Link
            href="https://github.com/Amanullah23/chabok"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 12px",
              fontSize: "13px",
              color: "rgba(148,163,184,1)",
              textDecoration: "none",
              borderRadius: "9999px",
              transition: "all 0.18s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "white";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,1)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            <GitHubIcon size={15} />
            <span className="hidden-mobile">GitHub</span>
          </Link>

          {/* Download pill button */}
          <Link
            href="/download"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              fontSize: "13.5px",
              fontWeight: 600,
              color: "white",
              background: "#059669",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 0 14px rgba(5,150,105,0.4)",
              transition: "all 0.18s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#047857";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px rgba(5,150,105,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#059669";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(5,150,105,0.4)";
            }}
          >
            <Zap size={13} fill="white" color="white" strokeWidth={0} />
            Download
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              width: "36px",
              height: "36px",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              color: "rgba(148,163,184,1)",
              cursor: "pointer",
              transition: "all 0.18s ease",
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              marginTop: "10px",
              width: "100%",
              background: "rgba(8,18,35,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 24px",
                  fontSize: "15px",
                  color: "rgba(203,213,225,1)",
                  textDecoration: "none",
                  textAlign: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(203,213,225,1)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ padding: "12px 16px" }}>
              <Link
                href="https://github.com/Amanullah23/chabok"
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px",
                  fontSize: "13px",
                  color: "rgba(148,163,184,1)",
                  textDecoration: "none",
                  borderRadius: "14px",
                  transition: "all 0.15s ease",
                }}
              >
                <GitHubIcon size={15} />
                GitHub
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive style override */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}