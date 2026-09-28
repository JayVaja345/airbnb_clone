"use client";

import Image from "next/image";
import { Grid3x3 } from "lucide-react";
import { heroPhotos } from "@/lib/listing-data";

export default function Gallery({
  onOpenLightbox,
  onOpenTour,
}: {
  onOpenLightbox: (index: number) => void;
  onOpenTour: () => void;
}) {
  const [main, ...rest] = heroPhotos;

  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden h-[360px] md:h-[520px] mb-6">
      <button
        onClick={() => onOpenLightbox(0)}
        className="col-span-2 row-span-2 relative group overflow-hidden"
        aria-label="Open photo 1"
      >
        <Image
          src={main.src}
          alt={main.alt}
          fill
          priority
          sizes="50vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
      </button>

      {rest.map((p, i) => (
        <button
          key={p.id}
          onClick={() => onOpenLightbox(i + 1)}
          className={`relative group overflow-hidden ${i === 3 ? "" : ""}`}
          aria-label={`Open photo ${i + 2}`}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="25vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
        </button>
      ))}

      <button
        onClick={onOpenTour}
        className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <Grid3x3 className="w-4 h-4" />
        Show all photos
      </button>
    </div>
  );
}
