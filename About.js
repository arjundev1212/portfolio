"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "1.5+", label: "Years Experience" },
  { value: "2", label: "Shipped Products" },
  { value: "8+", label: "Technologies" },
  { value: "4", label: "Languages Spoken" },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01 / About
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-text mb-6 leading-tight">
              Building the web,{" "}
              <span className="text-accent">one commit</span> at a time.
            </h2>
            <p className="reveal text-textDim leading-relaxed mb-5 text-[1.05rem]" style={{ transitionDelay: "100ms" }}>
              I'm a full-stack engineer based in Bengaluru with hands-on experience
              shipping production applications end-to-end — from database schema to
              pixel-perfect UI. My core stack is the MERN ecosystem: React on the
              front, Node.js + Express on the back, and MongoDB holding it all together.
            </p>
            <p className="reveal text-textDim leading-relaxed mb-8 text-[1.05rem]" style={{ transitionDelay: "200ms" }}>
              At Arokee Online Solutions, I worked across the full product lifecycle —
              architecting REST APIs, building reusable component libraries, debugging
              production issues, and collaborating closely with cross-functional teams
              to consistently ship clean, maintainable code on schedule.
            </p>
            <div className="reveal flex flex-wrap gap-3" style={{ transitionDelay: "300ms" }}>
              {["Problem Solver", "Quick Learner", "Team Player", "Detail-Oriented"].map((trait) => (
                <span key={trait} className="code-tag">{trait}</span>
              ))}
            </div>
          </div>

          {/* Stats + card */}
          <div className="reveal space-y-6" style={{ transitionDelay: "200ms" }}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-panel border border-border rounded-lg p-5 card-hover"
                >
                  <div className="font-display font-extrabold text-3xl text-accent mb-1">
                    {value}
                  </div>
                  <div className="font-mono text-xs text-textDim uppercase tracking-wider">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently card */}
            <div className="bg-panel border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  Currently
                </span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Pursuing BCA at Bengaluru City University",
                  "Deepening TypeScript & system design skills",
                  "Open to full-time SWE roles",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-textDim">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
