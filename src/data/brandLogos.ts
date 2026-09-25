import {
  siSteam,
  siPlaystation,
  siRoblox,
  siRazer,
  siRiotgames,
  siEpicgames,
  siNetflix,
  siSpotify,
  siApple,
  siGoogleplay,
  siPubg,
  siValorant,
  siLeagueoflegends,
  siBattledotnet,
  siEa,
  siTwitch,
  siDiscord,
  siUbisoft,
} from "simple-icons";

/** Brand mark used only to identify a card/service. No affiliation implied. */
export interface BrandLogo {
  title: string;
  hex: string;
  /** SVG path (24x24 viewBox). When absent, `text` monogram is shown. */
  path?: string;
  text?: string;
}

const icon = (i: { title: string; hex: string; path: string }, hex?: string): BrandLogo => ({
  title: i.title,
  hex: hex ?? i.hex,
  path: i.path,
});

export const brandLogos: Record<string, BrandLogo> = {
  steam: icon(siSteam, "171A21"),
  playstation: icon(siPlaystation),
  xbox: { title: "Xbox", hex: "107C10", text: "X" },
  nintendo: { title: "Nintendo", hex: "E60012", text: "N" },
  roblox: icon(siRoblox, "111111"),
  "razer-gold": icon(siRazer, "00B82E"),
  riot: icon(siRiotgames),
  fortnite: icon(siEpicgames, "2A2A2A"),
  pubg: icon(siPubg),
  valorant: icon(siValorant),
  lol: icon(siLeagueoflegends),
  battlenet: icon(siBattledotnet),
  ea: icon(siEa),
  ubisoft: icon(siUbisoft),
  netflix: icon(siNetflix),
  spotify: icon(siSpotify, "1DB954"),
  twitch: icon(siTwitch),
  discord: icon(siDiscord),
  apple: icon(siApple, "111111"),
  amazon: { title: "Amazon", hex: "FF9900", text: "a" },
  "google-play": icon(siGoogleplay, "01875F"),
};
