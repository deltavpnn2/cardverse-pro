import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const groups = [
  { title: "Explore", links: [{ label: "Gift Cards", to: "/gift-cards" }, { label: "Offers", to: "/offers" }] },
  { title: "Company", links: [{ label: "About Us", to: "/about" }, { label: "Contact", to: "/contact" }] },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-border/80 bg-[color-mix(in_oklab,var(--surface)_40%,transparent)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Logo size={44} />
              <p className="font-display text-xl font-extrabold tracking-tight">CardVerse</p>
            </div>
            <p className="mt-3 text-sm font-medium text-primary">Explore Cards. Discover Offers.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              CardVerse is an independent informational platform for discovering digital
              gift cards and selected online offers.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="text-xs font-semibold tracking-[0.14em] text-foreground uppercase">{g.title}</h2>
                <ul className="mt-4 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-start md:justify-between md:gap-10">
          <p className="shrink-0 text-xs text-muted-foreground">© 2026 CardVerse. All rights reserved.</p>
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground md:text-right">
            CardVerse is an independent informational website and is not affiliated with or
            endorsed by any card issuer, game publisher, retailer or service provider unless
            explicitly stated.
          </p>
        </div>
      </div>
    </footer>
  );
}
