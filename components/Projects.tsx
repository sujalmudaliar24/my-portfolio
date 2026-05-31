"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const PROJECTS = [
  {
    title: "Cooksy — Recipe Recommendation App",
    description:
      "A cross-platform React Native application with a Flask backend that recommends recipes using K-Means clustering based on user search history and Spoonacular API data. Features persistent data storage with AsyncStorage, personalized recommendations per session, and Firebase authentication.",
    tech: ["React Native", "Flask", "K-Means", "Spoonacular API", "AsyncStorage", "Firebase"],
    category: "Mobile App · ML",
    github: "https://github.com",
    live: null,
  },
  {
    title: "DripHouse — E-Commerce App",
    description:
      "A scalable e-commerce mobile application built with React Native CLI featuring a modular, reusable UI architecture. Implements Appwrite authentication, AsyncStorage-based session management, nested navigation with Stack and Tabs, and Hermes engine optimization for peak performance.",
    tech: ["React Native CLI", "Appwrite", "AsyncStorage", "Hermes", "Stack Navigation"],
    category: "Mobile App · E-Commerce",
    github: "https://github.com",
    live: null,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 grid-bg"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="section-label">Selected Work</span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
          >
            Projects
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto text-base"
            style={{ color: "var(--color-slate)" }}
          >
            Real mobile applications I have designed and built — from recipe
            recommendations powered by machine learning to full-featured
            e-commerce experiences.
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="project-card rounded-xl border p-6 flex flex-col"
              style={{
                background: "#fff",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Category */}
              <span
                className="text-xs font-semibold tracking-wider uppercase mb-4"
                style={{ color: "var(--color-slate-light)" }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--color-slate)" }}
              >
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{
                      background: "var(--color-cream)",
                      color: "var(--color-navy)",
                      border: "1px solid var(--color-border-light)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-navy)]"
                  style={{ color: "var(--color-slate)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--color-navy)]"
                    style={{ color: "var(--color-slate)" }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
