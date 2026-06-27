import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ marginBottom: "40px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(5,150,105,0.1)",
              border: "1px solid rgba(5,150,105,0.25)",
              borderRadius: "9999px",
              padding: "5px 14px",
              marginBottom: "20px",
            }}>
              <span style={{ fontSize: "12px", color: "#34D399", fontWeight: 500, letterSpacing: "0.5px" }}>LEGAL</span>
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: 700, color: "white", letterSpacing: "-0.8px", margin: "0 0 12px" }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(71,85,105,1)", margin: 0 }}>Last updated: June 2026</p>
          </div>

          {[
            {
              title: "No data collection",
              body: "Chabok does not collect, store, or transmit any personal data. All file transfers happen directly between devices on your local network. No data ever reaches our servers — because we don't have any.",
            },
            {
              title: "No accounts required",
              body: "Chabok requires no registration, login, or account creation. You can use the app fully without providing any personal information.",
            },
            {
              title: "No internet connection",
              body: "Chabok operates entirely on your local WiFi or hotspot network. It does not make any requests to the internet during file transfers.",
            },
            {
              title: "No analytics or tracking",
              body: "We do not use any analytics tools, tracking pixels, cookies, or third-party SDKs that collect user behavior data.",
            },
            {
              title: "Local storage only",
              body: "The only data stored on your device is the app's self-signed TLS certificate used for encrypting transfers. This never leaves your device.",
            },
            {
              title: "Open source transparency",
              body: "Chabok is fully open source. You can review every line of code on our GitHub repository to verify our privacy claims.",
            },
            {
              title: "Contact",
              body: "If you have any questions about this privacy policy, please open an issue on our GitHub repository.",
            },
          ].map((section) => (
            <div
              key={section.title}
              style={{
                marginBottom: "24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "22px 24px",
              }}
            >
              <h2 style={{ fontSize: "16px", fontWeight: 600, color: "white", margin: "0 0 10px" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: "14px", color: "rgba(148,163,184,1)", lineHeight: 1.75, margin: 0 }}>
                {section.body}
              </p>
            </div>
          ))}

        </div>
      </main>
      <Footer />
    </>
  );
}