export function CategoryFilter({
  categories,
  active,
  onChange,
  label,
}: {
  categories: readonly string[];
  active: string;
  onChange: (c: string) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(c)}
            className={
              isActive
                ? "btn-base btn-primary px-4 py-2 text-sm"
                : "btn-base btn-ghost px-4 py-2 text-sm text-muted-foreground"
            }
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
