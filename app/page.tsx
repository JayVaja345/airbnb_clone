"use client";

import { Suspense, useState, useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import StickyNav from "@/components/StickyNav";
import TitleRow from "@/components/TitleRow";
import TitleMeta from "@/components/TitleMeta";
import Gallery from "@/components/Gallery";
import Highlights from "@/components/Highlights";
import Description from "@/components/Description";
import Sleeping from "@/components/Sleeping";
import Amenities from "@/components/Amenities";
import BookingCalendar from "@/components/BookingCalendar";
import Reviews from "@/components/Reviews";
import HostProfile from "@/components/HostProfile";
import ThingsToKnow from "@/components/ThingsToKnow";
import LocationMap from "@/components/LocationMap";
import BookingCard from "@/components/BookingCard";
import NearbyStays from "@/components/NearbyStays";
import Lightbox from "@/components/Lightbox";
import PhotoTour from "@/components/PhotoTour";
import { listing } from "@/lib/listing-data";

function ListingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scrolled, setScrolled] = useState(false);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tourOpen = searchParams.get("modal") === "PHOTO_TOUR_SCROLLABLE";

  const openTour = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", "PHOTO_TOUR_SCROLLABLE");
    router.push(`/?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  const closeTour = useCallback(() => {
    router.push("/", { scroll: false });
  }, [router]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyNav scrolled={scrolled} />

      <main className="mx-auto px-6 lg:px-0 pt-8" style={{ maxWidth: "1100px" }}>
        <TitleRow />
        <div id="photos" className="scroll-mt-24" />
        <Gallery
          onOpenLightbox={(i) => setLightboxIndex(i)}
          onOpenTour={openTour}
        />
        <TitleMeta />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          <div>
            <Highlights />
            <Description />
            <Sleeping />
            <div id="amenities" className="scroll-mt-24" />
            <Amenities />
            <BookingCalendar checkIn={listing.checkIn} checkOut={listing.checkOut} />
          </div>
          <div>
            <BookingCard />
          </div>
        </div>

        <hr className="border-line my-10" />

        <div id="reviews" className="scroll-mt-24" />
        <Reviews />
        <div id="location" className="scroll-mt-24" />
        <LocationMap />
        <HostProfile />
        <ThingsToKnow />
        <NearbyStays />
      </main>

      {tourOpen && (
        <PhotoTour
          onClose={closeTour}
          onOpenLightbox={(i) => setLightboxIndex(i)}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <ListingContent />
    </Suspense>
  );
}