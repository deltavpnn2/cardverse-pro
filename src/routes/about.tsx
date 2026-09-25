import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CardVerse" },
      {
        name: "description",
        content:
          "CardVerse is an independent informational platform for discovering digital gift cards, gaming cards and selected offers.",
      },
      { property: "og:title", content: "About CardVerse" },
      {
        property: "og:description",
        content:
          "CardVerse is an independent informational platform for discovering digital gift cards, gaming cards and selected offers.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader title="About CardVerse" />
      <section className="container-page pb-20">
        <div className="glass mx-auto max-w-3xl space-y-6 rounded-3xl p-8 text-[15px] leading-relaxed text-muted-foreground md:p-12">
          <p>
            CardVerse is an independent informational platform designed to help visitors discover
            digital gift cards, gaming cards and selected online offers.
          </p>
          <div>
            <h2 className="text-xl font-bold text-foreground">What we do</h2>
            <p className="mt-3">
              We organize publicly known categories of digital cards and offers into a clear,
              browsable format so you can review your options in one place before continuing to a
              provider's own destination.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">What you should know</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Availability varies by country, region and provider.</li>
              <li>Providers control their own terms, pricing and eligibility rules.</li>
              <li>CardVerse does not issue, sell or redeem gift cards.</li>
              <li>CardVerse does not guarantee availability of any card or offer.</li>
            </ul>
          </div>
          <p>
            Brand names referenced on this website belong to their respective owners. CardVerse is
            not affiliated with or endorsed by any card issuer, game publisher, retailer or service
            provider unless explicitly stated.
          </p>
        </div>
      </section>
    </>
  );
}
