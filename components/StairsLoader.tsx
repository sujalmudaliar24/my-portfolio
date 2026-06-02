"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

/**
 * Full-page loader shown on initial load/refresh and on client-side route changes.
 */
export default function StairsLoader() {
  const currentPath = usePathname();

  const stairParentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!stairParentRef.current) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(stairParentRef.current, { display: "none" });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Show stairs overlay
      tl.set(stairParentRef.current, { display: "block" });

      tl.from(
        ".stair",
        {
          height: 0,
          stagger: { amount: -0.2 },
          duration: 0.5,
        },
        0
      )
        .to(
          ".stair",
          {
            y: "100%",
            stagger: { amount: -0.25 },
            duration: 0.9,
          },
          0
        )
        // Hide overlay
        .to(stairParentRef.current, { display: "none" }, ">-0.1")
        // Reset positions for next run
        .set(
          ".stair",
          {
            y: "0%",
          },
          0
        );

      // Subtle reveal of the page content
      const page = document.querySelector("[data-page-content='true']");
      if (page instanceof HTMLElement) {
        gsap.fromTo(
          page,
          { opacity: 0, scale: 1.2 },
          { opacity: 1, scale: 1, duration: 0.9, delay: 0.05 }
        );
      }
    },
    [currentPath]
  );

  return (
    <div
      ref={stairParentRef}
      className="h-screen w-full fixed z-20 top-0"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
        <div className="stair h-full w-1/5 bg-black" />
      </div>
    </div>
  );
}

