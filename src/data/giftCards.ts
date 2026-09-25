import { brandLogos, type BrandLogo } from "./brandLogos";

export type GiftCardCategory = "Gaming" | "Entertainment" | "Streaming" | "Shopping" | "Digital";

export interface GiftCard {
  id: string;
  name: string;
  category: GiftCardCategory;
  description: string;
  region: string;
  ctaText: string;
  ctaUrl: string;
  logo: BrandLogo;
  /** Brand card face gradient [from, to]. */
  colors: [string, string];
  /** Short wordmark printed on the card face. */
  wordmark: string;
}

export const giftCardCategories = [
  "All",
  "Gaming",
  "Shopping",
  "Entertainment",
  "Streaming",
  "Digital",
] as const;

type Raw = Omit<GiftCard, "logo" | "region" | "ctaText" | "ctaUrl">;

const rawCards: Raw[] = [
  {
    id: "steam",
    name: "Steam Gift Card",
    wordmark: "STEAM",
    category: "Gaming",
    description: "Wallet credit for games, DLC and software on Steam.",
    colors: ["#1b2838", "#2a75bb"],
  },
  {
    id: "playstation",
    name: "PlayStation Store",
    wordmark: "PlayStation",
    category: "Gaming",
    description: "Credit for games, add-ons and PlayStation Plus.",
    colors: ["#00246b", "#0070d1"],
  },
  {
    id: "xbox",
    name: "Xbox Gift Card",
    wordmark: "XBOX",
    category: "Gaming",
    description: "Games, add-ons and Game Pass on Xbox and PC.",
    colors: ["#0b3d0b", "#1fa11f"],
  },
  {
    id: "nintendo",
    name: "Nintendo eShop",
    wordmark: "Nintendo eShop",
    category: "Gaming",
    description: "Digital games and content for Nintendo Switch.",
    colors: ["#8a0010", "#e60012"],
  },
  {
    id: "roblox",
    name: "Roblox",
    wordmark: "ROBLOX",
    category: "Gaming",
    description: "Robux and premium items across Roblox experiences.",
    colors: ["#1a1a1a", "#e2231a"],
  },
  {
    id: "fortnite",
    name: "Fortnite V-Bucks",
    wordmark: "FORTNITE",
    category: "Gaming",
    description: "V-Bucks for skins, emotes and the Battle Pass.",
    colors: ["#3b1a8f", "#1fa3ff"],
  },
  {
    id: "pubg",
    name: "PUBG Mobile UC",
    wordmark: "PUBG",
    category: "Gaming",
    description: "Unknown Cash for Royale Pass and outfits.",
    colors: ["#3a2a00", "#f2a900"],
  },
  {
    id: "valorant",
    name: "Valorant Points",
    wordmark: "VALORANT",
    category: "Gaming",
    description: "VP for weapon skins and agent contracts.",
    colors: ["#3d0b12", "#fa4454"],
  },
  {
    id: "lol",
    name: "League of Legends",
    wordmark: "LEAGUE",
    category: "Gaming",
    description: "Riot Points for champions and skins.",
    colors: ["#0a1428", "#c89b3c"],
  },
  {
    id: "razer-gold",
    name: "Razer Gold",
    wordmark: "RAZER GOLD",
    category: "Gaming",
    description: "Universal credits for thousands of games.",
    colors: ["#0a0a0a", "#44d62c"],
  },
  {
    id: "riot",
    name: "Riot Games",
    wordmark: "RIOT GAMES",
    category: "Gaming",
    description: "Prepaid credit for Riot Games titles.",
    colors: ["#5a0a0e", "#eb0029"],
  },
  {
    id: "battlenet",
    name: "Battle.net",
    wordmark: "BATTLE.NET",
    category: "Gaming",
    description: "Balance for Blizzard games and services.",
    colors: ["#06213f", "#148eff"],
  },
  {
    id: "ea",
    name: "EA Play",
    wordmark: "EA",
    category: "Gaming",
    description: "Credit for EA games and EA Play membership.",
    colors: ["#1a1a1a", "#ff4747"],
  },
  {
    id: "netflix",
    name: "Netflix",
    wordmark: "NETFLIX",
    category: "Streaming",
    description: "Prepaid credit for Netflix memberships.",
    colors: ["#141414", "#e50914"],
  },
  {
    id: "spotify",
    name: "Spotify",
    wordmark: "Spotify",
    category: "Streaming",
    description: "Premium music and podcasts, ad-free.",
    colors: ["#0d0d0d", "#1db954"],
  },
  {
    id: "twitch",
    name: "Twitch",
    wordmark: "twitch",
    category: "Entertainment",
    description: "Subs, Bits and Turbo on Twitch.",
    colors: ["#2a0f5c", "#9146ff"],
  },
  {
    id: "discord",
    name: "Discord Nitro",
    wordmark: "Discord Nitro",
    category: "Entertainment",
    description: "Nitro perks, boosts and custom emoji.",
    colors: ["#2b2f8a", "#5865f2"],
  },
  {
    id: "apple",
    name: "Apple Gift Card",
    wordmark: "Apple",
    category: "Digital",
    description: "Apps, games, music and more from Apple.",
    colors: ["#1c1c1e", "#8e8e93"],
  },
  {
    id: "google-play",
    name: "Google Play",
    wordmark: "Google Play",
    category: "Digital",
    description: "Apps, games and in-app items on Android.",
    colors: ["#01573f", "#34a853"],
  },
  {
    id: "amazon",
    name: "Amazon Gift Card",
    wordmark: "amazon",
    category: "Shopping",
    description: "Shop millions of items on Amazon.",
    colors: ["#131921", "#ff9900"],
  },
];

export const giftCards: GiftCard[] = rawCards.map((c) => ({
  ...c,
  region: "Availability varies",
  ctaText: "Explore →",
  ctaUrl: "/gift-cards",
  logo: brandLogos[c.id],
}));
