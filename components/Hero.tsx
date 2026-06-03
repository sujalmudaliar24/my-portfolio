"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import profileImage from "@/src/profileimg.jpeg";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(nameRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          roleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          decorRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1"
        )
        .from(
          imageRef.current,
          {
            x: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=1.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Decorative elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "var(--color-navy)" }}
        />
        <div
          className="absolute bottom-40 -left-16 w-64 h-64 rounded-full opacity-[0.03]"
          style={{ background: "var(--color-navy)" }}
        />
        {/* Grid accent lines */}
        <div
          className="absolute top-1/4 left-0 w-full h-px opacity-[0.06]"
          style={{ background: "var(--color-navy)" }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px opacity-[0.06]"
          style={{ background: "var(--color-navy)" }}
        />
      </div>

      <div
        className="w-full max-w-[1600px] mx-auto relative z-10"
        style={{ padding: "clamp(8rem, 12vw, 11rem) clamp(2.5rem, 6vw, 9rem)" }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 xl:gap-28">


          {/* Left — Text Content */}
          <div className="flex-1 lg:pr-12">
            {/* Label */}
            <div className="section-label mb-4 mt-2">Sujal Mudaliar — Mumbai</div>

            {/* Name */}
            <h1
              ref={nameRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6 mt-2"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Sujal
              <br />
              <span className="text-[var(--color-slate)]">Mudaliar</span>
            </h1>

            {/* Role */}
            <p
              ref={roleRef}
              className="text-lg md:text-xl font-medium mb-8 flex items-center flex-wrap gap-2"
              style={{ color: "var(--color-navy)" }}
            >
              React Native Developer
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ background: "var(--color-slate-light)" }}
              />
              Cybersecurity Enthusiast
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base md:text-lg leading-relaxed mb-10 pr-2"
              style={{ color: "var(--color-slate)" }}
            >
              Building cross-platform mobile applications with React Native and
              the MERN stack. BSc IT graduate from Mumbai with a passion for
              creating seamless digital experiences and an aspiring interest in
              cybersecurity.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mt-2 ">
              <button
                onClick={() => scrollTo("#projects")}
                className="btn-secondary"
                 style={{ color: "#000", backgroundColor: "#fff" }}
              >
                View Projects
                <svg
                  width="16"
                  height="16"
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
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-secondary"
                style={{ color: "#000", backgroundColor: "#fff" }}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div
            ref={imageRef}
            className="relative flex-shrink-0 hero-profile-wrapper w-[320px] h-[380px] sm:w-[380px] sm:h-[460px] md:w-[480px] md:h-[560px] lg:w-[560px] lg:h-[680px]"
          >
            {/* Outer decorative ring */}
            <div className="hero-profile-ring" />

            {/* Image container */}
            <div className="hero-profile-img-container">
              <Image
                src={profileImage}
                alt="Sujal Mudaliar"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 380px"
              />
            </div>

            {/* Floating badge — role */}
            <div className="hero-badge hero-badge-bottom-left">
              <span className="hero-badge-dot" />
              <span
                className="text-xs font-semibold"
                style={{
                  color: "#070A12",
                  textShadow: "0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                Available for Work
              </span>
            </div>

            {/* Floating badge — experience */}
            <div className="hero-badge hero-badge-top-right">
              <span className="text-xs font-semibold" style={{ color: "var(--color-black)" }}>
                3+ Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-slate)" }}>
          Scroll
        </span>
        <div className="w-px h-10" style={{ background: "var(--color-slate)" }} />
      </div>
    </section>
  );
}
