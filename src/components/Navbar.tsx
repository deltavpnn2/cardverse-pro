import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "Gift Cards", to: "/gift-cards" },
  { label: "Offers", to: "/offers" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="container-page">
        <nav
          aria-label="Main navigation"
          className="glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 md:px-6"
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Logo size={34} />
            <span className="text-lg font-extrabold tracking-tight">CardVerse</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation-menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost inline-flex size-10 items-center justify-center rounded-xl"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div id="primary-navigation-menu" className="glass animate-rise mt-2 rounded-2xl p-3">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/gift-cards"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-2 w-full"
            >
              Explore Cards →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
