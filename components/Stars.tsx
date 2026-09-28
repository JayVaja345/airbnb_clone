import { Star } from "lucide-react";

/**
 * Renders `count` stars with a fractional fill, so 4.95 does not have to be
 * rounded up to a whole star. `fill` is clamped to [0, count].
 */
export default function Stars({
  value,
  count = 5,
  size = 14,
  className = "text-babu",
}: {
  value: number;
  count?: number;
  size?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / count) * 100));

  return (
    <span
      className={`relative inline-flex shrink-0 ${className}`}
      role="img"
      aria-label={`${value} out of ${count} stars`}
    >
      <span className="inline-flex gap-0.5 text-butter">
        {Array.from({ length: count }).map((_, i) => (
          <Star key={i} width={size} height={size} strokeWidth={1} fill="currentColor" />
        ))}
      </span>
      <span
        className="absolute inset-0 inline-flex gap-0.5 overflow-hidden text-babu"
        style={{ width: `${pct}%` }}
        aria-hidden
      >
        {Array.from({ length: count }).map((_, i) => (
          <Star key={i} width={size} height={size} strokeWidth={1} fill="currentColor" className="shrink-0" />
        ))}
      </span>
    </span>
  );
}
