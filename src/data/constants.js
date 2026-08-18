export const SECTION_LINKS = [
  { label: "Home", target: "Home" },
  { label: "Research", target: "Research" },
  { label: "Detailed Areas", target: "DetailedResearch" },
  { label: "Impact", target: "Impact" },
  { label: "Team", target: "Team" },
  { label: "Teaching", target: "Teaching" },
  { label: "Publications", target: "Publications" },
  { label: "News", target: "News" },
  { label: "Fun Stuff", target: "Fun Stuff" },
  { label: "Join Us", target: "Join Us" },
];

export const LOGO_SRC = `${process.env.PUBLIC_URL}/csblab_logo.png`;
export const FOOTER_LOGO_SRC = `${process.env.PUBLIC_URL}/csblab_logo.png`;
export const HERO_NETWORK_ICON = `${process.env.PUBLIC_URL}/csblab-icon-white.png`;

export const PUBLICATIONS = [
  { year: "2026", title: "Multi-Omics Integration Predicts Cell-Specific Gene Regulatory Response and Rhizosphere Dynamics in Maize Root Fertilizer Treatment", journal: "bioRxiv (Preprint)", authors: "Horcoff J, Goswami A, Mishra B", doi: "10.64898/2026.08.16.744839", url: "https://doi.org/10.64898/2026.08.16.744839", category: "Multi-omics" },
  { year: "2026", title: "Chronic Inorganic Fertilization Shifts Evolutionary Trajectories and Induces a Regulatory Shield in Maize Rhizosphere Bacteria", journal: "Preprint", authors: "Bharat Mishra; Anuradha Goswami", doi: "10.64898/2026.06.04.729967", url: "https://doi.org/10.64898/2026.06.04.729967", category: "Multi-omics" },
  { year: "2026", title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv (Preprint)", authors: "Mishra B, Kumar N, Sun Y, Detchemendy T, Thingujam D, Flannery A, Mukhtar K, Mukhtar S", doi: "10.64898/2026.03.25.714176", url: "https://doi.org/10.64898/2026.03.25.714176", category: "Plant Systems" },
  { year: "2025", title: "Oxidative stress facilitates a diverse adaptive response in bacteria", journal: "bioRxiv (Preprint)", authors: "Bulaoro E, Mishra B, McConnell MJ, Goswami A", doi: "10.1101/2025.10.09.681464", url: "https://doi.org/10.1101/2025.10.09.681464", category: "Biomedical" },
  { year: "2025", title: "Integrative systems biology framework discovers common gene regulatory signatures in mechanistically distinct inflammatory skin diseases", journal: "npj Systems Biology and Applications", authors: "Mishra B, [...], Mukhtar MS", doi: "10.1038/s41540-025-00498-x", url: "https://doi.org/10.1038/s41540-025-00498-x", category: "AI & Modeling" },
  { year: "2024", title: "CD2 expressing innate lymphoid and T cells are critical effectors of immunopathogenesis in hidradenitis suppurativa", journal: "PNAS", authors: "Kashyap M†, Mishra B†, [...], Mukhtar MS, Raman C", doi: "10.1073/pnas.2409274121", url: "https://doi.org/10.1073/pnas.2409274121", category: "Biomedical" },
  { year: "2023", title: "Phosphorylation dynamics in a flg22-induced, heterotrimeric G-protein dependent signaling network in Arabidopsis thaliana", journal: "Molecular & Cellular Proteomics", authors: "Watkins JM, [...], Mishra B, Jones AM", doi: "10.1016/j.mcpro.2023.100705", url: "https://doi.org/10.1016/j.mcpro.2023.100705", category: "Plant Systems" },
  { year: "2022", title: "A pipeline of integrating transcriptome and interactome to elucidate central nodes in host-pathogen interactions", journal: "STAR Protocols", authors: "Kumar N, Mishra B, Mukhtar MS", doi: "10.1016/j.xpro.2022.101608", url: "https://doi.org/10.1016/j.xpro.2022.101608", category: "Methods" },
  { year: "2022", title: "A rice protein interaction network reveals high centrality nodes and candidate pathogen effector targets", journal: "Computational and Structural Biotechnology Journal", authors: "Mishra B, Kumar N, Mukhtar MS", doi: "10.1016/j.csbj.2022.04.027", url: "https://doi.org/10.1016/j.csbj.2022.04.027", category: "Plant Systems" },
  { year: "2021", title: "Transcriptional circuitry atlas of genetic diverse unstimulated murine and human macrophages define disparity in population-wide innate immunity", journal: "Scientific Reports", authors: "Mishra B, Athar M, Mukhtar MS", doi: "10.1038/s41598-021-86742-w", url: "https://doi.org/10.1038/s41598-021-86742-w", category: "Biomedical" },
  { year: "2020", title: "Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis", journal: "iScience", authors: "Kumar N†, Mishra B†, [...], Mukhtar MS", doi: "10.1016/j.isci.2020.101526", url: "https://doi.org/10.1016/j.isci.2020.101526", category: "Multi-omics" },
  { year: "2019", title: "Systems Biology and Machine Learning in Plant-Pathogen Interactions", journal: "MPMI", authors: "Mishra B, Kumar N, Mukhtar MS", doi: "10.1094/MPMI-08-18-0221-FI", url: "https://doi.org/10.1094/MPMI-08-18-0221-FI", category: "AI & Modeling" },
  { year: "2017", title: "Global temporal dynamic landscape of pathogen-mediated subversion of Arabidopsis innate immunity", journal: "Scientific Reports", authors: "Mishra B, Sun Y, Ahmed H, Liu X, Mukhtar MS", doi: "10.1038/s41598-017-08073-z", url: "https://doi.org/10.1038/s41598-017-08073-z", category: "Plant Systems" },
];

export const STATS = [
  { val: 26, suffix: "", label: "Publications" },
  { val: 840, suffix: "", label: "Citations" },
  { val: 14, suffix: "", label: "h-index" },
  { val: 18, suffix: "", label: "i10-index" },
];

export const RESEARCH_THEMES = [
  {
    icon: "�",
    title: "Plant Regulatory Genomics",
    desc: "We build multi-context gene regulatory and protein interaction networks for plants — from Arabidopsis to non-model crops — tackling the core gap that no ENCODE-scale regulatory map exists outside Arabidopsis. Our iDREM dynamic modeling, network centrality, and pySCENIC-based inference toolkit directly address species-specific regulatory inference from sparse data.",
    color: "#4ade80",
    articles: [
      { title: "Multi-Omics Integration Predicts Cell-Specific Gene Regulatory Response and Rhizosphere Dynamics in Maize Root Fertilizer Treatment", journal: "bioRxiv", year: "2026", doi: "10.64898/2026.08.16.744839", url: "https://doi.org/10.64898/2026.08.16.744839" },
      { title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv", year: "2026", doi: "10.64898/2026.03.25.714176", url: "https://doi.org/10.64898/2026.03.25.714176" },
      { title: "Network Biology Analyses and Dynamic Modeling of Gene Regulatory Networks Under Drought Stress Reveal Major Transcriptional Regulators in Arabidopsis", journal: "Int. J. Mol. Sci.", year: "2023", doi: "10.3390/ijms24087349", url: "https://doi.org/10.3390/ijms24087349" },
      { title: "A rice protein interaction network reveals high centrality nodes and candidate pathogen effector targets", journal: "Computational and Structural Biotechnology Journal", year: "2022", doi: "10.1016/j.csbj.2022.04.027", url: "https://doi.org/10.1016/j.csbj.2022.04.027" },
      { title: "Dynamic regulatory event mining by iDREM in large scale multi-omics datasets during biotic and abiotic stress in plants", journal: "Modeling Transcriptional Regulation, Springer Protocols", year: "2021", authors: "Mishra B, Kumar N, Liu J, Pajerowska-Mukhtar KM" },
      { title: "Dynamic modeling of transcriptional gene regulatory network uncovers distinct pathways during the onset of Arabidopsis leaf senescence", journal: "npj Syst Biol Appl", year: "2018", doi: "10.1038/s41540-018-0071-2", url: "https://doi.org/10.1038/s41540-018-0071-2" },
    ],
  },
  {
    icon: "🔬",
    title: "Single-Cell and Spatial Genomics",
    desc: "We bring single-cell and spatial transcriptomics to plant and crop systems — leveraging Visium and Xenium platforms already running at GBCF, combined with our scRNA-seq analytical toolkit. The goal: cell-type-resolved regulatory maps where bulk-tissue methods see only averaged signal.",
    color: "#86efac",
    articles: [
      { title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv", year: "2026", doi: "10.64898/2026.03.25.714176", url: "https://doi.org/10.64898/2026.03.25.714176" },
      { title: "CD2 expressing innate lymphoid and T cells are critical effectors of immunopathogenesis in hidradenitis suppurativa", journal: "PNAS", year: "2024", doi: "10.1073/pnas.2409274121", url: "https://doi.org/10.1073/pnas.2409274121" },
      { title: "Inference of gene regulatory network from single-cell transcriptomic data using pySCENIC", journal: "Modeling Transcriptional Regulation, Springer Protocols", year: "2021", authors: "Kumar N, Mishra B, Athar M, Mukhtar S" },
    ],
  },
  {
    icon: "🤖",
    title: "Multi-omics and AI-Enabled Systems Biology",
    desc: "We integrate transcriptomic, proteomic, and interaction data across organisms — from SARS-CoV-2 to inflammatory skin disease to rhizosphere bacteria — using machine learning, dynamic modeling, and network frameworks to uncover shared regulatory logic and prioritize targets that no single data type reveals alone.",
    color: "#84cc16",
    articles: [
      { title: "Multi-Omics Integration Predicts Cell-Specific Gene Regulatory Response and Rhizosphere Dynamics in Maize Root Fertilizer Treatment", journal: "bioRxiv", year: "2026", doi: "10.64898/2026.08.16.744839", url: "https://doi.org/10.64898/2026.08.16.744839" },
      { title: "Chronic Inorganic Fertilization Shifts Evolutionary Trajectories and Induces a Regulatory Shield in Maize Rhizosphere Bacteria", journal: "Preprint", year: "2026", doi: "10.64898/2026.06.04.729967", url: "https://doi.org/10.64898/2026.06.04.729967" },
      { title: "Integrative systems biology framework discovers common gene regulatory signatures in mechanistically distinct inflammatory skin diseases", journal: "npj Syst Biol Appl", year: "2025", doi: "10.1038/s41540-025-00498-x", url: "https://doi.org/10.1038/s41540-025-00498-x" },
      { title: "Transcriptional circuitry atlas of genetic diverse unstimulated murine and human macrophages define disparity in population-wide innate immunity", journal: "Scientific Reports", year: "2021", doi: "10.1038/s41598-021-86742-w", url: "https://doi.org/10.1038/s41598-021-86742-w" },
      { title: "Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis", journal: "iScience", year: "2020", doi: "10.1016/j.isci.2020.101526", url: "https://doi.org/10.1016/j.isci.2020.101526" },
      { title: "Systems Biology and Machine Learning in Plant-Pathogen Interactions", journal: "MPMI", year: "2019", doi: "10.1094/MPMI-08-18-0221-FI", url: "https://doi.org/10.1094/MPMI-08-18-0221-FI" },
    ],
  },
];

export const DETAILED_RESEARCH_THEMES = [
  {
    icon: "🌿",
    title: "Dynamic Gene Regulatory Network Modeling",
    desc: "We use iDREM and related frameworks to reconstruct time-resolved transcriptional programs in plants — senescence, drought, and immunity responses — capturing how regulatory logic shifts across developmental and stress contexts. The core gap: no multi-context regulatory atlas exists for plants outside Arabidopsis, and existing tools weren't built for sparse, low-replicate plant data.",
    pillar: "Plant Regulatory Genomics",
    color: "#4ade80",
    articles: [
      { title: "Multi-Omics Integration Predicts Cell-Specific Gene Regulatory Response and Rhizosphere Dynamics in Maize Root Fertilizer Treatment", journal: "bioRxiv", year: "2026", url: "https://doi.org/10.64898/2026.08.16.744839" },
      { title: "Network Biology Analyses and Dynamic Modeling of Gene Regulatory Networks Under Drought Stress Reveal Major Transcriptional Regulators in Arabidopsis", journal: "Int. J. Mol. Sci.", year: "2023", url: "https://doi.org/10.3390/ijms24087349" },
      { title: "Dynamic modeling of transcriptional gene regulatory network uncovers distinct pathways during the onset of Arabidopsis leaf senescence", journal: "npj Syst Biol Appl", year: "2018", url: "https://doi.org/10.1038/s41540-018-0071-2" },
      { title: "Global temporal dynamic landscape of pathogen-mediated subversion of Arabidopsis innate immunity", journal: "Scientific Reports", year: "2017", url: "https://doi.org/10.1038/s41598-017-08073-z" },
    ],
  },
  {
    icon: "🧬",
    title: "Network Centrality and Host–Pathogen Interactomes",
    desc: "We map protein interaction and transcriptomic networks for plant hosts and their pathogens, identify high-centrality nodes — the regulatory chokepoints — and use them to prioritize effector targets and susceptibility genes. Our centrality-based pipeline has been applied to Arabidopsis, rice, and SARS-CoV-2.",
    pillar: "Plant Regulatory Genomics",
    color: "#86efac",
    articles: [
      { title: "Integrative Omics and Network Biology Reveal Transcriptional Changes of Amino Acid Transport in Arabidopsis Susceptibility to Pseudomonas syringae", journal: "bioRxiv", year: "2026", url: "https://doi.org/10.64898/2026.03.25.714176" },
      { title: "A rice protein interaction network reveals high centrality nodes and candidate pathogen effector targets", journal: "Computational and Structural Biotechnology Journal", year: "2022", url: "https://doi.org/10.1016/j.csbj.2022.04.027" },
      { title: "A pipeline of integrating transcriptome and interactome to elucidate central nodes in host-pathogen interactions", journal: "STAR Protocols", year: "2022", url: "https://doi.org/10.1016/j.xpro.2022.101608" },
    ],
  },
  {
    icon: "🔬",
    title: "Single-Cell and Spatial Transcriptomics",
    desc: "Bulk RNA-seq averages away the cell-type signal that actually matters. We bring single-cell and spatial platforms — Visium, Xenium, snRNA-seq — to plant and crop tissues to resolve cell-type-specific regulatory programs. Current track record is mammalian; plant single-nucleus work is the active frontier we are building toward.",
    pillar: "Single-Cell and Spatial Genomics",
    color: "#bef264",
    articles: [
      { title: "Integrative systems biology framework discovers common gene regulatory signatures in mechanistically distinct inflammatory skin diseases", journal: "npj Syst Biol Appl", year: "2025", url: "https://doi.org/10.1038/s41540-025-00498-x" },
      { title: "CD2 expressing innate lymphoid and T cells are critical effectors of immunopathogenesis in hidradenitis suppurativa", journal: "PNAS", year: "2024", url: "https://doi.org/10.1073/pnas.2409274121" },
      { title: "Transcriptional circuitry atlas of genetic diverse unstimulated murine and human macrophages define disparity in population-wide innate immunity", journal: "Scientific Reports", year: "2021", url: "https://doi.org/10.1038/s41598-021-86742-w" },
    ],
  },
  {
    icon: "🌽",
    title: "Rhizosphere Microbiome and Crop–Microbe Interactions",
    desc: "Agriculture shapes the soil microbiome in ways that feedback on crop performance across generations. We use metagenomics, metatranscriptomics, and network approaches to understand how fertilization regimes, plant genotype, and environment co-structure rhizosphere communities — with maize and soybean as primary systems.",
    pillar: "Multi-omics and AI-Enabled Systems Biology",
    color: "#a3e635",
    articles: [
      { title: "Multi-Omics Integration Predicts Cell-Specific Gene Regulatory Response and Rhizosphere Dynamics in Maize Root Fertilizer Treatment", journal: "bioRxiv", year: "2026", url: "https://doi.org/10.64898/2026.08.16.744839" },
      { title: "Chronic Inorganic Fertilization Shifts Evolutionary Trajectories and Induces a Regulatory Shield in Maize Rhizosphere Bacteria", journal: "Preprint", year: "2026", url: "https://doi.org/10.64898/2026.06.04.729967" },
      { title: "Oxidative stress facilitates a diverse adaptive response in bacteria", journal: "bioRxiv", year: "2025", url: "https://doi.org/10.1101/2025.10.09.681464" },
    ],
  },
  {
    icon: "🤖",
    title: "AI, Dynamic Modeling, and Reproducible NGS Workflows",
    desc: "Machine learning and dynamic systems modeling are the analytical backbone across all three of our research pillars. We develop and share reproducible, FAIR-compliant workflows for bulk RNA-seq, scRNA-seq, metagenomics, and multi-omics integration — lowering the barrier for the field and training the next generation of biological data scientists.",
    pillar: "Multi-omics and AI-Enabled Systems Biology",
    color: "#84cc16",
    articles: [
      { title: "A pipeline of integrating transcriptome and interactome to elucidate central nodes in host-pathogen interactions", journal: "STAR Protocols", year: "2022", url: "https://doi.org/10.1016/j.xpro.2022.101608" },
      { title: "Integrative Network Biology Framework Elucidates Molecular Mechanisms of SARS-CoV-2 Pathogenesis", journal: "iScience", year: "2020", url: "https://doi.org/10.1016/j.isci.2020.101526" },
      { title: "Systems Biology and Machine Learning in Plant-Pathogen Interactions", journal: "MPMI", year: "2019", url: "https://doi.org/10.1094/MPMI-08-18-0221-FI" },
    ],
  },
];

export const NEWS_ITEMS = [
  { date: "Aug 2026", title: "New preprint on multi-omics integration in maize root fertilizer treatment", desc: "Jade Horcoff, Anuradha Goswami, and Bharat Mishra present a multi-omics study predicting cell-specific gene regulatory responses and rhizosphere dynamics under maize root fertilizer treatment.", tag: "Preprint", linkLabel: "DOI: 10.64898/2026.08.16.744839", url: "https://doi.org/10.64898/2026.08.16.744839" },
  { date: "Apr 2026", title: "COSE-JAM 2026 Poster: Integrating Bioinformatics & Computational Biology into Undergraduate Education", desc: "Jade Horcoff presented this poster at COSE-JAM 2026.", tag: "Poster" },
  { date: "Apr 2026", title: "COSE-JAM 2026 Poster: Regulatory Systems Biology of Antibiotic Resistance in Colistin-Exposed Acinetobacter baumannii", desc: "Courtney French and Anna Heck presented this poster at COSE-JAM 2026.", tag: "Poster" },
  { date: "Jun 2026", title: "New preprint on maize rhizosphere bacteria and chronic fertilization", desc: "Our new preprint with Anuradha Goswami examines how chronic inorganic fertilization reshapes evolutionary trajectories and induces a regulatory shield in maize rhizosphere bacteria.", tag: "Preprint", linkLabel: "DOI: 10.64898/2026.06.04.729967", url: "https://doi.org/10.64898/2026.06.04.729967" },
  { date: "Ongoing", title: "Genomics Data Science Office Hours — Thursdays 1–2 PM", desc: "Drop in for bioinformatics consultations, analysis support, and data science questions. 3015 McCourtney Hall East. Open to all Notre Dame researchers.", tag: "Office Hours" },
  { date: "Ongoing", title: "GenomiX Club of Notre Dame", desc: "A graduate student Genomics Data Science club fostering community and learning. Dr. Bharat Mishra serves as the faculty advisor.", tag: "Student Club" },
  { date: "Mar 2026", title: "New preprint on amino acid transport in Arabidopsis susceptibility", desc: "Our latest work integrating omics and network biology to reveal transcriptional changes during Pseudomonas syringae infection is now available on bioRxiv.", tag: "Preprint" },
  { date: "Feb 2025", title: "Paper published in npj Systems Biology and Applications", desc: "Our integrative systems biology framework identifies common gene regulatory signatures across mechanistically distinct inflammatory skin diseases.", tag: "Publication" },
  { date: "Jan 2025", title: "Dr. Mishra joins University of Notre Dame", desc: "Bharat Mishra joins Notre Dame as Assistant Professor of the Practice and Principal Bioinformatician for the Genomics and Bioinformatics Core Facility.", tag: "Announcement" },
  { date: "Nov 2024", title: "PNAS paper on hidradenitis suppurativa", desc: "Our collaborative study identifying CD2 as a key therapeutic target in HS is published in PNAS, opening new avenues for treatment.", tag: "Publication" },
  { date: "Oct 2025", title: "Oxidative stress study posted on bioRxiv", desc: "New preprint exploring how oxidative stress facilitates diverse adaptive responses across multiple bacterial species.", tag: "Preprint" },
];

export const TEAM_LEADS = [
  { name: "Bharat Mishra, PhD", role: "Principal Investigator", initials: "BM", color: "#059669" },
  { name: "Postdoctoral Researchers", role: "Computational & Experimental", initials: "PR", color: "#34d399" },
  { name: "Graduate Students", role: "PhD Candidates", initials: "GS", color: "#bbf7d0" },
];

export const UNDERGRADS = [
  "Anna Heck", "Anna Pham", "Courtney French", "Jade Horcoff",
  "Judy Mammen", "John Mckany", "Katelyn Farrell", "Patrick Dambrogio",
  "Sean Mayer", "Samuel Velazquez-Ocello", "Shannon Walker",
];

export const FOOTER_LINKS = {
  "Bluesky": "https://bsky.app/profile/bharatm.bsky.social",
  "LinkedIn": "https://www.linkedin.com/in/bharat-mishra-phd-b0579223",
  "ResearchGate": "https://www.researchgate.net/profile/Bharat-Mishra-2",
  "Google Scholar": "https://scholar.google.com/citations?user=SALNvQ8AAAAJ&hl=en",
  "GitHub": "https://github.com/bharatm26",
};

export const GLOBAL_STYLES = `
  ::selection { background: #86efac; color: #0b1710; }
  a { color: inherit; text-decoration: none; }
  .nav-link { position: relative; padding: 6px 0; font-size: clamp(11px, 1vw, 14px); letter-spacing: 0.03em; cursor: pointer; transition: color 0.25s; font-family: 'DM Sans', sans-serif; font-weight: 600; background: none; border: none; white-space: nowrap; color: #e8fdf0; text-shadow: 0 1px 8px rgba(0,0,0,0.7); }
  .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: #4ade80; transition: width 0.3s; }
  .nav-link:hover::after, .nav-link.active::after { width: 100%; }
  .nav-link:hover, .nav-link.active { color: #4ade80; text-shadow: 0 0 12px rgba(74,222,128,0.4); }
  .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: linear-gradient(135deg, #22c55e, #bbf7d0); color: #0b1710; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 15px; border: none; border-radius: 50px; cursor: pointer; transition: transform 0.2s, box-shadow 0.3s; letter-spacing: 0.02em; }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(134,239,172,0.28); }
  .btn-outline { display: inline-flex; align-items: center; gap: 8px; padding: 13px 30px; background: transparent; color: #ecfdf3; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 15px; border: 2px solid rgba(187,247,208,0.24); border-radius: 50px; cursor: pointer; transition: border-color 0.3s, color 0.3s; }
  .btn-outline:hover { border-color: #86efac; color: #86efac; }
  .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 36px; transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; }
  .card:hover { transform: translateY(-4px); border-color: rgba(134,239,172,0.28); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
  .tag { display: inline-block; padding: 5px 14px; border-radius: 50px; font-size: 12px; font-family: 'DM Sans', sans-serif; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
  .section-label { font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #86efac; margin-bottom: 16px; }
  .section-title { font-size: clamp(30px, 5vw, 48px); font-weight: 700; line-height: 1.15; margin-bottom: 20px; }
  .hero-shell { width: min(1280px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 720px) minmax(320px, 1fr); gap: clamp(28px, 5vw, 72px); align-items: center; position: relative; z-index: 1; }
  .hero-copy { max-width: 720px; }
  .hero-visual { display: flex; justify-content: center; align-items: center; min-height: 420px; }
  .pub-filter { padding: 9px 14px; border-radius: 999px; border: 1px solid rgba(187,247,208,0.16); background: rgba(255,255,255,0.03); color: rgba(236,253,243,0.82); font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 600; cursor: pointer; transition: border-color 0.25s, background 0.25s, color 0.25s; }
  .pub-filter:hover, .pub-filter.active { border-color: rgba(134,239,172,0.5); background: rgba(134,239,172,0.12); color: #d9f99d; }
  .pub-card { display: flex; flex-direction: column; gap: 12px; padding: 24px 28px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; cursor: pointer; transition: border-color 0.3s, transform 0.25s, box-shadow 0.3s; }
  .pub-card:hover { border-color: rgba(134,239,172,0.28); transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,0.22); }
  .pub-header { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
  .pub-year, .pub-category { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .pub-year { background: rgba(74,222,128,0.14); color: #bbf7d0; }
  .pub-category { background: rgba(255,255,255,0.05); color: rgba(236,253,243,0.58); }
  .footer-link-button { background: none; border: none; padding: 0; text-align: left; color: inherit; font: inherit; cursor: pointer; transition: color 0.2s; }
  @media (max-width: 1180px) {
    .desktop-nav { gap: clamp(6px, 1vw, 14px) !important; }
  }
  .network-card { position: relative; width: min(100%, 520px); aspect-ratio: 1.02; padding: 20px; border-radius: 28px; background: radial-gradient(circle at 50% 50%, rgba(134,239,172,0.1), rgba(255,255,255,0.018) 50%, rgba(255,255,255,0.008) 100%); border: 1px solid rgba(187,247,208,0.12); box-shadow: 0 18px 56px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05); backdrop-filter: blur(16px); overflow: hidden; isolation: isolate; }
  .network-card::after { content: ''; position: absolute; inset: 14%; border-radius: 38% 62% 55% 45% / 43% 34% 66% 57%; background: radial-gradient(circle, rgba(220,252,231,0.04), rgba(220,252,231,0) 72%); filter: blur(24px); animation: liquid-morph 22s ease-in-out infinite; z-index: 0; }
  .network-card::before { content: ''; position: absolute; inset: 24%; border-radius: 50%; background: radial-gradient(circle, rgba(8,18,13,0.78), rgba(8,18,13,0.28) 48%, rgba(8,18,13,0) 72%); filter: blur(10px); z-index: 2; pointer-events: none; }
  .omics-layer { position: absolute; display: flex; align-items: center; justify-content: center; border-radius: 44% 56% 48% 52% / 57% 38% 62% 43%; font-family: 'DM Sans', sans-serif; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(236,253,243,0.22); border: 1px solid rgba(255,255,255,0.03); backdrop-filter: blur(10px); z-index: 1; pointer-events: none; }
  .omics-layer span { opacity: 0.45; }
  .omics-layer-one { inset: 9% auto auto 4%; width: 30%; height: 20%; background: radial-gradient(circle at 35% 35%, rgba(187,247,208,0.09), rgba(187,247,208,0.02) 72%, transparent 100%); animation: liquid-morph 22s ease-in-out infinite; }
  .omics-layer-two { inset: auto 6% 12% auto; width: 28%; height: 18%; background: radial-gradient(circle at 60% 45%, rgba(134,239,172,0.08), rgba(134,239,172,0.018) 70%, transparent 100%); animation: liquid-morph 24s ease-in-out -5s infinite reverse; }
  .omics-layer-three { inset: auto auto 6% 10%; width: 24%; height: 16%; background: radial-gradient(circle at 50% 50%, rgba(217,249,157,0.07), rgba(217,249,157,0.015) 72%, transparent 100%); animation: liquid-morph 26s ease-in-out -8s infinite; }
  .network-icon { position: absolute; inset: 14% 14%; width: 72%; height: 72%; object-fit: contain; z-index: 3; filter: brightness(1.08) contrast(1.12) drop-shadow(0 0 10px rgba(220,252,231,0.16)) drop-shadow(0 4px 18px rgba(0,0,0,0.24)); animation: icon-float 10s ease-in-out infinite; }
  .network-overlay { position: absolute; inset: 14% 14%; width: 72%; height: 72%; z-index: 4; overflow: visible; pointer-events: none; }
  .network-edge { stroke: rgba(236,253,243,0.13); stroke-width: 1.3; stroke-linecap: round; opacity: 0.34; animation: edge-breathe 7.5s ease-in-out infinite; }
  .signal-path { fill: none; stroke: transparent; }
  .signal-packet { fill: rgba(236,253,243,0.82); filter: drop-shadow(0 0 4px rgba(236,253,243,0.32)); opacity: 0.76; }
  .network-node-glow { animation: node-breathe 7.2s ease-in-out infinite; }
  .node-halo { fill: rgba(236,253,243,0.045); }
  .network-select-node { fill: rgba(236,253,243,0.16); stroke: rgba(236,253,243,0.26); stroke-width: 0.7; opacity: 0.72; }
  .network-liquid { position: absolute; border-radius: 40% 60% 58% 42% / 44% 34% 66% 56%; filter: blur(16px); opacity: 0.42; z-index: 1; mix-blend-mode: screen; }
  .liquid-one { inset: 18% 16% 22% 18%; background: radial-gradient(circle at 30% 30%, rgba(187,247,208,0.14), rgba(187,247,208,0.025) 65%, transparent 100%); animation: liquid-morph 20s ease-in-out infinite; }
  .liquid-two { inset: 26% 22% 16% 26%; background: radial-gradient(circle at 70% 35%, rgba(134,239,172,0.12), rgba(134,239,172,0.02) 60%, transparent 100%); animation: liquid-morph 24s ease-in-out -4s infinite reverse; }
  .liquid-three { inset: 12% 20% 28% 14%; background: radial-gradient(circle at 50% 60%, rgba(217,249,157,0.08), rgba(217,249,157,0.015) 62%, transparent 100%); animation: liquid-morph 28s ease-in-out -7s infinite; }
  .network-wave { position: absolute; inset: 50%; width: 34%; height: 34%; border-radius: 44% 56% 52% 48% / 53% 41% 59% 47%; border: 1px solid rgba(187,247,208,0.1); transform: translate(-50%, -50%); z-index: 2; }
  .wave-one { animation: fluid-wave 7.5s ease-out infinite; }
  .wave-two { animation: fluid-wave 7.5s ease-out 3.6s infinite; }
  .network-spark { position: absolute; width: 6px; height: 6px; border-radius: 50%; background: rgba(217,249,157,0.72); box-shadow: 0 0 10px rgba(217,249,157,0.28); z-index: 2; }
  .spark-one { top: 16%; left: 30%; animation: spark-drift 8.4s ease-in-out infinite; }
  .spark-two { right: 18%; top: 30%; animation: spark-drift 9.4s ease-in-out 1.2s infinite; }
  .spark-three { bottom: 20%; left: 22%; animation: spark-drift 8.8s ease-in-out 0.8s infinite; }
  .flow-particle { position: absolute; border-radius: 50%; background: radial-gradient(circle, rgba(220,252,231,0.4), rgba(220,252,231,0.06) 55%, transparent 100%); box-shadow: 0 0 8px rgba(187,247,208,0.1); z-index: 5; animation-name: data-flow; animation-timing-function: linear; animation-iteration-count: infinite; pointer-events: none; opacity: 0.34; }
  @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
  @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.6); opacity: 0; } }
  @keyframes icon-float { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-4px) scale(1.008); } }
  @keyframes edge-breathe { 0%, 100% { opacity: 0.24; } 50% { opacity: 0.46; } }
  @keyframes node-breathe { 0%, 100% { opacity: 0.56; } 50% { opacity: 0.82; } }
  @keyframes liquid-morph {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); border-radius: 40% 60% 58% 42% / 44% 34% 66% 56%; }
    25% { transform: translate3d(10px, -12px, 0) scale(1.04); border-radius: 61% 39% 45% 55% / 40% 63% 37% 60%; }
    50% { transform: translate3d(-8px, 10px, 0) scale(0.98); border-radius: 52% 48% 63% 37% / 58% 36% 64% 42%; }
    75% { transform: translate3d(12px, 6px, 0) scale(1.03); border-radius: 35% 65% 41% 59% / 52% 46% 54% 48%; }
  }
  @keyframes fluid-wave {
    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    30% { opacity: 0.18; }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.6); }
  }
  @keyframes spark-drift { 0%, 100% { transform: translateY(0px) scale(0.84); opacity: 0.22; } 50% { transform: translateY(-6px) scale(1.08); opacity: 0.56; } }
  @keyframes data-flow {
    0% { transform: translate3d(-8px, 6px, 0) scale(0.75); opacity: 0; }
    20% { opacity: 0.34; }
    50% { transform: translate3d(14px, -14px, 0) scale(0.95); opacity: 0.44; }
    85% { opacity: 0.18; }
    100% { transform: translate3d(28px, -26px, 0) scale(0.72); opacity: 0; }
  }
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 101; }
  .hamburger span { width: 24px; height: 2px; background: #E8EDE9; transition: 0.3s; }
  @media (max-width: 640px) {
    .hero-section { min-height: auto !important; padding: 92px 20px 48px !important; }
    .hero-shell { grid-template-columns: 1fr; gap: 20px; }
    .hero-copy { max-width: none; order: 1; }
    .hero-visual { order: 2; min-height: 180px; opacity: 0.82; }
    .network-card { max-width: 280px; }
    .nav-brand { gap: 6px !important; }
    .nav-logo { height: 36px !important; }
    .hero-badge-primary { font-size: 13px !important; line-height: 1.2; padding: 10px 16px !important; margin-bottom: 10px !important; }
    .hero-badge-secondary { font-size: 11px !important; padding: 8px 14px !important; margin-bottom: 20px !important; }
    .hero-title { font-size: 44px !important; line-height: 1.02 !important; margin-bottom: 18px !important; }
    .hero-lead { font-size: 16px !important; line-height: 1.55 !important; margin-bottom: 26px !important; max-width: none !important; }
    .hero-actions { flex-direction: column; gap: 12px !important; }
    .hero-actions .btn-primary, .hero-actions .btn-outline { width: 100%; justify-content: center; }
    .pub-card { padding: 20px; }
    .hamburger { display: flex; }
    .desktop-nav { display: none !important; }
    .mobile-menu { display: flex !important; }
  }
`;
