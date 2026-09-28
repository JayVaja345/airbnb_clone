"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function firstWeekday(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function fmt(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function MonthGrid({
  year,
  month,
  range,
  onSelect,
}: {
  year: number;
  month: number;
  range: { start: string | null; end: string | null };
  onSelect: (date: string) => void;
}) {
  const label = new Date(year, month, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const total = daysInMonth(year, month);
  const offset = firstWeekday(year, month);
  const cells: (number | null)[] = [
    ...Array.from<number | null>({ length: offset }).fill(null),
    ...Array.from({ length: total }, (_, i) => i + 1),
  ];

  return (
    <div className="flex-1">
      <p className="text-center font-medium mb-4">{label}</p>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {DAY_LABELS.map((d, i) => (
          <span key={i} className="text-xs text-foggy font-medium">
            {d}
          </span>
        ))}
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />;
          const dateStr = fmt(year, month, day);
          const isStart = dateStr === range.start;
          const isEnd = dateStr === range.end;
          const inRange =
            range.start && range.end && dateStr > range.start && dateStr < range.end;
          const isPast = new Date(dateStr) < new Date(new Date().toDateString());

          return (
            <button
              key={i}
              disabled={isPast}
              onClick={() => onSelect(dateStr)}
              className={`h-9 w-9 mx-auto text-sm rounded-full transition-colors duration-150 flex items-center justify-center
                ${isPast ? "text-line cursor-not-allowed" : "hover:bg-mist"}
                ${isStart || isEnd ? "bg-babu text-white hover:bg-babu" : ""}
                ${inRange ? "bg-mist" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingCalendar({
  checkIn,
  checkOut,
}: {
  checkIn: string;
  checkOut: string;
}) {
  const base = new Date(checkIn);
  const [cursor, setCursor] = useState({ year: base.getFullYear(), month: base.getMonth() });
  const [range, setRange] = useState<{ start: string | null; end: string | null }>({
    start: checkIn,
    end: checkOut,
  });

  const handleSelect = (date: string) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else if (date < range.start) {
      setRange({ start: date, end: null });
    } else {
      setRange({ start: range.start, end: date });
    }
  };

  const nextMonth = { year: cursor.month === 11 ? cursor.year + 1 : cursor.year, month: (cursor.month + 1) % 12 };

  return (
    <div className="py-6 border-b border-line">
      <h2 className="text-section">
        {range.start && range.end ? "5 nights in Candolim" : "Select check-in date"}
      </h2>
      {range.start && range.end && (
        <p className="text-foggy mt-1">
          {new Date(range.start).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} -{" "}
          {new Date(range.end).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
        </p>
      )}

      <div className="flex items-start gap-10 mt-6 relative">
        <button
          onClick={() => setCursor((c) => ({ year: c.month === 0 ? c.year - 1 : c.year, month: (c.month + 11) % 12 }))}
          className="absolute left-0 top-0 p-2 rounded-full border border-line hover:bg-mist transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => setCursor(nextMonth)}
          className="absolute right-0 top-0 p-2 rounded-full border border-line hover:bg-mist transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <MonthGrid year={cursor.year} month={cursor.month} range={range} onSelect={handleSelect} />
        <MonthGrid year={nextMonth.year} month={nextMonth.month} range={range} onSelect={handleSelect} />
      </div>

      <div className="flex items-center justify-between mt-6">
        <button className="p-2 border border-line rounded-lg hover:bg-mist transition-colors" aria-label="Flexible dates">
          <Grid3x3 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setRange({ start: null, end: null })}
          className="underline text-sm font-medium"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}
