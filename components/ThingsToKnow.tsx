import { CalendarX2, Search, Shield } from "lucide-react";
import { listing } from "@/lib/listing-data";

export default function ThingsToKnow() {
  const t = listing.thingsToKnow;

  return (
    <div className="py-10 border-b border-line">
      <h2 className="text-2xl font-semibold mb-6">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <CalendarX2 className="w-6 h-6 mb-3" strokeWidth={1.3} />
          <p className="font-medium mb-2">Cancellation policy</p>
          {t.cancellation.slice(0, 2).map((line, i) => (
            <p key={i} className="text-[15px] text-foggy mb-1">
              {line}
            </p>
          ))}
          <a href="#" className="underline text-[15px] font-medium mt-2 inline-block">
            Learn more
          </a>
        </div>

        <div>
          <Search className="w-6 h-6 mb-3" strokeWidth={1.3} />
          <p className="font-medium mb-2">House rules</p>
          {t.houseRules.slice(0, 3).map((line, i) => (
            <p key={i} className="text-[15px] text-foggy mb-1">
              {line}
            </p>
          ))}
          <a href="#" className="underline text-[15px] font-medium mt-2 inline-block">
            Learn more
          </a>
        </div>

        <div>
          <Shield className="w-6 h-6 mb-3" strokeWidth={1.3} />
          <p className="font-medium mb-2">Safety &amp; property</p>
          <p className="text-[15px] text-foggy mb-1">Carbon monoxide alarm not reported</p>
          <p className="text-[15px] text-foggy mb-1">Smoke alarm not reported</p>
          <p className="text-[15px] text-foggy mb-1">Exterior security cameras on property</p>
          <a href="#" className="underline text-[15px] font-medium mt-2 inline-block">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}