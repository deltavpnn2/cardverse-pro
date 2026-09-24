import type { AnchorHTMLAttributes, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export type ExploreTone = "primary" | "blue-violet" | "violet-pink" | "pink-coral" | "teal-cyan" | "sunset";

export const toneGradient: Record<ExploreTone, [string, string]> = {
  primary: ["var(--primary)", "var(--blue)"],
  "blue-violet": ["var(--blue)", "var(--violet)"],
  "violet-pink": ["var(--violet)", "var(--pink)"],
  "pink-coral": ["var(--pink)", "var(--coral)"],
  "teal-cyan": ["var(--teal)", "var(--primary)"],
  sunset: ["var(--orange)", "var(--coral)"],
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  tone?: ExploreTone;
  from?: string;
  to?: string;
  label?: string;
};

export function ExploreButton({ tone = "primary", from, to, label = "Explore", className, style, ...rest }: Props) {
  const [a, b] = toneGradient[tone];
  return (
    <a
      {...rest}
      className={cn("btn-explore", className)}
      style={{ "--ex-from": from ?? a, "--ex-to": to ?? b, ...style } as CSSProperties}
    >
      {label} <span aria-hidden="true" className="card-arrow">→</span>
    </a>
  );
}
