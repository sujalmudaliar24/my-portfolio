"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import GithubCalendar from "@/components/GithubCalendar";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".timeline-card", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text */}
          <div>
            <span className="section-label about-reveal">About Me</span>
            <h2
              className="about-reveal text-3xl md:text-4xl font-bold mb-8 leading-snug"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Mobile developer by craft,
              <br />
              <span className="text-[var(--color-slate)]">security-minded by nature.</span>
            </h2>
            <div className="space-y-5">
              <p
                className="about-reveal text-base leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                I am Sujal Mudaliar, a React Native developer based in Mumbai
                with a Bachelor of Science in Information Technology from Malini
                Kishor Sanghvi College (CGPA 7.5). My focus is on building
                cross-platform mobile applications that deliver smooth,
                production-ready user experiences.
              </p>
              <p
                className="about-reveal text-base leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                I recently completed a 3-month internship at CyberClipper
                Infotech LLP, where I worked on production-level React Native
                applications — developing UI components, integrating REST APIs,
                implementing state management with Provider, and collaborating
                with senior developers in an agile environment through code
                reviews and client meetings.
              </p>
              <p
                className="about-reveal text-base leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                Beyond mobile development, I have a growing interest in
                cybersecurity and continuously expand my skill set through
                certifications in Oracle Cloud Infrastructure, AWS, and data
                analysis. I believe in writing code that is not just functional,
                but secure and scalable.
              </p>
              <GithubCalendar username="sujalmudaliar24" />
            </div>
          </div>

          {/* Right — Experience / Education / Certifications */}
          <div className="lg:pt-12">
            <span className="section-label about-reveal">Experience</span>

            <div className="right-sections mt-6 grid gap-6">
              <div
                className="section-card about-reveal"
                style={{ background: "var(--color-cream)", borderColor: "var(--color-border)" }}
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: "var(--color-navy)" }}>
                      React Native Developer Intern
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "var(--color-slate)" }}>
                      CyberClipper Infotech LLP
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "var(--color-navy)", color: "#fff" }}
                  >
                    Nov 2025 – Feb 2026
                  </span>
                </div>

                <ul className="space-y-2 text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-navy)] shrink-0" />
                    Developed and enhanced production-level React Native applications with hands-on experience in UI development and backend integration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-navy)] shrink-0" />
                    Integrated REST APIs, real-time data handling, and implemented state management using Provider for scalable architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-navy)] shrink-0" />
                    Designed intuitive, responsive UI components aligned with design requirements across multiple screen sizes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-navy)] shrink-0" />
                    Collaborated in agile sprints, participating in code reviews, client meetings, and debugging sessions
                  </li>
                </ul>
              </div>

              <div className="section-card" style={{ background: "var(--color-cream)", borderColor: "var(--color-border)" }}>
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ color: "var(--color-navy)" }}>
                      BSc Information Technology
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "var(--color-slate)" }}>
                      Malini Kishor Sanghvi College, Mumbai
                    </p>
                  </div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ background: "var(--color-warm)", color: "var(--color-navy)", border: "1px solid var(--color-border)" }}
                  >
                    CGPA 7.5
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-slate)" }}>
                  Studied core computer science fundamentals, web technologies, and software engineering principles. Built a strong foundation in programming and system design.
                </p>
              </div>

              <div className="section-card" style={{ background: "var(--color-cream)", borderColor: "var(--color-border)" }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-navy)" }}>
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Oracle Cloud Infrastructure: Foundations Associate",
                    "AWS: Foundations of Prompt Engineering",
                    "R & Python: Data Analysis",
                    "My Captain: Web Dev & Android",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg"
                      style={{ background: "var(--color-cream)", color: "var(--color-navy)", border: "1px solid var(--color-border)" }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
