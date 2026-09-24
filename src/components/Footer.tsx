import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const pages = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-[color-mix(in_oklab,var(--surface)_45%,transparent)]">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <Logo size={38} />
              <div>
                <p className="text-lg font-extrabold tracking-tight">CardVerse</p>
                <p className="text-xs text-primary">Explore Cards. Discover Offers.</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              CardVerse is an independent informational resource for exploring digital
              gift cards and selected offers.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold tracking-wide text-foreground uppercase">
              Pages
            </h2>
            <ul className="mt-4 space-y-3">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            CardVerse is not affiliated with or endorsed by any card issuer, game
            publisher, retailer or service provider unless explicitly stated.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 CardVerse. Independent informational website.
          </p>
        </div>
      </div>
    </footer>
  );
}
