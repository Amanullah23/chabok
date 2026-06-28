"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

const AndroidIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const IOSIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
    <rect x="7" y="1" width="10" height="22" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.5" strokeLinecap="round" strokeWidth="2.5" />
  </svg>
);

const platforms = [
  {
    icon: <AndroidIcon />,
    name: "Android",
    minVersion: "Android 8.0+",
    available: true,
    version: "1.0.0",
    size: "18 MB",
    updated: "Jun 2026",
    eta: null,
    action: "Download APK",
    href: "#",
  },
{
  icon: <WindowsIcon />,
  name: "Windows",
  minVersion: "Windows 10+",
  available: true,
  version: "1.0.0",
  size: "25 MB",
  updated: "Jun 2026",
  eta: null,
  action: "Download",
  href: "/chabok-v1.0.0-windows.zip",
},
  {
    icon: <IOSIcon />,
    name: "iOS",
    minVersion: "iOS 14+",
    available: false,
    version: null,
    size: null,
    updated: null,
    eta: "Q4 2026",
    action: "Notify me",
    href: "#notify",
  },
];

const versionHistory = [
  { version: "v1.0.0", description: "Initial release — Android", date: "Jun 2026" },
];

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>

        {/* Background glow */}
        <div style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(5,150,105,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* Header */}
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
                DOWNLOAD
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(1)}
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-1px",
                margin: "0 0 14px",
                lineHeight: 1.15,
              }}
            >
              Get Chabok{" "}
              <span style={{ color: "#059669" }}>for free</span>
            </motion.h1>

            <motion.p
              {...fadeUp(2)}
              style={{
                fontSize: "16px",
                color: "rgba(148,163,184,1)",
                margin: "0 auto",
                maxWidth: "420px",
                lineHeight: 1.7,
              }}
            >
              Available on Android now. Windows and iOS coming soon.
              Always free, always open source.
            </motion.p>
          </div>

          {/* Platform cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "16px",
            marginBottom: "40px",
          }}>
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp(i + 3)}
                style={{
                  background: p.available ? "rgba(5,150,105,0.06)" : "rgba(255,255,255,0.02)",
                  border: p.available ? "2px solid rgba(5,150,105,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "28px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                  opacity: p.available ? 1 : 0.65,
                  position: "relative",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "1";
                  el.style.borderColor = p.available ? "rgba(5,150,105,0.5)" : "rgba(255,255,255,0.14)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = p.available ? "1" : "0.65";
                  el.style.borderColor = p.available ? "rgba(5,150,105,0.3)" : "rgba(255,255,255,0.07)";
                }}
              >
                {/* Available now badge */}
                {p.available && (
                  <div style={{
                    position: "absolute",
                    top: "-13px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#059669",
                    borderRadius: "9999px",
                    padding: "3px 14px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 0 12px rgba(5,150,105,0.5)",
                  }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "white" }}>
                      AVAILABLE NOW
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: "52px",
                  height: "52px",
                  background: p.available ? "rgba(5,150,105,0.15)" : "rgba(255,255,255,0.05)",
                  border: p.available ? "1px solid rgba(5,150,105,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {p.icon}
                </div>

                {/* Name */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "white", marginBottom: "4px" }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(148,163,184,1)" }}>
                    {p.minVersion}
                  </div>
                </div>

                {/* Info box */}
                <div style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}>
                  {p.available ? (
                    <>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Version</span>
                        <span style={{ fontSize: "11px", color: "white", fontWeight: 500 }}>{p.version}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Size</span>
                        <span style={{ fontSize: "11px", color: "white", fontWeight: 500 }}>{p.size}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Updated</span>
                        <span style={{ fontSize: "11px", color: "white", fontWeight: 500 }}>{p.updated}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>Status</span>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>In development</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>ETA</span>
                        <span style={{ fontSize: "11px", color: "rgba(148,163,184,1)" }}>{p.eta}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Action button */}
                <Link
                  href={p.href}
                  style={{
                    width: "100%",
                    background: p.available ? "#059669" : "rgba(255,255,255,0.05)",
                    border: p.available ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: p.available ? "white" : "rgba(148,163,184,1)",
                    fontSize: "14px",
                    fontWeight: p.available ? 600 : 500,
                    padding: "13px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                    boxShadow: p.available ? "0 0 18px rgba(5,150,105,0.4)" : "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (p.available) {
                      el.style.background = "#047857";
                      el.style.boxShadow = "0 0 28px rgba(5,150,105,0.6)";
                    } else {
                      el.style.background = "rgba(255,255,255,0.09)";
                      el.style.color = "white";
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (p.available) {
                      el.style.background = "#059669";
                      el.style.boxShadow = "0 0 18px rgba(5,150,105,0.4)";
                    } else {
                      el.style.background = "rgba(255,255,255,0.05)";
                      el.style.color = "rgba(148,163,184,1)";
                    }
                  }}
                >
                  {p.available && <DownloadIcon />}
                  {p.action}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Version history */}
          <motion.div
            {...fadeUp(6)}
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "24px 28px",
            }}
          >
            <div style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "white",
              marginBottom: "16px",
            }}>
              Version history
            </div>

            {versionHistory.map((v, i) => (
              <div
                key={v.version}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 0",
                  borderBottom: i < versionHistory.length - 1
                    ? "1px solid rgba(255,255,255,0.05)"
                    : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    background: "rgba(5,150,105,0.15)",
                    border: "1px solid rgba(5,150,105,0.3)",
                    borderRadius: "6px",
                    padding: "3px 10px",
                    fontSize: "12px",
                    color: "#34D399",
                    fontWeight: 600,
                  }}>
                    {v.version}
                  </div>
                  <span style={{ fontSize: "13px", color: "rgba(148,163,184,1)" }}>
                    {v.description}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(71,85,105,1)" }}>
                  {v.date}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}