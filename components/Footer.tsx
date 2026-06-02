"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-cream)",
      }}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: "var(--color-slate-light)" }}
          >
            &copy; {currentYear} Sujal Mudaliar — Designed &amp; Built with passion.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[var(--color-navy)]"
              style={{ color: "var(--color-slate-light)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[var(--color-navy)]"
              style={{ color: "var(--color-slate-light)" }}
            >
              GitHub
            </a>
            <a
              href="mailto:sujalm.tech@gmail.com"
              className="text-sm transition-colors hover:text-[var(--color-navy)]"
              style={{ color: "var(--color-slate-light)" }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
