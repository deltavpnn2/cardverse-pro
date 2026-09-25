export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="container-page pt-14 pb-8 text-center lg:pt-20">
      <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}
