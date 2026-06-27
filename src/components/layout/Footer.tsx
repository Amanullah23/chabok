"use client";

import Link from "next/link";

const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
    <path d="M13 2L4.09 12.97 9 13l-1 9L19 11h-5l-1-9z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(148,163,184,1)">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(148,163,184,1)">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(148,163,184,1)" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="rgba(148,163,184,1)" stroke="none" />
  </svg>
);

const ThreadsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(148,163,184,1)">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068v-.037c.024-3.557.924-6.447 2.67-8.578C6.07 1.18 8.81.014 12.354 0h.049c2.738.017 5.064.82 6.912 2.385 1.74 1.474 2.875 3.553 3.376 6.178l-2.368.44c-.392-2.112-1.263-3.729-2.591-4.808-1.286-1.044-3.02-1.58-5.147-1.593h-.04c-2.72.017-4.876.906-6.41 2.644C4.6 6.985 3.845 9.406 3.824 12.035v.034c.017 2.636.741 5.022 2.1 6.898 1.369 1.891 3.488 2.862 6.3 2.884h.006c2.546-.018 4.457-.706 5.683-2.045.988-1.082 1.49-2.605 1.491-4.524v-.012c-.002-.856-.123-1.617-.36-2.265a4.23 4.23 0 00-.394-.807c-.438 2.162-1.457 3.637-3.032 4.389-1.017.484-2.232.686-3.618.601-1.163-.071-2.21-.41-3.007-1.01-.874-.66-1.386-1.618-1.437-2.7-.048-1.02.316-1.962 1.025-2.651.762-.742 1.898-1.166 3.193-1.194 1.046-.022 2.016.163 2.886.549-.057-.434-.16-.821-.31-1.153-.34-.757-.952-1.16-1.873-1.228-.716-.053-1.362.118-1.92.508l-1.272-1.896c.9-.604 1.99-.906 3.248-.906h.073c2.616.036 4.212 1.522 4.672 4.307.12.72.178 1.5.172 2.315v.012c-.002 2.538-.727 4.573-2.154 6.052-1.46 1.513-3.596 2.296-6.347 2.32z" />
  </svg>
);

const socials = [
  { icon: <GitHubIcon />, href: "https://github.com/Amanullah23/chabok", label: "GitHub" },
  { icon: <LinkedInIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  { icon: <ThreadsIcon />, href: "https://threads.net", label: "Threads" },
];

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Download", href: "/download" },
  { label: "Changelog", href: "/blog" },
];

const devLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "GitHub", href: "https://github.com/Amanullah23/chabok" },
  { label: "Blog", href: "/blog" },
  { label: "Releases", href: "/download" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "License", href: "/license" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#060f1a",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 24px 28px",
    }}>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 52px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-links-grid {
          display: contents;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 36px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }
        .footer-link {
          font-size: 13px;
          color: rgba(100,116,139,1);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
          padding: 3px 0;
        }
        .footer-link:hover { color: white; }
        .footer-social {
          width: 32px;
          height: 32px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .footer-social:hover {
          background: rgba(5,150,105,0.15);
          border-color: rgba(5,150,105,0.3);
        }
      `}</style>

      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <Link href="/" style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            marginBottom: "16px",
          }}>
            <div style={{
              width: "30px",
              height: "30px",
              background: "#059669",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 10px rgba(5,150,105,0.5)",
              flexShrink: 0,
            }}>
              <ZapIcon />
            </div>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "white" }}>Chabok</span>
          </Link>

          <p style={{
            fontSize: "13px",
            color: "rgba(100,116,139,1)",
            lineHeight: 1.7,
            margin: "0 0 20px",
            maxWidth: "220px",
          }}>
            Share files at lightning speed. No cloud. No internet. No limits.
          </p>

          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {socials.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" aria-label={s.label} className="footer-social">
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <div style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "white",
            letterSpacing: "0.5px",
            marginBottom: "14px",
          }}>
            PRODUCT
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {productLinks.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Developers */}
        <div>
          <div style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "white",
            letterSpacing: "0.5px",
            marginBottom: "14px",
          }}>
            DEVELOPERS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {devLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                className="footer-link"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <div style={{
            fontSize: "12px",
            fontWeight: 600,
            color: "white",
            letterSpacing: "0.5px",
            marginBottom: "14px",
          }}>
            LEGAL
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <span style={{ fontSize: "12px", color: "rgba(71,85,105,1)" }}>
          © 2026 Chabok. Open source under MIT License.
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{
            width: "6px",
            height: "6px",
            background: "#059669",
            borderRadius: "50%",
            boxShadow: "0 0 6px rgba(5,150,105,0.8)",
          }} />
          <span style={{ fontSize: "12px", color: "rgba(71,85,105,1)" }}>
            All systems operational
          </span>
        </div>
      </div>

    </footer>
  );
}