import React from "react";
import Reveal from "./Reveal";

export default function ImpactSection() {
  return (
    <section id="Impact" style={{ padding: "100px clamp(20px,6vw,80px)", background: "linear-gradient(180deg, rgba(74,222,128,0.08) 0%, transparent 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Why It Matters</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title" style={{ maxWidth: 600 }}>Science With Real-World Impact</h2></Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 800, marginBottom: 48 }}>
            Propelled by the convergence of AI, systems biology, and bioinformatics, advancements in biological sciences have transcended the purely academic, reaching into domains with profound social impact. These interdisciplinary approaches not only enrich scientific knowledge but also empower us to tackle critical societal challenges, including optimizing food systems, healthcare, healthy aging, and ensuring equitable access to resources.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
