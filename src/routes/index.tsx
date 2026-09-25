import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { GiftCardGrid } from "@/components/GiftCardGrid";
import { OfferGrid } from "@/components/OfferGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { CTASection } from "@/components/CTASection";
import { giftCards } from "@/data/giftCards";
import { offers } from "@/data/offers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CardVerse — Gift Cards & Offers" },
      {
        name: "description",
        content:
          "Explore digital gift cards, gaming cards and selected offers from around the world with CardVerse.",
      },
      { property: "og:title", content: "CardVerse — Gift Cards & Offers" },
      {
        property: "og:description",
        content:
          "Explore digital gift cards, gaming cards and selected offers from around the world with CardVerse.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <section className="section-pad pt-4" id="featured-gift-cards">
        <div className="container-page">
          <SectionHeading
            title="Featured Gift Cards"
            subtitle="Explore popular gaming, entertainment and digital gift card options."
          />
          <div className="mt-10">
            <GiftCardGrid cards={giftCards.slice(0, 8)} />
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/gift-cards" className="btn-base btn-ghost">
              View All Gift Cards →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0" id="featured-offers">
        <div className="container-page">
          <SectionHeading
            title="Featured Offers"
            subtitle="Explore selected offers and digital opportunities from available partner destinations."
          />
          <div className="mt-10">
            <OfferGrid offers={offers.slice(0, 3)} />
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/offers" className="btn-base btn-ghost">
              View All Offers →
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <CTASection />
    </>
  );
}
