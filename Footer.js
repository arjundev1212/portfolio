export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-sm text-text">
          <span className="text-accent">{"<"}</span>
          arjun
          <span className="text-accent">{"/>"}</span>
        </div>
        <p className="font-mono text-xs text-muted text-center">
          Designed & built by Arjun S · {new Date().getFullYear()}
        </p>
        <a
          href="#"
          className="font-mono text-xs text-muted hover:text-accent transition-colors flex items-center gap-1.5"
        >
          Back to top
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
