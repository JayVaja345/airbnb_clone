import Image from "next/image";
import { CheckCircle2, Lightbulb, GraduationCap, ShieldCheck } from "lucide-react";
import { listing, coHosts } from "@/lib/listing-data";

export default function HostProfile() {
  const h = listing.host;

  return (
    <div className="py-10 border-b border-line">
      <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">
        <div>
          <div className="border border-line rounded-xl p-6 flex items-center gap-6">
            <div className="relative shrink-0">
              <Image
                src={h.avatar}
                alt={h.name}
                width={88}
                height={88}
                className="rounded-full object-cover"
              />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-rausch flex items-center justify-center border-2 border-white">
                <CheckCircle2 className="w-4 h-4 text-white" fill="currentColor" />
              </span>
            </div>
            <div className="text-center flex-1">
              <p className="text-2xl font-semibold">{h.name}</p>
              <p className="text-foggy text-sm mt-1">Host</p>
            </div>
          </div>

          <div className="grid grid-cols-3 divide-x divide-line border-x border-b border-line rounded-b-xl -mt-1 pt-4 pb-4">
            <div className="text-center">
              <p className="font-semibold text-lg">{h.reviewsCount?.toLocaleString("en-IN")}</p>
              <p className="text-xs text-foggy mt-0.5">Reviews</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">{h.hostRating}★</p>
              <p className="text-xs text-foggy mt-0.5">Rating</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">{h.yearsHosting}</p>
              <p className="text-xs text-foggy mt-0.5">Years hosting</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {h.bornDecade && (
              <div className="flex items-center gap-3 text-[15px]">
                <Lightbulb className="w-5 h-5 shrink-0" strokeWidth={1.4} />
                Born in the {h.bornDecade}
              </div>
            )}
            {h.school && (
              <div className="flex items-center gap-3 text-[15px]">
                <GraduationCap className="w-5 h-5 shrink-0" strokeWidth={1.4} />
                Where I went to school: {h.school}
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Co-Hosts</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 mb-10">
            {coHosts.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                {c.initial ? (
                  <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#5B3E9C] flex items-center justify-center font-medium shrink-0">
                    {c.name.charAt(0)}
                  </div>
                ) : (
                  <Image
                    src={c.avatar!}
                    alt={c.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover shrink-0"
                  />
                )}
                <span className="text-[15px]">{c.name}</span>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-lg mb-3">Host details</h3>
          <p className="text-[15px]">Response rate: {h.responseRate}%</p>
          <p className="text-[15px]">Responds {h.responseTime}</p>

          <button className="mt-4 bg-mist hover:bg-[#EBEBEB] rounded-lg px-6 py-3.5 font-medium transition-colors">
            Message host
          </button>

          <div className="flex items-start gap-3 mt-8 text-sm text-foggy max-w-md">
            <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.4} />
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </div>
        </div>
      </div>
    </div>
  );
}