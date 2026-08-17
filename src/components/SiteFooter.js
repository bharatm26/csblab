import React from "react";
import { SECTION_LINKS, FOOTER_LOGO_SRC, FOOTER_LINKS } from "../data/constants";

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px clamp(20px,6vw,80px) 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <img src={FOOTER_LOGO_SRC} alt="CSB Lab" style={{ height: 90, maxHeight: 120, width: "auto", objectFit: "contain", transition: "height 0.3s" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18 }}></span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(232,237,233,0.5)", lineHeight: 1.7, maxWidth: 340, marginTop: 12 }}>
            Computational Systems Biology Lab<br />
            Department of Biological Sciences<br />
            University of Notre Dame<br />
            3028C McCourtney Hall East<br />
            Notre Dame, IN 46556 USA
          </p>
        </div>
        <div style={{ display: "flex", gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "rgba(232,237,233,0.5)" }}>
            <span style={{ fontWeight: 700, color: "#E8EDE9", marginBottom: 4 }}>Links</span>
            {Object.entries(FOOTER_LINKS).map(([label, url]) => (
              <span
                key={label}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
                onClick={() => window.open(url, "_blank")}
                onMouseEnter={(e) => { e.target.style.color = "#86efac"; }}
                onMouseLeave={(e) => { e.target.style.color = "rgba(232,237,233,0.5)"; }}
              >
                {label}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "rgba(232,237,233,0.5)" }}>
            <span style={{ fontWeight: 700, color: "#E8EDE9", marginBottom: 4 }}>Navigate</span>
            {SECTION_LINKS.map((section) => (
              <button
                type="button"
                key={section.target}
                className="footer-link-button"
                onClick={() => document.getElementById(section.target)?.scrollIntoView({ behavior: "smooth" })}
                onMouseEnter={(e) => { e.target.style.color = "#86efac"; }}
                onMouseLeave={(e) => { e.target.style.color = "rgba(232,237,233,0.5)"; }}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.04)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.25)", textAlign: "center" }}>
        © 2026 Computational Systems Biology Lab, University of Notre Dame. All rights reserved.
      </div>
    </footer>
  );
}
