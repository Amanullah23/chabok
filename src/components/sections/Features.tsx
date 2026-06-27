"use client";

import { motion } from "framer-motion";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  },
});

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M13 2L4.09 12.97 9 13l-1 9L19 11h-5l-1-9z" />
      </svg>
    ),
    title: "Lightning fast",
    description: "Transfer at full local network speed. No upload or download delays.",
    accent: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
      </svg>
    ),
    title: "No internet needed",
    description: "Works entirely on your local WiFi or hotspot. Zero cloud involvement.",
    accent: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Secure & private",
    description: "Files never leave your network. End-to-end encrypted with TLS.",
    accent: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <rect x="2" y="7" width="6" height="10" rx="1" opacity="0.5" />
        <rect x="16" y="7" width="6" height="10" rx="1" opacity="0.5" />
      </svg>
    ),
    title: "Cross-platform",
    description: "Send between Android, Windows, and iOS seamlessly.",
    accent: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    title: "Any file type",
    description: "Photos, videos, documents, APKs — send anything without restrictions.",
    accent: false,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    title: "Open source",
    description: "Fully open source and free forever. Community driven development.",
    accent: true,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(5,150,105,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <motion.div
            {...fadeUp(0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(5,150,105,0.1)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "9999px",
              padding: "5px 14px",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "12px", color: "#34D399", fontWeight: 500, letterSpacing: "0.5px" }}>
              WHY CHABOK
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
            Everything you need.{" "}
            <span style={{ color: "#059669" }}>Nothing you don't.</span>
          </motion.h2>

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
            Built for speed, privacy, and simplicity. No accounts, no subscriptions, no cloud.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp(i + 3)}
              style={{
                background: feature.accent ? "rgba(5,150,105,0.06)" : "rgba(255,255,255,0.03)",
                border: feature.accent
                  ? "1px solid rgba(5,150,105,0.22)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "24px",
                cursor: "default",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = feature.accent
                  ? "rgba(5,150,105,0.1)"
                  : "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(5,150,105,0.35)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = feature.accent
                  ? "rgba(5,150,105,0.06)"
                  : "rgba(255,255,255,0.03)";
                el.style.borderColor = feature.accent
                  ? "rgba(5,150,105,0.22)"
                  : "rgba(255,255,255,0.07)";
              }}
            >
              {/* Icon */}
              <div style={{
                width: "44px",
                height: "44px",
                background: "rgba(5,150,105,0.12)",
                border: "1px solid rgba(5,150,105,0.2)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "15px",
                fontWeight: 600,
                color: feature.accent ? "#34D399" : "white",
                margin: "0 0 8px",
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "13.5px",
                color: "rgba(148,163,184,1)",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}