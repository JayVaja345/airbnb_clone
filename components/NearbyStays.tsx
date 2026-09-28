"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { nearbyStays } from "@/lib/listing-data";

export default function NearbyStays() {
    const scrollerRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 1 | -1) => {
        scrollerRef.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
    };

    return (
        <div className="py-10">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">More stays nearby</h2>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-foggy">1 / 2</span>
                    <button
                        onClick={() => scroll(-1)}
                        aria-label="Previous"
                        className="w-8 h-8 rounded-full border border-line flex items-center justify-center hover:bg-mist transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => scroll(1)}
                        aria-label="Next"
                        className="w-8 h-8 rounded-full border border-[#222222] bg-[#222222] text-white flex items-center justify-center hover:bg-[#000000] transition-colors"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div ref={scrollerRef} className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth">
                {nearbyStays.map((s) => (
                    <a key={s.id} href="#" className="shrink-0 w-[260px] group">
                        <div className="relative w-[260px] h-[195px] rounded-xl overflow-hidden bg-mist">
                            <Image
                                src={s.img}
                                alt={s.title}
                                fill
                                sizes="260px"
                                loading="eager"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <p className="text-[15px] font-medium mt-3 line-clamp-2">{s.title}</p>
                        <div className="flex items-center gap-2 mt-1 text-[15px]">
                            <span>₹{s.price.toLocaleString("en-IN")}</span>
                            <span className="flex items-center gap-1 text-foggy">
                                <Star className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                                {s.rating}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}