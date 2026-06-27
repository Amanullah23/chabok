import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LicensePage() {
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
              MIT License
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(71,85,105,1)", margin: 0 }}>Copyright © 2026 Chabok</p>
          </div>

          {/* License text */}
          <div style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "14px",
            padding: "28px",
            marginBottom: "24px",
          }}>
            <pre style={{
              fontSize: "13px",
              color: "rgba(148,163,184,1)",
              lineHeight: 1.9,
              margin: 0,
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
            }}>
{`MIT License

Copyright (c) 2026 Chabok

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </div>

          <div style={{
            background: "rgba(5,150,105,0.05)",
            border: "1px solid rgba(5,150,105,0.18)",
            borderLeft: "3px solid #059669",
            borderRadius: "0 12px 12px 0",
            padding: "16px 20px",
          }}>
            <p style={{ fontSize: "13px", color: "rgba(148,163,184,1)", lineHeight: 1.7, margin: 0 }}>
              Chabok is free and open source software. You can view the full source code,
              contribute, or fork the project on{" "}
              <a
                href="https://github.com/Amanullah23/chabok"
                target="_blank"
                style={{ color: "#34D399", textDecoration: "none", fontWeight: 500 }}
              >
                GitHub
              </a>.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}