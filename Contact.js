"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("arjun12120042020@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </div>

        <div className="max-w-2xl">
          <h2 className="reveal font-display font-bold text-4xl md:text-5xl text-text mb-5 leading-tight">
            Let's build something{" "}
            <span className="text-accent">together.</span>
          </h2>
          <p className="reveal text-textDim text-[1.05rem] leading-relaxed mb-10" style={{ transitionDelay: "100ms" }}>
            I'm actively looking for full-time software engineering roles. Whether you have a
            position, a freelance project, or just want to talk tech — my inbox is always open.
          </p>

          {/* Email block */}
          <div className="reveal mb-8" style={{ transitionDelay: "200ms" }}>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="mailto:arjun12120042020@gmail.com"
                className="group flex items-center gap-2.5 px-7 py-3.5 bg-accent text-ink font-display font-bold rounded hover:bg-accentDim transition-all duration-200 hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Say Hello
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-5 py-3.5 border border-border text-textDim hover:border-accent hover:text-accent font-mono text-sm rounded transition-all duration-200"
              >
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="reveal flex items-center gap-6" style={{ transitionDelay: "300ms" }}>
            <span className="font-mono text-xs text-muted">Find me on</span>
            <div className="h-px flex-1 max-w-[60px] bg-border" />
            <div className="flex gap-5">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/arjuns-674825290",
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                },
                {
                  label: "GitHub",
                  href: "https://github.com",
                  icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
                },
                {
                  label: "Phone",
                  href: "tel:+919539568630",
                  icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-border bg-panel flex items-center justify-center text-muted hover:border-accent hover:text-accent transition-all duration-200 card-hover"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
