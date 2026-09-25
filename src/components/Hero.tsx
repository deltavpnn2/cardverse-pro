import { Link } from "@tanstack/react-router";
import { HeroCardStack } from "./HeroCardStack";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 lg:pt-20 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 size-[34rem] rounded-full bg-primary/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-0 size-[30rem] rounded-full bg-blue/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/3 size-80 rounded-full bg-violet/12 blur-[120px]"
      />
      <div className="container-page relative grid items-center gap-10 md:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="animate-rise min-w-0">
          <span className="glass inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-semibold tracking-[0.1em] whitespace-nowrap uppercase min-[380px]:px-3.5 min-[380px]:text-[10px] min-[380px]:tracking-[0.14em] sm:text-xs">
            <span
              aria-hidden="true"
              className="animate-dot size-2 shrink-0 rounded-full bg-primary"
            />
            Explore Digital Cards &amp; Offers
          </span>

          <h1 className="hero-title mt-5 text-[2.5rem] sm:text-6xl lg:text-[4rem]">
            Explore Gift Cards
            <br />
            <span className="hero-title-accent">&amp; Offers</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Discover popular digital gift cards, gaming cards and selected offers from around the
            world.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
            <Link
              to="/gift-cards"
              className="btn-base btn-primary px-7 text-base shadow-[0_14px_40px_-16px_var(--primary)]"
            >
              Free Gift Cards →
            </Link>
            <Link to="/offers" className="btn-base btn-ghost border-violet/50 px-7 text-base">
              View Offers →
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 px-4 py-6 sm:px-6">
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-primary/25 via-blue/20 to-violet/25 blur-3xl"
          />
          <div className="animate-float relative">
            <HeroCardStack />
          </div>
        </div>
      </div>
    </section>
  );
}
