import Image from "next/image";
import { listing } from "@/lib/listing-data";

export default function Sleeping() {
  return (
    <div className="py-6 border-b border-line">
      <h2 className="text-section mb-4">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4 max-w-xl">
        {listing.sleeping.map((s) => (
          <div key={s.room} className="rounded-xl overflow-hidden border border-line">
            <div className="relative h-44 w-full">
              <Image src={s.img} alt={s.room} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="font-medium">{s.room}</p>
              <p className="text-sm text-foggy">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
