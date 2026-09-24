import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — CardVerse" },
      {
        name: "description",
        content:
          "How CardVerse handles information, cookies, analytics and links to third-party destinations.",
      },
      { property: "og:title", content: "Privacy Policy — CardVerse" },
      {
        property: "og:description",
        content:
          "How CardVerse handles information, cookies, analytics and links to third-party destinations.",
      },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="This page explains, in general terms, how information may be handled when you visit CardVerse."
      sections={[
        {
          heading: "Information collected",
          body: [
            "CardVerse is an informational website. We do not require an account to browse gift card or offer listings. If you contact us through the contact form, you choose what information to share with us.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "Cookies or similar storage may be used to keep the site working correctly and to understand general usage. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Analytics",
          body: [
            "Aggregated analytics may be used to understand which pages are visited and how the site performs. Analytics data is used to improve the website.",
          ],
        },
        {
          heading: "External links",
          body: [
            "This website links to third-party destinations. Once you leave CardVerse, the privacy practices of the destination apply, not ours.",
          ],
        },
        {
          heading: "Advertising and affiliate links",
          body: [
            "Some links on this website may be affiliate or partner links. Where that is the case, a third party may record that the visit came from CardVerse.",
          ],
        },
        {
          heading: "Data security",
          body: [
            "We take reasonable care with any information submitted to us, but no website can guarantee absolute security of data transmitted over the internet.",
          ],
        },
        {
          heading: "Third-party services",
          body: [
            "Hosting, analytics and content delivery providers may process technical data such as IP addresses as part of delivering this website.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on where you live, you may have rights regarding personal information, such as requesting access or deletion. Contact us to make a request.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can be sent through the contact page on this website.",
          ],
        },
      ]}
    />
  ),
});
