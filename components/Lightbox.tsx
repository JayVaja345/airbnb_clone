"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "@/lib/listing-data";

export default function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const total = photos.length;

  const go = useCallback(
    (delta: number) => {
      onNavigate((index + delta + total) % total);
    },
    [index, total, onNavigate]
  );

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [go, onClose]);

  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}: ${photo.alt}`}
      className="fixed inset-0 z-[60] bg-black flex flex-col animate-fade-in"
    >
      <div className="flex items-center justify-between px-6 py-4 text-white shrink-0">
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close photo viewer"
          className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-2 focus:outline-white"
        >
          <X className="w-5 h-5" />
        </button>
        <span className="text-sm">{index + 1} / {total}</span>
      </div>

      <div className="relative flex-1 flex items-center justify-center px-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-4 md:left-8 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 focus:outline-2 focus:outline-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div key={photo.id} className="relative w-full max-w-4xl h-[70vh] animate-fade-in">
          <Image src={photo.src} alt={photo.alt} fill className="object-contain" priority />
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-4 md:right-8 z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150 focus:outline-2 focus:outline-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-white text-center text-sm pb-6 shrink-0">{photo.room}</p>
    </div>
  );
}
