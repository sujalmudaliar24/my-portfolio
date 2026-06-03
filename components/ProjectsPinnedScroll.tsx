"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { PROJECTS, type StaticImageData } from '@/lib/projects';

export default function ProjectsPinnedScroll() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      {PROJECTS.map((project, index) => {
        const isBeyondThird = index >= 3; // For "+3 projects" text color change

        // Compute the image URL for the project
        const imageSrc = project.images?.[0] || project.image;
        const imageUrl =
          typeof imageSrc === 'object' && imageSrc !== null && 'src' in imageSrc
            ? (imageSrc as StaticImageData).src
            : imageSrc;

        return (
          <React.Fragment key={project.slug}>
            {/* Divider between projects (not before the first) */}
            {index > 0 && (
              <div
                style={{
                  width: "60%",
                  maxWidth: "400px",
                  height: "1px",
                  background: "var(--color-border)",
                  margin: "0 auto",
                }}
              />
            )}

            <div
              ref={elem => {
                // Animate each project card as it enters the viewport
                if (elem) {
                  gsap.fromTo(
                    elem,
                    {
                      y: 50,
                      opacity: 0
                    },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.8,
                      ease: "power3.out",
                      scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                        end: "top 60%",
                        toggleActions: "play none none none",
                      }
                    }
                  );
                }
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1.5rem 1rem",
              }}
            >
              {/* Mobile Phone Frame */}
              <div className="relative w-[280px] h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-navy/20">
                {/* Phone Screen */}
                <div className="absolute inset-0">
                  <img
                    src={imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Phone Details (optional: notch, chin, etc.) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center space-x-1">
                  <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-1">
                  <div className="w-4 h-1 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ textAlign: "center", marginTop: "2rem", padding: "0 1rem" }}>
                <h3
                  className={`font-bold text-2xl ${isBeyondThird ? 'text-red-500' : 'text-navy'} tracking-tighter`}
                  style={{ marginBottom: "0.75rem" }}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-slate-600 max-w-xl ${isBeyondThird ? 'text-red-400' : 'text-slate-500'} leading-relaxed`}
                  style={{ marginBottom: "1rem" }}
                >
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center" style={{ marginTop: "0.75rem", padding: "0 0.5rem" }}>
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={`${project.slug}-${techIndex}`}
                      className="px-3 py-1 bg-[var(--color-slate)]/10 text-xs font-semibold rounded-full transition-colors hover:bg-[var(--color-slate)]/20"
                    >
                      #{tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-[var(--color-slate)]/10 text-xs font-semibold rounded-full text-navy transition-colors hover:bg-[var(--color-slate)]/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                <div className="hidden md:flex flex-col items-center" style={{ marginTop: "1.25rem" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-navy hover:text-navy-800">
                    View Code on GitHub
                  </a>
                  {project.apkUrl && (
                    <a href={project.apkUrl} download className="mt-2 px-4 py-2 bg-navy text-black rounded border border-navy/20 shadow-md hover:bg-navy-700 hover:text-white hover:shadow-lg transition-all duration-200">
                      Download APK
                    </a>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}