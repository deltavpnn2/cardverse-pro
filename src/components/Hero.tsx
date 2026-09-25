import { Link } from "@tanstack/react-router";
import { HeroCardStack } from "./HeroCardStack";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-14 sm:pb-14 lg:pt-20 lg:pb-24">
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

      {/* Always a two-column layout — text stays LEFT, card artwork stays RIGHT,
          at every viewport width, per design spec. Sizes scale fluidly with
          clamp() instead of stacking at a breakpoint. */}
      <div className="container-page relative grid grid-cols-[1.15fr_1fr] items-center gap-3 min-[420px]:gap-5 sm:gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="animate-rise min-w-0">
          <span className="glass inline-flex w-fit items-center gap-1.5 rounded-full px-[clamp(0.45rem,2vw,0.875rem)] py-[clamp(0.2rem,1vw,0.375rem)] text-[clamp(0.5rem,2.1vw,0.75rem)] font-semibold tracking-[clamp(0.02em,1vw,0.14em)] whitespace-nowrap uppercase">
            <span
              aria-hidden="true"
              className="animate-dot size-1.5 shrink-0 rounded-full bg-primary sm:size-2"
            />
            Explore Digital Cards &amp; Offers
          </span>

          <h1 className="hero-title mt-3 text-[clamp(1.4rem,6.2vw,4rem)] sm:mt-5">
            Explore Gift Cards
            <br />
            <span className="hero-title-accent">&amp; Offers</span>
          </h1>

          <p className="mt-2.5 max-w-xl text-[clamp(0.7rem,2.6vw,1.125rem)] leading-relaxed text-muted-foreground sm:mt-5">
            Discover popular digital gift cards, gaming cards and selected offers from around the
            world.
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <Link
              to="/gift-cards"
              className="btn-base btn-primary !min-h-[clamp(2rem,9vw,2.9rem)] !px-[clamp(0.6rem,3vw,1.4rem)] !py-[clamp(0.4rem,2vw,0.8rem)] text-[clamp(0.68rem,2.6vw,1rem)] shadow-[0_14px_40px_-16px_var(--primary)]"
            >
              Free Gift Cards →
            </Link>
            <Link
              to="/offers"
              className="btn-base btn-ghost !min-h-[clamp(2rem,9vw,2.9rem)] !px-[clamp(0.6rem,3vw,1.4rem)] !py-[clamp(0.4rem,2vw,0.8rem)] border-violet/50 text-[clamp(0.68rem,2.6vw,1rem)]"
            >
              View Offers →
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 px-1 py-4 min-[420px]:px-3 sm:px-6 sm:py-6">
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
