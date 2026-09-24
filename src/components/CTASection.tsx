import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="glass glow-ring relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-20 size-72 rounded-full bg-primary/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-24 size-72 rounded-full bg-violet/25 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Find Your Next Digital Card
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Explore gaming, entertainment and digital card options.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/gift-cards" className="btn-base btn-primary">
                Explore Gift Cards →
              </Link>
              <Link to="/offers" className="btn-base btn-ghost">
                View Offers →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
