"use client";

import { useEffect, useState } from "react";

function useUTC8Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utc8 = new Date(now.getTime() + 8 * 60 * 60 * 1000);
      setTime(
        utc8.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Manila",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function StatusBar() {
  const time = useUTC8Time();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur-sm"
      role="status"
      aria-label="Developer status"
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-1.5">
        {/* Left */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-mono text-label text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-available"
              aria-hidden="true"
            />
            Available for hire
          </span>
          <span className="hidden font-mono text-label text-dim sm:block">·</span>
          <span className="hidden font-mono text-label text-dim sm:block">
            Calbayog City, PH
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-label text-dim md:block">
            UTC+8
          </span>
          <span className="font-mono text-label text-dim tabular-nums">
            {time}
          </span>
          <span className="hidden font-mono text-label text-dim lg:block">
            Next.js · TypeScript
          </span>
        </div>
      </div>
    </div>
  );
}
