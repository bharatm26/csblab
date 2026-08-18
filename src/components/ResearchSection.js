import React from "react";
import Reveal from "./Reveal";
import { RESEARCH_THEMES } from "../data/constants";

export default function ResearchSection() {
  return (
    <>
      {/* ===== RESEARCH (3 THEMES) ===== */}
      <section id="Research" style={{ padding: "100px clamp(20px,6vw,80px)", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Research</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Research Themes</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 640, marginBottom: 52 }}>
            Our research integrates systems biology, multi-omics analysis, and AI-enabled computational methods to uncover how biological systems respond, adapt, and interact across scales.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => document.getElementById("Publications")?.scrollIntoView({ behavior: "smooth" })}>Browse Recent Publications</button>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {RESEARCH_THEMES.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${r.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{r.title}</h3>
                <p style={{ color: "rgba(232,237,233,0.55)", fontSize: 14.5, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{r.desc}</p>
                {r.articles && (
                  <ul style={{ marginTop: 16, paddingLeft: 18, color: "#d9f99d", fontSize: 13 }}>
                    {r.articles.map((a, j) => (
                      <li key={j} style={{ marginBottom: 6 }}>
                        <span style={{ fontWeight: 600 }}>{a.title}</span>{" "}
                        <span style={{ color: "#4ade80" }}>({a.journal}, {a.year})</span>
                        {a.url ? (
                          <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", marginLeft: 8, textDecoration: "none", fontWeight: 600 }}>
                            DOI
                          </a>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
