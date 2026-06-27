"use client";

import { motion } from "framer-motion";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  },
});

const steps = [
  {
    number: "1",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "Connect to WiFi",
    description: "Make sure both devices are on the same WiFi network or hotspot.",
    accent: false,
  },
  {
    number: "2",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Discover devices",
    description: "Chabok automatically finds nearby devices. No pairing or setup needed.",
    accent: false,
  },
  {
    number: "3",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
        <path d="M13 2L4.09 12.97 9 13l-1 9L19 11h-5l-1-9z" />
      </svg>
    ),
    title: "Send instantly",
    description: "Pick your files, tap send. The receiver gets a prompt to accept.",
    accent: true,
  },
];

const stats = [
  { value: "0ms", label: "Cloud delay" },
  { value: "100%", label: "Private" },
  { value: "∞", label: "File size" },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "400px",
        background: "radial-gradient(ellipse, rgba(5,150,105,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
              HOW IT WORKS
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
            Three steps.{" "}
            <span style={{ color: "#059669" }}>That's all it takes.</span>
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
            No setup. No accounts. Just open, discover, and send.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "32px",
          position: "relative",
          marginBottom: "56px",
        }}>
          {/* Connecting line — desktop only */}
          <div style={{
            position: "absolute",
            top: "32px",
            left: "calc(16.6% + 20px)",
            right: "calc(16.6% + 20px)",
            height: "1px",
            background: "linear-gradient(90deg, rgba(5,150,105,0.6), rgba(5,150,105,0.15), rgba(5,150,105,0.6))",
            pointerEvents: "none",
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              {...fadeUp(i + 3)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "0 12px",
              }}
            >
              {/* Circle icon */}
              <div style={{
                width: "64px",
                height: "64px",
                background: step.accent ? "rgba(5,150,105,0.15)" : "rgba(5,150,105,0.1)",
                border: step.accent ? "1px solid rgba(5,150,105,0.4)" : "1px solid rgba(5,150,105,0.25)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                position: "relative",
                zIndex: 1,
                boxShadow: step.accent ? "0 0 24px rgba(5,150,105,0.25)" : "none",
              }}>
                {step.icon}

                {/* Step number badge */}
                <div style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  width: "22px",
                  height: "22px",
                  background: "#059669",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 8px rgba(5,150,105,0.5)",
                }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "white" }}>
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 style={{
                fontSize: "16px",
                fontWeight: 600,
                color: step.accent ? "#34D399" : "white",
                margin: "0 0 10px",
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: "13.5px",
                color: "rgba(148,163,184,1)",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats card */}
        <motion.div
          {...fadeUp(6)}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {/* Speed bar */}
          <div style={{ flex: 1, minWidth: "180px" }}>
            <div style={{
              fontSize: "13px",
              color: "rgba(148,163,184,1)",
              marginBottom: "10px",
            }}>
              Transfer speed
            </div>
            <div style={{
              height: "6px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "9999px",
              overflow: "hidden",
            }}>
              <div style={{
                width: "92%",
                height: "100%",
                background: "linear-gradient(90deg, #059669, #34D399)",
                borderRadius: "9999px",
              }} />
            </div>
            <div style={{
              fontSize: "11px",
              color: "rgba(100,116,139,1)",
              marginTop: "6px",
            }}>
              Up to 2.3 GB/s on local network
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: "1px",
            height: "48px",
            background: "rgba(255,255,255,0.08)",
            flexShrink: 0,
          }} />

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
          }}>
            {stats.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#059669",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "rgba(148,163,184,1)",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}