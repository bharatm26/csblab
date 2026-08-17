import React from "react";
import Reveal from "./Reveal";
import { RESEARCH_THEMES, DETAILED_RESEARCH_THEMES } from "../data/constants";

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
            <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => document.getElementById("DetailedResearch")?.scrollIntoView({ behavior: "smooth" })}>Jump to 5 Detailed Areas</button>
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

      {/* ===== DETAILED RESEARCH (5 THEMES) ===== */}
      <section id="DetailedResearch" style={{ padding: "0 clamp(20px,6vw,80px) 100px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Detailed Research Areas</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title" style={{ maxWidth: 760 }}>Five Focus Areas Across Biology, Data Science, and Reproducible Analysis</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 760, marginBottom: 52 }}>
            Five focused areas that sit under three major pillars: <span style={{ color: "#86efac" }}>Plant Regulatory Genomics</span>, <span style={{ color: "#86efac" }}>Single-Cell and Spatial Genomics</span>, and <span style={{ color: "#86efac" }}>Multi-omics and AI-Enabled Systems Biology</span>. Each area is labeled with its parent theme below.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
            <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth" })}>Back to 3 Theme Overview</button>
            <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => document.getElementById("Publications")?.scrollIntoView({ behavior: "smooth" })}>See Full Publication List</button>
          </div>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {DETAILED_RESEARCH_THEMES.map((theme, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card" style={{ height: "100%" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${theme.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 14 }}>{theme.icon}</div>
                {theme.pillar && (
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: theme.color, marginBottom: 10, opacity: 0.8 }}>
                    {theme.pillar}
                  </div>
                )}
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{theme.title}</h3>
                <p style={{ color: "rgba(232,237,233,0.55)", fontSize: 14.5, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{theme.desc}</p>
                {theme.articles && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(187,247,208,0.72)", marginBottom: 10 }}>
                      Representative Publications
                    </div>
                    <ul style={{ paddingLeft: 18, color: "#d9f99d", fontSize: 13, margin: 0 }}>
                      {theme.articles.map((article, j) => (
                        <li key={j} style={{ marginBottom: 6 }}>
                          <span style={{ fontWeight: 600 }}>{article.title}</span>{" "}
                          <span style={{ color: "#4ade80" }}>({article.journal}, {article.year})</span>
                          {article.url ? (
                            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", marginLeft: 8, textDecoration: "none", fontWeight: 600 }}>
                              DOI
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== PIPELINE VISUAL ===== */}
      <section style={{ padding: "60px clamp(20px,6vw,80px) 100px", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 24, padding: "48px 40px", overflow: "hidden" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="section-label">Our Approach</div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 700 }}>From Samples to Solutions</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              {[
                { emoji: "🧫", label: "Biological Samples" },
                { emoji: "→", label: "" },
                { emoji: "🧬", label: "Sequencing" },
                { emoji: "→", label: "" },
                { emoji: "💻", label: "Computation & AI" },
                { emoji: "→", label: "" },
                { emoji: "📈", label: "Systems Insights" },
                { emoji: "→", label: "" },
                { emoji: "🌍", label: "Real-World Impact" },
              ].map((s, i) => s.label === "" ? (
                <span key={i} style={{ fontSize: 24, color: "rgba(255,255,255,0.15)", fontFamily: "'DM Sans'" }}>→</span>
              ) : (
                <div key={i} style={{ textAlign: "center", minWidth: 100 }}>
                  <div style={{ fontSize: 36, marginBottom: 8, animation: `float ${2 + i * 0.3}s ease-in-out infinite` }}>{s.emoji}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(232,237,233,0.6)", letterSpacing: "0.04em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
