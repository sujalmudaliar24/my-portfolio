"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";
import GithubCalendar from "@/components/GithubCalendar";
import githubIcon from "@/src/github.png";
import linkedinIcon from "@/src/linkedin.png";

const MARQUEE_ITEMS_ROW1 = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Expo",
  "Redux",
  "REST APIs",
  "Firebase",
  "Appwrite",
  "AsyncStorage",
  "React Navigation",
  "Hermes",
];

const MARQUEE_ITEMS_ROW2 = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "GSAP",
  "Framer Motion",
  "TailwindCSS",
  "Python",
  "HTML & CSS",
  "Git",
  "Figma",
];

const MARQUEE_ITEMS_ROW3 = [
  "Windows",
  "Linux",
  "SIEM",
  "EDR",
  "Nmap",
  "Postman",
  "BurpSuite",
  "Oracle Cloud",
  "Oracle VirtualBox",
  "Network Security",
  "Pen testing",
  "Security Monitoring",
  "Vulnerability management",
  "Website security",
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="section-label">Expertise</span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            Skills & Technologies
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-base text-slate-600"
          >
            From mobile-first development with React Native and full-stack engineering to cybersecurity assessments and network monitoring.
          </p>
        </div>

        {/* Marquee Section */}
        <div className="space-y-6 overflow-hidden">
          {/* Row 1 — Left to Right */}
          <div className="relative overflow-hidden py-2">
            <div className="marquee-track marquee-right">
              {[...MARQUEE_ITEMS_ROW1, ...MARQUEE_ITEMS_ROW1].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border whitespace-nowrap shadow-sm"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-navy)",
                      background: "var(--color-cream)",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--color-navy)" }}
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Row 2 — Right to Left */}
          <div className="relative overflow-hidden py-2">
            <div className="marquee-track marquee-left">
              {[...MARQUEE_ITEMS_ROW2, ...MARQUEE_ITEMS_ROW2].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border whitespace-nowrap shadow-sm"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-slate)",
                      background: "#fff",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--color-slate-light)" }}
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Row 3 — Left to Right */}
          <div className="relative overflow-hidden py-2">
            <div className="marquee-track marquee-right">
              {[...MARQUEE_ITEMS_ROW3, ...MARQUEE_ITEMS_ROW3].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border whitespace-nowrap shadow-sm"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-navy)",
                      background: "var(--color-cream)",
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-red-500"
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        {/* GitHub contributions */}
        <div className="mt-8">
          <GithubCalendar username="sujalmudaliar24" />
        </div>
        {/* Social icons under calendar */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/sujalmudaliar24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-xl flex items-center justify-center border"
            style={{ borderColor: "var(--color-border)", background: "#fff" }}
          >
            <Image src={githubIcon} alt="GitHub" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-mudaliar-2402sm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-xl flex items-center justify-center border"
            style={{ borderColor: "var(--color-border)", background: "#fff" }}
          >
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
