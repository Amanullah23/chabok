"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  },
});

const ZapIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M13 2L4.09 12.97 9 13l-1 9L19 11h-5l-1-9z" />
  </svg>
);

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const IOSIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
    <rect x="7" y="1" width="10" height="22" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const badges = [
  { icon: <AndroidIcon />, label: "Android" },
  { icon: <WindowsIcon />, label: "Windows" },
  { icon: <IOSIcon />, label: "iOS" },
  { icon: <CheckIcon />, label: "No cloud required" },
  { icon: <ShieldIcon />, label: "End-to-end encrypted" },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "700px",
        height: "500px",
        background: "radial-gradient(ellipse, rgba(5,150,105,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto" }}>

        {/* Badge */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate="show"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(5,150,105,0.12)",
            border: "1px solid rgba(5,150,105,0.3)",
            borderRadius: "9999px",
            padding: "6px 16px",
            marginBottom: "28px",
          }}
        >
          <div style={{
            width: "7px", height: "7px",
            background: "#059669",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(5,150,105,0.8)",
          }} />
          <span style={{ fontSize: "13px", color: "#34D399", fontWeight: 500 }}>
            Free & Open Source
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(1)} initial="hidden" animate="show"
          style={{
            fontSize: "clamp(38px, 6vw, 60px)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.13,
            letterSpacing: "-1.5px",
            margin: "0 0 20px",
          }}
        >
          Share files at{" "}
          <span style={{ color: "#059669" }}>lightning speed</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp(1)} initial="hidden" animate="show"
          style={{
            fontSize: "18px",
            color: "rgba(148,163,184,1)",
            lineHeight: 1.7,
            margin: "0 auto 40px",
            maxWidth: "480px",
          }}
        >
          No cloud. No internet. No limits.{" "}
          Send anything to any device on your local network — instantly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp(3)} initial="hidden" animate="show"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/download"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#059669",
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 28px",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 0 24px rgba(5,150,105,0.45)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#047857";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(5,150,105,0.65)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#059669";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(5,150,105,0.45)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <ZapIcon size={15} />
            Download for Android
          </Link>

          <Link
            href="https://github.com/Amanullah23/chabok"
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 28px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <GitHubIcon size={15} />
            View on GitHub
          </Link>
        </motion.div>

        {/* Platform + trust badges */}
        <motion.div
          variants={fadeUp(4)} initial="hidden" animate="show"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "64px",
          }}
        >
          {badges.map((b) => (
            <div
              key={b.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "9999px",
                padding: "6px 14px",
              }}
            >
              {b.icon}
              <span style={{ fontSize: "12px", color: "rgba(203,213,225,1)" }}>{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Transfer card */}
        <motion.div
          variants={fadeUp(5)} initial="hidden" animate="show"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "28px 32px",
            maxWidth: "520px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Device 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "48px", height: "48px",
              background: "rgba(5,150,105,0.12)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <AndroidIcon />
            </div>
            <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Android</span>
          </div>

          {/* Transfer line */}
          <div style={{ flex: 1, position: "relative", height: "2px", minWidth: "60px" }}>
            <div style={{
              width: "100%", height: "2px",
              background: "linear-gradient(90deg, rgba(5,150,105,0.7), rgba(5,150,105,0.2))",
              borderRadius: "2px",
            }} />
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#059669",
              borderRadius: "9999px",
              padding: "3px 10px",
              whiteSpace: "nowrap",
            }}>
              <span style={{ fontSize: "10px", color: "white", fontWeight: 700 }}>2.3 GB/s</span>
            </div>
          </div>

          {/* Device 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "48px", height: "48px",
              background: "rgba(5,150,105,0.12)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "14px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <WindowsIcon />
            </div>
            <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Windows</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}