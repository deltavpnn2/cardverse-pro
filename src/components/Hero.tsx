import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-cards.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 lg:pt-20 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-40 size-[34rem] rounded-full bg-primary/10 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-20 right-0 size-[30rem] rounded-full bg-blue/10 blur-[130px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 left-1/3 size-80 rounded-full bg-violet/12 blur-[120px]" />
      <div className="container-page relative grid items-center gap-10 md:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="animate-rise min-w-0">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase sm:text-xs">
            <span aria-hidden="true" className="animate-dot size-2 rounded-full bg-primary" />
            Explore Digital Cards &amp; Offers
          </span>

          <h1 className="hero-title mt-5 text-[2.3rem] sm:text-5xl lg:text-[4.1rem]">
            Explore Gift Cards &amp; Offers
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Discover popular digital gift cards, gaming cards and selected offers from
            around the world.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Link to="/gift-cards" className="btn-base btn-primary px-7 text-base shadow-[0_14px_40px_-16px_var(--primary)]">
              Explore Gift Cards →
            </Link>
            <Link to="/offers" className="btn-base btn-ghost border-violet/50 px-7 text-base">
              View Offers →
            </Link>
          </div>
        </div>

        <div className="relative min-w-0">
          <div aria-hidden="true" className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-primary/25 via-blue/20 to-violet/25 blur-3xl" />
          <div className="animate-float relative rounded-3xl bg-gradient-to-br from-primary/50 via-blue/20 to-violet/50 p-px shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
            <img
              src={heroImage}
              alt="Floating digital gift cards lit with cyan and purple neon light"
              width={1280}
              height={1024}
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
