import React from "react";
import Reveal from "./Reveal";
import { TEAM_LEADS, UNDERGRADS } from "../data/constants";

export default function TeamSection() {
  return (
    <section id="Team" style={{ padding: "100px clamp(20px,6vw,80px)", maxWidth: 1200, margin: "0 auto" }}>
      <Reveal><div className="section-label">Our Team</div></Reveal>
      <Reveal delay={0.05}><h2 className="section-title">Meet the People Behind the Science</h2></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 48 }}>
        {TEAM_LEADS.map((m, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="card" style={{ textAlign: "center", padding: 32 }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#080F0D",
              }}>{m.initials}</div>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{m.name}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.45)" }}>{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, marginTop: 56, marginBottom: 28, color: "#84cc16" }}>Undergraduate Researchers</h3>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
        {UNDERGRADS.map((name, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="card" style={{ textAlign: "center", padding: 20 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%", margin: "0 auto 10px",
                background: "linear-gradient(135deg, #84cc16, #84cc1688)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 16, color: "#080F0D",
              }}>{name.split(" ").map((n) => n[0]).join("")}</div>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{name}</h4>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(232,237,233,0.4)" }}>Research Assistant</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "rgba(232,237,233,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: 14, marginBottom: 14 }}>
            Interested in collaborating with or joining the lab?
          </p>
          <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => document.getElementById("Join Us")?.scrollIntoView({ behavior: "smooth" })}>View Opportunities</button>
        </div>
      </Reveal>
    </section>
  );
}
