"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const MOBILE_SKILLS = [
  { name: "React Native", level: 92 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 78 },
  { name: "Expo", level: 85 },
  { name: "REST APIs", level: 87 },
  { name: "Redux", level: 80 },
];

const TOOLS_SKILLS = [
  { name: "MERN Stack", level: 75 },
  { name: "GSAP / Framer Motion", level: 72 },
  { name: "TailwindCSS / Bootstrap", level: 85 },
  { name: "Python", level: 65 },
  { name: "Firebase / Appwrite", level: 78 },
  { name: "Git & Version Control", level: 82 },
];

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
  "Provider",
];

const MARQUEE_ITEMS_ROW2 = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "GSAP",
  "Framer Motion",
  "TailwindCSS",
  "Bootstrap",
  "Python",
  "HTML & CSS",
  "Git",
  "Figma",
];

function SkillColumn({
  title,
  skills,
  columnClass,
}: {
  title: string;
  skills: { name: string; level: number }[];
  columnClass: string;
}) {
  return (
    <div>
      <h3
        className="text-xl font-semibold mb-6"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
      >
        {title}
      </h3>
      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name} className={columnClass}>
            <div className="flex justify-between mb-2">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-navy)" }}
              >
                {skill.name}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--color-slate-light)" }}
              >
                {skill.level}%
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--color-border-light)" }}
            >
              <div
                className="skill-bar-fill"
                data-width={skill.level}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars
      gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar) => {
        gsap.to(bar, {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger skill items
      gsap.from(".skill-item-left", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".skill-item-right", {
        x: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
            className="mt-4 max-w-lg mx-auto text-base"
            style={{ color: "var(--color-slate)" }}
          >
            From mobile-first development with React Native to full-stack
            capabilities with the MERN stack — here is what I work with.
          </p>
        </div>

        {/* Skill Bars */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <SkillColumn
            title="Mobile Development"
            skills={MOBILE_SKILLS}
            columnClass="skill-item-left"
          />
          <SkillColumn
            title="Tools & Frameworks"
            skills={TOOLS_SKILLS}
            columnClass="skill-item-right"
          />
        </div>

        {/* Marquee Section */}
        <div className="space-y-4 overflow-hidden">
          {/* Row 1 — Left to Right */}
          <div className="relative overflow-hidden py-3">
            <div className="marquee-track marquee-right">
              {[...MARQUEE_ITEMS_ROW1, ...MARQUEE_ITEMS_ROW1].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border whitespace-nowrap"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-navy)",
                      background: "var(--color-cream)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--color-navy)" }}
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Row 2 — Right to Left */}
          <div className="relative overflow-hidden py-3">
            <div className="marquee-track marquee-left">
              {[...MARQUEE_ITEMS_ROW2, ...MARQUEE_ITEMS_ROW2].map(
                (item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border whitespace-nowrap"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-slate)",
                      background: "#fff",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--color-slate-light)" }}
                    />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
