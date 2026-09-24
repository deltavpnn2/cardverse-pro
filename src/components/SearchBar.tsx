import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  label: string;
}) {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="cv-search" className="sr-only">
        {label}
      </label>
      <Search
        size={18}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
      />
      <input
        id="cv-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="glass h-12 w-full rounded-full pr-4 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50"
      />
    </div>
  );
}
