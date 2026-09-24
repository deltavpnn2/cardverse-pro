import offer01 from "@/assets/offer-01.jpg";
import offer02 from "@/assets/offer-02.jpg";
import offer03 from "@/assets/offer-03.jpg";
import offer04 from "@/assets/offer-04.jpg";
import artGaming from "@/assets/art-gaming.jpg";
import artShopping from "@/assets/art-shopping.jpg";

export type OfferCategory = "Gaming" | "Entertainment" | "Shopping" | "Digital";
export type OfferBadge = "Featured" | "New" | "Popular";
export type OfferAccent = "cyan" | "violet" | "sunset" | "teal";

export interface Offer {
  id: string;
  title: string;
  category: OfferCategory;
  description: string;
  image: string;
  badge: OfferBadge;
  accent: OfferAccent;
  ctaText: string;
  /** Replace this single value with the real offer/tracking URL. */
  ctaUrl: string;
}

export const offerCategories = [
  "All",
  "Gaming",
  "Entertainment",
  "Shopping",
  "Digital",
] as const;

export const offers: Offer[] = [
  {
    id: "offer-1",
    title: "Gaming Offer",
    category: "Gaming",
    description: "Explore this available gaming offer.",
    image: artGaming,
    badge: "Featured",
    accent: "cyan",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_1_HERE",
  },
  {
    id: "offer-2",
    title: "Entertainment Offer",
    category: "Entertainment",
    description: "Explore this available entertainment offer.",
    image: offer01,
    badge: "Popular",
    accent: "violet",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_2_HERE",
  },
  {
    id: "offer-3",
    title: "Shopping Offer",
    category: "Shopping",
    description: "Explore this available shopping offer.",
    image: artShopping,
    badge: "New",
    accent: "sunset",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_3_HERE",
  },
  {
    id: "offer-4",
    title: "Digital Services Offer",
    category: "Digital",
    description: "Explore this available digital services offer.",
    image: offer04,
    badge: "Featured",
    accent: "cyan",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_4_HERE",
  },
  {
    id: "offer-5",
    title: "Mobile Gaming Offer",
    category: "Gaming",
    description: "Explore this available mobile gaming offer.",
    image: offer02,
    badge: "New",
    accent: "sunset",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_5_HERE",
  },
  {
    id: "offer-6",
    title: "Streaming Offer",
    category: "Entertainment",
    description: "Explore this available streaming offer.",
    image: offer03,
    badge: "Popular",
    accent: "teal",
    ctaText: "Explore →",
    ctaUrl: "PASTE_OFFER_URL_6_HERE",
  },
];
