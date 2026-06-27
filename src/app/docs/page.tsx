"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  },
});

const sidebarSections = [
  {
    title: "GETTING STARTED",
    items: ["Introduction", "Installation", "Quick Start"],
  },
  {
    title: "HOW IT WORKS",
    items: ["Device Discovery", "File Transfer", "Security & TLS"],
  },
  {
    title: "FAQ",
    items: ["Troubleshooting", "FAQ"],
  },
];

const content: Record<string, {
  title: string;
  prev: string | null;
  next: string | null;
  body: React.ReactNode;
}> = {
  Introduction: {
    title: "Introduction",
    prev: null,
    next: "Installation",
    body: (
      <>
        <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8, margin: "0 0 24px" }}>
          Chabok is a free, open-source file transfer app that works entirely on your local network.
          No internet, no cloud, no accounts required.
        </p>

        <div style={{
          background: "rgba(5,150,105,0.06)",
          border: "1px solid rgba(5,150,105,0.2)",
          borderLeft: "3px solid #059669",
          borderRadius: "0 10px 10px 0",
          padding: "14px 18px",
          marginBottom: "28px",
        }}>
          <div style={{ fontSize: "13px", color: "#34D399", fontWeight: 600, marginBottom: "4px" }}>Quick tip</div>
          <div style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>
            Make sure both devices are on the same WiFi network before starting a transfer.
          </div>
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "white", margin: "0 0 14px" }}>Key features</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
          {[
            "Transfer at full local network speed — up to 2.3 GB/s",
            "No internet connection required",
            "End-to-end encrypted with TLS",
            "Cross-platform: Android, Windows, iOS",
            "Send any file type with no size limits",
            "Free and open source forever",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "6px", height: "6px", background: "#059669", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontSize: "14px", color: "rgba(148,163,184,1)" }}>{item}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "white", margin: "0 0 14px" }}>Requirements</h2>
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "8px",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "rgba(71,85,105,1)", letterSpacing: "0.5px" }}>PLATFORM</div>
            <div style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "rgba(71,85,105,1)", letterSpacing: "0.5px" }}>MIN VERSION</div>
          </div>
          {[
            { platform: "Android", version: "8.0+", available: true },
            { platform: "Windows", version: "Coming soon", available: false },
            { platform: "iOS", version: "Coming soon", available: false },
          ].map((row, i, arr) => (
            <div
              key={row.platform}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div style={{ padding: "10px 16px", fontSize: "13px", color: "rgba(148,163,184,1)" }}>{row.platform}</div>
              <div style={{ padding: "10px 16px", fontSize: "13px", color: row.available ? "#34D399" : "rgba(71,85,105,1)" }}>{row.version}</div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  Installation: {
    title: "Installation",
    prev: "Introduction",
    next: "Quick Start",
    body: (
      <>
        <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8, margin: "0 0 24px" }}>
          Chabok is currently available for Android. Download the APK directly from our website and install it on your device.
        </p>
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "white", margin: "0 0 14px" }}>Android installation</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
          {[
            "Go to the Download page and tap Download APK",
            "Open the downloaded file on your Android device",
            'If prompted, enable "Install from unknown sources" in Settings',
            "Follow the on-screen instructions to complete installation",
            "Open Chabok and you are ready to go",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div style={{
                width: "22px", height: "22px",
                background: "rgba(5,150,105,0.15)",
                border: "1px solid rgba(5,150,105,0.3)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: "1px",
              }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#059669" }}>{i + 1}</span>
              </div>
              <span style={{ fontSize: "14px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>{step}</span>
            </div>
          ))}
        </div>
        <div style={{
          background: "rgba(5,150,105,0.06)",
          border: "1px solid rgba(5,150,105,0.2)",
          borderLeft: "3px solid #059669",
          borderRadius: "0 10px 10px 0",
          padding: "14px 18px",
        }}>
          <div style={{ fontSize: "13px", color: "#34D399", fontWeight: 600, marginBottom: "4px" }}>Note</div>
          <div style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>
            Windows and iOS versions are currently in development. Expected Q3 and Q4 2026.
          </div>
        </div>
      </>
    ),
  },
  "Quick Start": {
    title: "Quick Start",
    prev: "Installation",
    next: "Device Discovery",
    body: (
      <>
        <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8, margin: "0 0 24px" }}>
          Get up and running in under a minute. Here is how to send your first file with Chabok.
        </p>
        {[
          { step: "1", title: "Connect to the same WiFi", desc: "Both devices must be on the same local network or WiFi hotspot." },
          { step: "2", title: "Open Chabok on both devices", desc: "Launch the app. It will automatically start scanning for nearby devices." },
          { step: "3", title: "Select a device", desc: "Tap on the device you want to send files to from the discovered devices list." },
          { step: "4", title: "Pick your files", desc: "Choose any files from your device — photos, videos, documents, APKs, anything." },
          { step: "5", title: "Send & accept", desc: "Tap Send. The receiver will get a prompt to accept the transfer. Done!" },
        ].map((item) => (
          <div key={item.step} style={{
            display: "flex", gap: "16px", marginBottom: "20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px", padding: "16px",
          }}>
            <div style={{
              width: "28px", height: "28px",
              background: "#059669", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 0 10px rgba(5,150,105,0.4)",
            }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "white" }}>{item.step}</span>
            </div>
            <div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "4px" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </>
    ),
  },
  "Device Discovery": {
    title: "Device Discovery",
    prev: "Quick Start",
    next: "File Transfer",
    body: (
      <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8 }}>
        Chabok uses mDNS (Multicast DNS) to automatically discover devices on your local network.
        When you open the app, it broadcasts a discovery signal and listens for other Chabok instances nearby.
        No pairing, no Bluetooth, no QR codes — just open and go.
      </p>
    ),
  },
  "File Transfer": {
    title: "File Transfer",
    prev: "Device Discovery",
    next: "Security & TLS",
    body: (
      <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8 }}>
        Once a device is selected, Chabok establishes a direct HTTP connection over your local network.
        Files are sent in chunks for reliability and speed. There is no file size limit —
        transfers happen at the full speed of your local network, up to 2.3 GB/s.
      </p>
    ),
  },
  "Security & TLS": {
    title: "Security & TLS",
    prev: "File Transfer",
    next: "Troubleshooting",
    body: (
      <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8 }}>
        All transfers are encrypted using TLS with self-signed certificates generated on first launch.
        Each device has a unique fingerprint. Files never leave your local network —
        there is no server, no cloud, and no third party involved at any point.
      </p>
    ),
  },
  Troubleshooting: {
    title: "Troubleshooting",
    prev: "Security & TLS",
    next: "FAQ",
    body: (
      <>
        <p style={{ fontSize: "15px", color: "rgba(148,163,184,1)", lineHeight: 1.8, margin: "0 0 24px" }}>
          Having issues? Here are the most common problems and how to fix them.
        </p>
        {[
          { q: "Devices not showing up", a: "Make sure both devices are on the same WiFi network. Hotspot connections also work." },
          { q: "Transfer is slow", a: "Check your WiFi signal strength. Chabok performs best on 5GHz networks." },
          { q: "Transfer failed midway", a: "Try again. Large files occasionally fail on unstable networks. Chabok will retry automatically." },
          { q: "App crashes on launch", a: "Make sure you are on Android 8.0 or higher. Reinstall the APK if the issue persists." },
        ].map((item) => (
          <div key={item.q} style={{
            marginBottom: "16px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px", padding: "16px",
          }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "6px" }}>{item.q}</div>
            <div style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>{item.a}</div>
          </div>
        ))}
      </>
    ),
  },
  FAQ: {
    title: "FAQ",
    prev: "Troubleshooting",
    next: null,
    body: (
      <>
        {[
          { q: "Is Chabok free?", a: "Yes. Chabok is completely free and open source under the MIT license." },
          { q: "Does it work without internet?", a: "Yes. Chabok works entirely on your local network. No internet connection is needed." },
          { q: "Is there a file size limit?", a: "No. You can send files of any size. The only limit is your device storage." },
          { q: "Is my data safe?", a: "Yes. All transfers are encrypted with TLS. Files never leave your local network." },
          { q: "When will Windows and iOS be available?", a: "Windows is expected Q3 2026, iOS Q4 2026. Follow us on GitHub for updates." },
        ].map((item) => (
          <div key={item.q} style={{
            marginBottom: "14px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px", padding: "16px",
          }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "6px" }}>{item.q}</div>
            <div style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.6 }}>{item.a}</div>
          </div>
        ))}
      </>
    ),
  },
};

