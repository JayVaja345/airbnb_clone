import { Globe } from "lucide-react";
import { listing } from "@/lib/listing-data";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-mist">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-0 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
          {listing.footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-semibold text-[15px] mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[15px] text-foggy hover:text-babu hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-[15px] mb-4">Support us</h3>
            <p className="text-[15px] text-foggy leading-6">
              Join millions of travellers who trust Airbnb to find and book their perfect stay.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-[1760px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
            {listing.footer.bottomLinks.map((l) => (
              <li key={l}>
                <a href="#" className="font-medium hover:underline">
                  {l}
                </a>
              </li>
            ))}
            <li className="text-foggy">
              &copy; 2026 UI clone for take-home evaluation. Not affiliated with Airbnb, Inc.
            </li>
          </ul>

          <div className="md:ml-auto flex items-center gap-4">
            <button className="flex items-center gap-2 font-semibold text-[15px] hover:underline">
              <Globe className="w-4 h-4" strokeWidth={1.7} />
              English (IN)
            </button>
            <button className="font-semibold text-[15px] hover:underline">INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
