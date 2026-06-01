"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectsPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [oldIdx, setOldIdx] = useState(0);
  
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const currentProject = PROJECTS[displayIdx];
  const oldProject = PROJECTS[oldIdx];
  const nextProjectToFlip = PROJECTS[activeIdx];

  const handlePageTurn = (newIndex: number) => {
    if (newIndex === activeIdx || isFlipping) return;
    
    const direction = newIndex > activeIdx ? "next" : "prev";
    setOldIdx(activeIdx);
    setActiveIdx(newIndex);
    setFlipDirection(direction);
    setIsFlipping(true);

    // Halfway through the animation (375ms of 750ms), swap static display text
    setTimeout(() => {
      setDisplayIdx(newIndex);
    }, 375);

    // Animation ends (750ms)
    setTimeout(() => {
      setIsFlipping(false);
      setFlipDirection(null);
    }, 750);
  };

  return (
    <main className="min-h-screen desk-surface py-12 px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-navy transition"
          >
            ← Back to Home
          </Link>
          <div className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
            Interactive Journal — {activeIdx + 1} of {PROJECTS.length}
          </div>
        </div>

        {/* The Master Notebook Container */}
        <div className="single-notebook w-full min-h-[600px] flex flex-col lg:grid lg:grid-cols-2 relative rounded-3xl">
          {/* Centered wire binder spine */}
          <div className="notebook-center-spiral hidden lg:flex">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="notebook-center-ring" />
            ))}
          </div>

          {/* Bookmarks / Index Tabs (Vertical stack on right side) */}
          <div className="notebook-tabs-container hidden lg:flex">
            {PROJECTS.map((project, idx) => (
              <button
                key={project.slug}
                onClick={() => handlePageTurn(idx)}
                className={`notebook-tab ${idx === activeIdx ? "active" : ""}`}
              >
                {project.title.split(" — ")[0].substring(0, 10)}
              </button>
            ))}
          </div>

          {/* 3D Flipping Page Overlay (Rendered only when turning page) */}
          {isFlipping && flipDirection === "next" && (
            <div className="flip-sheet flip-sheet-right animate-flip-next">
              {/* Front side of page: old right page details */}
              <div className="flip-page-face flip-page-front p-8 sm:p-12 pl-12 flex flex-col justify-between bg-[#FDFCFA]">
                <div>
                  <div className="border-b border-slate-200 pb-2 mb-6 flex justify-between font-mono text-[10px] text-slate-400">
                    <span>PROJECT SPECS</span>
                    <span>PAGE.02</span>
                  </div>
                  <div className="lined-paper-right text-slate-700 text-sm leading-[28px] pr-2">
                    <p className="font-bold text-navy text-base mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      Implementations:
                    </p>
                    <p>{oldProject.description.substring(0, 120)}...</p>
                  </div>
                </div>
                <div className="h-20 border-t border-slate-100 mt-6" />
              </div>

              {/* Back side of page: new left page details */}
              <div className="flip-page-face flip-page-back p-8 sm:p-12 pr-12 flex flex-col justify-between bg-[#FDFCFA]">
                <div>
                  <div className="border-b border-red-200 pb-2 mb-6 flex justify-between font-mono text-[10px] text-red-400">
                    <span>PROJECT DETAILS</span>
                    <span>PAGE.01</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                    {nextProjectToFlip.title}
                  </h2>
                </div>
                <div className="h-32 bg-slate-50 border border-slate-100 rounded-lg" />
              </div>
            </div>
          )}

          {/* isFlipping and prev direction */}
          {isFlipping && flipDirection === "prev" && (
            <div className="flip-sheet flip-sheet-left animate-flip-prev">
              {/* Front side of page: old left page details */}
              <div className="flip-page-face flip-page-front p-8 sm:p-12 pr-12 flex flex-col justify-between bg-[#FDFCFA]">
                <div>
                  <div className="border-b border-red-200 pb-2 mb-6 flex justify-between font-mono text-[10px] text-red-400">
                    <span>PROJECT DETAILS</span>
                    <span>PAGE.01</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy" style={{ fontFamily: "var(--font-heading)" }}>
                    {oldProject.title}
                  </h2>
                </div>
                <div className="h-32 bg-slate-50 border border-slate-100 rounded-lg" />
              </div>

              {/* Back side of page: new right page details */}
              <div className="flip-page-face flip-page-back p-8 sm:p-12 pl-12 flex flex-col justify-between bg-[#FDFCFA]">
                <div>
                  <div className="border-b border-slate-200 pb-2 mb-6 flex justify-between font-mono text-[10px] text-slate-400">
                    <span>PROJECT SPECS</span>
                    <span>PAGE.02</span>
                  </div>
                  <div className="lined-paper-right text-slate-700 text-sm leading-[28px] pr-2">
                    <p className="font-bold text-navy text-base mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      Implementations:
                    </p>
                    <p>{nextProjectToFlip.description.substring(0, 120)}...</p>
                  </div>
                </div>
                <div className="h-20 border-t border-slate-100 mt-6" />
              </div>
            </div>
          )}

          {/* LEFT PAGE (Static Base) */}
          <section className="lined-paper-left p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 border-[#cbd5e1] flex flex-col justify-between rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl">
            <div>
              <div className="flex justify-between items-center border-b border-red-200 pb-2 mb-6">
                <span className="text-[10px] font-bold text-red-400 tracking-wider uppercase">
                  {currentProject.category}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  PAGE.01
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-2">
                    Case Study
                  </span>
                  <h1
                    className="text-3xl font-extrabold text-navy leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {currentProject.title}
                  </h1>
                </div>

                {/* Polaroid project thumbnail cover */}
                <div className="max-w-md mx-auto lg:mx-0 pt-4">
                  <div 
                    onClick={() => setGalleryOpen(true)}
                    className="notebook-polaroid cursor-pointer group"
                  >
                    <div className="notebook-polaroid-tape" />
                    <div className="relative w-full h-52 sm:h-60 overflow-hidden rounded bg-slate-100">
                      <Image
                        src={currentProject.image}
                        alt={currentProject.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 50vw"
                        priority
                      />
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                        <span className="bg-white/90 backdrop-blur-sm text-navy px-4 py-2 rounded-full text-xs font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                          Open Gallery
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setGalleryOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 text-xs font-bold text-white transition hover:bg-[#1a2f54] shadow-md shadow-navy/10 cursor-pointer"
              >
                View Photo Gallery
              </button>
            </div>
          </section>

          {/* RIGHT PAGE (Static Base) */}
          <section className="lined-paper-right p-6 sm:p-10 lg:p-12 lg:pl-16 flex flex-col justify-between rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl">
            <div>
              <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-6">
                <span className="text-[10px] font-bold text-red-400 tracking-wider uppercase">
                  Project Log
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  PAGE.02
                </span>
              </div>

              <div className="space-y-6">
                {/* Lined paper text formatting */}
                <div className="notebook-line-text text-slate-700 text-sm sm:text-base leading-[28px] pr-2">
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Overview:
                  </h3>
                  <p className="mb-4">
                    {currentProject.description}
                  </p>

                  <h3 className="text-base font-bold text-navy mb-1 mt-6" style={{ fontFamily: "var(--font-heading)" }}>
                    Applied Stack:
                  </h3>
                  <p className="font-semibold text-xs text-slate-500 mb-4">
                    {currentProject.tech.join(" · ")}
                  </p>
                </div>

                {/* Tech tag cloud */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-[#f0eee9] border border-[#d6d3cc] px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 tracking-wide"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notebook page footer actions */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap justify-between gap-4 items-center">
              <div className="flex gap-4 items-center">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-500 hover:text-navy transition"
                >
                  GitHub Repository
                </a>
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-navy transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            {/* Mobile next/prev controls */}
            <div className="flex gap-2 lg:hidden">
              <button
                disabled={activeIdx === 0}
                onClick={() => handlePageTurn(activeIdx - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold disabled:opacity-50"
              >
                ← Prev
              </button>
              <button
                disabled={activeIdx === PROJECTS.length - 1}
                onClick={() => handlePageTurn(activeIdx + 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold disabled:opacity-50"
              >
                Next →
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop bottom quick page-turn arrow indicators */}
      <div className="hidden lg:flex justify-between max-w-5xl mx-auto mt-6 px-4">
        <button
          onClick={() => handlePageTurn(activeIdx - 1)}
          disabled={activeIdx === 0 || isFlipping}
          className="group flex items-center gap-2 text-sm font-semibold text-slate-600 disabled:opacity-30 transition hover:text-navy cursor-pointer"
        >
          <span className="transform transition-transform group-hover:-translate-x-1">←</span>
          <span>Turn Left (Previous Project)</span>
        </button>

        <button
          onClick={() => handlePageTurn(activeIdx + 1)}
          disabled={activeIdx === PROJECTS.length - 1 || isFlipping}
          className="group flex items-center gap-2 text-sm font-semibold text-slate-600 disabled:opacity-30 transition hover:text-navy cursor-pointer"
        >
          <span>Turn Right (Next Project)</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Improved Fullscreen Media Gallery Overlay */}
      {galleryOpen && (
        <ProjectGallery
          images={currentProject.images ?? [currentProject.image]}
          title={currentProject.title}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </main>
  );
}
