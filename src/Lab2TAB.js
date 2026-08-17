import React from "react";
import Reveal from "./Reveal";

export default function Lab2TAB() {
  return (
    <section style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(56,189,248,0.04)" }}>
      <Reveal><div className="section-label">Lab2TAB Pipeline</div></Reveal>
      <Reveal delay={0.05}>
        <div className="card" style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
            <span style={{ fontSize: 32, background: "#38bdf8", borderRadius: 10, padding: 8, color: "#080F0D" }}>📊</span>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 22, margin: 0 }}>Lab2TAB Pipeline</h2>
          </div>
          <p style={{ color: "rgba(232,237,233,0.7)", fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
            We develop and use reproducible, FAIR-compliant workflows for next-generation sequencing (NGS) data analysis. Our expertise includes version control, containerization, open-source tools, and shared computation clusters, enabling robust and transparent analysis for genomics, medicine, and biology.
          </p>
          <p style={{ color: "rgba(232,237,233,0.7)", fontSize: 15, lineHeight: 1.7, marginBottom: 18 }}>
            <b>Education, Training, & Curriculum Development:</b><br/>
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Workshop Training: Instructor for Quant Camp (QC25), where I taught foundational concepts in reproducible research using R to incoming graduate students. The overwhelmingly positive feedback and 100% recommendation rate underscore the camp's success in equipping students with essential quantitative skills.</li>
              <li>Courses: Designed and launched a new course, <b>BIOS 40132/60132: Introduction to Computational Genomics</b>, for senior undergraduates and graduate students in Fall 2025. The curriculum focuses on building practical skills in genomics quality control, bulk RNA-seq, and single-cell RNA-seq analysis, directly addressing a critical training need.<br/>
                <a href="https://github.com/GBCF-Bioinformatics-ND/ND_ICG_FA2025" target="_blank" rel="noopener noreferrer">Course GitHub</a>
              </li>
              <li><b>BIOS 60576: Topics in Biocomputing (Seminar)</b> Spring 2026</li>
            </ul>
          </p>
          <p style={{ color: "#b5f5e0", fontSize: 13, marginTop: 18 }}>
            <b>Related Article:</b><br/>
            Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis <span style={{ color: "#4ade80" }}>(iScience, 2020)</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
