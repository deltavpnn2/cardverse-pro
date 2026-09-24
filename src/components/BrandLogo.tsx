import type { BrandLogo as Logo } from "@/data/brandLogos";
import { cn } from "@/lib/utils";

export function BrandLogo({ logo, className }: { logo?: Logo; className?: string }) {
  if (!logo) return null;
  const color = `#${logo.hex}`;
  return (
    <span
      role="img"
      aria-label={`${logo.title} logo`}
      className={cn("logo-badge", className)}
    >
      {logo.path ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-full" fill={color}>
          <path d={logo.path} />
        </svg>
      ) : (
        <span aria-hidden="true" className="font-display text-lg leading-none font-extrabold" style={{ color }}>
          {logo.text}
        </span>
      )}
    </span>
  );
}
