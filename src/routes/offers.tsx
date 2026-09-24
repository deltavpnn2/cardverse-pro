import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { OfferGrid } from "@/components/OfferGrid";
import { offers, offerCategories } from "@/data/offers";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Explore Offers — CardVerse" },
      {
        name: "description",
        content:
          "Discover selected offers and digital opportunities available through CardVerse partner destinations.",
      },
      { property: "og:title", content: "Explore Offers — CardVerse" },
      {
        property: "og:description",
        content:
          "Discover selected offers and digital opportunities available through CardVerse partner destinations.",
      },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return offers.filter((o) => {
      const matchesCategory = category === "All" || o.category === category;
      const matchesQuery =
        q === "" ||
        o.title.toLowerCase().includes(q) ||
        o.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHeader
        title="Explore Offers"
        subtitle="Discover selected offers and digital opportunities available through our partner destinations."
      />

      <section className="container-page pb-20">
        <div className="flex flex-col gap-4">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search offers..."
            label="Search offers"
          />
          <CategoryFilter
            categories={offerCategories}
            active={category}
            onChange={setCategory}
            label="Filter offers by category"
          />
        </div>

        <div className="mt-10">
          <OfferGrid offers={filtered} />
        </div>
      </section>
    </>
  );
}
