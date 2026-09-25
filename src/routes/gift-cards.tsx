import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { GiftCardGrid } from "@/components/GiftCardGrid";
import { giftCards, giftCardCategories } from "@/data/giftCards";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Digital Gift Cards — CardVerse" },
      {
        name: "description",
        content:
          "Explore popular gaming, entertainment, shopping and digital gift card options on CardVerse.",
      },
      { property: "og:title", content: "Digital Gift Cards — CardVerse" },
      {
        property: "og:description",
        content:
          "Explore popular gaming, entertainment, shopping and digital gift card options on CardVerse.",
      },
    ],
  }),
  component: GiftCardsPage,
});

function GiftCardsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return giftCards.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery =
        q === "" || c.name.toLowerCase().includes(q) || c.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHeader
        title="Digital Gift Cards"
        subtitle="Explore popular gaming, entertainment, shopping and digital gift card options."
      />

      <section className="container-page pb-20">
        <div className="flex flex-col gap-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search gift cards..."
            label="Search gift cards"
          />
          <CategoryFilter
            categories={giftCardCategories}
            active={category}
            onChange={setCategory}
            label="Filter gift cards by category"
          />
        </div>

        <div className="mt-10">
          <GiftCardGrid cards={filtered} />
        </div>
      </section>
    </>
  );
}
