"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { photos } from "@/lib/listing-data";

export default function PhotoTour({
  onClose,
  onOpenLightbox,
}: {
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
}) {
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    backBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-fade-in"
    >
      <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 md:px-10 py-5 border-b border-line-soft">
        <button
          ref={backBtnRef}
          onClick={onClose}
          aria-label="Back to listing"
          className="p-2 rounded-full hover:bg-mist transition-colors focus:outline-2 focus:outline-babu"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">Photo tour</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-mist transition-colors" aria-label="Share">
            <Share className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full hover:bg-mist transition-colors" aria-label="Save">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-8">
        {/* Thumbnail nav grid */}
        <div className="flex flex-wrap gap-6 mb-16">
          {photos.map((p, i) => (
            <a
              key={p.id}
              href={`#tour-${p.id}`}
              className="w-[140px] group"
            >
              <div className="relative w-[140px] h-[100px] rounded-lg overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.room}
                  fill
                  sizes="140px"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <p className="text-sm mt-2 text-babu">{p.room}</p>
            </a>
          ))}
        </div>

        {/* Scrolling sections */}
        <div className="space-y-16">
          {photos.map((p, i) => (
            <section
              key={p.id}
              id={`tour-${p.id}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center scroll-mt-24"
            >
              <div>
                <h3 className="text-3xl font-semibold mb-3">{p.room}</h3>
                {p.tags && p.tags.length > 0 && (
                  <p className="text-foggy">{p.tags.join(" · ")}</p>
                )}
              </div>
              <button
                onClick={() => onOpenLightbox(i)}
                className="relative w-full h-[420px] rounded-xl overflow-hidden group"
                aria-label={`Open ${p.room} in full screen`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
