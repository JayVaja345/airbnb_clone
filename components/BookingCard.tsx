// components/BookingCard.tsx
"use client";

import { useState } from "react";
import { Tag, Flag, ChevronDown } from "lucide-react";
import { listing } from "@/lib/listing-data";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
}

export default function BookingCard() {
  const [guestsOpen, setGuestsOpen] = useState(false);
  const p = listing.pricing;

  return (
    <div className="sticky top-24">
      <div className="border border-line rounded-xl p-4 flex items-center gap-3 mb-6">
        <Tag className="w-5 h-5 text-success shrink-0" strokeWidth={1.7} />
        <p className="text-[15px]">
          Get 10% off your next stay.{" "}
          <span className="underline font-medium">Terms apply</span>
        </p>
        <button className="ml-auto border border-babu rounded-lg px-4 py-2 text-sm font-medium shrink-0 hover:bg-mist transition-colors">
          Claim
        </button>
      </div>

      <div className="border border-line rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-6">
        {/* single price line — total for the stay, no per-night/rating row, no dropdown */}
        <p className="text-xl">
          <span className="font-semibold">{inr(p.total ?? p.nightlyRate * p.nights)}</span>{" "}
          <span className="text-base">for {p.nights} nights</span>
        </p>

        <div className="border border-line rounded-lg overflow-hidden mt-6">
          <div className="grid grid-cols-2 divide-x divide-line">
            <div className="p-3">
              <p className="text-[10px] font-semibold tracking-wide">CHECK-IN</p>
              <p className="text-[15px] mt-0.5">{formatDate(listing.checkIn)}</p>
            </div>
            <div className="p-3">
              <p className="text-[10px] font-semibold tracking-wide">CHECKOUT</p>
              <p className="text-[15px] mt-0.5">{formatDate(listing.checkOut)}</p>
            </div>
          </div>
          <div className="border-t border-line">
            <button
              onClick={() => setGuestsOpen((o) => !o)}
              aria-expanded={guestsOpen}
              className="w-full text-left p-3 flex items-center justify-between hover:bg-mist transition-colors"
            >
              <div>
                <p className="text-[10px] font-semibold tracking-wide">GUESTS</p>
                <p className="text-[15px] mt-0.5">
                  {listing.guestCount} {listing.guestCount === 1 ? "guest" : "guests"}
                </p>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${guestsOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        <div className="mt-4 bg-mist rounded-lg px-4 py-3 text-[15px] text-center">
          Free cancellation before <span className="font-semibold">17 October</span>
        </div>

        <button className="w-full mt-4 bg-rausch hover:bg-rausch-dark active:scale-[0.98] text-white font-semibold rounded-lg py-3.5 transition-all duration-150">
          Reserve
        </button>
        <p className="text-center text-[15px] text-foggy mt-3">You won&rsquo;t be charged yet</p>
      </div>

      <button className="flex items-center gap-2 text-[15px] underline mt-6 text-babu hover:text-bubu transition-colors">
        <Flag className="w-4 h-4" strokeWidth={1.7} />
        Report this listing
      </button>
    </div>
  );
}