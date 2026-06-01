import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/lib/projects";
import ProjectGallery from "@/components/ProjectGallery";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-[#F0EEE9] py-10 px-4 sm:px-6 lg:px-12 xl:px-16 grid-bg">
      <div className="mx-auto w-full max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-navy"
          >
            ← Back to projects
          </Link>
          <div className="rounded-full border border-[#cbd5e1] bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 shadow-sm">
            Case Study — Vol. 1
          </div>
        </div>

        {/* The Open Notebook */}
        <div className="relative border border-[#cbd5e1] bg-[#FCFAF6] rounded-3xl shadow-[0_30px_70px_rgba(27,42,74,0.12)] flex flex-col lg:grid lg:grid-cols-2 min-h-[750px] overflow-hidden">
          {/* Centered spiral binding down the middle (Only on desktop lg screens) */}
          <div className="absolute left-1/2 top-8 bottom-8 w-[24px] -ml-[12px] hidden lg:flex flex-col justify-between z-20 pointer-events-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-7 h-2 rounded-full bg-gradient-to-r from-slate-400 via-slate-100 to-slate-500 border border-slate-500 shadow-sm"
              />
            ))}
          </div>

          {/* Left Page: Gallery and Meta Sticky Notes */}
          <section className="p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#cbd5e1] flex flex-col justify-between bg-[#FDFCFA]">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="rounded-full border border-red-300 bg-red-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {project.tech.length} Tools Used
                </span>
              </div>

              {/* Title & Polaroid Photo Stack */}
              <div className="space-y-6">
                <div>
                  <h1 
                    className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h1>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md max-w-lg mx-auto lg:mx-0">
                  <ProjectGallery images={project.images ?? [project.image]} title={project.title} />
                </div>
              </div>
            </div>

            {/* Quick Metadata Stats (Styled as paper notes) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-amber-50/70 border border-amber-200/60 p-5 shadow-sm transform -rotate-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                  📌 Tech Stack
                </h3>
                <p className="text-xs font-semibold text-amber-900 leading-relaxed">
                  {project.tech.join(", ")}
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50/70 border border-blue-200/60 p-5 shadow-sm transform rotate-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
                  💼 Deliverables
                </h3>
                <p className="text-xs font-semibold text-blue-900 leading-relaxed">
                  Mobile App Development, UI/UX Design, REST API Integration.
                </p>
              </div>
            </div>
          </section>

          {/* Right Page: Description and Detailed Overview */}
          <section className="p-6 sm:p-10 lg:p-12 lg:pl-16 flex flex-col justify-between bg-[#FDFDFD]">
            <div>
              {/* Lined paper header */}
              <div className="flex justify-between items-center border-b-2 border-red-200 pb-2 mb-6">
                <span className="text-[10px] font-bold text-red-400 tracking-widest uppercase">
                  Case Study Notes
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  PAGE.02
                </span>
              </div>

              {/* Lined paper content */}
              <div className="space-y-6">
                <div className="lined-paper text-slate-700 text-sm sm:text-base leading-[28px] pr-2">
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Overview & Background
                  </h3>
                  <p className="mb-6">
                    {project.description}
                  </p>

                  <h3 className="text-lg font-bold text-navy mb-2 mt-8" style={{ fontFamily: "var(--font-heading)" }}>
                    Key Implementations
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Developed clean and responsive views tailored for smooth interaction on various screen dimensions.</li>
                    <li>Integrated scalable backend communication with optimized session handlers.</li>
                    <li>Utilized React Native features ensuring fast rendering speeds and minimal memory footprints.</li>
                  </ul>
                </div>

                {/* Tech Badges cloud */}
                <div className="pt-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Applied Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-medium text-slate-700 hover:border-navy hover:text-navy transition cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions & Next Project Footer */}
            <div className="mt-12 pt-6 border-t border-slate-200">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-navy px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#1a2f54] shadow-md shadow-navy/10"
                  >
                    View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-[#cbd5e1] bg-white px-6 py-3.5 text-xs font-bold text-slate-700 transition hover:border-navy hover:text-navy"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Next Project link */}
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-navy transition py-2"
                >
                  <span>Next: {nextProject.title.split(" — ")[0]}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
