// components/TitleMeta.tsx
import { listing } from "@/lib/listing-data";

export default function TitleMeta() {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">{listing.subtitle}</h2>
      <p className="text-[15px] text-foggy mt-1">{listing.guestsBedsSummary}</p>
    </div>
  );
}