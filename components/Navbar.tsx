"use client";

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

import githubPng from "../src/github.png";
import linkedinPng from "../src/linkedin.png";


const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    const el = document.querySelector(href);

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="w-full" style={{ padding: "0 clamp(1.5rem, 4vw, 6rem)" }}>
        <div
          className={`relative flex items-center h-16 px-10 sm:px-12 rounded-full transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-xl shadow-xl"
              : "backdrop-blur-md shadow-md"
          }`}
          style={{
            background: "rgba(7,10,18,0.78)",
            border: "1px solid rgba(148,163,184,0.18)",
          }}
        >

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="text-xl font-semibold tracking-tight transition-transform duration-300 hover:scale-105 z-10"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-navy)",
            }}
          >
            Sujal
            <span className="text-[var(--color-slate)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  relative
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:text-[var(--color-navy)]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[var(--color-navy)]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
                style={{
                  color: "var(--color-slate)",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>


          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center justify-end gap-3 z-10 w-16" />





          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-10"
            style={{ marginLeft: "auto" }}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-navy)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3 z-10">

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/5"
              style={{ border: "1px solid rgba(148,163,184,0.18)", background: "transparent" }}
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
              style={{ border: "1px solid rgba(148,163,184,0.18)", background: "transparent" }}
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
          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? "max-h-96 opacity-100 mt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="rounded-3xl p-6 flex flex-col gap-5 shadow-xl backdrop-blur-xl"
            style={{
              background: "rgba(7,10,18,0.94)",
              border: "1px solid rgba(148,163,184,0.18)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  text-base
                  font-medium
                  py-2
                  transition-all
                  duration-300
                  hover:translate-x-2
                "
                style={{
                  color: "var(--color-navy)",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-full p-2 transition-colors hover:bg-white/5"
                style={{ border: "1px solid rgba(148,163,184,0.18)", background: "transparent" }}
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
                style={{ border: "1px solid rgba(148,163,184,0.18)", background: "transparent" }}
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}