import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — CardVerse" },
      {
        name: "description",
        content:
          "CardVerse is an independent informational website and does not issue or sell gift cards.",
      },
      { property: "og:title", content: "Disclaimer — CardVerse" },
      {
        property: "og:description",
        content:
          "CardVerse is an independent informational website and does not issue or sell gift cards.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      title="Disclaimer"
      intro="Please read this before using any link on this website."
      sections={[
        {
          heading: "Independent website",
          body: [
            "CardVerse is an independent informational website. It is not affiliated with or endorsed by any card issuer, game publisher, retailer or service provider unless explicitly stated.",
          ],
        },
        {
          heading: "We do not issue or sell gift cards",
          body: [
            "CardVerse does not issue, sell, redeem or guarantee any gift card, credit or digital balance.",
          ],
        },
        {
          heading: "Brand names",
          body: [
            "All brand names, product names and trademarks mentioned belong to their respective owners and are used for identification purposes only.",
          ],
        },
        {
          heading: "Availability and terms",
          body: [
            "Availability, eligibility, pricing and terms may vary by country, region and provider, and can change at any time.",
          ],
        },
        {
          heading: "External destinations",
          body: [
            "External destinations reached through this website are controlled by their respective providers. Review their terms before continuing.",
          ],
        },
      ]}
    />
  ),
});
