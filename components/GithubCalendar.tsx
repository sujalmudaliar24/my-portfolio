"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// react-github-calendar is a client-side only component; import dynamically
// ensure we return the module's default export (the React component)
// Keep module typing loose to avoid mismatch with react-github-calendar's internal Props.
type DynamicComponent = React.ComponentType<{ username?: string }>
  | (() => null);

const GitHubCalendar = dynamic<{ username?: string }>(() =>
  import("react-github-calendar").then((mod: unknown) => {
    const m = mod as {
      GitHubCalendar?: DynamicComponent;
      default?: DynamicComponent;
    };
    return m.GitHubCalendar ?? m.default ?? (() => null);
  }),
{ ssr: false });




export default function GithubCalendar({ username = "sujalmudaliar24" }: { username?: string }) {
  const [user] = useState(username);

  return (
    <div
      className="github-calendar-wrapper mt-8 w-full flex flex-col items-center"
      aria-label="GitHub contributions calendar"
    >
      {/* Title */}
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--color-navy)" }}
      >
        GitHub Contributions
      </h3>

      <div
        className="w-full rounded-xl border p-1"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "#000",
          color: "#D7E3FF",
        }}
      >
        {/* Horizontal scroll container — uses custom scrollbar from globals.css */}
        <div
          className="github-calendar-scroll"
          style={{
            padding: "1.25rem 1rem",
          }}
        >
          <div className="inline-block min-w-[760px]">
            <GitHubCalendar username={user} />
          </div>
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <p
        className="mt-3 text-xs sm:hidden"
        style={{ color: "var(--color-slate-light)" }}
      >
        ← Scroll horizontally to view →
      </p>
    </div>
  );
}

