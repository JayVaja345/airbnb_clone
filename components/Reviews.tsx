// components/Reviews.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { SprayCan, CircleCheck, Search, MessageCircle, Map, Tag as TagIcon, Leaf as LeafIcon } from "lucide-react";
import Stars from "@/components/Stars";
import { listing } from "@/lib/listing-data";

function Leaf({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="#222222"
      className={flip ? "scale-x-[-1]" : ""}
      aria-hidden
    >
      <path d="M12 2C8 2 4 8 4 13a8 8 0 0016 0c0-5-4-11-8-11z" />
    </svg>
  );
}

const OVERALL_DIST = [
  { star: 5, pct: 92 },
  { star: 4, pct: 6 },
  { star: 3, pct: 2 },
  { star: 2, pct: 0 },
  { star: 1, pct: 0 },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Cleanliness: SprayCan,
  Accuracy: CircleCheck,
  "Check-in": Search,
  Communication: MessageCircle,
  Location: Map,
  Value: TagIcon,
};

function RatingBreakdown() {
  return (
    <div className="flex divide-x divide-line mt-10 pb-10 border-b border-line overflow-x-auto no-scrollbar">
      <div className="flex-1 min-w-[180px] pr-6">
        <p className="font-medium mb-3">Overall rating</p>
        <div className="space-y-1.5">
          {OVERALL_DIST.map((d) => (
            <div key={d.star} className="flex items-center gap-3 text-xs text-foggy">
              <span className="w-2">{d.star}</span>
              <div className="flex-1 h-1 bg-[#DDDDDD] rounded-full overflow-hidden">
                <div className="h-full bg-[#222222] rounded-full" style={{ width: `${d.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {listing.ratingBreakdown.map((m) => {
        const Icon = CATEGORY_ICONS[m.label] ?? CircleCheck;
        return (
          <div key={m.label} className="flex-1 min-w-[110px] px-6">
            <p className="font-medium mb-2">{m.label}</p>
            <p className="text-2xl font-light mb-2">{m.value}</p>
            <Icon className="w-5 h-5" strokeWidth={1.4} />
          </div>
        );
      })}
    </div>
  );
}

// only these two pieces changed in components/Reviews.tsx

const FILTER_TAGS = [
  { label: "Comfort", count: 6, emoji: "🛋️" },
  { label: "Accuracy", count: 5, emoji: "✅" },
  { label: "Hot tub", count: 5, emoji: "🛁" },
  { label: "Condition", count: 4, emoji: "📝" },
  { label: "Hospitality", count: 8, emoji: "🎁" },
  { label: "Cleanliness", count: 4, emoji: "🧴" },
  { label: "Amenities", count: 2, emoji: "🧺" },
];

function ReviewCard({ r }: { r: (typeof listing.reviews)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const long = r.text.length > 160;
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Image src={r.avatar} alt={r.name} width={44} height={44} className="rounded-full object-cover" />
        <div>
          <p className="font-medium text-[15px]">{r.name}</p>
          <p className="text-[15px] text-foggy">
            {r.years} {r.years === 1 ? "year" : "years"} on Airbnb
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[15px] mb-1">
        <Stars value={r.stars} size={12} />
        <span className="text-foggy">· {r.date}</span>
      </div>
      <p className={`text-body leading-6 ${!expanded && long ? "line-clamp-3" : ""}`}>{r.text}</p>
      {long && (
        <button onClick={() => setExpanded((e) => !e)} className="font-semibold text-[15px] mt-1 hover:underline">
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="py-8 border-b border-line">
      <div className="flex items-center justify-center gap-4">
        <LeafIcon className="w-9 h-9 -rotate-90" strokeWidth={1.5} aria-hidden />
        <span className="text-7xl font-light">{listing.rating}</span>
        <LeafIcon className="w-9 h-9 rotate-90 scale-x-[-1]" strokeWidth={1.5} aria-hidden />
      </div>

      <div className="text-center mt-4">
        <h2 id="reviews-heading" className="text-2xl font-semibold">
          Guest favourite
        </h2>
        <p className="text-[15px] text-foggy mt-2 max-w-md mx-auto">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <a href="#" className="underline text-[15px] font-medium mt-2 inline-block">
          How reviews work
        </a>
      </div>

      <RatingBreakdown />

      <div className="flex gap-3 overflow-x-auto no-scrollbar mt-8 pb-2">
        {FILTER_TAGS.map((t) => (
          <button
            key={t.label}
            className="shrink-0 flex items-center gap-2 border border-line rounded-full px-5 py-3 text-[15px] hover:border-babu transition-colors"
          >
            <span className="text-lg" aria-hidden>{t.emoji}</span>
            {t.label} {t.count}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
        {listing.reviews.map((r) => (
          <ReviewCard key={r.id} r={r} />
        ))}
      </div>

      <button className="mt-8 border border-babu rounded-lg px-5 py-3 text-sm font-semibold hover:bg-mist transition-colors">
        Show all {listing.reviewCount} reviews
      </button>
    </section>
  );
} 