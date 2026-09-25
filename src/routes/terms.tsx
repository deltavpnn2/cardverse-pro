import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — CardVerse" },
      {
        name: "description",
        content: "The terms that apply when you use the CardVerse informational website.",
      },
      { property: "og:title", content: "Terms of Use — CardVerse" },
      {
        property: "og:description",
        content: "The terms that apply when you use the CardVerse informational website.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms of Use"
      intro="By using CardVerse you agree to the terms described on this page."
      sections={[
        {
          heading: "Website purpose",
          body: [
            "CardVerse exists to help visitors discover and compare categories of digital gift cards and selected offers.",
          ],
        },
        {
          heading: "Informational nature",
          body: [
            "All content is provided for general information only. Nothing on this website is financial, legal or purchasing advice.",
          ],
        },
        {
          heading: "External links",
          body: [
            "Links lead to destinations operated by third parties. We do not control those destinations and are not responsible for their content or practices.",
          ],
        },
        {
          heading: "Third-party offers",
          body: [
            "Offers listed here are operated by their respective providers. Terms, eligibility and rewards are defined solely by the provider.",
          ],
        },
        {
          heading: "Availability",
          body: [
            "Cards, offers and regional availability can change or be withdrawn at any time without notice.",
          ],
        },
        {
          heading: "User responsibilities",
          body: [
            "You are responsible for reviewing the applicable terms of any destination before continuing, and for complying with the laws of your own country.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Brand names, logos and trademarks referenced on this website belong to their respective owners. The CardVerse name and site design belong to CardVerse.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, CardVerse is not liable for losses arising from use of this website or from any third-party destination reached through it.",
          ],
        },
        {
          heading: "Changes to terms",
          body: [
            "These terms may be updated from time to time. Continued use of the website means you accept the current version.",
          ],
        },
      ]}
    />
  ),
});
