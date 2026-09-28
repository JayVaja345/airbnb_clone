// components/StickyNav.tsx — full file
"use client";

import { useEffect, useState } from "react";
import { listing } from "@/lib/listing-data";

const TABS = ["Photos", "Amenities", "Reviews", "Location"];

export default function StickyNav({ scrolled }: { scrolled: boolean }) {
    const [active, setActive] = useState("Photos");

    useEffect(() => {
        if (!scrolled) return;

        const ids = TABS.map((t) => t.toLowerCase());
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const match = TABS.find((t) => t.toLowerCase() === entry.target.id);
                        if (match) setActive(match);
                    }
                });
            },
            { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [scrolled]);

    if (!scrolled) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-[0_1px_0_0_var(--color-line-soft)] animate-fade-in">
            <div className="mx-auto flex items-center justify-between px-6 lg:px-0 py-4" style={{ maxWidth: "1200px" }}>
                <nav className="flex items-center gap-8">
                    {TABS.map((t, index) => (
                        <a
                            aria-label={`Go to ${t} section`}
                            key={index}
                            href={`#${t.toLowerCase()}`}
                            onClick={() => setActive(t)}
                            className={`text-sm font-medium pb-1 border-b-2 transition-colors duration-150 ${active === t ? "border-babu" : "border-transparent text-foggy hover:text-babu"
                                }`}
                        >
                            {t}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-sm">
                            <span className="font-semibold">₹{listing.price.toLocaleString("en-IN")}</span> for{" "}
                            {listing.nights} nights
                        </p>
                        <p className="text-xs flex items-center justify-end gap-1">
                            <span aria-hidden>★</span> {listing.rating} · {listing.reviewCount} reviews
                        </p>
                    </div>
                    <button className="bg-rausch hover:bg-rausch-dark text-white font-medium rounded-lg px-6 py-3 text-sm transition-colors duration-150">
                        Reserve
                    </button>
                </div>
            </div>
        </div>
    );
}