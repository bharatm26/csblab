import React from "react";
import Reveal from "./Reveal";
import HelixBG from "./HelixBG";
import HeroNetwork from "./HeroNetwork";

export default function HeroSection() {
  return (
    <section id="Home" className="hero-section" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "120px clamp(20px,6vw,80px) 80px" }}>
      {/* gradient orbs */}
      <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,197,94,0.22), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(187,247,208,0.14), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <HelixBG />

      <div className="hero-shell">
        <div className="hero-copy">
          <Reveal>
            <div className="tag hero-badge-primary" style={{ background: "rgba(134,239,172,0.18)", color: "#d9f99d", marginBottom: 8, fontSize: 22, fontWeight: 800, letterSpacing: "0.01em", textShadow: "0 2px 16px rgba(134,239,172,0.35)" }}>
              Computational Systems Biology Lab (CSBLab)
            </div>
            <div className="tag hero-badge-secondary" style={{ background: "rgba(134,239,172,0.12)", color: "#86efac", marginBottom: 28 }}>
              University of Notre Dame · Dept. of Biological Sciences
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title" style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.025em" }}>
              Decoding Biology<br />Through <span style={{ background: "linear-gradient(135deg, #86efac, #dcfce7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Computation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="hero-lead" style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(232,237,233,0.72)", maxWidth: 560, marginBottom: 40, fontWeight: 300 }}>
              We combine AI, systems biology, and multi-omics data to understand how diseases work in plants and animals — advancing food security, healthcare, and healthy aging.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="hero-actions" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth" })}>Explore Our Research →</button>
              <button className="btn-outline" onClick={() => document.getElementById("Join Us")?.scrollIntoView({ behavior: "smooth" })}>Join the Lab</button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <HeroNetwork />
        </Reveal>
      </div>
    </section>
  );
}
