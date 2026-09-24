const regions = [
  "North America",
  "Europe",
  "Asia",
  "Oceania",
  "Latin America",
  "Middle East & Africa",
];

export function RegionPills() {
  return (
    <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
      {regions.map((r) => (
        <li
          key={r}
          className="rounded-full border border-border bg-[color-mix(in_oklab,var(--surface)_55%,transparent)] px-4 py-2 text-sm text-muted-foreground"
        >
          {r}
        </li>
      ))}
    </ul>
  );
}
