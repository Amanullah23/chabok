"use client";

import { motion } from "framer-motion";
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

const ArrowIcon = ({ color = "#059669" }: { color?: string }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const posts = [
  {
    tag: "RELEASE",
    tagAccent: true,
    date: "Jun 15, 2026",
    title: "Chabok v1.0.0 — We're live on Android!",
    excerpt:
      "After months of development, Chabok is finally available for Android. Send files at lightning speed with no cloud, no internet, and no limits.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8">
        <path d="M13 2L4.09 12.97 9 13l-1 9L19 11h-5l-1-9z" />
      </svg>
    ),
    accent: true,
    slug: "chabok-v1-launch",
  },
  {
    tag: "BEHIND THE SCENES",
    tagAccent: false,
    date: "May 28, 2026",
    title: "How we built local device discovery with mDNS",
    excerpt:
      "A deep dive into how Chabok finds nearby devices instantly using Multicast DNS — no pairing, no setup, just open and go.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85" />
      </svg>
    ),
    accent: false,
    slug: "mdns-device-discovery",
  },
  {
    tag: "ENGINEERING",
    tagAccent: false,
    date: "May 10, 2026",
    title: "Why we chose Flutter for Chabok",
    excerpt:
      "One codebase, three platforms. Here is why Flutter was the obvious choice for building Chabok and how we made it work.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: false,
    slug: "why-flutter",
  },
  {
    tag: "ROADMAP",
    tagAccent: false,
    date: "Apr 22, 2026",
    title: "What's coming next — Windows & iOS",
    excerpt:
      "A look at our roadmap for Windows (Q3 2026) and iOS (Q4 2026) and what features we are planning for each platform.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    accent: false,
    slug: "roadmap-windows-ios",
  },
];

export default function BlogPage() {
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
          background: "radial-gradient(ellipse, rgba(5,150,105,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }} />

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

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
                BLOG
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
              Updates &{" "}
              <span style={{ color: "#059669" }}>Stories</span>
            </motion.h1>

            <motion.p
              {...fadeUp(2)}
              style={{
                fontSize: "16px",
                color: "rgba(148,163,184,1)",
                margin: "0 auto",
                maxWidth: "400px",
                lineHeight: 1.7,
              }}
            >
              Product updates, release notes, and behind the scenes of building Chabok.
            </motion.p>
          </div>

          {/* Blog posts */}
          <div style={{ display: "grid", gap: "16px" }}>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                {...fadeUp(i + 3)}
                style={{
                  background: post.accent ? "rgba(5,150,105,0.05)" : "rgba(255,255,255,0.02)",
                  border: post.accent ? "1px solid rgba(5,150,105,0.2)" : "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "20px",
                  padding: "28px",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "20px",
                  alignItems: "start",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = post.accent
                    ? "rgba(5,150,105,0.4)"
                    : "rgba(255,255,255,0.14)";
                  el.style.background = post.accent
                    ? "rgba(5,150,105,0.09)"
                    : "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = post.accent
                    ? "rgba(5,150,105,0.2)"
                    : "rgba(255,255,255,0.07)";
                  el.style.background = post.accent
                    ? "rgba(5,150,105,0.05)"
                    : "rgba(255,255,255,0.02)";
                }}
              >
                {/* Left content */}
                <div>
                  {/* Tag + date */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
                    <div style={{
                      background: post.tagAccent ? "rgba(5,150,105,0.15)" : "rgba(255,255,255,0.06)",
                      border: post.tagAccent ? "1px solid rgba(5,150,105,0.3)" : "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "9999px",
                      padding: "3px 10px",
                      fontSize: "11px",
                      color: post.tagAccent ? "#34D399" : "rgba(148,163,184,1)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}>
                      {post.tag}
                    </div>
                    <span style={{ fontSize: "12px", color: "rgba(71,85,105,1)" }}>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "white",
                    margin: "0 0 10px",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    fontSize: "13.5px",
                    color: "rgba(148,163,184,1)",
                    lineHeight: 1.7,
                    margin: "0 0 18px",
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    color: post.accent ? "#059669" : "rgba(100,116,139,1)",
                    fontWeight: 500,
                  }}>
                    Read more
                    <ArrowIcon color={post.accent ? "#059669" : "rgba(100,116,139,1)"} />
                  </div>
                </div>

                {/* Right icon */}
                <div style={{
                  width: "80px",
                  height: "80px",
                  background: post.accent ? "rgba(5,150,105,0.12)" : "rgba(255,255,255,0.04)",
                  border: post.accent ? "1px solid rgba(5,150,105,0.2)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {post.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            {...fadeUp(posts.length + 3)}
            style={{
              textAlign: "center",
              marginTop: "40px",
              padding: "24px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(71,85,105,1)", margin: 0 }}>
              Follow us on{" "}
              <a
                href="https://github.com/Amanullah23/chabok"
                target="_blank"
                style={{ color: "#34D399", textDecoration: "none", fontWeight: 500 }}
              >
                GitHub
              </a>
              {" "}for the latest updates and release notes.
            </p>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}