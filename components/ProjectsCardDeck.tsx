"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { PROJECTS, type Project } from "@/lib/projects";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ProjectsCardDeck() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(() => PROJECTS, []);
  const activeProject: Project = projects[activeIndex];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Sticky card feel: keep UI in sync with scroll position.
      const total = projects.length - 1;

      // Create a trigger that drives activeIndex; no need to animate the DOM element.
      gsap.to({}, {
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${Math.max(600, projects.length * 420)}`,
          scrub: 0.6,
          onUpdate: (self) => {
            const progress = self.progress; // 0..1
            const idx = Math.round(progress * total);
            setActiveIndex((prev) => (prev === idx ? prev : idx));
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      aria-label="Projects"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sticky visual */}
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200/70 bg-[#FCFAF6] shadow-[0_30px_70px_rgba(27,42,74,0.12)] overflow-hidden">
              <div className="relative h-[340px] sm:h-[420px] md:h-[460px]">
                <Image
                  key={activeProject.slug}
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-contain bg-slate-100"
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full border border-red-300 bg-red-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                      {activeProject.category}
                    </span>
                    <span className="rounded-full bg-slate-100/90 border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {activeIndex + 1} / {projects.length}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {activeProject.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl">
                    {activeProject.description}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 border-t border-slate-200/70">
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold text-slate-700"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hidden track element for potential future animation hooks */}
            <div className="sr-only" />
          </div>
        </div>

        {/* Scroll/selector list */}
        <div className="lg:col-span-5">
          <div className="space-y-4">
            {projects.map((p, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => setActiveIndex(clamp(idx, 0, projects.length - 1))}
                  className={
                    "w-full text-left rounded-2xl border p-4 transition-all duration-300 " +
                    (isActive
                      ? "bg-navy text-white border-navy shadow-lg"
                      : "bg-white/70 text-slate-700 border-slate-200 hover:border-slate-300")
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={
                        "text-xs font-bold uppercase tracking-wider " +
                        (isActive ? "text-white/90" : "text-slate-500")
                      }
                    >
                      #{p.slug}
                    </span>
                    <span
                      className={
                        "text-xs font-bold " +
                        (isActive ? "text-white/80" : "text-slate-500")
                      }
                    >
                      {idx + 1}
                    </span>
                  </div>

                  <div
                    className={
                      "mt-2 font-bold " +
                      (isActive ? "text-white" : "text-navy")
                    }
                  >
                    {p.title}
                  </div>

                  <div
                    className={
                      "mt-2 text-sm " +
                      (isActive ? "text-white/85" : "text-slate-600")
                    }
                  >
                    {p.tech.slice(0, 3).join(", ")}
                    {p.tech.length > 3 ? "…" : ""}
                  </div>
                </button>
              );
            })}

            {/* Actions */}
            <div className="pt-2">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-xs font-bold text-white hover:bg-[var(--color-navy-light)] transition shadow-md shadow-navy/10"
              >
                View on GitHub
              </a>

              {activeProject.live && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 hover:border-navy hover:text-navy transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

