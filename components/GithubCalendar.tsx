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
    <div className="github-calendar-wrapper mt-6" aria-label="GitHub contributions calendar">
      <div className="rounded-lg border border-slate-200 p-4 bg-white">
        <GitHubCalendar username={user} />
      </div>
    </div>
  );
}
