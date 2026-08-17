import React from "react";
import Reveal from "./Reveal";

const ROLES = [
  { role: "Postdoctoral Fellows", desc: "Bioinformatics, systems biology, or related fields" },
  { role: "PhD Students", desc: "Computational biology or plant/animal genomics" },
  { role: "Undergraduates", desc: "Research assistantships with mentorship" },
];

export default function JoinUsSection() {
  return (
    <section id="Join Us" style={{ padding: "100px clamp(20px,6vw,80px)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(134,239,172,0.12), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <Reveal><div className="section-label">Join Us</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Be Part of Our Research</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            We welcome motivated researchers at all levels — postdocs, graduate students, and undergraduates — who are passionate about computational biology and making a real-world impact.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 44 }}>
            {ROLES.map((r, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: "left" }}>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#4ade80" }}>{r.role}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)", lineHeight: 1.5 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <button className="btn-primary" onClick={() => window.open("mailto:bmishra2@nd.edu")}>Contact Dr. Mishra — bmishra2@nd.edu</button>
        </Reveal>
      </div>
    </section>
  );
}
