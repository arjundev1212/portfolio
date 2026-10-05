"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Engineer",
  "MERN Stack Developer",
  "React Specialist",
  "API Architect",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient blob */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Left vertical line */}
      <div className="absolute left-6 top-0 bottom-0 hidden lg:flex flex-col items-center gap-4 pt-32">
        <div className="w-px flex-1 max-h-48 bg-gradient-to-b from-transparent to-border" />
        <div className="flex flex-col gap-5">
          {[
            {
              icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
              href: "https://www.linkedin.com/in/arjuns-674825290",
              label: "LinkedIn",
            },
            {
              icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
              href: "https://github.com",
              label: "GitHub",
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={icon} />
              </svg>
            </a>
          ))}
        </div>
        <div className="w-px flex-1 max-h-48 bg-gradient-to-t from-transparent to-border" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-panel mb-8 animate-fade-in"
          style={{ animationFillMode: "both" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-xs text-textDim">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-up text-text"
          style={{ animationFillMode: "both", animationDelay: "100ms" }}
        >
          Arjun S
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl md:text-2xl text-textDim mb-3 animate-fade-up"
          style={{ animationFillMode: "both", animationDelay: "200ms" }}
        >
          I turn{" "}
          <span className="text-accent font-semibold">complex problems</span>{" "}
          into elegant, scalable code.
        </p>

        {/* Typewriter */}
        <div
          className="font-mono text-base md:text-lg text-muted mb-10 h-7 animate-fade-up"
          style={{ animationFillMode: "both", animationDelay: "300ms" }}
        >
          <span className="text-accent">$ </span>
          {displayed}
          <span className="animate-[blink_1s_step-end_infinite] text-accent">
            |
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationFillMode: "both", animationDelay: "400ms" }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-ink font-display font-bold rounded hover:bg-accentDim transition-all duration-200 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-textDim hover:border-accent hover:text-text font-display font-semibold rounded transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-20 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationFillMode: "both", animationDelay: "800ms" }}
        >
          <span className="font-mono text-xs text-muted tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>

      {/* Right vertical - location */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <span
          className="font-mono text-xs text-muted tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          Bengaluru, India
        </span>
      </div>
    </section>
  );
}
