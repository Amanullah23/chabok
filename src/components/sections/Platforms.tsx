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

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const BellIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8h1a4 4 0 010 8h-1" />
    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const IOSIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
    <rect x="7" y="1" width="10" height="22" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const platforms = [
  {
    icon: <AndroidIcon />,
    name: "Android",
    version: "Version 1.0.0 · 18 MB",
    status: "available",
    statusLabel: "Available now",
    action: "Download APK",
    href: "/download",
  },
  {
    icon: <WindowsIcon />,
    name: "Windows",
    version: "Coming soon",
    status: "dev",
    statusLabel: "In development",
    action: "Notify me",
    href: "#notify",
  },
  {
    icon: <IOSIcon />,
    name: "iOS",
    version: "Coming soon",
    status: "dev",
    statusLabel: "In development",
    action: "Notify me",
    href: "#notify",
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(5,150,105,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <motion.div
            {...fadeUp(0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(5,150,105,0.1)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "9999px",
              padding: "5px 14px",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#34D399", fontWeight: 500, letterSpacing: "0.5px" }}>
              PLATFORMS
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(1)}
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-1px",
              margin: "0 0 14px",
              lineHeight: 1.2,
            }}
          >
            Your device.{" "}
            <span style={{ color: "#059669" }}>Our priority.</span>
          </motion.h2>

          <motion.p
            {...fadeUp(2)}
            style={{
              fontSize: "16px",
              color: "rgba(148,163,184,1)",
              margin: "0 auto",
              maxWidth: "380px",
              lineHeight: 1.7,
            }}
          >
            Available on the platforms you use every day. More coming soon.
          </motion.p>
        </div>

        {/* Platform cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "16px",
        }}>
          {platforms.map((platform, i) => {
            const isAvailable = platform.status === "available";
            return (
              <motion.div
                key={platform.name}
                {...fadeUp(i + 3)}
                style={{
                  background: isAvailable ? "rgba(5,150,105,0.06)" : "rgba(255,255,255,0.03)",
                  border: isAvailable ? "1px solid rgba(5,150,105,0.25)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  opacity: isAvailable ? 1 : 0.75,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "1";
                  el.style.borderColor = isAvailable
                    ? "rgba(5,150,105,0.4)"
                    : "rgba(255,255,255,0.14)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = isAvailable ? "1" : "0.75";
                  el.style.borderColor = isAvailable
                    ? "rgba(5,150,105,0.25)"
                    : "rgba(255,255,255,0.07)";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: isAvailable ? "rgba(5,150,105,0.15)" : "rgba(255,255,255,0.05)",
                  border: isAvailable ? "1px solid rgba(5,150,105,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {platform.icon}
                </div>

                {/* Name + version */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "17px", fontWeight: 600, color: "white", marginBottom: "6px" }}>
                    {platform.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(148,163,184,1)" }}>
                    {platform.version}
                  </div>
                </div>

                {/* Status badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: isAvailable ? "rgba(5,150,105,0.15)" : "rgba(255,255,255,0.05)",
                  border: isAvailable ? "1px solid rgba(5,150,105,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                }}>
                  <div style={{
                    width: "6px",
                    height: "6px",
                    background: isAvailable ? "#059669" : "rgba(148,163,184,1)",
                    borderRadius: "50%",
                    boxShadow: isAvailable ? "0 0 6px rgba(5,150,105,0.8)" : "none",
                  }} />
                  <span style={{
                    fontSize: "12px",
                    color: isAvailable ? "#34D399" : "rgba(148,163,184,1)",
                    fontWeight: 500,
                  }}>
                    {platform.statusLabel}
                  </span>
                </div>

                {/* Action button */}
                <Link
                  href={platform.href}
                  style={{
                    width: "100%",
                    background: isAvailable ? "#059669" : "rgba(255,255,255,0.06)",
                    border: isAvailable ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: isAvailable ? "white" : "rgba(148,163,184,1)",
                    fontSize: "14px",
                    fontWeight: isAvailable ? 600 : 500,
                    padding: "12px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                    boxShadow: isAvailable ? "0 0 16px rgba(5,150,105,0.35)" : "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (isAvailable) {
                      el.style.background = "#047857";
                      el.style.boxShadow = "0 0 24px rgba(5,150,105,0.5)";
                    } else {
                      el.style.background = "rgba(255,255,255,0.1)";
                      el.style.color = "white";
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (isAvailable) {
                      el.style.background = "#059669";
                      el.style.boxShadow = "0 0 16px rgba(5,150,105,0.35)";
                    } else {
                      el.style.background = "rgba(255,255,255,0.06)";
                      el.style.color = "rgba(148,163,184,1)";
                    }
                  }}
                >
                  {isAvailable ? <DownloadIcon /> : <BellIcon />}
                  {platform.action}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}