import React from "react";
import Reveal from "./Reveal";

export default function FunStuffSection() {
  return (
    <section id="Fun Stuff" style={{ padding: "100px clamp(20px,6vw,80px)", background: "linear-gradient(180deg, rgba(134,239,172,0.05) 0%, transparent 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Fun Stuff</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">TGIF — Our Friday Rituals</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
            Lab meetings are on Fridays. Here's how we make it through — and celebrate after.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
          {[
            { emoji: "☕", title: "Friday Fuel", desc: "Coffee is non-negotiable on lab meeting Fridays. We've lost count, but the machine hasn't.", stat: "∞ cups", color: "#84cc16" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card" style={{ textAlign: "center", padding: 32 }}>
                <div style={{ fontSize: 42, marginBottom: 12, animation: `float ${2.5 + i * 0.2}s ease-in-out infinite` }}>{item.emoji}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 24, color: item.color, marginBottom: 6 }}>{item.stat}</div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{item.title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)", lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
