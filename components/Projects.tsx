"use client";

import { useEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";

import ProjectsPinnedScroll from "@/components/ProjectsPinnedScroll";





export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".projects-loader-track",
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left center", duration: 1.2, ease: "power3.out" }
      )
        .from(
          ".projects-loader-spark",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".projects-reveal",
          {
            y: 30,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);



  return (
    <section id="projects" ref={sectionRef} className="py-28 md:py-36">
      <div
        className="w-full max-w-[1600px] mx-auto"
        style={{ padding: "0 clamp(2.5rem, 6vw, 9rem)" }}
      >
        <div className="text-center mb-16 relative text-stack px-2">

          <div className="projects-loader" aria-hidden="true">
            <div className="projects-loader-track" />
            <div className="projects-loader-spark" />
          </div>

          <span className="section-label projects-reveal mb-3 block">Selected Work</span>
          <h2
            className="projects-reveal text-3xl md:text-4xl font-bold mt-2 mb-4 text-navy"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Project Showcase
          </h2>
          <p className="mt-4 mb-2 text-base px-4" style={{ color: "var(--color-slate)" }}>
            A curated collection of my mobile applications — from recipe recommendation engines to full e-commerce platforms.
          </p>
        </div>

        {/* Projects Deck (pinned scroll animation) */}
        <div className="projects-reveal">
          <ProjectsPinnedScroll />
        </div>

      </div>
    </section>
  );
}