import React, { useState } from "react";
import Reveal from "./Reveal";
import { PUBLICATIONS } from "../data/constants";

export default function PublicationsSection() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? PUBLICATIONS : PUBLICATIONS.slice(0, 6);

  return (
    <section id="Publications" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Publications</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Recent Work</h2></Reveal>
        <Reveal delay={0.08}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.48)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 28 }}>
            {PUBLICATIONS.length} papers · chronological
          </div>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
          {visible.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="pub-card"
                onClick={p.url ? () => window.open(p.url, "_blank", "noopener,noreferrer") : undefined}
                onKeyDown={p.url ? (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    window.open(p.url, "_blank", "noopener,noreferrer");
                  }
                } : undefined}
                role={p.url ? "link" : undefined}
                tabIndex={p.url ? 0 : undefined}
              >
                <div className="pub-header">
                  <span className="pub-year">{p.year}</span>
                  <span className="pub-category">{p.category}</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4, lineHeight: 1.45 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.35)", marginBottom: 2, lineHeight: 1.4 }}>{p.authors}</p>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4ade80", fontStyle: "italic", opacity: 0.7 }}>{p.journal}</span>
                  {p.url ? (
                    <div style={{ marginTop: 6 }}>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#bbf7d0", textDecoration: "none" }}>
                        {`DOI: ${p.doi}`}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {PUBLICATIONS.length > 6 && (
          <Reveal delay={0.2}>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <button className="btn-outline" style={{ padding: "10px 18px", fontSize: 13 }} onClick={() => setShowAll((v) => !v)}>
                {showAll ? "Show Featured Set" : `Show All ${PUBLICATIONS.length}`}
              </button>
            </div>
          </Reveal>
        )}
        <Reveal delay={0.4}>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="btn-outline" onClick={() => window.open("https://scholar.google.com/citations?hl=en&user=SALNvQ8AAAAJ&view_op=list_works&sortby=pubdate", "_blank")}>
              View All Publications on Google Scholar →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
