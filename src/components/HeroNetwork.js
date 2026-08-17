import React from "react";
import { HERO_NETWORK_ICON } from "../data/constants";

export default function HeroNetwork() {
  const nodes = [
    { id: "core", x: 50, y: 50, r: 6.5 },
    { id: "left", x: 18, y: 50, r: 5.2 },
    { id: "upperLeft", x: 34, y: 28, r: 4.6 },
    { id: "topLeft", x: 24, y: 15, r: 4.4 },
    { id: "topRight", x: 62, y: 28, r: 5.4 },
    { id: "tipTop", x: 62, y: 10, r: 3.8 },
    { id: "right", x: 82, y: 50, r: 5.2 },
    { id: "lowerRight", x: 66, y: 72, r: 4.4 },
    { id: "bottom", x: 50, y: 82, r: 4.8 },
    { id: "bottomRight", x: 62, y: 92, r: 5 },
    { id: "lowerLeft", x: 24, y: 69, r: 4.6 },
    { id: "ring", x: 24, y: 66, r: 2.1 },
    { id: "tail", x: 24, y: 82, r: 3.6 },
  ];

  const edges = [
    ["core", "left"],
    ["core", "upperLeft"],
    ["upperLeft", "topLeft"],
    ["core", "topRight"],
    ["topRight", "tipTop"],
    ["core", "right"],
    ["core", "lowerRight"],
    ["core", "bottom"],
    ["bottom", "bottomRight"],
    ["core", "lowerLeft"],
    ["lowerLeft", "tail"],
  ];

  const flowParticles = [
    { left: "10%", top: "24%", size: 6, delay: "0s", duration: "10s" },
    { left: "18%", top: "68%", size: 5, delay: "1.8s", duration: "12s" },
    { left: "26%", top: "42%", size: 7, delay: "0.7s", duration: "11s" },
    { left: "38%", top: "16%", size: 4, delay: "2.4s", duration: "13s" },
    { left: "46%", top: "78%", size: 6, delay: "1.1s", duration: "9.5s" },
    { left: "58%", top: "34%", size: 5, delay: "3.1s", duration: "12.5s" },
    { left: "68%", top: "62%", size: 7, delay: "0.3s", duration: "10.5s" },
    { left: "78%", top: "22%", size: 5, delay: "2.7s", duration: "11.8s" },
    { left: "86%", top: "54%", size: 6, delay: "1.4s", duration: "9.8s" },
  ];

  const signalPaths = [
    { id: "signal-left", path: "M 50 50 L 18 50", dur: "3.8s", delay: "0s" },
    { id: "signal-upper", path: "M 50 50 L 34 28 L 24 15", dur: "4.2s", delay: "1.2s" },
    { id: "signal-top", path: "M 50 50 L 62 28 L 62 10", dur: "4s", delay: "2.1s" },
    { id: "signal-right", path: "M 50 50 L 82 50", dur: "3.6s", delay: "0.8s" },
    { id: "signal-lower", path: "M 50 50 L 66 72", dur: "4.1s", delay: "2.9s" },
    { id: "signal-bottom", path: "M 50 50 L 50 82 L 62 92", dur: "4.6s", delay: "1.7s" },
    { id: "signal-tail", path: "M 50 50 L 24 69 L 24 82", dur: "4.4s", delay: "3.3s" },
  ];

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="network-card">
        <div className="omics-layer omics-layer-one"><span>Transcriptomics</span></div>
        <div className="omics-layer omics-layer-two"><span>Networks</span></div>
        <div className="omics-layer omics-layer-three"><span>AI</span></div>
        <div className="network-liquid liquid-one" />
        <div className="network-liquid liquid-two" />
        <div className="network-liquid liquid-three" />
        <div className="network-wave wave-one" />
        <div className="network-wave wave-two" />
        <div className="network-spark spark-one" />
        <div className="network-spark spark-two" />
        <div className="network-spark spark-three" />
        {flowParticles.map((particle, index) => (
          <span
            key={`particle-${index}`}
            className="flow-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
        <img className="network-icon" src={HERO_NETWORK_ICON} alt="" />
        <svg className="network-overlay" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {edges.map(([from, to], index) => {
            const start = nodes.find((node) => node.id === from);
            const end = nodes.find((node) => node.id === to);
            return (
              <line
                key={`${from}-${to}`}
                className="network-edge"
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                style={{ animationDelay: `${index * 0.25}s` }}
              />
            );
          })}
          {signalPaths.map((signal) => (
            <g key={signal.id}>
              <path className="signal-path" d={signal.path} />
              <circle className="signal-packet" r="2.2">
                <animateMotion dur={signal.dur} begin={signal.delay} repeatCount="indefinite" path={signal.path} />
              </circle>
            </g>
          ))}
          {nodes.map((node, index) => (
            <g key={node.id} className="network-node-glow" style={{ animationDelay: `${index * 0.22}s` }}>
              <circle cx={node.x} cy={node.y} r={node.r + 2.2} className="node-halo" />
              <circle cx={node.x} cy={node.y} r={node.r} className="network-select-node" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
