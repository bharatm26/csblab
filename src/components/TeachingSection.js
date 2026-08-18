import React, { useState } from "react";
import Reveal from "./Reveal";

const INSTITUTIONS = [
  {
    name: "University of Notre Dame",
    period: "2025 – present",
    courses: [
      {
        code: "BIOS 40132/60132",
        title: "Introduction to Computational Genomics",
        credits: "3 cr",
        terms: "Fa2025",
        type: "regular",
        url: "https://github.com/GBCF-Bioinformatics-ND/ND_ICG_FA2025",
        description:
          "Comprehensive intro to modern genomics analysis for senior undergrad and graduate students. Covers Genomics QC, Bulk RNA-seq, and Single-Cell RNA-seq — building critical thinking and data interpretation skills.",
        tags: ["Genomics", "RNA-seq", "scRNA-seq"],
      },
      {
        code: "BIOS 60576",
        title: "Topics in Biocomputing: Seminar",
        credits: "2 cr",
        terms: "Sp2026",
        type: "regular",
        description:
          "Reproducible Biological Data Analysis and Emerging Technologies. Surveys best-practice guidelines across genomics, transcriptomics, single-cell, and spatial data analysis, culminating in AI/ML reproducibility challenges.",
        tags: ["Reproducibility", "Bioinformatics", "AI/ML"],
      },
      {
        code: "BIOS 30318/60318",
        title: "Intro to Biocomputing",
        credits: "3 cr",
        terms: "Fa2026",
        type: "regular",
        description:
          "Foundational biocomputational skills: Unix Shell, existing software tools, and R scripting for data processing, statistics, modeling, bioinformatics, and machine learning.",
        tags: ["Unix", "R", "Biocomputing"],
      },
    ],
    special: [
      {
        title: "Quant Camp 2025",
        description:
          "Day 3 instructor focusing on reproducible research, R Markdown, and ggplot2. Achieved a 100% recommendation rate from participants.",
        highlight: "100% recommendation rate",
      },
      {
        title: "SuperBugs CURE: Sp2025, Sp2026",
        description:
          "3 lab sessions in bioinformatics teaching of RNA-Seq datasets including analysis and visualizations. Several undergraduates now doing research in the lab.",
      },
      {
        title: "Daphnia CURE: Sp2025, Sp2026",
        description:
          "6 lab sessions in bioinformatics teaching of RNA-Seq datasets including analysis and visualizations. Several undergraduates now doing research in the lab.",
      },
    ],
  },
  {
    name: "University of Alabama at Birmingham",
    period: "2017 – 2022",
    courses: [
      {
        code: "BY 634/734",
        title: "Functional Genomics and Systems Biology",
        credits: "3 cr",
        terms: "Sp2022",
        type: "regular",
        description:
          "Foundation in complex biological genomic data. Covers high-throughput genomics, transcriptomics, proteomics, metabolomics, and basic bioinformatics for systems biology.",
        tags: ["Genomics", "Systems Biology", "Bioinformatics"],
      },
      {
        code: "BY116L / BY123L / BY102L",
        title: "Intro Human Physiology / Intro Biology / Topics Contemporary Bio (Labs)",
        credits: "Lab",
        terms: "Sp2018 – Su2019",
        type: "regular",
        description: "Undergraduate laboratory instruction across core biology, human physiology, and contemporary biology courses.",
        tags: ["Lab Instruction", "Undergraduate"],
      },
    ],
    special: [
      {
        title: "Certified Carpentries Workshop Instructor",
        description: "Trained and certified instructor following Carpentries best practices.",
        isHeader: true,
      },
      {
        title: "Bulk RNA-Seq Data Analysis Workshop — Summer 2024",
        description:
          "Hands-on training for 40 students, staff, and faculty in bulk RNA-Seq data analysis following Carpentries best practices.",
        url: "https://u-bds.github.io/bulk_RNA_seq_workshop/",
        highlight: "40 participants",
      },
      {
        title: "R for Reproducible Scientific Analysis — Fa2023",
        description:
          "Hands-on training for 40 participants in reproducible scientific analysis practices in biological data science.",
        url: "https://u-bds.github.io/2023-12-14-uab/",
        highlight: "40 participants",
      },
    ],
  },
];

const OVERVIEW_STATS = [
  { val: "3", label: "Regular Courses at ND" },
  { val: "Carpentries", label: "Certified Instructor" },
  { val: "100%", label: "QC25 Recommendation Rate" },
  { val: "GenomiX", label: "Faculty Advisor, GXND Club" },
];

const TAG_COLORS = {
  "Genomics": "#4ade80",
  "RNA-seq": "#86efac",
  "scRNA-seq": "#34d399",
  "Reproducibility": "#a78bfa",
  "Bioinformatics": "#60a5fa",
  "AI/ML": "#f472b6",
  "Unix": "#fb923c",
  "R": "#38bdf8",
  "Biocomputing": "#4ade80",
  "Systems Biology": "#fbbf24",
  "Lab Instruction": "#94a3b8",
  "Undergraduate": "#64748b",
};

