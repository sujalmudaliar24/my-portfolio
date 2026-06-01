"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// react-github-calendar is a client-side only component; import dynamically
// ensure we return the module's default export (the React component)
const GitHubCalendar: any = dynamic(
  () => import("react-github-calendar").then((mod) => (mod as any).GitHubCalendar || (mod as any).default),
  { ssr: false }
);

export default function GithubCalendar({ username = "sujalmudaliar24" }: { username?: string }) {
  const [user] = useState(username);

  return (
    <div className="github-calendar-wrapper mt-6">
      <h3 className="text-lg font-bold mb-3">GitHub Contributions</h3>
      <div className="rounded-lg border border-slate-200 p-4 bg-white">
        <GitHubCalendar username={user} />
      </div>
    </div>
  );
}
