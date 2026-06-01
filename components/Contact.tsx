"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import githubIcon from "@/src/github.png";
import linkedinIcon from "@/src/linkedin.png";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".contact-reveal").forEach((el) => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {/* Left — Info */}
          <div>
            <span className="section-label contact-reveal">Get In Touch</span>
            <h2
              className="contact-reveal text-3xl md:text-4xl font-bold mt-2 mb-6 leading-snug"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-navy)" }}
            >
              Let&apos;s connect and
              <br />
                <span className="text-(--color-slate)">build something great.</span>
            </h2>
            <p
              className="contact-reveal text-base leading-relaxed mb-10"
              style={{ color: "var(--color-slate)" }}
            >
              Whether you have a mobile app idea, need a React Native developer
              for your team, or just want to say hello — I would love to hear
              from you. Based in Mumbai, open to remote opportunities.
            </p>

            {/* Contact Info */}
            <div className="contact-reveal space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--color-warm)", color: "var(--color-navy)" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a
                  href="mailto:sujalm.tech@gmail.com"
                  className="text-sm font-medium transition-colors hover:text-(--color-navy)"
                  style={{ color: "var(--color-slate)" }}
                >
                  sujalm.tech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--color-warm)", color: "var(--color-navy)" }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-slate)" }}
                >
                  +91-8928195343
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-reveal flex items-center gap-5">
              <a
                href="https://github.com/sujalmudaliar24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 hover:bg-(--color-navy) hover:border-(--color-navy)"
                style={{ borderColor: "var(--color-border)", background: "#fff" }}
                aria-label="GitHub"
              >
                <Image src={githubIcon} alt="GitHub" width={24} height={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sujal-mudaliar-2402sm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 hover:bg-(--color-navy) hover:border-(--color-navy)"
                style={{ borderColor: "var(--color-border)", background: "#fff" }}
                aria-label="LinkedIn"
              >
                <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
