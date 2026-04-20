import React, { useState, useEffect, useRef } from "react";
import logoSrc from "./logo.svg";

const SECTIONS = ["Home", "Research", "Impact", "Team", "Publications", "News", "Fun Stuff", "Join Us"];
const LOGO_SRC = logoSrc;

// --- Animated counter ---
function Counter({ end, suffix = "", duration = 2000 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = end / (duration / 16);
        const id = setInterval(() => {
          start += step;
          if (start >= end) { setVal(end); clearInterval(id); }
          else setVal(Math.floor(start));
        }, 16);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// --- Fade-in on scroll ---
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(.22,1,.36,1), transform 0.7s ${delay}s cubic-bezier(.22,1,.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

// --- DNA Helix Background ---
function HelixBG() {
  return (
    <svg
      style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", opacity: 0.07, pointerEvents: "none" }}
      width="320" height="700" viewBox="0 0 320 700"
    >
      {Array.from({ length: 28 }, (_, i) => {
        const y = i * 25 + 10;
        const x1 = 160 + Math.sin(i * 0.5) * 100;
        const x2 = 160 - Math.sin(i * 0.5) * 100;
        return (
          <g key={i}>
            <circle cx={x1} cy={y} r="5" fill="#4ade80" />
            <circle cx={x2} cy={y} r="5" fill="#22d3ee" />
            {i % 2 === 0 && <line x1={x1} y1={y} x2={x2} y2={y} stroke="#fff" strokeWidth="1.5" opacity="0.4" />}
          </g>
        );
      })}
    </svg>
  );
}

function App() {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTIONS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavBg(window.scrollY > 40);
      let found = false;
      for (const s of SECTIONS) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (!found && rect.top < 120 && rect.bottom > 80) {
            setActiveSection(s);
            found = true;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#080F0D", color: "#E8EDE9", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Global Styles */}
      <style>{`
        ::selection { background: #22d3ee; color: #080F0D; }
        a { color: inherit; text-decoration: none; }
        .nav-link { position: relative; padding: 6px 0; font-size: 14px; letter-spacing: 0.04em; cursor: pointer; transition: color 0.25s; font-family: 'DM Sans', sans-serif; font-weight: 500; }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #4ade80; transition: width 0.3s; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link:hover, .nav-link.active { color: #4ade80; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: linear-gradient(135deg, #059669, #22d3ee); color: #080F0D; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px; border: none; border-radius: 50px; cursor: pointer; transition: transform 0.2s, box-shadow 0.3s; letter-spacing: 0.02em; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(34,211,238,0.3); }
        .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 13px 30px; background: transparent; color: #E8EDE9; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px; border: 2px solid rgba(255,255,255,0.2); border-radius: 50px; cursor: pointer; transition: border-color 0.3s, color 0.3s; }
        .btn-outline:hover { border-color: #4ade80; color: #4ade80; }
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 36px; transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; }
        .card:hover { transform: translateY(-4px); border-color: rgba(74,222,128,0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
        .tag { display: inline-block; padding: 5px 14px; border-radius: 50px; font-size: 12px; font-family: 'DM Sans', sans-serif; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
        .section-label { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #4ade80; margin-bottom: 16px; }
        .section-title { font-size: clamp(30px, 5vw, 48px); font-weight: 700; line-height: 1.15; margin-bottom: 20px; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 101; }
        .hamburger span { width: 24px; height: 2px; background: #E8EDE9; transition: 0.3s; }
        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>

      {/* ===== NAV ===== */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(20px, 4vw, 60px)",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navBg ? "rgba(8,15,13,0.92)" : "transparent",
        backdropFilter: navBg ? "blur(16px)" : "none",
        borderBottom: navBg ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={LOGO_SRC} alt="CSB Lab" style={{ height: 72, maxHeight: 80, width: "auto", objectFit: "contain", transition: "height 0.3s" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}></span>
        </div>
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {SECTIONS.map((s, idx) => (
            <span key={s} className={`nav-link ${activeSection === s ? "active" : ""}`} onClick={() => {
              setActiveSection(s);
              document.getElementById(s)?.scrollIntoView({ behavior: "smooth" });
            }}>{s}</span>
          ))}
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={menuOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu" style={{
        display: "none", position: "fixed", inset: 0, zIndex: 99,
        background: "rgba(8,15,13,0.97)", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32,
        opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none", transition: "opacity 0.3s",
      }}>
        {SECTIONS.map((s, idx) => (
          <span key={s} style={{ fontSize: 22, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, cursor: "pointer", color: activeSection === s ? "#4ade80" : "#E8EDE9" }}
            onClick={() => { setActiveSection(s); setMenuOpen(false); document.getElementById(s)?.scrollIntoView({ behavior: "smooth" }); }}
          >{s}</span>
        ))}
      </div>

      {/* ===== HERO ===== */}
      <section id="Home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "120px clamp(20px,6vw,80px) 80px" }}>
        {/* gradient orbs */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(5,150,105,0.25), transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <HelixBG />

        <div style={{ maxWidth: 720, position: "relative", zIndex: 1 }}>
          <Reveal>
            <div className="tag" style={{ background: "rgba(74,222,128,0.18)", color: "#38bdf8", marginBottom: 8, fontSize: 22, fontWeight: 800, letterSpacing: "0.01em", textShadow: "0 2px 16px #38bdf888" }}>
              Computational Systems Biology Lab (CSBLab)
            </div>
            <div className="tag" style={{ background: "rgba(74,222,128,0.12)", color: "#4ade80", marginBottom: 28 }}>
              University of Notre Dame · Dept. of Biological Sciences
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.025em" }}>
              Decoding Biology<br />Through <span style={{ background: "linear-gradient(135deg, #4ade80, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Computation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(232,237,233,0.72)", maxWidth: 560, marginBottom: 40, fontWeight: 300 }}>
              We combine AI, systems biology, and multi-omics data to understand how diseases work in plants and animals — advancing food security, healthcare, and healthy aging.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => document.getElementById("Research")?.scrollIntoView({ behavior: "smooth" })}>Explore Our Research →</button>
              <button className="btn-outline" onClick={() => document.getElementById("Join Us")?.scrollIntoView({ behavior: "smooth" })}>Join the Lab</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px clamp(20px,6vw,80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          {[
            { val: 25, suffix: "+", label: "Publications" },
            { val: 775, suffix: "+", label: "Citations" },
            { val: 5, suffix: "+", label: "Active Projects" },
            { val: 3, suffix: "", label: "Omics Scales" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 42, background: "linear-gradient(135deg,#4ade80,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <Counter end={s.val} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== RESEARCH ===== */}
      <section id="Research" style={{ padding: "100px clamp(20px,6vw,80px)", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Research</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">What We Study</h2></Reveal>
        <Reveal delay={0.1}><p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 640, marginBottom: 52 }}>
          Our lab uses systems biology frameworks to study disease responses across scales — from individual cells to whole organisms — in both plant and animal models.
        </p></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            {
              icon: "🧬",
              title: "Multi-Scale Transcriptomics",
              desc: "We utilize systems biology frameworks to study transcriptomics at different scales (Bulk RNA-Seq, single-cell RNA-Seq, and spatial transcriptomics) and multi-omics profiles to delineate the factors underlying cellular functions. Our central goal is to untangle biological responses at tissue, cellular, and spatial scales, providing unprecedented resolution into cellular function.",
              color: "#4ade80",
              articles: [
                { title: "Phosphorylation dynamics in a flg22-induced, heterotrimeric G-protein dependent signaling network in Arabidopsis thaliana", journal: "Molecular & Cellular Proteomics", year: "2023" },
                { title: "Transcriptional circuitry atlas of genetic diverse unstimulated murine and human macrophages define disparity in population-wide innate immunity", journal: "Scientific Reports", year: "2021" }
              ]
            },
            {
              icon: "🔬",
              title: "Multi-Omics Integration",
              desc: "The advent of multi-omics technologies and AI is revolutionizing biological research. We integrate transcriptomic, proteomic, and metabolomic data using network biology and machine learning to identify patterns in plant-pathogen interactions and gene-trait/pathway associations. Our team is experienced in handling large-scale, collaborative, and reproducible research projects.",
              color: "#22d3ee",
              articles: [
                { title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv (Preprint)", year: "2026" },
                { title: "A pipeline of integrating transcriptome and interactome to elucidate central nodes in host-pathogen interactions", journal: "STAR Protocols", year: "2022" }
              ]
            },
            {
              icon: "🤖",
              title: "AI & Machine Learning",
              desc: "We leverage AI and machine learning to analyze massive biological datasets, predict disease outcomes, identify biomarkers, and discover new therapeutic targets. Our approaches accelerate the identification of master regulators and provide a holistic understanding of gene regulation and cellular adaptation during disease.",
              color: "#f59e0b",
              articles: [
                { title: "Integrative systems biology framework discovers common gene regulatory signatures in mechanistically distinct inflammatory skin diseases", journal: "npj Systems Biology and Applications", year: "2025" },
                { title: "Systems Biology and Machine Learning in Plant–Pathogen Interactions", journal: "MPMI", year: "2019" }
              ]
            },
            {
              icon: "�",
              title: "Biological Systems Biology",
              desc: "We investigate diverse biological systems—from microbial communities to animal models—using integrative omics and systems biology approaches. Our research spans bacterial stress responses, microbial adaptations, disease mechanisms in animal models, and cellular heterogeneity, providing comprehensive insights into how biological systems respond to environmental and disease-related challenges.",
              color: "#06b6d4",
              articles: [
                { title: "Oxidative stress facilitates a diverse adaptive response in bacteria", journal: "bioRxiv (Preprint)", year: "2025" },
                { title: "CD2 expressing innate lymphoid and T cells are critical effectors of immunopathogenesis in hidradenitis suppurativa", journal: "PNAS", year: "2024" }
              ]
            },
            {
              icon: "🌱",
              title: "Plant Disease Systems",
              desc: "We use cross-species integration and systems biology to understand how plants respond to pathogens, optimize food systems, and improve food security. Our modular platforms enable comparison of gene expression across species, revealing evolutionary relationships and conserved responses.",
              color: "#a78bfa",
              articles: [
                { title: "A rice protein interaction network reveals high centrality nodes and candidate pathogen effector targets", journal: "Computational and Structural Biotechnology Journal", year: "2022" },
                { title: "Global temporal dynamic landscape of pathogen-mediated subversion of Arabidopsis innate immunity", journal: "Scientific Reports", year: "2017" }
              ]
            },

          ].map((r, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="card" style={{ height: "100%" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${r.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 20 }}>{r.icon}</div>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{r.title}</h3>
                    <p style={{ color: "rgba(232,237,233,0.55)", fontSize: 14.5, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>{r.desc}</p>
                    {r.articles && (
                      <ul style={{ marginTop: 16, paddingLeft: 18, color: "#b5f5e0", fontSize: 13 }}>
                        {r.articles.map((a, j) => (
                          <li key={j} style={{ marginBottom: 6 }}>
                            <span style={{ fontWeight: 600 }}>{a.title}</span> <span style={{ color: "#4ade80" }}>({a.journal}, {a.year})</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
              {/* ...existing code... */}
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

      {/* ===== WHY IT MATTERS (IMPACT) ===== */}
      <section id="Impact" style={{ padding: "100px clamp(20px,6vw,80px)", background: "linear-gradient(180deg, rgba(5,150,105,0.06) 0%, transparent 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div className="section-label">Why It Matters</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ maxWidth: 600 }}>Science With Real-World Impact</h2></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, marginTop: 48 }}>
            {[
              { icon: "🌾", title: "Food Security", desc: "Our plant disease research helps develop resilient crops, protecting food systems that feed billions of people worldwide.", accent: "#4ade80" },
              { icon: "🏥", title: "Healthcare Advances", desc: "By decoding disease mechanisms at the molecular level, we identify new biomarkers and therapeutic targets for better treatments.", accent: "#22d3ee" },
              { icon: "🧓", title: "Healthy Aging", desc: "Our work on aging-related gene expression helps uncover how to extend healthspan and improve quality of life for aging populations.", accent: "#f59e0b" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card" style={{ borderLeft: `3px solid ${item.accent}` }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: "rgba(232,237,233,0.6)", fontSize: 15, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="Team" style={{ padding: "100px clamp(20px,6vw,80px)", maxWidth: 1200, margin: "0 auto" }}>
        <Reveal><div className="section-label">Our Team</div></Reveal>
        <Reveal delay={0.05}><h2 className="section-title">Meet the People Behind the Science</h2></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 48 }}>
          {[
            { name: "Bharat Mishra, PhD", role: "Principal Investigator", initials: "BM", color: "#059669" },
            { name: "Postdoctoral Researchers", role: "Computational & Experimental", initials: "PR", color: "#22d3ee" },
            { name: "Graduate Students", role: "PhD Candidates", initials: "GS", color: "#a78bfa" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card" style={{ textAlign: "center", padding: 32 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", margin: "0 auto 16px",
                  background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 22, color: "#080F0D"
                }}>{m.initials}</div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{m.name}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.45)" }}>{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, marginTop: 56, marginBottom: 28, color: "#f59e0b" }}>Undergraduate Researchers</h3>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
          {[
            "Anna Heck", "Anna Pham", "Courtney French", "Jade Horcoff",
            "Judy Mammen", "John Mckany", "Katelyn Farrell", "Patrick Dambrogio",
            "Sean Mayer", "Samuel Velazquez-Ocello", "Shannon Walker"
          ].map((name, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card" style={{ textAlign: "center", padding: 20 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", margin: "0 auto 10px",
                  background: "linear-gradient(135deg, #f59e0b, #f59e0b88)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 16, color: "#080F0D"
                }}>{name.split(" ").map(n => n[0]).join("")}</div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{name}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(232,237,233,0.4)" }}>Research Assistant</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p style={{ textAlign: "center", marginTop: 32, color: "rgba(232,237,233,0.45)", fontFamily: "'DM Sans', sans-serif", fontSize: 14 }}>
            Visit the full <span style={{ color: "#4ade80", cursor: "pointer" }}>Team page</span> to see all current and past members.
          </p>
        </Reveal>
      </section>

      {/* ===== RECENT PUBLICATIONS ===== */}
      <section id="Publications" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div className="section-label">Publications</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Recent Work</h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
            {[
              { year: "2026", title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv (Preprint)", authors: "Mishra B, Kumar N, Sun Y, Detchemendy T, Thingujam D, Flannery A, Mukhtar K, Mukhtar S" },
              { year: "2025", title: "Oxidative stress facilitates a diverse adaptive response in bacteria", journal: "bioRxiv (Preprint)", authors: "Bulaoro E, Mishra B, McConnell MJ, Goswami A" },
              { year: "2025", title: "Integrative systems biology framework discovers common gene regulatory signatures in mechanistically distinct inflammatory skin diseases", journal: "npj Systems Biology and Applications", authors: "Mishra B, [...], Mukhtar MS" },
              { year: "2024", title: "CD2 expressing innate lymphoid and T cells are critical effectors of immunopathogenesis in hidradenitis suppurativa", journal: "PNAS", authors: "Kashyap M†, Mishra B†, [...], Mukhtar MS, Raman C" },
              { year: "2023", title: "Phosphorylation dynamics in a flg22-induced, heterotrimeric G-protein dependent signaling network in Arabidopsis thaliana", journal: "Molecular & Cellular Proteomics", authors: "Watkins JM, [...], Mishra B, Jones AM" },
              { year: "2022", title: "A pipeline of integrating transcriptome and interactome to elucidate central nodes in host-pathogen interactions", journal: "STAR Protocols", authors: "Kumar N, Mishra B, Mukhtar MS" },
              { year: "2022", title: "A rice protein interaction network reveals high centrality nodes and candidate pathogen effector targets", journal: "Computational and Structural Biotechnology Journal", authors: "Mishra B, Kumar N, Mukhtar MS" },
              { year: "2021", title: "Transcriptional circuitry atlas of genetic diverse unstimulated murine and human macrophages define disparity in population-wide innate immunity", journal: "Scientific Reports", authors: "Mishra B, Athar M, Mukhtar MS" },
              { year: "2020", title: "Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis", journal: "iScience", authors: "Kumar N†, Mishra B†, [...], Mukhtar MS" },
              { year: "2019", title: "Systems Biology and Machine Learning in Plant–Pathogen Interactions", journal: "MPMI", authors: "Mishra B, Kumar N, Mukhtar MS" },
              { year: "2017", title: "Global temporal dynamic landscape of pathogen-mediated subversion of Arabidopsis innate immunity", journal: "Scientific Reports", authors: "Mishra B, Sun Y, Ahmed H, Liu X, Mukhtar MS" },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: 20, padding: "24px 28px",
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 14, cursor: "pointer", transition: "border-color 0.3s",
                }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, color: "#4ade80", minWidth: 44 }}>{p.year}</span>
                  <div>
                    <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, marginBottom: 4, lineHeight: 1.45 }}>{p.title}</h4>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.35)", marginBottom: 2, lineHeight: 1.4 }}>{p.authors}</p>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4ade80", fontStyle: "italic", opacity: 0.7 }}>{p.journal}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <button className="btn-outline" onClick={() => window.open("https://scholar.google.com/citations?hl=en&user=SALNvQ8AAAAJ&view_op=list_works&sortby=pubdate", "_blank")}>View All Publications on Google Scholar →</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== NEWS ===== */}
            {/* ===== LAB2TAB PIPELINE (IN MAIN PAGE) ===== */}
            <section id="Lab2TAB Pipeline" style={{ padding: "100px clamp(20px,6vw,80px)", background: "rgba(56,189,248,0.04)" }}>
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
      <section id="News" style={{ padding: "100px clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div className="section-label">News</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Latest Updates</h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
            {[
              { date: "Ongoing", title: "Genomics Data Science Office Hours — Thursdays 1–2 PM", desc: "Drop in for bioinformatics consultations, analysis support, and data science questions. 3015 McCourtney Hall East. Open to all Notre Dame researchers.", tag: "Office Hours" },
              { date: "Ongoing", title: "GenomiX Club of Notre Dame", desc: "A graduate student Genomics Data Science club fostering community and learning. Dr. Bharat Mishra serves as the faculty advisor.", tag: "Student Club" },
              { date: "Mar 2026", title: "New preprint on amino acid transport in Arabidopsis susceptibility", desc: "Our latest work integrating omics and network biology to reveal transcriptional changes during Pseudomonas syringae infection is now available on bioRxiv.", tag: "Preprint" },
              { date: "Feb 2025", title: "Paper published in npj Systems Biology and Applications", desc: "Our integrative systems biology framework identifies common gene regulatory signatures across mechanistically distinct inflammatory skin diseases.", tag: "Publication" },
              { date: "Jan 2025", title: "Dr. Mishra joins University of Notre Dame", desc: "Bharat Mishra joins Notre Dame as Assistant Professor of the Practice and Principal Bioinformatician for the Genomics and Bioinformatics Core Facility.", tag: "Announcement" },
              { date: "Nov 2024", title: "PNAS paper on hidradenitis suppurativa", desc: "Our collaborative study identifying CD2 as a key therapeutic target in HS is published in PNAS, opening new avenues for treatment.", tag: "Publication" },
              { date: "Oct 2025", title: "Oxidative stress study posted on bioRxiv", desc: "New preprint exploring how oxidative stress facilitates diverse adaptive responses across multiple bacterial species.", tag: "Preprint" },
            ].map((n, i) => (
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
                      <span className="tag" style={{ background: n.tag === "Publication" ? "rgba(74,222,128,0.12)" : n.tag === "Preprint" ? "rgba(34,211,238,0.12)" : n.tag === "Office Hours" ? "rgba(251,113,133,0.12)" : n.tag === "Student Club" ? "rgba(167,139,250,0.12)" : "rgba(245,158,11,0.12)", color: n.tag === "Publication" ? "#4ade80" : n.tag === "Preprint" ? "#22d3ee" : n.tag === "Office Hours" ? "#fb7185" : n.tag === "Student Club" ? "#a78bfa" : "#f59e0b", fontSize: 10 }}>{n.tag}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(232,237,233,0.5)", lineHeight: 1.6 }}>{n.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FUN STUFF ===== */}
      <section id="Fun Stuff" style={{ padding: "100px clamp(20px,6vw,80px)", background: "linear-gradient(180deg, rgba(34,211,238,0.04) 0%, transparent 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><div className="section-label">Fun Stuff</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">TGIF — Our Friday Rituals</h2></Reveal>
          <Reveal delay={0.1}><p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, maxWidth: 640, marginBottom: 48 }}>
            Lab meetings are on Fridays. Here's how we make it through — and celebrate after.
          </p></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            {[
              { emoji: "☕", title: "Friday Fuel", desc: "Coffee is non-negotiable on lab meeting Fridays. We've lost count, but the machine hasn't.", stat: "∞ cups", color: "#f59e0b" },
              { emoji: "🍕", title: "Friday Bites", desc: "Post-meeting pizza is the unofficial reward for surviving another week of debugging pipelines.", stat: "Every Fri", color: "#fb7185" },
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

      {/* ===== JOIN US ===== */}
      <section id="Join Us" style={{ padding: "100px clamp(20px,6vw,80px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.1), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal><div className="section-label">Join Us</div></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">Be Part of Our Research</h2></Reveal>
          <Reveal delay={0.1}><p style={{ color: "rgba(232,237,233,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
            We welcome motivated researchers at all levels — postdocs, graduate students, and undergraduates — who are passionate about computational biology and making a real-world impact.
          </p></Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 44 }}>
              {[
                { role: "Postdoctoral Fellows", desc: "Bioinformatics, systems biology, or related fields" },
                { role: "PhD Students", desc: "Computational biology or plant/animal genomics" },
                { role: "Undergraduates", desc: "Research assistantships with mentorship" },
              ].map((r, i) => (
                <div key={i} className="card" style={{ padding: 24, textAlign: "left" }}>
                  <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 6, color: "#4ade80" }}>{r.role}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(232,237,233,0.5)", lineHeight: 1.5 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="btn-primary" onClick={() => window.open("mailto:bmishra2@nd.edu")}>Contact Dr. Mishra — bmishra2@nd.edu</button>
          </Reveal>
        </div>
      </section>

      {/* Removed old Lab2TAB page routing */}
      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "48px clamp(20px,6vw,80px) 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img src={LOGO_SRC} alt="CSB Lab" style={{ height: 90, maxHeight: 120, width: "auto", objectFit: "contain", transition: "height 0.3s" }} />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18 }}></span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(232,237,233,0.5)", lineHeight: 1.7, maxWidth: 340, marginTop: 12 }}>
              Computational Systems Biology Lab<br />
              Department of Biological Sciences<br />
              University of Notre Dame<br />
              3028C McCourtney Hall East<br />
              Notre Dame, IN 46556 USA
            </p>
          </div>
          <div style={{ display: "flex", gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "rgba(232,237,233,0.5)" }}>
              <span style={{ fontWeight: 700, color: "#E8EDE9", marginBottom: 4 }}>Links</span>
              {["Bluesky", "LinkedIn", "ResearchGate", "Google Scholar", "GitHub"].map((l, i) => {
                const urls = {
                  "Bluesky": "https://bsky.app/profile/bharatm.bsky.social",
                  "LinkedIn": "https://www.linkedin.com/in/bharat-mishra-phd-b0579223",
                  "ResearchGate": "https://www.researchgate.net/profile/Bharat-Mishra-2",
                  "Google Scholar": "https://scholar.google.com/citations?user=SALNvQ8AAAAJ&hl=en",
                  "GitHub": "https://github.com/bharatm26"
                };
                return (
                <span key={l} style={{ cursor: "pointer", transition: "color 0.2s" }}
                  onClick={() => window.open(urls[l], "_blank")}
                  onMouseEnter={e => e.target.style.color = "#4ade80"}
                  onMouseLeave={e => e.target.style.color = "rgba(232,237,233,0.5)"}
                >{l}</span>
              )})}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "rgba(232,237,233,0.5)" }}>
              <span style={{ fontWeight: 700, color: "#E8EDE9", marginBottom: 4 }}>Navigate</span>
              {SECTIONS.map(s => (
                <span key={s} style={{ cursor: "pointer", transition: "color 0.2s" }}
                  onClick={() => document.getElementById(s)?.scrollIntoView({ behavior: "smooth" })}
                  onMouseEnter={e => e.target.style.color = "#4ade80"}
                  onMouseLeave={e => e.target.style.color = "rgba(232,237,233,0.5)"}
                >{s}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.04)", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(232,237,233,0.25)", textAlign: "center" }}>
          © 2026 Computational Systems Biology Lab, University of Notre Dame. All rights reserved.
        </div>
      </footer>

      {/* ===== IMPACT, TEAM, PUBLICATIONS, NEWS, FUN STUFF, JOIN US, FOOTER sections go here (continue as in your original JSX) */}

      {/* ===== RESEARCH ===== */}
      {/* ...existing code for research, pipeline, impact, team, publications, news, fun stuff, join us, footer... */}

      {/* ...existing sections from csblab_website.jsx (stats, research, pipeline, impact, team, publications, news, fun stuff, join us, footer) go here... */}
      {/* For brevity, you can continue copying the JSX structure as needed. */}
    </div>
  );
}

export default App;
