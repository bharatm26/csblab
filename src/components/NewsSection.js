import React from "react";
import Reveal from "./Reveal";
import { NEWS_ITEMS } from "../data/constants";

const TAG_COLORS = {
  Publication: { bg: "rgba(74,222,128,0.14)", text: "#4ade80" },
  Preprint: { bg: "rgba(187,247,208,0.14)", text: "#bbf7d0" },
  "Office Hours": { bg: "rgba(34,197,94,0.14)", text: "#22c55e" },
  "Student Club": { bg: "rgba(52,211,153,0.14)", text: "#34d399" },
  Announcement: { bg: "rgba(132,204,22,0.14)", text: "#84cc16" },
};

export default function NewsSection() {
  return (
    <>
      {/* ===== LAB2TAB PIPELINE ===== */}
      <section id="Lab2TAB" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(134,239,172,0.05)" }}>
        <Reveal><div className="section-label">Lab2TAB Pipeline</div></Reveal>
        <Reveal delay={0.05}>
          <div className="card" style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
              <span style={{ fontSize: 32, background: "#bbf7d0", borderRadius: 10, padding: 8, color: "#0b1710" }}>📊</span>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 22, margin: 0 }}>Lab2TAB Pipeline</h2>
            </div>
            <p style={{ color: "rgba(232,237,233,0.7)", fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
              We develop and use reproducible, FAIR-compliant workflows for next-generation sequencing (NGS) data analysis. Our expertise includes version control, containerization, open-source tools, and shared computation clusters, enabling robust and transparent analysis for genomics, medicine, and biology.
            </p>
            <div style={{ color: "rgba(232,237,233,0.7)", fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
              <p style={{ marginBottom: 10 }}><b>Education, Training, &amp; Curriculum Development:</b></p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Workshop Training: Instructor for Quant Camp (QC25), where I taught foundational concepts in reproducible research using R to incoming graduate students. The overwhelmingly positive feedback and 100% recommendation rate underscore the camp's success in equipping students with essential quantitative skills.</li>
                <li>Courses: Designed and launched a new course, <b>BIOS 40132/60132: Introduction to Computational Genomics</b>, for senior undergraduates and graduate students in Fall 2025. The curriculum focuses on building practical skills in genomics quality control, bulk RNA-seq, and single-cell RNA-seq analysis, directly addressing a critical training need.<br />
                  <a href="https://github.com/GBCF-Bioinformatics-ND/ND_ICG_FA2025" target="_blank" rel="noopener noreferrer">Course GitHub</a>
                </li>
                <li><b>BIOS 60576: Topics in Biocomputing (Seminar)</b> Spring 2026</li>
              </ul>
            </div>
            <p style={{ color: "#b5f5e0", fontSize: 13, marginTop: 18 }}>
              <b>Related Article:</b><br />
              Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis <span style={{ color: "#4ade80" }}>(iScience, 2020)</span>
            </p>
          </div>
        </Reveal>
      </section>

      {/* ===== NEWS ===== */}
      <section id="News" style={{ padding: "100px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div className="section-label">News</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Latest Updates</h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
            {NEWS_ITEMS.map((n, i) => {
              const colors = TAG_COLORS[n.tag] || { bg: "rgba(132,204,22,0.14)", text: "#84cc16" };
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div style={{
                    display: "flex", alignItems: "flex-start", gap: 20, padding: "28px 28px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16, transition: "border-color 0.3s, transform 0.3s", cursor: "default",
                  }}>
                    <div style={{ minWidth: 80 }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, color: "#4ade80" }}>{n.date}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                        <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: 1.4 }}>{n.title}</h4>
                        <span className="tag" style={{ background: colors.bg, color: colors.text, fontSize: 10 }}>{n.tag}</span>
                      </div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(232,237,233,0.5)", lineHeight: 1.6 }}>{n.desc}</p>
                      {n.url ? (
                        <a href={n.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#bbf7d0", textDecoration: "none" }}>
                          {n.linkLabel}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
