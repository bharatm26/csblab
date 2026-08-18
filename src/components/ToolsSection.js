import React from "react";
import Reveal from "./Reveal";

const TOOLS = [
  {
    title: "Bulk RNA-Seq Data Analysis Workshop",
    desc: "End-to-end hands-on training in bulk RNA-seq analysis following Carpentries best practices. Covers QC, alignment, differential expression, and visualization.",
    tags: ["RNA-seq", "R", "Reproducibility"],
    url: "https://u-bds.github.io/bulk_RNA_seq_workshop/",
    label: "Workshop Materials",
    status: "available",
  },
  {
    title: "R for Reproducible Scientific Analysis",
    desc: "Carpentries-style workshop covering reproducible data analysis in R — R Markdown, ggplot2, tidyverse, and best practices for biological data science.",
    tags: ["R", "ggplot2", "Reproducibility"],
    url: "https://u-bds.github.io/2023-12-14-uab/",
    label: "Workshop Materials",
    status: "available",
  },
  {
    title: "Introduction to Computational Genomics (Course Materials)",
    desc: "Course materials for BIOS 40132/60132 at Notre Dame. Covers genomics QC, bulk RNA-seq, and single-cell RNA-seq analysis with hands-on notebooks.",
    tags: ["Genomics", "scRNA-seq", "RNA-seq"],
    url: "https://github.com/GBCF-Bioinformatics-ND/ND_ICG_FA2025",
    label: "GitHub",
    status: "available",
  },
  {
    title: "ddRAD-Seq Workflow",
    desc: "A reproducible pipeline for double-digest Restriction-site Associated DNA sequencing (ddRAD-Seq) data processing, variant calling, and population genomics analysis.",
    tags: ["ddRAD-Seq", "Population Genomics", "NGS"],
    status: "available",
  },
  {
    title: "Amplicon Analysis & Functional Visualizer",
    desc: "Workflow for amplicon sequencing analysis with integrated functional annotation and interactive visualization of microbial community composition and diversity.",
    tags: ["Amplicon", "Microbiome", "Visualization"],
    status: "available",
  },
  {
    title: "scRNA-Seq Explorer",
    desc: "Interactive single-cell RNA-seq exploration tool for quality control, dimensionality reduction, clustering, and differential gene expression across cell populations.",
    tags: ["scRNA-seq", "Visualization", "R"],
    status: "available",
  },
  {
    title: "MAGmutome",
    desc: "A workflow for reconstructing metagenome-assembled genomes (MAGs) and profiling their mutational landscape to study microbial evolution and adaptation.",
    tags: ["Metagenomics", "MAGs", "Microbial Evolution"],
    status: "available",
    collab: { name: "GoswamiLab", url: "https://goswamilab.squarespace.com/" },
  },
  {
    title: "Xenium 5k Squidpy",
    desc: "Analysis pipeline for 10x Xenium 5k spatial transcriptomics data using Squidpy — covering spatial gene expression, cell-cell interaction, and neighborhood analysis.",
    tags: ["Spatial Transcriptomics", "Xenium", "Squidpy"],
    status: "available",
  },
  {
    title: "Visium Analysis",
    desc: "End-to-end workflow for 10x Visium spatial transcriptomics including spot deconvolution, spatially variable gene detection, and integration with single-cell references.",
    tags: ["Visium", "Spatial Transcriptomics", "Deconvolution"],
    status: "available",
  },
  {
    title: "CAMBIUM",
    desc: "A modular framework for plant single-cell GRN analysis, orthology mapping, regulon transfer, cross-species integration, in silico perturbation, and cell-cell communication.",
    tags: ["scRNA-seq", "GRN", "Plants", "Cross-species"],
    status: "development",
  },
];

const STATUS_STYLES = {
  available: { bg: "rgba(74,222,128,0.12)", color: "#4ade80", label: "Available" },
  development: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", label: "In Development" },
};

export default function ToolsSection() {
  return (
    <section id="Tools" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Tools &amp; Resources</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Reproducible Workflows for NGS Data Analysis</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 640, marginBottom: 52 }}>
            Open computational resources, workshop materials, and software developed by the CSBLab to support reproducible biological data science.
          </p>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {TOOLS.map((tool, i) => {
            const s = STATUS_STYLES[tool.status];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: s.bg, color: s.color, padding: "3px 10px", borderRadius: 20 }}>
                      {s.label}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 10, lineHeight: 1.35 }}>{tool.title}</h3>
                  <p style={{ color: "rgba(232,237,233,0.55)", fontSize: 14.5, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", flex: 1 }}>{tool.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
                    {tool.tags.map((tag, j) => (
                      <span key={j} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, background: "rgba(134,239,172,0.1)", color: "#86efac", padding: "3px 10px", borderRadius: 20 }}>{tag}</span>
                    ))}
                  </div>
                  {tool.collab && (
                    <p style={{ marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)" }}>
                      In collaboration with{" "}
                      <a href={tool.collab.url} target="_blank" rel="noopener noreferrer" style={{ color: "#bbf7d0", textDecoration: "underline" }}>{tool.collab.name}</a>
                    </p>
                  )}
                  {tool.url && (
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 18, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "#bbf7d0", textDecoration: "none" }}>
                      {tool.label} →
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
