import React from "react";
import { SECTION_LINKS, LOGO_SRC } from "../data/constants";

export default function NavBar({ navBg, activeSection, setActiveSection, menuOpen, setMenuOpen }) {
  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(20px, 4vw, 60px)",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navBg ? "rgba(11,23,16,0.95)" : "rgba(11,23,16,0.55)",
        backdropFilter: "blur(16px)",
        borderBottom: navBg ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
      }}>
        <div className="nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <img className="nav-logo" src={LOGO_SRC} alt="CSB Lab" style={{ height: 48, maxHeight: 56, maxWidth: 120, width: "auto", objectFit: "contain", transition: "height 0.3s" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}></span>
        </div>
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1.2vw, 20px)", flex: 1, justifyContent: "flex-end" }}>
          {SECTION_LINKS.map((section) => (
            <button
              type="button"
              key={section.target}
              className={`nav-link ${activeSection === section.target ? "active" : ""}`}
              onClick={() => {
                setActiveSection(section.target);
                document.getElementById(section.target)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {section.label}
            </button>
          ))}
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={menuOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu" style={{
        display: "none", position: "fixed", inset: 0, zIndex: 99,
        background: "rgba(11,23,16,0.97)", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none", transition: "opacity 0.3s",
      }}>
        {SECTION_LINKS.map((section) => (
          <button
            type="button"
            key={section.target}
            style={{ fontSize: 22, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer", color: activeSection === section.target ? "#86efac" : "#ecfdf3", background: "none", border: "none" }}
            onClick={() => {
              setActiveSection(section.target);
              setMenuOpen(false);
              document.getElementById(section.target)?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {section.label}
          </button>
        ))}
      </div>
    </>
  );
}
