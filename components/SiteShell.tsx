"use client";

import type { ReactNode } from "react";

import StairsLoader from "@/components/StairsLoader";

export default function SiteShell({
  children,
  pageClassName,
}: {
  children: ReactNode;
  pageClassName?: string;
}) {
  return (
    <div className="min-h-screen w-full">
      {/* Loader overlay (runs on initial load/refresh + route changes) */}
      <StairsLoader />

      {/* Background texture lives at section-level, but we keep a consistent canvas */}
      <div
        className="fixed inset-0 -z-10"
        aria-hidden="true"
        style={{ backgroundColor: "var(--color-cream)" }}
      />

      <div className="relative w-full">
        <div
          data-page-content="true"
          className={`pt-20 ${pageClassName ?? ""} w-full`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}


