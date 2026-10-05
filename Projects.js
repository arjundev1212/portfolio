"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Skill Management Tool",
    tagline: "Enterprise-grade internal tool for tracking team capabilities at scale.",
    description:
      "Architected and delivered a full-stack skill-tracking platform for internal teams, enabling managers to map employee competencies, identify skill gaps, and plan targeted upskilling. Built a dynamic React dashboard with real-time filtering and role-based access control, backed by a Node.js REST API and MongoDB.",
    highlights: [
      "Role-based auth with JWT + session management",
      "RESTful API with Express — 12+ endpoints",
      "Dynamic filtering & search across 100+ skill entries",
      "Reduced skill-gap reporting time by ~60%",
    ],
    stack: ["React JS", "Node.js", "Express", "MongoDB", "Material UI"],
    period: "Sep 2023 – Mar 2024",
    featured: true,
    color: "#4ade80",
  },
  {
    id: "02",
    title: "Envato Shopping Platform",
    tagline: "High-performance e-commerce frontend with rich product discovery UX.",
    description:
      "Built a responsive, conversion-optimised shopping interface inspired by the Envato marketplace. Implemented advanced product filtering, cart state management, and a fluid checkout flow — all rendered client-side with React for near-instant interaction.",
    highlights: [
      "Client-side cart with persistent state via localStorage",
      "Dynamic product filtering with debounced search",
      "Mobile-first responsive layout across all breakpoints",
      "Reduced page load time by 40% via code splitting",
    ],
    stack: ["React JS", "JavaScript", "CSS3", "HTML5", "REST API"],
    period: "Feb 2023 – Aug 2023",
    featured: true,
    color: "#60a5fa",
  },
  {
    id: "03",
    title: "Internal Bug Tracker",
    tagline: "Lightweight issue tracker built to streamline QA workflows.",
    description:
      "Developed a team-facing bug tracking dashboard that allowed developers and QA engineers to log, assign, and resolve issues with status tracking and comment threads — dramatically improving cross-team communication during the testing cycle.",
    highlights: [
      "Real-time status updates via polling",
      "Multi-user assignment and priority tagging",
      "Activity log for full audit trail",
    ],
    stack: ["React JS", "Node.js", "MongoDB", "Express"],
    period: "2023",
    featured: false,
    color: "#f59e0b",
  },
];

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            02 / Projects
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-text mb-4">
          Things I've built
        </h2>
        <p className="reveal text-textDim mb-14 max-w-xl" style={{ transitionDelay: "100ms" }}>
          Production software shipped at Arokee, plus side explorations that push my skills further.
        </p>

        {/* Featured projects */}
        <div className="space-y-6 mb-10">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="reveal card-hover group bg-panel border border-border rounded-xl p-7 md:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: project.color }}
                    >
                      {project.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono border"
                      style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                      Featured
                    </span>
                    <span className="ml-auto font-mono text-xs text-muted">{project.period}</span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-text mb-1 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-textDim mb-4 italic">{project.tagline}</p>
                  <p className="text-textDim text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-textDim">
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="skill-pill font-mono text-xs px-2.5 py-1 rounded border border-border bg-ink text-textDim">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex md:flex-col gap-3 shrink-0">
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded text-xs font-mono text-textDim hover:border-accent hover:text-accent transition-all duration-200">
                    <GitHubIcon /> Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded text-xs font-mono text-textDim hover:border-accent hover:text-accent transition-all duration-200">
                    <ExternalIcon /> Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <h3 className="reveal font-mono text-xs text-accent tracking-widest uppercase mb-6" style={{ transitionDelay: "200ms" }}>
          Other Builds
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, i) => (
            <div
              key={project.id}
              className="reveal card-hover group bg-panel border border-border rounded-xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <div className="flex gap-3">
                  <button className="text-muted hover:text-accent transition-colors"><GitHubIcon /></button>
                  <button className="text-muted hover:text-accent transition-colors"><ExternalIcon /></button>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-text mb-1 group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-textDim mb-4 leading-relaxed">{project.description.slice(0, 100)}…</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span key={tech} className="font-mono text-xs text-muted">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
