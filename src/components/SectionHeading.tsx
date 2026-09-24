export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "center" | "left";
}) {
  const label = eyebrow ?? title.split(" ")[0];
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}>
      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-primary uppercase">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
        {label}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      <span
        aria-hidden="true"
        className={`mt-4 block h-0.5 w-14 rounded-full bg-[image:var(--gradient-teal-violet)] ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
