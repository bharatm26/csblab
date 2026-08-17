import React from "react";

export default function HelixBG() {
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
            <circle cx={x2} cy={y} r="5" fill="#86efac" />
            {i % 2 === 0 && <line x1={x1} y1={y} x2={x2} y2={y} stroke="#fff" strokeWidth="1.5" opacity="0.4" />}
          </g>
        );
      })}
    </svg>
  );
}
