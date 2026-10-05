"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    skills: [
      { name: "React JS", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Material UI", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "M5 12h14M12 5l7 7-7 7",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 82 },
      { name: "REST API Design", level: 80 },
      { name: "SQL", level: 65 },
    ],
  },
  {
    category: "Database & Tools",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "Git & GitHub", level: 78 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
    ],
  },
];

const tags = [
  "React JS", "Node.js", "Express.js", "MongoDB", "JavaScript",
  "HTML5", "CSS3", "Material UI", "SQL", "Git", "REST APIs",
  "Mongoose", "JWT Auth", "Responsive Design", "Agile / Scrum",
  "Component Architecture", "State Management", "API Integration",
];

function SkillBar({ name, level, delay }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${level}%`;
            }
          }, delay || 0);
        }
      },
      { threshold: 0.5 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-textDim font-mono">{name}</span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: "0%",
            background: "linear-gradient(90deg, #22c55e, #4ade80)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            04 / Skills
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-text mb-4">
          My Toolkit
        </h2>
        <p className="reveal text-textDim mb-14 max-w-xl" style={{ transitionDelay: "100ms" }}>
          Technologies I work with daily and the broader stack I'm comfortable shipping production code in.
        </p>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="reveal bg-panel border border-border rounded-xl p-6 card-hover"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={group.icon} />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-text">{group.category}</h3>
              </div>
              <div>
                {group.skills.map((skill, j) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={j * 100} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="reveal" style={{ transitionDelay: "300ms" }}>
          <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">All Technologies</h3>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="skill-pill font-mono text-sm px-3.5 py-1.5 rounded-lg border border-border bg-panel text-textDim cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What I'm learning */}
        <div className="reveal mt-10 p-5 bg-panel border border-border rounded-xl" style={{ transitionDelay: "400ms" }}>
          <div className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
            <span className="font-mono text-xs text-accent tracking-widest uppercase">Currently Exploring</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Next.js", "Docker", "System Design", "Redis", "GraphQL"].map((t) => (
              <span key={t} className="font-mono text-xs px-3 py-1 rounded border border-dashed border-muted text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
