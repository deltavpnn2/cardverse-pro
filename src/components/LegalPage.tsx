import { PageHeader } from "./PageHeader";

export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader title={title} subtitle={intro} />
      <section className="container-page pb-20">
        <div className="glass mx-auto max-w-3xl space-y-8 rounded-3xl p-8 md:p-12">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold tracking-tight">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
