// components/Highlights.tsx — full file
import { Waves, Fan, DoorOpen, Leaf } from "lucide-react";
import Stars from "@/components/Stars";
import { listing } from "@/lib/listing-data";

const iconMap: Record<string, React.ElementType> = { Waves, Fan, DoorOpen };


export default function Highlights() {
  const rows = listing.highlights.filter((h) => h.title !== "Guest favourite");

  return (
    <div>
      <div className="border border-line rounded-xl p-4 my-6 flex items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-[15px] flex items-center gap-2">
            <Leaf className="w-4 h-4 -rotate-90" strokeWidth={1.5} />
            Guest favourite
            <Leaf className="w-4 h-4 rotate-90 scale-x-[-1]" strokeWidth={1.5} />
          </p>
          <p className="text-[15px] text-foggy mt-1">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
        <div className="text-right pr-4 border-r border-line">
          <p className="font-semibold">{listing.rating}</p>
          <Stars value={listing.rating} size={12} />
        </div>
        <div className="text-center">
          <p className="font-semibold">{listing.reviewCount}</p>
          <p className="text-[15px] text-foggy">Reviews</p>
        </div>
      </div>

      <div className="flex items-center gap-4 pb-6 border-b border-line">
        <img
          src={listing.host.avatar}
          alt={listing.host.name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Hosted by {listing.host.name}</p>
          <p className="text-[15px] text-foggy">{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 pt-6">
        {rows.map((h) => {
          const Icon = iconMap[h.icon] ?? Waves;
          return (
            <div key={h.title} className="flex items-start gap-4">
              <Icon className="w-6 h-6 shrink-0 mt-0.5" strokeWidth={1.3} />
              <div>
                <p className="font-medium text-[15px]">{h.title}</p>
                <p className="text-[15px] text-foggy mt-0.5">{h.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}