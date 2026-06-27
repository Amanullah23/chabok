import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
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
              Terms of Use
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(71,85,105,1)", margin: 0 }}>Last updated: June 2026</p>
          </div>

          {[
            {
              title: "Acceptance of terms",
              body: "By downloading or using Chabok, you agree to these terms. If you do not agree, please do not use the app.",
            },
            {
              title: "Use of the app",
              body: "Chabok is provided for personal and commercial use. You may use Chabok to transfer files between your own devices or with the consent of the receiving party.",
            },
            {
              title: "Prohibited use",
              body: "You may not use Chabok to transfer illegal content, malware, or any files that violate applicable laws. You are solely responsible for the content you transfer.",
            },
            {
              title: "No warranty",
              body: "Chabok is provided as-is without any warranty of any kind. We do not guarantee uninterrupted or error-free operation of the app.",
            },
            {
              title: "Limitation of liability",
              body: "We are not liable for any damages arising from your use of Chabok, including but not limited to data loss, device damage, or network issues.",
            },
            {
              title: "Open source license",
              body: "Chabok is released under the MIT License. You are free to use, copy, modify, and distribute the source code in accordance with the MIT License terms.",
            },
            {
              title: "Changes to terms",
              body: "We may update these terms at any time. Continued use of Chabok after changes constitutes acceptance of the new terms.",
            },
            {
              title: "Contact",
              body: "For questions about these terms, please open an issue on our GitHub repository.",
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