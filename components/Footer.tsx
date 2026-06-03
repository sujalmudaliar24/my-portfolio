"use client";

import githubPng from "../src/github.png";
import linkedinPng from "../src/linkedin.png";
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (

    <footer
      className="py-12 border-t"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-cream)",
      }}
    >
      <div
        className="w-full max-w-[1600px] mx-auto"
        style={{ padding: "0 clamp(2.5rem, 6vw, 9rem)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-sm"
            style={{ color: "var(--color-slate-light)" }}
          >
            &copy; {currentYear} Sujal Mudaliar — Designed &amp; Built with passion.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/5"
              style={{ border: "1px solid var(--color-border)", background: "transparent" }}
            >
              <Image
                src={linkedinPng}
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/5"
              style={{ border: "1px solid var(--color-border)", background: "transparent" }}
            >
              <Image
                src={githubPng}
                alt=""
                width={24}
                height={24}
                className="object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </a>
            <a
              href="mailto:sujalm.tech@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ border: "1px solid var(--color-border)", color: "var(--color-slate-light)" }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