export default function TeachingSection() {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <section id="Teaching" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(255,255,255,0.008)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <Reveal><div className="section-label">Teaching &amp; Advising</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Educating the Next Generation</h2></Reveal>
        <Reveal delay={0.08}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(232,237,233,0.65)", maxWidth: 760, lineHeight: 1.75, marginTop: 16 }}>
            Trained through <strong style={{ color: "#86efac" }}>The Carpentries</strong>, I teach genomics, bioinformatics, and computational genomics at undergraduate and graduate levels, and run workshops in reproducible research and biological data science — equipping the next generation of life science leaders with emerging skills.
          </p>
        </Reveal>

        {/* Quick-stat bar */}
        <Reveal delay={0.12}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 44, marginBottom: 56 }}>
            {OVERVIEW_STATS.map((s) => (
              <div key={s.label} style={{
                flex: "1 1 180px",
                background: "rgba(74,222,128,0.06)",
                border: "1px solid rgba(74,222,128,0.15)",
                borderRadius: 12,
                padding: "20px 24px",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 22, color: "#4ade80", marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Institutions */}
        {INSTITUTIONS.map((inst, instIdx) => (
          <Reveal key={inst.name} delay={instIdx * 0.1}>
            <div style={{ marginBottom: 60 }}>
              {/* Institution header */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 16px", marginBottom: 28 }}>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, color: "#ecfdf3", margin: 0 }}>{inst.name}</h3>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4ade80", fontWeight: 600 }}>{inst.period}</span>
              </div>

              {/* Regular Courses */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(232,237,233,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  Regular Courses
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {inst.courses.map((course, ci) => {
                    const key = `${instIdx}-${ci}`;
                    const open = !!expanded[key];
                    return (
                      <div
                        key={key}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          borderRadius: 12,
                          padding: "18px 22px",
                          cursor: "pointer",
                          transition: "border-color 0.2s, background 0.2s",
                        }}
                        onClick={() => toggle(key)}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; e.currentTarget.style.background = "rgba(74,222,128,0.04)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(key); } }}
                        aria-expanded={open}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 10px", alignItems: "baseline", marginBottom: 4 }}>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#4ade80" }}>{course.code}</span>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#ecfdf3" }}>{course.title}</span>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.45)" }}>{course.terms}</span>
                              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(232,237,233,0.2)", display: "inline-block" }} />
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.45)" }}>{course.credits}</span>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                            {course.tags && course.tags.map((tag) => (
                              <span key={tag} style={{
                                fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
                                color: TAG_COLORS[tag] || "#86efac",
                                background: `${TAG_COLORS[tag] || "#86efac"}18`,
                                border: `1px solid ${TAG_COLORS[tag] || "#86efac"}30`,
                                borderRadius: 6, padding: "2px 8px",
                              }}>{tag}</span>
                            ))}
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(232,237,233,0.4)", marginLeft: 4, transition: "transform 0.2s", display: "inline-block", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
                          </div>
                        </div>

                        {/* Expanded description */}
                        {open && (
                          <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(232,237,233,0.65)", lineHeight: 1.7, margin: 0 }}>{course.description}</p>
                            {course.url && (
                              <a href={course.url} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{ display: "inline-block", marginTop: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#4ade80", textDecoration: "none" }}>
                                Course Website →
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Special Teaching */}
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(232,237,233,0.4)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                  Special Teaching
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {inst.special.map((s, si) => (
                    <div key={si} style={{
                      background: s.isHeader ? "transparent" : "rgba(255,255,255,0.02)",
                      border: s.isHeader ? "none" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: s.isHeader ? 0 : 10,
                      padding: s.isHeader ? "4px 0" : "14px 20px",
                      display: "flex", flexWrap: "wrap", gap: 10, alignItems: "flex-start",
                    }}>
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: s.isHeader ? 700 : 600, fontSize: s.isHeader ? 14 : 14, color: s.isHeader ? "#4ade80" : "#ecfdf3", marginBottom: s.description ? 4 : 0 }}>
                          {s.title}
                        </div>
                        {s.description && (
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.55)", lineHeight: 1.65, margin: 0 }}>{s.description}</p>
                        )}
                        {s.url && (
                          <a href={s.url} target="_blank" rel="noopener noreferrer"
                            style={{ display: "inline-block", marginTop: 6, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#4ade80", textDecoration: "none" }}>
                            Workshop Website →
                          </a>
                        )}
                      </div>
                      {s.highlight && (
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "#4ade80", background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 6, padding: "3px 10px", flexShrink: 0, alignSelf: "flex-start" }}>
                          {s.highlight}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Curriculum Development + Advising */}
        <Reveal delay={0.15}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 12 }}>
            <div style={{ flex: "1 1 280px", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 14, padding: "24px 26px" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(74,222,128,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Curriculum Development</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#ecfdf3", marginBottom: 8 }}>BIOS 40132/60132 — Intro to Computational Genomics</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.6)", lineHeight: 1.7, margin: 0 }}>
                Developed the complete course from scratch: syllabus, teaching materials, hands-on exercises, and student resources.
              </p>
            </div>
            <div style={{ flex: "1 1 280px", background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 14, padding: "24px 26px" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(74,222,128,0.6)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>Academic Advising</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, color: "#ecfdf3", marginBottom: 8 }}>Faculty Advisor — GenomiX Club (GXND)</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.6)", lineHeight: 1.7, margin: 0 }}>
                Faculty advisor for the <em>GenomiX</em> Club of Notre Dame, supporting student-driven initiatives in genomics and data science.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
