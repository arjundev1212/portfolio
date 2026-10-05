"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Arokee Online Solutions Pvt Ltd",
    location: "Bengaluru, Karnataka",
    period: "Sep 2023 – Jun 2024",
    duration: "10 months",
    type: "Full-time",
    bullets: [
      "Led front-end development of a Skill Management Tool, reducing internal reporting overhead by ~60% and becoming the primary tool used by 3 teams.",
      "Engineered 12+ RESTful API endpoints with Express.js, ensuring proper error handling, validation, and sub-200ms response times under normal load.",
      "Collaborated in an agile team of 6, participating in sprint planning, code reviews, and daily standups — shipping features on schedule across 3 release cycles.",
      "Proactively adopted new libraries (Material UI, Mongoose ODM) and advocated for component reuse, cutting UI build time by ~30% on new features.",
    ],
    stack: ["React JS", "Node.js", "Express", "MongoDB", "Material UI"],
  },
  {
    role: "Junior Software Developer",
    company: "Arokee Online Solutions Pvt Ltd",
    location: "Bengaluru, Karnataka",
    period: "Jan 2023 – Aug 2023",
    duration: "8 months",
    type: "Full-time",
    bullets: [
      "Built the Envato Shopping frontend from design to deployment — a React-based e-commerce UI with dynamic filters, cart management, and responsive layouts.",
      "Debugged and resolved 40+ reported issues across production and staging environments, significantly improving application stability.",
      "Implemented clean, documented JavaScript modules that were later reused across 2 other internal projects.",
      "Actively learned and applied new frameworks on the job, contributing meaningful code within the first month of joining.",
    ],
    stack: ["React JS", "JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bengaluru City University",
    period: "Aug 2023 – Jun 2026",
    note: "Currently pursuing",
  },
  {
    degree: "12th Grade — PCM",
    institution: "Kendriya Vidyalaya, Kollam",
    period: "2021 – 2022",
    note: "Distinction in Physics, Chemistry & Mathematics",
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03 / Experience
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-text mb-14">
          Where I've worked
        </h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {experiences.map((exp, i) => (
              <div key={exp.period} className="reveal relative pl-8" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Timeline line */}
                <div className={`absolute left-0 top-2 bottom-0 w-px ${i === 0 ? "bg-gradient-to-b from-accent to-border" : "bg-border"}`} />
                {/* Dot */}
                <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full border ${i === 0 ? "border-accent bg-accent" : "border-border bg-ink"}`} />

                <div className={`pb-12 ${i === experiences.length - 1 ? "pb-0" : ""}`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-xl text-text">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted bg-panel border border-border px-2 py-0.5 rounded">
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-accent text-sm">{exp.company}</span>
                    <span className="text-muted text-xs">·</span>
                    <span className="font-mono text-xs text-textDim">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-xs text-muted">{exp.period}</span>
                    <span className="font-mono text-xs text-border">·</span>
                    <span className="font-mono text-xs text-muted">{exp.duration}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-textDim leading-relaxed">
                        <span className="text-accent shrink-0 mt-1">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span key={t} className="skill-pill font-mono text-xs px-2.5 py-1 rounded border border-border bg-panel text-textDim">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education sidebar */}
          <div className="reveal space-y-4" style={{ transitionDelay: "200ms" }}>
            <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} className="bg-panel border border-border rounded-xl p-5 card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-text mb-0.5 leading-snug">{edu.degree}</div>
                    <div className="font-mono text-xs text-accent">{edu.institution}</div>
                  </div>
                </div>
                <div className="font-mono text-xs text-muted mb-1">{edu.period}</div>
                <div className="text-xs text-textDim">{edu.note}</div>
              </div>
            ))}

            {/* Languages */}
            <div className="bg-panel border border-border rounded-xl p-5 mt-6">
              <h4 className="font-mono text-xs text-accent tracking-widest uppercase mb-4">Languages</h4>
              {["English", "Hindi", "Malayalam", "Tamil"].map((lang) => (
                <div key={lang} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-textDim">{lang}</span>
                  <span className="font-mono text-xs text-muted">Fluent</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
