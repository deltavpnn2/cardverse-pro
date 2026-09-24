import artGaming from "@/assets/art-gaming.jpg";
import artEntertainment from "@/assets/art-entertainment.jpg";
import artShopping from "@/assets/art-shopping.jpg";
import artDigital from "@/assets/art-digital.jpg";

export type GiftCardCategory =
  | "Gaming"
  | "Entertainment"
  | "Streaming"
  | "Shopping"
  | "Digital";

export interface GiftCard {
  id: string;
  name: string;
  category: GiftCardCategory;
  description: string;
  image: string;
  region: string;
  ctaText: string;
  ctaUrl: string;
}

export const giftCardCategories = [
  "All",
  "Gaming",
  "Shopping",
  "Entertainment",
  "Streaming",
  "Digital",
] as const;

export const giftCards: GiftCard[] = [
  {
    id: "steam",
    name: "Steam Gift Card",
    category: "Gaming",
    description: "Explore Steam digital gift card options.",
    image: artGaming,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "playstation",
    name: "PlayStation Store",
    category: "Gaming",
    description: "Explore PlayStation Store card options.",
    image: artDigital,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "xbox",
    name: "Xbox Gift Card",
    category: "Gaming",
    description: "Explore Xbox digital card options.",
    image: artGaming,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "nintendo",
    name: "Nintendo eShop",
    category: "Gaming",
    description: "Explore Nintendo eShop card options.",
    image: artEntertainment,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "roblox",
    name: "Roblox",
    category: "Gaming",
    description: "Explore Roblox digital card options.",
    image: artDigital,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "razer-gold",
    name: "Razer Gold",
    category: "Gaming",
    description: "Explore Razer Gold digital credit options.",
    image: artGaming,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "riot",
    name: "Riot Games",
    category: "Gaming",
    description: "Explore Riot Games card options.",
    image: artEntertainment,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    category: "Gaming",
    description: "Explore Fortnite in-game credit options.",
    image: artDigital,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "netflix",
    name: "Netflix",
    category: "Entertainment",
    description: "Explore Netflix digital card options.",
    image: artEntertainment,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "spotify",
    name: "Spotify",
    category: "Entertainment",
    description: "Explore Spotify digital card options.",
    image: artEntertainment,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "apple",
    name: "Apple Gift Card",
    category: "Digital",
    description: "Explore Apple digital gift card options.",
    image: artDigital,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "amazon",
    name: "Amazon Gift Card",
    category: "Shopping",
    description: "Explore Amazon digital gift card options.",
    image: artShopping,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
  {
    id: "google-play",
    name: "Google Play",
    category: "Digital",
    description: "Explore Google Play digital card options.",
    image: artDigital,
    region: "Availability varies",
    ctaText: "Explore →",
    ctaUrl: "/gift-cards",
  },
];
