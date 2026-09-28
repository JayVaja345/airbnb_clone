// components/Description.tsx — full file
"use client";

import { useState } from "react";
import { listing } from "@/lib/listing-data";

export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-6 border-b border-line">
      <div className="bg-mist rounded-xl px-4 py-3 text-[15px] mb-6">
        Some info has been automatically translated.{" "}
        <a href="#" className="underline font-medium">
          Show original
        </a>
      </div>

      <p
        className={`text-body leading-6 whitespace-pre-line ${expanded ? "" : "line-clamp-3"}`}
        style={
          expanded
            ? undefined
            : {
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            }
        }
      >
        {listing.description}
      </p>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="flex items-center gap-1 mt-3 font-semibold text-[15px] hover:underline"
      >
        {expanded ? "Show less" : "Show more"}
        <span aria-hidden>{expanded ? "‹" : "›"}</span>
      </button>
    </div>
  );
}