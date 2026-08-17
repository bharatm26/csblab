import React, { useState, useEffect } from "react";
import { SECTION_LINKS, GLOBAL_STYLES } from "./data/constants";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ResearchSection from "./components/ResearchSection";
import ImpactSection from "./components/ImpactSection";
import TeamSection from "./components/TeamSection";
import PublicationsSection from "./components/PublicationsSection";
import TeachingSection from "./components/TeachingSection";
import NewsSection from "./components/NewsSection";
import FunStuffSection from "./components/FunStuffSection";
import JoinUsSection from "./components/JoinUsSection";
import SiteFooter from "./components/SiteFooter";

function App() {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTION_LINKS[0].target);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavBg(window.scrollY > 40);
      let found = false;
      for (const section of SECTION_LINKS) {
        const el = document.getElementById(section.target);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (!found && rect.top < 120 && rect.bottom > 80) {
            setActiveSection(section.target);
            found = true;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#0b1710", color: "#ecfdf3", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{GLOBAL_STYLES}</style>
      <NavBar
        navBg={navBg}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <HeroSection />
      <StatsBar />
      <ResearchSection />
      <ImpactSection />
      <TeamSection />
      <TeachingSection />
      <PublicationsSection />
      <NewsSection />
      <FunStuffSection />
      <JoinUsSection />
      <SiteFooter />
    </div>
  );
}

export default App;
