import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Choose a Category",
    text: "Browse gift cards and available offers.",
  },
  {
    n: "02",
    title: "Review the Information",
    text: "Check availability, requirements and applicable terms.",
  },
  {
    n: "03",
    title: "Continue",
    text: "Use the clearly labeled button to continue to the relevant destination.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading title="How It Works" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="glass hover-lift rounded-2xl p-7">
              <p className="text-4xl font-extrabold text-primary">{s.n}</p>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
