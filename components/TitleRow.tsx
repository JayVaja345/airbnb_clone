"use client";

import { Share, Heart } from "lucide-react";
import { useState } from "react";
import { listing } from "@/lib/listing-data";

export default function TitleRow() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      <div className="min-w-0">
        <h3 className="text-2xl font-semibold">{listing.title}</h3>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-mist transition-colors text-sm font-medium underline">
          <Share className="w-4 h-4" strokeWidth={1.7} />
          Share
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-mist transition-colors text-sm font-medium underline"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${saved ? "fill-rausch stroke-rausch" : ""}`}
            strokeWidth={1.7}
          />
          Save
        </button>
      </div>
    </div>
  );
}
