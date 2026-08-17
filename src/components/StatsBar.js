import React from "react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { STATS } from "../data/constants";

export default function StatsBar() {
  return (
    <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px clamp(20px,6vw,80px)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        {STATS.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 42, background: "linear-gradient(135deg,#4ade80,#bbf7d0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              <Counter end={s.val} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
