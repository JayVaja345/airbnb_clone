// components/Header.tsx
"use client";

import { Globe, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-line-soft">
      <div className="max-w-[1760px] mx-auto relative flex items-center px-6 lg:px-10 h-20">
        <a href="#" className="flex items-center gap-2 shrink-0" aria-label="Airbnb home">
          <img src="/airbnb-logo.svg" alt="Airbnb" className="h-25 w-auto" />
        </a>

        <button
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center border border-line rounded-full h-14 shadow-sm hover:shadow-md transition-shadow duration-200 divide-x divide-line"
          aria-label="Search"
        >
          <span className="px-6 text-sm font-medium flex items-center gap-2">
            <span className="text-2xl" aria-hidden>🏠</span> Anywhere
          </span>
          <span className="px-6 text-sm font-medium">Anytime</span>
          <span className="pl-6 pr-2 flex items-center gap-3 text-sm text-foggy">
            Add guests
            <span className="w-8 h-8 rounded-full bg-rausch flex items-center justify-center text-white">
              <Search className="w-4 h-4" />
            </span>
          </span>
        </button>

        <div className="ml-auto flex items-center gap-4 shrink-0">
          <a href="#" className="hidden md:inline text-sm font-medium px-3 py-3 rounded-full hover:bg-mist transition-colors">
            Become a host
          </a>
          <button
            className="w-10 h-10 rounded-full hover:bg-mist flex items-center justify-center transition-colors"
            aria-label="Choose a language and region"
          >
            <Globe className="w-4 h-4" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center border border-line rounded-full hover:shadow-md transition-shadow duration-200"
            aria-label="Main menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}