export default function DocsPage() {
  const [active, setActive] = useState("Introduction");
  const page = content[active];

  return (
    <>
      <Navbar />

      <style>{`
        .docs-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          align-items: start;
          max-width: 980px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .docs-sidebar {
          position: sticky;
          top: 100px;
        }
        .docs-sidebar-inner {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 768px) {
          .docs-layout {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .docs-sidebar {
            position: static;
            background: rgba(255,255,255,0.02);
            border: 1px solid rgba(255,255,255,0.07);
            border-radius: 14px;
            padding: 16px;
            margin-bottom: 28px;
          }
          .docs-sidebar-inner {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
        }
        @media (max-width: 480px) {
          .docs-sidebar-inner {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <main style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="docs-layout">

          {/* Sidebar */}
          <div className="docs-sidebar">
            <div className="docs-sidebar-inner">
              {sidebarSections.map((section) => (
                <div key={section.title} style={{ marginBottom: "20px" }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(71,85,105,1)",
                    letterSpacing: "1px",
                    marginBottom: "8px",
                  }}>
                    {section.title}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {section.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => setActive(item)}
                        style={{
                          padding: "7px 12px",
                          background: active === item ? "rgba(5,150,105,0.12)" : "transparent",
                          border: active === item ? "1px solid rgba(5,150,105,0.25)" : "1px solid transparent",
                          borderRadius: "8px",
                          fontSize: "13px",
                          color: active === item ? "#34D399" : "rgba(100,116,139,1)",
                          fontWeight: active === item ? 500 : 400,
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.15s ease",
                          fontFamily: "inherit",
                          width: "100%",
                        }}
                        onMouseEnter={e => {
                          if (active !== item) {
                            (e.currentTarget as HTMLElement).style.color = "white";
                            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                          }
                        }}
                        onMouseLeave={e => {
                          if (active !== item) {
                            (e.currentTarget as HTMLElement).style.color = "rgba(100,116,139,1)";
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                          }
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <motion.div key={active} {...fadeUp(0)}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(5,150,105,0.1)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "9999px",
              padding: "4px 12px",
              marginBottom: "16px",
            }}>
              <span style={{ fontSize: "11px", color: "#34D399", fontWeight: 500, letterSpacing: "0.5px" }}>DOCS</span>
            </div>

            <h1 style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.8px",
              margin: "0 0 16px",
              lineHeight: 1.2,
            }}>
              {page.title}
            </h1>

            <div style={{ marginBottom: "36px" }}>
              {page.body}
            </div>

            {/* Prev / Next */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "28px",
            }}>
              <button
                onClick={() => page.prev && setActive(page.prev)}
                disabled={!page.prev}
                style={{
                  padding: "14px",
                  background: page.prev ? "rgba(255,255,255,0.03)" : "transparent",
                  border: page.prev ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
                  borderRadius: "10px",
                  fontSize: "13px",
                  color: page.prev ? "rgba(148,163,184,1)" : "rgba(71,85,105,0.4)",
                  cursor: page.prev ? "pointer" : "default",
                  textAlign: "center",
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  if (page.prev) (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={e => {
                  if (page.prev) (e.currentTarget as HTMLElement).style.color = "rgba(148,163,184,1)";
                }}
              >
                {page.prev ? `← ${page.prev}` : "←"}
              </button>

              <button
                onClick={() => page.next && setActive(page.next)}
                disabled={!page.next}
                style={{
                  padding: "14px",
                  background: page.next ? "rgba(5,150,105,0.08)" : "transparent",
                  border: page.next ? "1px solid rgba(5,150,105,0.2)" : "1px solid transparent",
                  borderRadius: "10px",
                  fontSize: "13px",
                  color: page.next ? "#34D399" : "rgba(71,85,105,0.4)",
                  cursor: page.next ? "pointer" : "default",
                  textAlign: "center",
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={e => {
                  if (page.next) (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={e => {
                  if (page.next) (e.currentTarget as HTMLElement).style.color = "#34D399";
                }}
              >
                {page.next ? `${page.next} →` : "→"}
              </button>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}