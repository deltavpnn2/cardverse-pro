import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-cards.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide">
            <span
              aria-hidden="true"
              className="animate-dot size-2 rounded-full bg-primary"
            />
            Explore Digital Cards &amp; Offers
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Explore Gift Cards <span className="text-gradient">&amp; Offers</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover popular digital gift cards, gaming cards and selected offers from
            around the world.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/gift-cards" className="btn-base btn-primary">
              Explore Gift Cards →
            </Link>
            <Link to="/offers" className="btn-base btn-ghost">
              View Offers →
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-[3rem] bg-primary/20 blur-3xl"
          />
          <img
            src={heroImage}
            alt="Floating digital gift cards lit with cyan and purple neon light"
            width={1280}
            height={1024}
            className="animate-float relative w-full rounded-3xl border border-border object-cover shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}
