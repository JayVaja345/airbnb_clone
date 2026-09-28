import { Search, Plus, Minus, Home } from "lucide-react";
import { listing } from "@/lib/listing-data";

export default function LocationMap() {
  return (
    <div className="py-10">
      <h2 className="text-section mb-1">Where you&apos;ll be</h2>
      <p className="text-[15px] mb-6">{listing.location}</p>
      <div className="relative h-[420px] w-full rounded-xl overflow-hidden bg-[#E8ECE8]">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="0,0 55,0 0,70" fill="#BFE0F0" />
          <rect width="100" height="100" fill="none" stroke="#D9D9D9" strokeWidth="0.2" />
        </svg>
        <div className="absolute top-1/3 left-[35%] w-24 h-24 rounded-full bg-[#C7DFC8] opacity-70" />
        <div className="absolute bottom-1/4 right-[20%] w-32 h-32 rounded-full bg-[#C7DFC8] opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-babu flex items-center justify-center shadow-lg">
          <Home className="w-5 h-5 text-white" fill="white" />
        </div>
        <button className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow" aria-label="Search this area">
          <Search className="w-4 h-4" />
        </button>
        <div className="absolute right-4 top-4 flex flex-col rounded-lg overflow-hidden shadow-md">
          <button className="bg-white p-3 hover:bg-mist transition-colors border-b border-line-soft" aria-label="Zoom in">
            <Plus className="w-4 h-4" />
          </button>
          <button className="bg-white p-3 hover:bg-mist transition-colors" aria-label="Zoom out">
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <p className="text-sm text-foggy mt-4">Exact location will be provided after booking.</p>
    </div>
  );
}
