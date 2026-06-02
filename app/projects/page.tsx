"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { PROJECTS } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";


import SiteShell from "@/components/SiteShell";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);

  const openModal = (project: typeof PROJECTS[number]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <SiteShell pageClassName="grid-bg">
      <main className="min-h-screen desk-surface py-10 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20 2xl:px-24">
          {/* Header Navigation */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-700 hover:text-navy transition"
            >
              <span className="text-lg leading-none">←</span>
              <span>Back to Home</span>
            </Link>

            <div className="rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Total Projects: {PROJECTS.length}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <button
                key={project.slug}
                onClick={() => openModal(project)}
                className="group flex flex-col h-full relative w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
className="object-contain h-48 w-full bg-white"
                />

                <div className="p-4 flex-1 flex flex-col">
                  <span className="rounded-full border border-red-300 bg-red-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500 mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-semibold title-font text-lg text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-[#f0eee9] border border-[#d6d3cc] px-2.5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 tracking-wide"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>

              <ProjectGallery
                images={selectedProject.images ?? [selectedProject.image]}
                title={selectedProject.title}
              />

              <p className="mt-4 text-gray-700">{selectedProject.description}</p>

              {selectedProject.apkUrl && (
                <div className="mt-6">
                  <a
                    href={selectedProject.apkUrl}
                    download
                    className="inline-flex w-full items-center justify-center rounded-xl bg-navy px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#1a2f54] shadow-md shadow-navy/10"
                  >
                    Download APK
                  </a>
                </div>
              )}

              <div className="mt-6">

                <h3 className="font-semibold text-gray-900 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-[#f0eee9] border border-[#d6d3cc] px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 tracking-wise"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <span className="rounded-full border border-red-300 bg-red-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                  {selectedProject.category}
                </span>
              </div>

              <div className="mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-navy)" }}
                  className="hover:underline"
                >
                  GitHub
                </a>
                {selectedProject.live && (
                  <>
                    <span className="mx-4">|</span>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-navy)" }}
                      className="hover:underline"
                    >
                      Live Demo
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </SiteShell>
  );
}

