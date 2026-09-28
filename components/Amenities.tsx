"use client";

import {
  ChefHat, Wifi, Briefcase, Car, Waves, Bath, PawPrint, Camera,
  AlertTriangle, BellOff, X,
} from "lucide-react";
import { useState } from "react";
import { listing } from "@/lib/listing-data";

const iconMap: Record<string, React.ElementType> = {
  ChefHat, Wifi, Briefcase, Car, Waves, Bath, PawPrint, Camera, AlertTriangle, BellOff,
};

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);
  const total = listing.amenities.length;
  const preview = listing.amenities.slice(0, 10);

  return (
    <div className="py-8 border-b border-line">
      <h2 className="text-section mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-y-4">
        {preview.map((a) => {
          const Icon = iconMap[a.icon] ?? Wifi;
          return (
            <div
              key={a.label}
              className={`flex items-center gap-4 text-[15px] ${
                a.unavailable ? "text-foggy line-through decoration-1" : ""
              }`}
            >
              <Icon className="w-6 h-6 shrink-0" strokeWidth={1.3} />
              {a.label}
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setShowAll(true)}
        className="mt-6 border border-babu rounded-lg px-5 py-3 text-sm font-semibold hover:bg-mist transition-colors"
      >
        Show all {total} amenities
      </button>

      {showAll && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in"
          onClick={() => setShowAll(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-lg max-h-[80vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white">
              <h3 className="font-semibold">What this place offers</h3>
              <button onClick={() => setShowAll(false)} aria-label="Close" className="p-2 hover:bg-mist rounded-full">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              {listing.amenities.map((a) => {
                const Icon = iconMap[a.icon] ?? Wifi;
                return (
                  <div
                    key={a.label}
                    className={`flex items-center gap-4 text-[15px] ${
                      a.unavailable ? "text-foggy line-through decoration-1" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6 shrink-0" strokeWidth={1.3} />
                    {a.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
